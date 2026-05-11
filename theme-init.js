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
    try{ return localStorage.getItem(key); }catch(e){ return null; }
  }

  function safeSet(key, value){
    try{ localStorage.setItem(key, value); }catch(e){}
  }

  function safeRemove(key){
    try{ localStorage.removeItem(key); }catch(e){}
  }

  function normalizeSiteTheme(theme){
    return theme === "light" ? "light" : "dark";
  }

  function normalizePremiumTheme(theme){
    return PREMIUM_THEMES.indexOf(theme) !== -1 ? theme : "";
  }

  function removePremiumThemeClasses(node){
    if(!node || !node.classList) return;
    Array.from(node.classList).forEach(function(cls){
      if(
        cls.indexOf("premium-theme-") === 0 ||
        cls.indexOf("bw-theme-") === 0 ||
        (cls.indexOf("theme-") === 0 && cls !== "theme-toggle" && cls !== "theme-toggle-label")
      ){
        node.classList.remove(cls);
      }
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);
    document.documentElement.classList.remove("light-mode", "dark-mode");
    document.documentElement.classList.add(selected + "-mode");

    if(document.body){
      document.body.classList.remove("light-mode", "dark-mode");
      document.body.classList.add(selected + "-mode");
    }

    safeSet(SITE_THEME_KEY, selected);
  }

  function applyPremiumTheme(theme){
    const selected = normalizePremiumTheme(theme);

    removePremiumThemeClasses(document.documentElement);
    if(document.body) removePremiumThemeClasses(document.body);

    if(selected){
      document.documentElement.classList.add("premium-theme-" + selected);
      document.documentElement.classList.add("theme-" + selected);
      document.documentElement.setAttribute("data-premium-theme", selected);

      if(document.body){
        document.body.classList.add("premium-theme-" + selected);
        document.body.classList.add("bw-theme-" + selected);
        document.body.classList.add("theme-" + selected);
        document.body.setAttribute("data-premium-theme", selected);
      }
    }else{
      document.documentElement.removeAttribute("data-premium-theme");
      if(document.body) document.body.removeAttribute("data-premium-theme");
    }
  }

  function refresh(){
    applySiteTheme(safeGet(SITE_THEME_KEY) || "dark");
    applyPremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
  }

  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
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
    document.addEventListener("DOMContentLoaded", refresh, { once: true });
  }else{
    refresh();
  }

  window.addEventListener("storage", function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY) refresh();
  });
})();

/* ===== BARAKAWAY SERVICE WORKER REGISTRATION V36 ===== */
(function(){
  "use strict";

  if (!("serviceWorker" in navigator)) return;

  function registerBarakaWayServiceWorker(){
    navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
      .then(function(registration){
        if (registration && typeof registration.update === "function") {
          registration.update().catch(function(){});
        }
      })
      .catch(function(){});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", registerBarakaWayServiceWorker, { once:true });
  } else {
    registerBarakaWayServiceWorker();
  }
})();
/* ===== END BARAKAWAY SERVICE WORKER REGISTRATION V36 ===== */
