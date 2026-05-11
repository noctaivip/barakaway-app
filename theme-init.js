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

  /* ===== BARAKAWAY SMART CONTRAST ENGINE V60 ===== */
  /* Applies contrast to the actual text/icon element based on its nearest visible background.
     It does not recolor whole blocks, so nested dark/light surfaces keep their own readable contrast. */
  const BW_CONTRAST_LIGHT_TEXT = "#f7faf8";
  const BW_CONTRAST_DARK_TEXT = "#172019";
  const BW_CONTRAST_SELECTOR = [
    "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "small", "label", "li", "a", "strong", "em", "b", "i",
    "button", ".btn", ".quick-btn", ".install-btn", ".share-btn", ".copy-wallet-btn", ".share-wallet-btn", ".reset-btn", ".qibla-reset",
    "input", "textarea", "select", ".input", ".select", ".search-input", ".search-box input", ".wallet-address",
    ".title", ".subtitle", ".section-title", ".section-subtitle", ".page-title", ".page-subtitle", ".home-section-title", ".home-section-note",
    ".card-title", ".card-text", ".item-title", ".item-text", ".note", ".muted", ".small", ".description", ".caption", ".label", ".text", ".btn-text",
    ".meta", ".meta-label", ".meta-value", ".surah-name", ".surah-meta", ".surah-ayahs", ".dua-title", ".dua-source", ".dua-ref", ".dua-translit", ".dua-meaning",
    ".ayah-arabic", ".ayah-translit", ".ayah-meaning", ".theme-toggle-label", ".accordion-header", ".accordion-body", "summary",
    "svg", ".icon", ".lucide", ".fa", ".fas", ".far", ".fab", ".material-icons"
  ].join(",");

  const BW_CONTRAST_ICON_SELECTOR = "svg,.icon,.lucide,.fa,.fas,.far,.fab,.material-icons";

  const BW_LIGHT_PREMIUM_THEMES = ["rose-soft", "children-soft", "desert-sand", "royal-gold"];

  function bwCurrentPremiumTheme(){
    return document.documentElement.getAttribute("data-premium-theme") || safeGet(PREMIUM_THEME_KEY) || "";
  }

  function bwFallbackBackgroundIsLight(){
    return BW_LIGHT_PREMIUM_THEMES.indexOf(bwCurrentPremiumTheme()) !== -1;
  }

  function bwParseRgbList(value){
    const list = [];
    if(!value || value === "none" || value === "transparent") return list;
    String(value).replace(/rgba?\(([^)]+)\)/gi, function(_, body){
      const parts = body.split(",").map(function(part){ return part.trim(); });
      if(parts.length < 3) return "";
      const r = parseFloat(parts[0]);
      const g = parseFloat(parts[1]);
      const b = parseFloat(parts[2]);
      const a = parts.length >= 4 ? parseFloat(parts[3]) : 1;
      if(isFinite(r) && isFinite(g) && isFinite(b)){
        list.push({ r:r, g:g, b:b, a:isFinite(a) ? Math.max(0, Math.min(1, a)) : 1 });
      }
      return "";
    });
    return list;
  }

  function bwAverageRgb(list){
    if(!list || !list.length) return null;
    let r = 0, g = 0, b = 0, total = 0;
    list.forEach(function(rgb){
      const w = Math.max(0.08, Math.min(1, rgb.a || 1));
      r += rgb.r * w;
      g += rgb.g * w;
      b += rgb.b * w;
      total += w;
    });
    return total ? { r:r / total, g:g / total, b:b / total, a:1 } : null;
  }

  function bwLuminance(rgb){
    function c(value){
      value = value / 255;
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * c(rgb.r) + 0.7152 * c(rgb.g) + 0.0722 * c(rgb.b);
  }

  function bwReadableColorForRgb(rgb){
    if(!rgb) return bwFallbackBackgroundIsLight() ? BW_CONTRAST_DARK_TEXT : BW_CONTRAST_LIGHT_TEXT;
    return bwLuminance(rgb) > 0.50 ? BW_CONTRAST_DARK_TEXT : BW_CONTRAST_LIGHT_TEXT;
  }

  function bwStyleBackgroundRgb(style){
    if(!style) return null;

    const colorList = bwParseRgbList(style.backgroundColor).filter(function(rgb){ return rgb.a >= 0.18; });
    if(colorList.length) return colorList[colorList.length - 1];

    const imageList = bwParseRgbList(style.backgroundImage).filter(function(rgb){ return rgb.a >= 0.10; });
    if(imageList.length) return bwAverageRgb(imageList);

    return null;
  }

  function bwNearestBackgroundRgb(element){
    let node = element;
    while(node && node.nodeType === 1){
      const style = window.getComputedStyle(node);
      const bg = bwStyleBackgroundRgb(style);
      if(bg) return bg;
      node = node.parentElement;
    }
    if(document.body) return bwStyleBackgroundRgb(window.getComputedStyle(document.body));
    return null;
  }

  function bwSetImportant(element, property, value){
    if(element && element.style) element.style.setProperty(property, value, "important");
  }

  function bwApplyTextContrast(element){
    if(!element || !element.style || !element.matches) return;
    if(element.closest && element.closest(".page-themes-pro")) return;

    const color = bwReadableColorForRgb(bwNearestBackgroundRgb(element));
    bwSetImportant(element, "color", color);

    if(element.matches(BW_CONTRAST_ICON_SELECTOR)){
      bwSetImportant(element, "stroke", "currentColor");
      if(element.getAttribute && element.getAttribute("fill") !== "none"){
        bwSetImportant(element, "fill", "currentColor");
      }
      element.querySelectorAll("path,circle,rect,line,polyline,polygon").forEach(function(child){
        bwSetImportant(child, "stroke", "currentColor");
        if(child.getAttribute && child.getAttribute("fill") !== "none"){
          bwSetImportant(child, "fill", "currentColor");
        }
      });
    }
  }

  let bwContrastApplying = false;
  let bwContrastFrame = 0;

  function bwApplySmartContrast(root){
    if(!document.documentElement.className.match(/premium-theme-/) || !document.body) return;
    bwContrastApplying = true;
    try{
      const scope = root && root.querySelectorAll ? root : document;
      scope.querySelectorAll(BW_CONTRAST_SELECTOR).forEach(bwApplyTextContrast);
    }finally{
      bwContrastApplying = false;
    }
  }

  function scheduleSmartContrast(root){
    if(bwContrastFrame) cancelAnimationFrame(bwContrastFrame);
    bwContrastFrame = requestAnimationFrame(function(){
      bwContrastFrame = 0;
      bwApplySmartContrast(root || document);
    });
  }

  function bootSmartContrast(){
    scheduleSmartContrast(document);
    [60, 180, 420, 900, 1800, 3500].forEach(function(delay){
      setTimeout(function(){ scheduleSmartContrast(document); }, delay);
    });

    if(!window.__barakawaySmartContrastObserver && document.body){
      window.__barakawaySmartContrastObserver = new MutationObserver(function(mutations){
        if(bwContrastApplying) return;
        for(const mutation of mutations){
          if(mutation.type === "childList" || mutation.type === "attributes"){
            scheduleSmartContrast(document);
            break;
          }
        }
      });
      window.__barakawaySmartContrastObserver.observe(document.body, {
        subtree:true,
        childList:true,
        attributes:true,
        attributeFilter:["class", "hidden", "open", "aria-expanded", "data-premium-theme"]
      });
    }
  }

  window.BarakaWaySmartContrast = {
    refresh:function(){ scheduleSmartContrast(document); }
  };
  /* ===== END BARAKAWAY SMART CONTRAST ENGINE V60 ===== */


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
