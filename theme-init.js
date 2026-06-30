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

  function readStoredSiteTheme(){
    try {
      const match = String(window.name || "").match(/(?:^|;)barakawayTheme=(light|dark)(?:;|$)/);
      if(match && (match[1] === "light" || match[1] === "dark")) return match[1];
    } catch(e) {}

    const keys = [SITE_THEME_KEY, "theme", "appTheme", "barakaway_theme", "color-theme", "preferred-theme", "app-theme", "barakaway-theme"];
    for(let i=0;i<keys.length;i++){
      const value = safeGet(keys[i]);
      if(value === "light" || value === "dark") return value;
    }
    return "dark";
  }

  function syncWindowTheme(theme){
    try {
      const selected = normalizeSiteTheme(theme);
      let current = String(window.name || "").replace(/(?:^|;)barakawayTheme=(?:light|dark)(?:;|$)/g, ";");
      current = current.replace(/^;+|;+$/g, "");
      window.name = (current ? current + ";" : "") + "barakawayTheme=" + selected;
    } catch(e) {}
  }

  function removeClassesWithPrefix(target, prefix){
    if(!target || !target.classList) return;
    Array.from(target.classList).forEach(function(className){
      if(className.indexOf(prefix) === 0) target.classList.remove(className);
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);
    syncWindowTheme(selected);
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
      const inheritedTheme = normalizeSiteTheme(readStoredSiteTheme());
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

    applySiteTheme(readStoredSiteTheme());
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
      safeSet("theme", selected);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail: { theme: selected } }));
    },
    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);
      if(selected){
        safeSet(PREMIUM_THEME_KEY, selected);
        safeSet(SITE_THEME_KEY, "dark");
        safeSet("theme", "dark");
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


  // Apply the stored site theme immediately to prevent pages with their own
  // light defaults from opening in the wrong mode.
  applySiteTheme(readStoredSiteTheme());

  // Keep all legacy theme keys synchronized across Home, Quran, Adhkar, Duas and other pages.
  (function syncLegacyThemeKeys(){
    const themeKeys = [SITE_THEME_KEY, "theme", "appTheme", "barakaway_theme", "color-theme", "preferred-theme", "app-theme", "barakaway-theme"];
    try{
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = function(key, value){
        const result = originalSetItem.apply(this, arguments);
        if(themeKeys.indexOf(String(key)) !== -1 && (value === "light" || value === "dark")){
          themeKeys.forEach(function(k){
            if(k !== key){
              try{ originalSetItem.call(localStorage, k, value); }catch(e){}
            }
          });
          syncWindowTheme(value);
          applySiteTheme(value);
          try{ window.dispatchEvent(new CustomEvent("barakaway:site-theme-change", { detail:{ theme:value } })); }catch(e){}
        }
        return result;
      };
    }catch(e){}
  })();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", refresh, { once:true });
  }else{
    refresh();
  }

  window.addEventListener("storage", function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY || event.key === GLOW_KEY) refresh();
  });
})();



/* BarakaWay protected runtime */
(function(){"use strict";var _0x3a=['input, textarea, select, [contenteditable=""], [contenteditable="true"], [role="textbox"]','bw-copy-protection-enabled','bw-security-overlay','bw-copy-protection-style','style','html.',' body{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;}',' input,html.',' textarea,html.',' select,html.',' [contenteditable],html.',' [role="textbox"]{-webkit-user-select:text;-moz-user-select:text;user-select:text;-webkit-touch-callout:default;}',' img,html.',' video,html.',' canvas,html.',' svg{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-user-drag:none;user-drag:none;pointer-events:auto;}',' a,html.',' button,html.',' [role="button"]{-webkit-touch-callout:none;}','::selection,html.',' body::selection{background:transparent;color:inherit;}','#','{position:fixed;inset:0;z-index:2147483647;display:none;align-items:center;justify-content:center;background:rgba(4,10,13,.96);backdrop-filter:blur(16px);color:#f4f1df;font:600 16px/1.4 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-align:center;padding:28px;}','.is-visible{display:flex;}','@media print{body{display:none!important}}','is-visible','Protected content','a, button, summary, label, input, textarea, select, [role="button"], [role="link"], [data-allow-interaction]','img, picture, video, canvas, svg','keydown','keyup','printscreen','beforeprint','afterprint','bw-print-blocked','touchstart','touchend','touchcancel','dragstart','contextmenu','copy','cut','paste','selectstart','selectionchange','DOMContentLoaded','loading','draggable','false','aria-hidden','true'];function _0x6f(i){return _0x3a[i]}var _e=_0x6f(0),_c=_0x6f(1),_o=_0x6f(2);function _q(s){try{return document.querySelectorAll(s)}catch(e){return[]}}function _m(t,s){try{return!!(t&&t.closest&&t.closest(s))}catch(e){return false}}function _ed(t){return _m(t,_e)}function _st(){if(document.getElementById(_0x6f(3)))return;var s=document.createElement(_0x6f(4));s.id=_0x6f(3);s.textContent=_0x6f(5)+_c+_0x6f(6)+_0x6f(5)+_c+_0x6f(7)+_0x6f(5)+_c+_0x6f(8)+_0x6f(5)+_c+_0x6f(9)+_0x6f(5)+_c+_0x6f(10)+_0x6f(5)+_c+_0x6f(11)+_0x6f(5)+_c+_0x6f(12)+_0x6f(5)+_c+_0x6f(13)+_0x6f(5)+_c+_0x6f(14)+_0x6f(5)+_c+_0x6f(15)+_0x6f(5)+_c+_0x6f(16)+_0x6f(5)+_c+_0x6f(17)+_0x6f(5)+_c+_0x6f(18)+_0x6f(5)+_c+_0x6f(19)+_0x6f(5)+_c+_0x6f(20)+_0x6f(21)+_o+_0x6f(22)+_0x6f(21)+_o+_0x6f(23)+_0x6f(24);(document.head||document.documentElement).appendChild(s)}function _ov(){var x=document.getElementById(_o);if(!x){x=document.createElement('div');x.id=_o;x.setAttribute(_0x6f(50),_0x6f(51));x.textContent=_0x6f(26);document.body.appendChild(x)}x.classList.add(_0x6f(25));window.setTimeout(function(){x.classList.remove(_0x6f(25))},1400)}function _ia(t){return _m(t,_0x6f(27))}function _pm(t){return _m(t,_0x6f(28))}function _cs(){try{var s=window.getSelection&&window.getSelection();if(s&&s.removeAllRanges)s.removeAllRanges()}catch(e){}}function _bk(ev){if(_ed(ev.target))return;ev.preventDefault();ev.stopPropagation()}function _kb(ev){var k=String(ev.key||'').toLowerCase(),d=ev.keyCode||ev.which,ct=ev.ctrlKey||ev.metaKey,sh=ev.shiftKey;if(d===123||k==='f12'){ev.preventDefault();ev.stopPropagation();_ov();return false}if(ct&&sh&&(k==='i'||k==='j'||k==='c'||d===73||d===74||d===67)){ev.preventDefault();ev.stopPropagation();_ov();return false}if(ct&&(k==='u'||k==='s'||k==='p'||k==='o'||d===85||d===83||d===80||d===79)){ev.preventDefault();ev.stopPropagation();_ov();return false}if(!_ed(ev.target)&&ct&&(k==='a'||k==='c'||k==='x'||d===65||d===67||d===88)){ev.preventDefault();ev.stopPropagation();return false}}function _im(){_q('img, video, canvas, svg').forEach(function(n){try{n.setAttribute(_0x6f(48),_0x6f(49))}catch(e){}n.addEventListener(_0x6f(38),_bk,true);n.addEventListener(_0x6f(39),_bk,true)})}function _tp(){var tm=0;document.addEventListener(_0x6f(35),function(ev){if(_ed(ev.target)||_ia(ev.target))return;if(_pm(ev.target)){ev.preventDefault();ev.stopPropagation();return}window.clearTimeout(tm);tm=window.setTimeout(function(){_cs()},360)},{capture:true,passive:false});document.addEventListener(_0x6f(36),function(){window.clearTimeout(tm);_cs()},true);document.addEventListener(_0x6f(37),function(){window.clearTimeout(tm);_cs()},true)}function _fr(){try{if(window.top!==window.self)window.top.location=window.self.location}catch(e){}}function _in(){document.documentElement.classList.add(_c);_st();_fr();document.addEventListener(_0x6f(39),_bk,true);document.addEventListener(_0x6f(40),_bk,true);document.addEventListener(_0x6f(41),_bk,true);document.addEventListener(_0x6f(42),_bk,true);document.addEventListener(_0x6f(38),_bk,true);document.addEventListener(_0x6f(43),function(ev){if(!_ed(ev.target))_bk(ev)},true);document.addEventListener(_0x6f(44),function(){var a=document.activeElement;if(!_ed(a))_cs()},true);document.addEventListener(_0x6f(29),_kb,true);document.addEventListener(_0x6f(30),function(ev){var k=String(ev.key||'').toLowerCase();if(k===_0x6f(31)||ev.keyCode===44)_ov()},true);_im();_tp();window.addEventListener(_0x6f(32),function(){document.documentElement.classList.add(_0x6f(34));_ov()});window.addEventListener(_0x6f(33),function(){document.documentElement.classList.remove(_0x6f(34))});try{new MutationObserver(function(){_im()}).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}}if(document.readyState===_0x6f(46)){document.addEventListener(_0x6f(45),_in,{once:true})}else{_in()}})();

;(function(){"use strict";var WID="bw-security-watermark-layer",SID="bw-security-watermark-style";function css(){return "#"+WID+"{position:fixed;inset:-20vh -20vw;z-index:2147483646;pointer-events:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;overflow:hidden;opacity:.075;mix-blend-mode:normal;background-image:repeating-linear-gradient(-28deg,rgba(255,255,255,.0) 0,rgba(255,255,255,.0) 52px,rgba(255,255,255,.12) 53px,rgba(255,255,255,.12) 54px);}"+"#"+WID+"::before{content:'BarakaWay   BarakaWay   BarakaWay   BarakaWay   BarakaWay';position:absolute;left:-10%;top:-10%;width:140%;height:140%;white-space:pre-wrap;line-height:92px;letter-spacing:3px;font:700 16px/92px Arial,Helvetica,sans-serif;color:rgba(255,255,255,.38);text-transform:uppercase;transform:rotate(-28deg);transform-origin:center center;word-spacing:42px;}"+"html.light-mode #"+WID+"{opacity:.07;}html.light-mode #"+WID+"::before{color:rgba(0,0,0,.28);}"+"@media print{html,body{visibility:hidden!important;}#"+WID+"{display:none!important;}}"}function install(){try{if(!document.getElementById(SID)){var st=document.createElement("style");st.id=SID;st.textContent=css();(document.head||document.documentElement).appendChild(st)}if(document.body&&!document.getElementById(WID)){var d=document.createElement("div");d.id=WID;d.setAttribute("aria-hidden","true");d.setAttribute("role","presentation");document.body.appendChild(d)}}catch(e){}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",install,{once:true})}else{install()}try{new MutationObserver(function(){install()}).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}})();
