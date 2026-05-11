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

  /* ===== BARAKAWAY AUTO CONTRAST ENGINE V64 ===== */
  /* Stronger but still performance-safe:
     - checks only known UI surfaces/actions, not every node;
     - repeats after load so late page scripts cannot override;
     - adds tone classes on the exact containers and descendants. */

  const BW_LIGHT_PREMIUM_THEMES = ["rose-soft", "children-soft", "desert-sand", "royal-gold"];

  const BW_AUTO_SURFACE_SELECTOR = [
    "body",
    ".container",".page",".content","main","section",".section",".page-section",".content-section",
    ".hero",".hero-panel",".hero-card",".hero-box",".page-hero",".section-hero",".quran-hero",".duas-hero",".congrats-hero",
    ".today-hub",".today-action",".today-card",".daily-card",".task-card",".challenge-card",".ayah-day-card",".quiz-card",
    ".block",".card",".box",".panel",".quote",".empty",".article",".category-panel",".surah-card",".prayer-card",
    ".toggle-row",".meta-item",".note-box",".jumuah-box",".month-day",".month-head",".wallet-support",".home-widget",
    ".intro",".transactions",".verification",".donation-dropdown",".donation-dropdown-content",
    ".dropdown-block",".dropdown-content",".name-chip",".help-category",".help-card",".aid-card",".support-card",
    ".qibla-panel",".qibla-card",".qibla-box",".mosque-panel",".mosque-card",".map-panel",".status-panel",
    ".dua-card",".master-audio-wrap",".ayah-card",".loading",".sec-box",".wallet-box",".player-card",
    ".feature-card",".quick-card",".quick-link",".quick-item",".premium-resource-card",".premium-resource",
    ".pro-card",".pro-feature",".pro-item",".benefit-card",".support-option",".support-item",".support-feature",
    ".about-project-card",".app-menu-card",".app-menu-item",".section-card",".content-card",".content-box",
    ".list-card",".list-item",".grid-card",".grid-item",".lesson-card",".course-card",".module-card",
    ".accordion",".accordion-item",".accordion-header",".accordion-body","details","summary",
    ".generator",".tabs",".tab",".action-btn",".mini-btn",".modal-card",".toast",
    "button",".btn",".quick-btn",".tab-btn",".toolbar-btn",".filter-btn",
    ".action-chip",".theme-action",".glass-btn",".glass-control",".light-control",
    ".desktop-theme-toggle",".desktop-theme-toggle-inner",".theme-toggle",
    ".support-project-btn",".install-btn",".pro-state",".top-pill",".bottom-app-nav-item"
  ].join(",");

  const BW_AUTO_TEXT_SELECTOR = [
    "h1","h2","h3","h4","h5","h6","p","span","small","label","li","strong","b","em",
    ".title",".subtitle",".note",".muted",".section-title",".section-note",".section-subtitle",
    ".home-section-title",".home-section-note",".today-hub-title",".theme-toggle-label",
    ".card-title",".card-text",".item-title",".item-text",".category-title",".hero-title",
    ".surah-name",".surah-meta",".surah-ayahs",".dua-title",".dua-ref",".dua-source",
    ".ayah-meaning",".ayah-translit",".ayah-arabic",".meta-label",".meta-value",
    ".prayer-meta",".status",".manual-note",
    "svg","path","circle","rect","line","polyline","polygon",
    ".icon",".lucide",".fa",".fas",".far",".fab",".material-icons"
  ].join(",");

  function bwParseRgb(value){
    if(!value || value === "transparent") return null;
    const m = String(value).match(/rgba?\(([^)]+)\)/i);
    if(!m) return null;
    const parts = m[1].split(",").map(function(x){ return parseFloat(x.trim()); });
    if(parts.length < 3) return null;
    const a = parts.length >= 4 && Number.isFinite(parts[3]) ? parts[3] : 1;
    if(a <= 0.06) return null;
    return { r:parts[0], g:parts[1], b:parts[2], a:a };
  }

  function bwLum(rgb){
    return rgb ? (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) : 0;
  }

  function bwIsLightPremium(){
    const theme = document.documentElement.getAttribute("data-premium-theme") || safeGet(PREMIUM_THEME_KEY) || "";
    return BW_LIGHT_PREMIUM_THEMES.indexOf(theme) !== -1;
  }

  function bwHasDarkSurfaceName(el){
    const c = String(el.className || "");
    return /(card|Card|panel|Panel|block|Block|box|Box|hero|Hero|hub|Hub|widget|Widget|dropdown|Dropdown|accordion|Accordion|details|summary|tabs|generator|resource|Resource|support|Support|mosque|Mosque|qibla|Qibla|surah|Surah|dua|Dua|ayah|Ayah|prayer|Prayer|today|Today|premium|Premium|pro-|Pro|modal|toast)/.test(c);
  }

  function bwEffectiveBackground(el){
    let node = el;
    while(node && node !== document.documentElement){
      const style = window.getComputedStyle(node);
      const bgColor = bwParseRgb(style.backgroundColor);
      if(bgColor) return bgColor;

      const bgImage = style.backgroundImage || "";
      if(bgImage && bgImage !== "none"){
        const cls = String(node.className || "");
        if(/tab|toolbar|filter|action-chip|theme-action|glass|light-control/.test(cls)){
          return { r:238, g:208, b:222, a:1 };
        }
        if(bwHasDarkSurfaceName(node)){
          return { r:42, g:46, b:54, a:1 };
        }
        if(node === document.body && bwIsLightPremium()){
          return { r:240, g:190, b:210, a:1 };
        }
        return { r:42, g:46, b:54, a:1 };
      }

      node = node.parentElement;
    }
    return bwIsLightPremium() ? { r:240, g:190, b:210, a:1 } : { r:18, g:24, b:31, a:1 };
  }

  function bwApplyContrastTo(el){
    if(!el || !el.classList) return;
    const bg = bwEffectiveBackground(el);
    const light = bwLum(bg) >= 150;

    el.classList.toggle("bw-auto-on-light", light);
    el.classList.toggle("bw-auto-on-dark", !light);

    el.querySelectorAll(BW_AUTO_TEXT_SELECTOR).forEach(function(child){
      child.classList.toggle("bw-auto-on-light", light);
      child.classList.toggle("bw-auto-on-dark", !light);
    });
  }

  let bwContrastTimer = 0;
  function scheduleSmartContrast(scope){
    if(bwContrastTimer) window.clearTimeout(bwContrastTimer);
    bwContrastTimer = window.setTimeout(function(){
      const root = scope && scope.querySelectorAll ? scope : document;
      const lightPremium = bwIsLightPremium();
      document.documentElement.classList.toggle("bw-premium-page-light", lightPremium);
      document.documentElement.classList.toggle("bw-premium-page-dark", !lightPremium && /premium-theme-/.test(document.documentElement.className));

      root.querySelectorAll(BW_AUTO_SURFACE_SELECTOR).forEach(bwApplyContrastTo);

      /* direct top-level headings/notes on the page background */
      document.querySelectorAll("body:not(.page-themes-pro) :is(h1,h2,h3,h4,h5,h6,p,span,small,label,.title,.subtitle,.section-title,.section-note,.home-section-title,.home-section-note)").forEach(function(el){
        const parent = el.closest(BW_AUTO_SURFACE_SELECTOR);
        if(parent && parent !== document.body) return;
        el.classList.toggle("bw-auto-on-light", lightPremium);
        el.classList.toggle("bw-auto-on-dark", !lightPremium);
      });
    }, 60);
  }

  function bootSmartContrast(){
    scheduleSmartContrast(document);
    window.setTimeout(function(){ scheduleSmartContrast(document); }, 250);
    window.setTimeout(function(){ scheduleSmartContrast(document); }, 900);
    window.setTimeout(function(){ scheduleSmartContrast(document); }, 1800);

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
  /* ===== END BARAKAWAY AUTO CONTRAST ENGINE V64 ===== */


