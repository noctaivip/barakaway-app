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

  function refresh(){
    applySiteTheme(safeGet(SITE_THEME_KEY) || "dark");
    applyPremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    scheduleSmartContrast(document);
  }
window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
        },
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: selected } }));
        },
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
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

  window.addEventListener("load", function(){ scheduleSmartContrast(document); });
  window.addEventListener("pageshow", function(){ scheduleSmartContrast(document); });
  window.addEventListener("resize", function(){ scheduleSmartContrast(document); });
  window.addEventListener("barakaway:site-theme-change", function(){ scheduleSmartContrast(document); });
  window.addEventListener("barakaway:premium-theme-change", function(){ scheduleSmartContrast(document); });

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bootSmartContrast, { once:true });
  }else{
    bootSmartContrast();
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

  /* ===== BARAKAWAY AUTO CONTRAST ENGINE V63 ===== */
  /* Computes contrast only for visible text/icon controls and surfaces.
     No scroll listeners. MutationObserver watches only added/removed nodes, not class/style changes. */
  const BW_AUTO_CONTRAST_SELECTOR = [
    "button",".btn",".quick-btn",".tab",".tab-btn",".toolbar-btn",".filter-btn",
    ".action-chip",".theme-action",".glass-btn",".glass-control",".light-control",
    ".desktop-theme-toggle",".desktop-theme-toggle-inner",".theme-toggle",
    ".support-project-btn",".install-btn",".pro-state",".top-pill",
    ".card",".box",".panel",".block",".today-hub",".today-action",".today-card",
    ".premium-resource-card",".surah-card",".dua-card",".ayah-card",".prayer-card",
    ".home-prayer-widget",".brand-prayer-hero",".home-widget",".section-card",
    ".content-card",".accordion-item","details","summary",".dropdown-block",
    ".dropdown-content",".quran-toolbar",".surah-actions",".hero-panel",".hero-stat",
    ".qibla-panel",".qibla-card",".help-card",".support-card",".bottom-app-nav-item"
  ].join(",");

  const BW_AUTO_TEXT_SELECTOR = [
    "h1","h2","h3","h4","h5","h6","p","span","small","label","li","strong","b","em",
    ".title",".subtitle",".note",".muted",".section-title",".section-note",
    ".home-section-title",".home-section-note",".today-hub-title",
    ".theme-toggle-label",".card-title",".card-text",".item-title",".item-text",
    ".surah-name",".surah-meta",".dua-title",".dua-ref",".ayah-meaning",".ayah-translit",
    "svg","path",".icon",".lucide",".fa",".fas",".far",".fab",".material-icons"
  ].join(",");

  function bwParseRgb(value){
    if(!value || value === "transparent") return null;
    const m = String(value).match(/rgba?\(([^)]+)\)/i);
    if(!m) return null;
    const parts = m[1].split(",").map(function(x){ return parseFloat(x.trim()); });
    if(parts.length < 3) return null;
    const a = parts.length >= 4 && Number.isFinite(parts[3]) ? parts[3] : 1;
    if(a <= 0.08) return null;
    return { r:parts[0], g:parts[1], b:parts[2], a:a };
  }

  function bwLuminance(rgb){
    if(!rgb) return 0;
    return (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b);
  }

  function bwEffectiveBackground(el){
    let node = el;
    while(node && node !== document.documentElement){
      const style = window.getComputedStyle(node);
      const bgColor = bwParseRgb(style.backgroundColor);
      if(bgColor) return bgColor;

      const bgImage = style.backgroundImage || "";
      if(bgImage && bgImage !== "none"){
        /* Gradients used by BarakaWay blocks are usually dark when combined with dark-mode surfaces.
           Treat non-empty gradient on known dark UI wrappers as dark unless the element is a known light theme canvas. */
        const className = String(node.className || "");
        if(/light-control|glass-btn|theme-action|toolbar-btn|tab|action-chip/.test(className)){
          return { r:235, g:220, b:228, a:1 };
        }
        if(/premium-theme-rose-soft|premium-theme-children-soft|premium-theme-desert-sand|premium-theme-royal-gold/.test(document.documentElement.className) && node === document.body){
          return { r:240, g:190, b:210, a:1 };
        }
        return { r:34, g:42, b:52, a:1 };
      }
      node = node.parentElement;
    }

    if(/premium-theme-rose-soft|premium-theme-children-soft|premium-theme-desert-sand|premium-theme-royal-gold/.test(document.documentElement.className)){
      return { r:240, g:190, b:210, a:1 };
    }
    return { r:18, g:24, b:31, a:1 };
  }

  function bwSetContrast(el){
    if(!el || !el.classList) return;
    const bg = bwEffectiveBackground(el);
    const lum = bwLuminance(bg);
    const lightBg = lum >= 150;

    el.classList.toggle("bw-auto-on-light", lightBg);
    el.classList.toggle("bw-auto-on-dark", !lightBg);

    el.querySelectorAll(BW_AUTO_TEXT_SELECTOR).forEach(function(child){
      child.classList.toggle("bw-auto-on-light", lightBg);
      child.classList.toggle("bw-auto-on-dark", !lightBg);
    });
  }

  let bwContrastTimer = 0;
  function scheduleSmartContrast(scope){
    if(bwContrastTimer) window.clearTimeout(bwContrastTimer);
    bwContrastTimer = window.setTimeout(function(){
      const root = scope && scope.querySelectorAll ? scope : document;
      root.querySelectorAll(BW_AUTO_CONTRAST_SELECTOR).forEach(bwSetContrast);

      /* Direct page-background text: light premium themes need dark text, dark premium themes need light text. */
      const isLightPremium = /premium-theme-(rose-soft|children-soft|desert-sand|royal-gold)/.test(document.documentElement.className);
      document.documentElement.classList.toggle("bw-premium-page-light", isLightPremium);
      document.documentElement.classList.toggle("bw-premium-page-dark", !isLightPremium && /premium-theme-/.test(document.documentElement.className));
    }, 80);
  }

  function bootSmartContrast(){
    scheduleSmartContrast(document);
    window.setTimeout(function(){ scheduleSmartContrast(document); }, 350);
    window.setTimeout(function(){ scheduleSmartContrast(document); }, 1200);

    const observer = new MutationObserver(function(mutations){
      for(const mutation of mutations){
        if(mutation.addedNodes && mutation.addedNodes.length){
          scheduleSmartContrast(document);
          return;
        }
      }
    });
    observer.observe(document.body || document.documentElement, { childList:true, subtree:true });
  }

  window.BarakaWaySmartContrast = {
    refresh:function(){ scheduleSmartContrast(document); }
  };
  /* ===== END BARAKAWAY AUTO CONTRAST ENGINE V63 ===== */


