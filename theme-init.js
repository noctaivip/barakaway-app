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



  function parseRgbList(value){
    const colors = [];
    if(!value || value === "none") return colors;
    const re = /rgba?\(([^)]+)\)/gi;
    let match;
    while((match = re.exec(value))){
      const parts = match[1].split(',').map(function(part){ return part.trim(); });
      if(parts.length < 3) continue;
      const r = parseFloat(parts[0]);
      const g = parseFloat(parts[1]);
      const b = parseFloat(parts[2]);
      const a = parts.length > 3 ? parseFloat(parts[3]) : 1;
      if(Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b)){
        colors.push({ r:r, g:g, b:b, a:Number.isFinite(a) ? a : 1 });
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

  function elementBackgroundLuminance(element){
    if(!element || !window.getComputedStyle) return null;
    const style = window.getComputedStyle(element);
    const colors = parseRgbList(style.backgroundImage).concat(parseRgbList(style.backgroundColor));
    const solidColors = colors.filter(function(color){ return color.a !== 0; });

    if(solidColors.length){
      return solidColors.reduce(function(sum, color){ return sum + luminance(color); }, 0) / solidColors.length;
    }

    if(element.parentElement) return elementBackgroundLuminance(element.parentElement);
    return null;
  }

  const BW_SURFACE_SELECTOR = [
    "button", ".btn", ".button", ".quick-btn", ".action-btn", ".share-btn", ".install-btn", ".toggle", ".switch", ".slider", ".tab", ".chip",
    "input", "textarea", "select", ".search-input", ".wallet-address",
    ".card", ".box", ".panel", ".block", ".quote", ".empty", ".article",
    ".hero", ".hero-panel", ".hero-card", ".hero-box", ".page-hero", ".section-hero",
    ".theme-card", ".premium-resource-card", ".today-hub", ".today-action", ".today-card",
    ".home-widget", ".home-card", ".quick-card", ".feature-card", ".resource-card",
    ".surah-card", ".prayer-card", ".dua-card", ".ayah-card",
    ".qibla-panel", ".qibla-card", ".qibla-box",
    ".dropdown-block", ".dropdown-content", ".name-chip",
    ".modal", ".modal-card", ".toast", ".top-pill", ".pro-state", ".access-panel"
  ].join(",");

  const BW_TEXT_SELECTOR = [
    "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "small", "label", "li", "strong", "b", "em", "a",
    "button", ".btn", ".button", ".quick-btn", ".action-btn", ".share-btn", ".install-btn", ".toggle", ".switch", ".slider", ".tab", ".chip",
    "input", "textarea", "select", ".search-input",
    ".title", ".subtitle", ".note", ".muted", ".small", ".description",
    ".section-title", ".section-note", ".section-subtitle", ".home-section-title", ".home-section-note",
    ".card-title", ".card-text", ".item-title", ".item-text", ".category-title", ".hero-title", ".hero-text",
    ".surah-name", ".surah-meta", ".surah-ayahs", ".dua-title", ".dua-ref", ".dua-source",
    ".ayah-meaning", ".ayah-translit", ".ayah-arabic", ".meta-label", ".meta-value",
    ".prayer-meta", ".status", ".manual-note", ".theme-toggle-label", ".theme-chip", ".access-kicker", ".access-title", ".access-text", ".access-status"
  ].join(",");

  function applyContrastState(element, luma, attributeName){
    if(!element || luma == null) return;
    const isLight = luma >= 0.46;
    const state = isLight ? "light-bg" : "dark-bg";
    element.setAttribute(attributeName, state);
    element.style.setProperty("--bw-auto-contrast-text", isLight ? "#101614" : "#ffffff");
    element.style.setProperty("--bw-auto-contrast-soft", isLight ? "rgba(16,22,20,.82)" : "rgba(255,255,255,.88)");
    element.style.setProperty("--bw-auto-contrast-muted", isLight ? "rgba(16,22,20,.66)" : "rgba(255,255,255,.72)");
  }

  function nearestReadableSurface(element){
    if(!element || !element.closest) return null;
    return element.closest(BW_SURFACE_SELECTOR);
  }

  function applySmartContrast(){
    if(!document.body || !window.getComputedStyle) return;

    const bodyLuma = elementBackgroundLuminance(document.body);
    applyContrastState(document.body, bodyLuma, "data-bw-contrast");

    const surfaces = document.body.querySelectorAll(BW_SURFACE_SELECTOR);
    Array.prototype.forEach.call(surfaces, function(element){
      applyContrastState(element, elementBackgroundLuminance(element), "data-bw-contrast");
    });

    const textNodes = document.body.querySelectorAll(BW_TEXT_SELECTOR);
    Array.prototype.forEach.call(textNodes, function(element){
      const surface = nearestReadableSurface(element);
      const luma = surface ? elementBackgroundLuminance(surface) : bodyLuma;
      applyContrastState(element, luma, "data-bw-text-contrast");
    });
  }

  let smartContrastTimer = null;
  function scheduleSmartContrast(){
    if(smartContrastTimer) window.clearTimeout(smartContrastTimer);
    smartContrastTimer = window.setTimeout(function(){
      smartContrastTimer = null;
      applySmartContrast();
    }, 40);
  }

  function refresh(){
    applySiteTheme(safeGet(SITE_THEME_KEY) || "dark");
    applyPremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    scheduleSmartContrast();
}
window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      scheduleSmartContrast();
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
},
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme(selected);
      scheduleSmartContrast();
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: selected } }));
},
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      scheduleSmartContrast();
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: "" } }));
},
    refresh: refresh,
    currentPremiumTheme: function(){
      return normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    }
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", refresh, { once:true });
  }else{
    refresh();
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
