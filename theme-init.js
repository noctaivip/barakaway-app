(function(){
  "use strict";

  const SITE_THEME_KEY = "siteTheme";
  const PREMIUM_THEME_KEY = "barakaway_premium_theme";

  const PREMIUM_THEMES = [
    "royal-gold",
    "emerald-quran",
    "violet-noor",
    "rose-soft",
    "carbon-elite",
    "children-soft",
    "night-mosque",
    "desert-sand"
  ];

  function safeGet(key){
    try { return localStorage.getItem(key); } catch(e) { return null; }
  }

  function safeSet(key, value){
    try { localStorage.setItem(key, value); } catch(e) {}
  }

  function safeRemove(key){
    try { localStorage.removeItem(key); } catch(e) {}
  }

  function normalizeSiteTheme(theme){
    return theme === "light" ? "light" : "dark";
  }

  function normalizePremiumTheme(theme){
    return PREMIUM_THEMES.indexOf(theme) !== -1 ? theme : "";
  }

  function removeClassesWithPrefix(target, prefix){
    if(!target || !target.classList) return;
    Array.from(target.classList).forEach(function(className){
      if(className.indexOf(prefix) === 0) target.classList.remove(className);
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);
    const root = document.documentElement;
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(selected + "-mode");

    if(document.body){
      document.body.classList.remove("light-mode", "dark-mode");
      document.body.classList.add(selected + "-mode");
    }
  }

  function applyPremiumTheme(theme){
    const selected = normalizePremiumTheme(theme);
    const root = document.documentElement;

    removeClassesWithPrefix(root, "premium-theme-");
    removeClassesWithPrefix(root, "theme-");

    if(document.body){
      removeClassesWithPrefix(document.body, "premium-theme-");
      removeClassesWithPrefix(document.body, "bw-theme-");
      removeClassesWithPrefix(document.body, "theme-");
    }

    if(selected){
      root.classList.add("premium-theme-" + selected);
      root.classList.add("theme-" + selected);
      root.setAttribute("data-premium-theme", selected);

      if(document.body){
        document.body.classList.add("premium-theme-" + selected);
        document.body.classList.add("bw-theme-" + selected);
        document.body.classList.add("theme-" + selected);
        document.body.setAttribute("data-premium-theme", selected);
      }
    }else{
      root.removeAttribute("data-premium-theme");
      if(document.body) document.body.removeAttribute("data-premium-theme");
    }
  }



  function parseCssColors(value){
    const colors = [];
    if(!value || value === "none") return colors;

    const rgbRe = /rgba?\(([^)]+)\)/gi;
    let rgbMatch;
    while((rgbMatch = rgbRe.exec(value))){
      const raw = rgbMatch[1].trim();
      let parts;
      let alpha = 1;

      if(raw.indexOf("/") !== -1){
        const split = raw.split("/");
        parts = split[0].trim().split(/[\s,]+/);
        alpha = parseFloat(split[1]);
      }else{
        parts = raw.split(/[\s,]+/);
      }

      if(parts.length < 3) continue;
      const r = parseFloat(parts[0]);
      const g = parseFloat(parts[1]);
      const b = parseFloat(parts[2]);
      const a = parts.length > 3 ? parseFloat(parts[3]) : alpha;
      if(Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b)){
        colors.push({ r:r, g:g, b:b, a:Number.isFinite(a) ? a : 1 });
      }
    }

    const hexRe = /#([0-9a-f]{3,8})\b/gi;
    let hexMatch;
    while((hexMatch = hexRe.exec(value))){
      const hex = hexMatch[1];
      let r, g, b, a = 1;
      if(hex.length === 3 || hex.length === 4){
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
        if(hex.length === 4) a = parseInt(hex[3] + hex[3], 16) / 255;
      }else if(hex.length === 6 || hex.length === 8){
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
        if(hex.length === 8) a = parseInt(hex.slice(6, 8), 16) / 255;
      }
      if(Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b)){
        colors.push({ r:r, g:g, b:b, a:a });
      }
    }

    return colors;
  }

  function channelToLinear(value){
    const v = Math.max(0, Math.min(255, value)) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }

  function luminance(color){
    const alpha = Math.max(0, Math.min(1, color.a == null ? 1 : color.a));
    const r = (color.r * alpha) + (255 * (1 - alpha));
    const g = (color.g * alpha) + (255 * (1 - alpha));
    const b = (color.b * alpha) + (255 * (1 - alpha));
    return (0.2126 * channelToLinear(r)) + (0.7152 * channelToLinear(g)) + (0.0722 * channelToLinear(b));
  }

  function backgroundLuminance(element){
    let current = element;
    while(current && current.nodeType === 1){
      const style = window.getComputedStyle(current);
      const colors = parseCssColors(style.backgroundImage).concat(parseCssColors(style.backgroundColor));
      const visible = colors.filter(function(color){ return color.a !== 0; });
      if(visible.length){
        return visible.reduce(function(sum, color){ return sum + luminance(color); }, 0) / visible.length;
      }
      current = current.parentElement;
    }
    return document.documentElement.classList.contains("light-mode") ? 0.78 : 0.08;
  }

  function isInsideIgnoredNode(element){
    return !!(element && element.closest && element.closest("svg, canvas, img, video, audio, picture, iframe, code, pre"));
  }

  function forceReadableText(element, textColor, softColor, mutedColor){
    if(!element || !element.style || isInsideIgnoredNode(element)) return;

    element.style.setProperty("--bw-auto-contrast-text", textColor);
    element.style.setProperty("--bw-auto-contrast-soft", softColor);
    element.style.setProperty("--bw-auto-contrast-muted", mutedColor);
    element.style.setProperty("color", textColor, "important");
    element.setAttribute("data-bw-readable", textColor === "#101614" ? "light-bg" : "dark-bg");

    const descendants = element.querySelectorAll([
      "span", "strong", "b", "em", "small", "label", "p", "div",
      "h1", "h2", "h3", "h4", "h5", "h6",
      ".title", ".section-title", ".section-note", ".subtitle", ".small", ".note",
      ".btn", ".button", ".text", ".label", ".meta", ".muted", ".chip",
      "i:not([class*='fa']):not([class*='icon'])"
    ].join(","));

    Array.prototype.forEach.call(descendants, function(child){
      if(isInsideIgnoredNode(child)) return;
      const tag = child.tagName ? child.tagName.toLowerCase() : "";
      const className = typeof child.className === "string" ? child.className : "";
      const useMuted = /muted|meta|note|subtitle|small|description|desc/i.test(className) || tag === "small";
      child.style.setProperty("color", useMuted ? mutedColor : textColor, "important");
    });
  }

  function applyReadableContrast(){
    if(!document.body || !window.getComputedStyle) return;

    const selectors = [
      "body",
      "h1", "h2", "h3", "h4", "h5", "h6",
      ".title", ".section-title", ".section-note", ".subtitle", ".tagline",
      ".container", ".page", ".content", "main", "section", "article",
      ".card", ".box", ".panel", ".block", ".quote", ".empty", ".article",
      ".hero", ".hero-panel", ".hero-card", ".hero-box", ".page-hero", ".section-hero",
      ".today-hub", ".today-action", ".today-card", ".home-widget",
      ".surah-card", ".prayer-card", ".dua-card", ".ayah-card",
      ".qibla-panel", ".qibla-card", ".qibla-box",
      ".dropdown-block", ".dropdown-content", ".name-chip",
      ".modal", ".modal-card", ".toast",
      "button", "a.btn", ".btn", ".button", ".quick-btn", ".action-btn",
      ".share-btn", ".install-btn", ".copy-wallet-btn", ".share-wallet-btn",
      ".reset-btn", ".qibla-reset", ".help-option-btn",
      "[role='button']", ".switch", ".toggle", ".pill", ".chip", ".badge",
      "input", "textarea", "select", ".search-input", ".wallet-address"
    ];

    const targets = Array.prototype.slice.call(document.body.querySelectorAll(selectors.join(",")));
    targets.unshift(document.body);

    targets.forEach(function(element){
      if(!element || isInsideIgnoredNode(element)) return;
      const luma = backgroundLuminance(element);
      const isLightBackground = luma >= 0.50;
      const textColor = isLightBackground ? "#101614" : "#ffffff";
      const softColor = isLightBackground ? "rgba(16,22,20,.84)" : "rgba(255,255,255,.88)";
      const mutedColor = isLightBackground ? "rgba(16,22,20,.68)" : "rgba(255,255,255,.74)";
      forceReadableText(element, textColor, softColor, mutedColor);
    });
  }

  let readableContrastTimer = null;
  function scheduleReadableContrast(){
    if(readableContrastTimer) window.clearTimeout(readableContrastTimer);
    readableContrastTimer = window.setTimeout(function(){
      readableContrastTimer = null;
      applyReadableContrast();
    }, 60);
  }

  function startReadableContrastObserver(){
    scheduleReadableContrast();

    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(scheduleReadableContrast).catch(function(){});
    }

    window.addEventListener("load", scheduleReadableContrast);
    window.addEventListener("resize", scheduleReadableContrast);
    window.addEventListener("barakaway:site-theme-change", scheduleReadableContrast);
    window.addEventListener("barakaway:premium-theme-change", scheduleReadableContrast);

    if(window.MutationObserver && document.body){
      const observer = new MutationObserver(scheduleReadableContrast);
      observer.observe(document.body, {
        childList:true,
        subtree:true,
        attributes:true,
        attributeFilter:["class", "style", "data-theme", "data-premium-theme", "hidden", "open"]
      });
    }
  }

  function refresh(){
    applySiteTheme(safeGet(SITE_THEME_KEY) || "dark");
    applyPremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    scheduleReadableContrast();
}
window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      scheduleReadableContrast();
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
},
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme(selected);
      scheduleReadableContrast();
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: selected } }));
},
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      scheduleReadableContrast();
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: "" } }));
},
    refresh: refresh,
    currentPremiumTheme: function(){
      return normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    }
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", refresh, { once:true });
    document.addEventListener("DOMContentLoaded", startReadableContrastObserver, { once:true });
  }else{
    refresh();
    startReadableContrastObserver();
  }


  window.addEventListener("storage", function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY) refresh();
  });

  window.addEventListener("load", scheduleSmartContrast);
  window.addEventListener("resize", scheduleSmartContrast);
  window.addEventListener("barakaway:site-theme-change", scheduleSmartContrast);
  window.addEventListener("barakaway:premium-theme-change", scheduleSmartContrast);

  if(window.MutationObserver){
    const observer = new MutationObserver(scheduleSmartContrast);
    const startObserver = function(){
      if(document.body){
        observer.observe(document.body, { childList:true, subtree:true, attributes:true, attributeFilter:["class"] });
      }
    };
    if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", startObserver, { once:true });
    else startObserver();
  }
if("serviceWorker" in navigator){
    const registerServiceWorker = function(){
      navigator.serviceWorker.register("/service-worker.js", { scope:"/" })
        .then(function(registration){
          if(registration && typeof registration.update === "function") registration.update().catch(function(){});
        })
        .catch(function(){});
    };

    if(document.readyState === "loading"){
      document.addEventListener("DOMContentLoaded", registerServiceWorker, { once:true });
    }else{
      registerServiceWorker();
    }
  }
})();
