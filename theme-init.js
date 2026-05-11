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

  function normalizeSiteTheme(value){
    if(value === "light" || value === "light-mode") return "light";
    if(value === "dark" || value === "dark-mode") return "dark";
    return "dark";
  }

  function normalizePremiumTheme(value){
    value = String(value || "").trim();
    return PREMIUM_THEMES.indexOf(value) !== -1 ? value : "";
  }

  function clearPremiumClasses(){
    PREMIUM_THEMES.forEach(function(theme){
      document.documentElement.classList.remove("premium-theme-" + theme);
      document.body && document.body.classList.remove("premium-theme-" + theme);
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);
    document.documentElement.classList.toggle("light-mode", selected === "light");
    document.documentElement.classList.toggle("dark-mode", selected !== "light");
    if(document.body){
      document.body.classList.toggle("light-mode", selected === "light");
      document.body.classList.toggle("dark-mode", selected !== "light");
    }
  }

  function applyPremiumTheme(theme){
    const selected = normalizePremiumTheme(theme);
    clearPremiumClasses();
    if(selected){
      document.documentElement.classList.add("premium-theme-" + selected);
      if(document.body) document.body.classList.add("premium-theme-" + selected);
    }
  }

  function refresh(){
    const siteTheme = normalizeSiteTheme(safeGet(SITE_THEME_KEY) || safeGet("theme") || "dark");
    const premiumTheme = normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    applySiteTheme(siteTheme);
    applyPremiumTheme(premiumTheme);
  }

  window.BarakaWayTheme = {
    premiumThemes: PREMIUM_THEMES.slice(),
    refresh: refresh,
    currentPremiumTheme: function(){ return normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || ""); },
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail:{ theme:selected } }));
    },
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail:{ theme:selected } }));
    },
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail:{ theme:"" } }));
    }
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", refresh, { once:true });
  }else{
    refresh();
  }

  window.addEventListener("storage", function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY || event.key === "theme") refresh();
  });
})();

/* ===== BARAKAWAY SERVICE WORKER REGISTRATION V37 ===== */
(function(){
  "use strict";
  if (!("serviceWorker" in navigator)) return;
  function registerBarakaWayServiceWorker(){
    navigator.serviceWorker.register("/service-worker.js", { scope:"/" })
      .then(function(registration){
        if(registration && typeof registration.update === "function") registration.update().catch(function(){});
      })
      .catch(function(){});
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", registerBarakaWayServiceWorker, { once:true });
  else registerBarakaWayServiceWorker();
})();
