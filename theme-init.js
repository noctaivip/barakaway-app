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

  /* ===== BARAKAWAY LIGHTWEIGHT THEME TONE V62 ===== */
  /* Performance-safe: no DOM-wide computed-style scans, no MutationObserver.
     CSS handles contrast by theme tone and surface type. */
  const BW_LIGHT_PREMIUM_THEMES = ["rose-soft", "children-soft", "desert-sand", "royal-gold"];

  function bwCurrentPremiumTheme(){
    return document.documentElement.getAttribute("data-premium-theme") || safeGet(PREMIUM_THEME_KEY) || "";
  }

  function bwApplyPremiumTone(){
    const theme = bwCurrentPremiumTheme();
    const tone = BW_LIGHT_PREMIUM_THEMES.indexOf(theme) !== -1 ? "light" : (theme ? "dark" : "");
    const root = document.documentElement;
    if(tone){
      root.setAttribute("data-premium-tone", tone);
      if(document.body) document.body.setAttribute("data-premium-tone", tone);
    }else{
      root.removeAttribute("data-premium-tone");
      if(document.body) document.body.removeAttribute("data-premium-tone");
    }
  }

  function scheduleSmartContrast(){
    bwApplyPremiumTone();
  }

  function bootSmartContrast(){
    bwApplyPremiumTone();
  }

  window.BarakaWaySmartContrast = {
    refresh:function(){ bwApplyPremiumTone(); }
  };
  /* ===== END BARAKAWAY LIGHTWEIGHT THEME TONE V62 ===== */



  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
      scheduleSmartContrast(document);
      },
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: selected } }));
      scheduleSmartContrast(document);
      },
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: "" } }));
      scheduleSmartContrast(document);
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
