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

  function safeSet(key,value){
    try{ localStorage.setItem(key,value); }catch(e){}
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

  function removeThemeClasses(root){
    if(!root) return;

    Array.from(root.classList).forEach(function(cls){
      if(
        cls.indexOf("premium-theme-") === 0 ||
        cls.indexOf("bw-theme-") === 0 ||
        (cls.indexOf("theme-") === 0 && cls !== "theme-toggle" && cls !== "theme-toggle-label")
      ){
        root.classList.remove(cls);
      }
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);

    document.documentElement.classList.remove("light-mode","dark-mode");
    document.documentElement.classList.add(selected + "-mode");

    if(document.body){
      document.body.classList.remove("light-mode","dark-mode");
      document.body.classList.add(selected + "-mode");
    }

    safeSet(SITE_THEME_KEY, selected);
    return selected;
  }

  function applyPremiumTheme(theme){
    const selected = normalizePremiumTheme(theme);

    removeThemeClasses(document.documentElement);
    if(document.body) removeThemeClasses(document.body);

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

    return selected;
  }

  function refresh(){
    const siteTheme = safeGet(SITE_THEME_KEY) || "dark";
    const premiumTheme = safeGet(PREMIUM_THEME_KEY) || "";

    applySiteTheme(siteTheme);
    applyPremiumTheme(premiumTheme);
  }

  window.BarakaWayTheme = {
    siteKey:SITE_THEME_KEY,
    premiumKey:PREMIUM_THEME_KEY,
    premiumThemes:PREMIUM_THEMES.slice(),

    applySiteTheme:function(theme){
      const selected = applySiteTheme(theme);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", {detail:{theme:selected}}));
    },

    applyPremiumTheme:function(theme){
      const selected = normalizePremiumTheme(theme);

      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);

      applyPremiumTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", {detail:{theme:selected}}));
    },

    clearPremiumTheme:function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme("");
      window.dispatchEvent(new CustomEvent("barakaway:premium-theme-change", {detail:{theme:""}}));
    },

    refresh:refresh,

    currentPremiumTheme:function(){
      return normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
    }
  };

  refresh();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", refresh, {once:false});
  }else{
    refresh();
  }

  window.addEventListener("storage", function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY){
      refresh();
    }
  });
})();
