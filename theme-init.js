(function(){
  "use strict";

  const SITE_THEME_KEY = "siteTheme";
  const PREMIUM_THEME_KEY = "barakaway_premium_theme";
  const GLOW_KEY = "barakawayGlowOff";

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

  function applyGlowState(isPremium){
    const off = isPremium && safeGet(GLOW_KEY) === "1";
    document.documentElement.classList.toggle("bw-glow-off", off);

    if(document.body){
      document.body.classList.toggle("bw-glow-off", off);
    }
  }


  function isQuranSurahPage(){
    try {
      const path = (window.location && window.location.pathname ? window.location.pathname : "").toLowerCase();
      const body = document.body;
      return !!(body && body.hasAttribute("data-surah-page-key")) || /\/quran-[a-z]{2,3}\/[^/]+-[a-z]{2,3}\.html$/.test(path);
    } catch(e) {
      return false;
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
    if(isQuranSurahPage()){
      const inheritedTheme = normalizeSiteTheme(safeGet(SITE_THEME_KEY) || safeGet("theme") || "light");
      applySiteTheme(inheritedTheme);
      applyPremiumTheme("");
      applyGlowState(false);
      return;
    }

    const premiumTheme = normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");

    if(premiumTheme){
      safeSet(SITE_THEME_KEY, "dark");
      applySiteTheme("dark");
      applyPremiumTheme(premiumTheme);
      applyGlowState(true);
      return;
    }

    applySiteTheme(safeGet(SITE_THEME_KEY) || "light");
    applyPremiumTheme("");
    applyGlowState(false);
  }

  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || "") ? "dark" : normalizeSiteTheme(theme);
      safeSet(SITE_THEME_KEY, selected);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
    },
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected){
        safeSet(PREMIUM_THEME_KEY, selected);
        safeSet(SITE_THEME_KEY, "dark");
        applySiteTheme("dark");
      }else{
        safeRemove(PREMIUM_THEME_KEY);
      }
      applyPremiumTheme(selected);
      applyGlowState(!!selected);
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", { detail: { theme: selected } }));
    },
    clearPremiumTheme: function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      applyGlowState(false);
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
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY || event.key === GLOW_KEY) refresh();
  });

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
