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
    scheduleAutoContrast();
  }

  /* ===== BARAKAWAY AUTO CONTRAST ENGINE V58 ===== */
  const AUTO_CONTRAST_SELECTOR = [
    "body",
    ".container", ".page", ".content", "main", "section", "article", "header", "footer", "nav",
    ".card", ".box", ".panel", ".block", ".quote", ".empty", ".article", ".category-panel",
    ".surah-card", ".prayer-card", ".toggle-row", ".meta-item", ".note-box", ".jumuah-box",
    ".month-day", ".month-head", ".wallet-support", ".home-widget", ".brand-prayer-hero",
    ".home-prayer-widget", ".home-prayer-countdown", ".today-hub", ".today-action", ".today-card",
    ".today-goal-action", ".daily-card", ".task-card", ".challenge-card", ".ayah-day-card",
    ".quiz-card", ".quiz-option", ".answer-box", ".result-box", ".intro", ".transactions",
    ".verification", ".mobile-dropdown", ".mobile-dropdown-title", ".mobile-dropdown-content",
    ".donation-dropdown", ".donation-dropdown-content", ".dropdown-block", ".dropdown-content",
    ".name-chip", ".help-category", ".help-card", ".aid-card", ".support-card", ".qibla-panel",
    ".qibla-card", ".qibla-box", ".hero", ".hero-panel", ".hero-stat", ".hero-card", ".hero-box",
    ".hero-banner", ".page-hero", ".section-hero", ".quran-hero", ".duas-hero", ".congrats-hero",
    ".dua-card", ".master-audio-wrap", ".ayah-card", ".loading", ".sec-box", ".wallet-box",
    ".player-card", ".feature-card", ".quick-card", ".quick-link", ".quick-item",
    ".premium-resource-card", ".premium-resource", ".pro-card", ".pro-feature", ".pro-item",
    ".benefit-card", ".support-option", ".support-item", ".support-feature", ".about-project-card",
    ".app-menu-card", ".app-menu-item", ".section-card", ".content-card", ".content-box",
    ".list-card", ".list-item", ".grid-card", ".grid-item", ".lesson-card", ".course-card",
    ".module-card", ".accordion", ".accordion-item", ".accordion-header", ".accordion-body",
    "details", "summary", ".modal", ".toast", ".warning", ".error", ".wallet-warning",
    ".desktop-theme-toggle", ".desktop-theme-toggle-inner", ".theme-toggle", ".theme-switch",
    ".top-pill", ".pro-state", ".bottom-app-nav", ".bottom-app-nav-inner", ".bottom-app-nav-item",
    "button", ".btn", ".quick-btn", ".install-btn", ".share-btn", ".copy-wallet-btn",
    ".share-wallet-btn", ".reset-btn", ".qibla-reset", "input", "textarea", "select", ".input",
    ".select", ".search-input", ".search-box", ".search-box input", ".wallet-address",
    ".toolbar-btn", ".tab-btn", ".filter-btn", ".action-chip", ".theme-action", ".glass-btn", ".glass-control",
    ".quran-toolbar button", ".surah-actions button"
  ].join(",");

  const LIGHT_PREMIUM_THEMES = ["rose-soft", "children-soft", "desert-sand", "royal-gold"];

  function parseRgb(value){
    if(!value || value === "transparent") return null;
    const match = String(value).match(/rgba?\(([^)]+)\)/i);
    if(!match) return null;
    const parts = match[1].split(",").map(function(part){ return part.trim(); });
    if(parts.length < 3) return null;
    const r = parseFloat(parts[0]);
    const g = parseFloat(parts[1]);
    const b = parseFloat(parts[2]);
    const a = parts.length >= 4 ? parseFloat(parts[3]) : 1;
    if(!isFinite(r) || !isFinite(g) || !isFinite(b)) return null;
    return { r:r, g:g, b:b, a:isFinite(a) ? a : 1 };
  }

  function luminance(rgb){
    function channel(value){
      value = value / 255;
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
  }

  function hasUsableBackground(style){
    const rgb = parseRgb(style.backgroundColor);
    if(rgb && rgb.a >= 0.38) return rgb;
    return null;
  }

  function currentPremiumTheme(){
    const root = document.documentElement;
    return root.getAttribute("data-premium-theme") || safeGet(PREMIUM_THEME_KEY) || "";
  }

  function fallbackIsLight(){
    return LIGHT_PREMIUM_THEMES.indexOf(currentPremiumTheme()) !== -1;
  }

  function nearestBackgroundRgb(element){
    let node = element;
    while(node && node.nodeType === 1){
      const style = window.getComputedStyle(node);
      const rgb = hasUsableBackground(style);
      if(rgb) return rgb;
      node = node.parentElement;
    }
    const bodyStyle = document.body ? window.getComputedStyle(document.body) : null;
    return bodyStyle ? hasUsableBackground(bodyStyle) : null;
  }

  function isProbablyLightSurface(element){
    const rgb = nearestBackgroundRgb(element);
    if(rgb) return luminance(rgb) > 0.52;
    return fallbackIsLight();
  }

  function markAutoContrast(element){
    if(!element || !element.classList) return;
    if(element.closest && element.closest(".page-themes-pro")) return;
    element.classList.remove("bw-auto-on-dark", "bw-auto-on-light");
    if(isProbablyLightSurface(element)) element.classList.add("bw-auto-on-light");
    else element.classList.add("bw-auto-on-dark");
  }

  function applyAutoContrast(root){
    if(!document.documentElement.className.match(/premium-theme-/)) return;
    const scope = root && root.querySelectorAll ? root : document;
    if(document.body) markAutoContrast(document.body);
    scope.querySelectorAll(AUTO_CONTRAST_SELECTOR).forEach(markAutoContrast);
  }

  let autoContrastFrame = 0;
  function scheduleAutoContrast(){
    if(autoContrastFrame) cancelAnimationFrame(autoContrastFrame);
    autoContrastFrame = requestAnimationFrame(function(){
      autoContrastFrame = 0;
      applyAutoContrast(document);
      setTimeout(function(){ applyAutoContrast(document); }, 80);
    });
  }

  function installAutoContrastObserver(){
    if(!document.body || window.__barakawayAutoContrastObserver) return;
    window.__barakawayAutoContrastObserver = new MutationObserver(function(mutations){
      for(const mutation of mutations){
        if(mutation.type === "childList" || mutation.type === "attributes"){
          scheduleAutoContrast();
          break;
        }
      }
    });
    window.__barakawayAutoContrastObserver.observe(document.body, {
      subtree:true,
      childList:true,
      attributes:true,
      attributeFilter:["class", "style", "hidden", "open"]
    });
  }

  function bootAutoContrast(){
    scheduleAutoContrast();
    installAutoContrastObserver();
  }
  /* ===== END BARAKAWAY AUTO CONTRAST ENGINE V58 ===== */


  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
      scheduleAutoContrast();
      },
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: selected } }));
      scheduleAutoContrast();
      },
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: "" } }));
      scheduleAutoContrast();
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

  window.addEventListener("barakaway:site-theme-change", scheduleAutoContrast);
  window.addEventListener("barakaway:premium-theme-change", scheduleAutoContrast);
  window.addEventListener("resize", scheduleAutoContrast);

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bootAutoContrast, { once:true });
  }else{
    bootAutoContrast();
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
