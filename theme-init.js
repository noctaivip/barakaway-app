(function(){
  const SITE_THEME_KEY = 'siteTheme';
  const PREMIUM_THEME_KEY = 'barakaway_premium_theme';
  const STYLE_ID = 'barakaway-premium-theme-runtime-style';

  const PREMIUM_THEMES = [
    'royal-gold',
    'emerald-quran',
    'violet-noor',
    'rose-soft',
    'carbon-elite',
    'children-soft',
    'night-mosque',
    'desert-sand'
  ];

  const PREMIUM_CSS = '\n/* ===== BARAKAWAY PRO PREMIUM THEMES RUNTIME ===== */\n:root{\n  --bw-pro-transition: background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease;\n}\n\nhtml.premium-theme-royal-gold{\n  --bg:#090908;\n  --surface:#171208;\n  --surface-2:#20170a;\n  --surface-3:#2b2110;\n  --border:rgba(215,192,122,.36);\n  --border-2:rgba(244,220,148,.44);\n  --text:#fff8df;\n  --text-soft:#ead8a5;\n  --text-muted:#c7ad62;\n  --green:#d7c07a;\n  --green-strong:#9d7424;\n  --green-soft:#fff0b4;\n  --bw-accent:#d7c07a;\n  --bw-accent-2:#f4dc94;\n}\n\nhtml.premium-theme-emerald-quran{\n  --bg:#061109;\n  --surface:#07180e;\n  --surface-2:#0c2114;\n  --surface-3:#12301d;\n  --border:rgba(102,198,128,.34);\n  --border-2:rgba(102,198,128,.46);\n  --text:#f0fff4;\n  --text-soft:#c4f0d1;\n  --text-muted:#8fd9a2;\n  --green:#66c680;\n  --green-strong:#2d7a46;\n  --green-soft:#c9ffd7;\n  --bw-accent:#66c680;\n  --bw-accent-2:#b8ffd0;\n}\n\nhtml.premium-theme-violet-noor{\n  --bg:#0d0a15;\n  --surface:#141020;\n  --surface-2:#1b1530;\n  --surface-3:#241a42;\n  --border:rgba(161,118,255,.34);\n  --border-2:rgba(197,168,255,.42);\n  --text:#fbf8ff;\n  --text-soft:#dfd2ff;\n  --text-muted:#bda6f0;\n  --green:#c5a8ff;\n  --green-strong:#6f4dcc;\n  --green-soft:#eadfff;\n  --bw-accent:#a176ff;\n  --bw-accent-2:#d6c4ff;\n}\n\nhtml.premium-theme-rose-soft{\n  --bg:#160a12;\n  --surface:#21101a;\n  --surface-2:#301525;\n  --surface-3:#401b31;\n  --border:rgba(255,158,199,.34);\n  --border-2:rgba(255,190,218,.44);\n  --text:#fff8fb;\n  --text-soft:#ffd8e8;\n  --text-muted:#f0a9c8;\n  --green:#ff9ec7;\n  --green-strong:#b64d78;\n  --green-soft:#ffe2ee;\n  --bw-accent:#ff9ec7;\n  --bw-accent-2:#ffd0e4;\n}\n\nhtml.premium-theme-carbon-elite{\n  --bg:#050607;\n  --surface:#0d1116;\n  --surface-2:#121820;\n  --surface-3:#1a222c;\n  --border:rgba(170,184,199,.28);\n  --border-2:rgba(202,213,224,.34);\n  --text:#f7fafc;\n  --text-soft:#cfd8e3;\n  --text-muted:#99a7b5;\n  --green:#d6dde6;\n  --green-strong:#59616c;\n  --green-soft:#eef2f6;\n  --bw-accent:#aab8c7;\n  --bw-accent-2:#e8edf3;\n}\n\nhtml.premium-theme-children-soft{\n  --bg:#0c1f32;\n  --surface:#102b44;\n  --surface-2:#173a5c;\n  --surface-3:#234d75;\n  --border:rgba(135,203,255,.34);\n  --border-2:rgba(255,227,241,.40);\n  --text:#f4fbff;\n  --text-soft:#d3ecff;\n  --text-muted:#abd6f7;\n  --green:#87cbff;\n  --green-strong:#3d8bc7;\n  --green-soft:#dff4ff;\n  --bw-accent:#87cbff;\n  --bw-accent-2:#ffe3f1;\n}\n\nhtml.premium-theme-night-mosque{\n  --bg:#050b13;\n  --surface:#091426;\n  --surface-2:#10213d;\n  --surface-3:#172f58;\n  --border:rgba(215,192,122,.28);\n  --border-2:rgba(118,154,215,.36);\n  --text:#f3f7ff;\n  --text-soft:#c8d8f4;\n  --text-muted:#91a9ce;\n  --green:#d7c07a;\n  --green-strong:#355d9a;\n  --green-soft:#f4e6b2;\n  --bw-accent:#d7c07a;\n  --bw-accent-2:#7ca7ff;\n}\n\nhtml.premium-theme-desert-sand{\n  --bg:#130c05;\n  --surface:#1e1408;\n  --surface-2:#2e200e;\n  --surface-3:#3e2b13;\n  --border:rgba(255,237,190,.30);\n  --border-2:rgba(219,174,97,.40);\n  --text:#fff9ea;\n  --text-soft:#ecd7ad;\n  --text-muted:#c9a978;\n  --green:#ffedbe;\n  --green-strong:#9a6d2d;\n  --green-soft:#fff3cf;\n  --bw-accent:#ffedbe;\n  --bw-accent-2:#dbaE61;\n}\n\nhtml[class*="premium-theme-"] body{\n  color:var(--text) !important;\n  background:\n    radial-gradient(circle at 14% 0%, color-mix(in srgb, var(--bw-accent) 20%, transparent), transparent 28%),\n    radial-gradient(circle at 88% 8%, color-mix(in srgb, var(--bw-accent-2) 16%, transparent), transparent 32%),\n    linear-gradient(180deg,var(--bg) 0%,color-mix(in srgb,var(--surface) 72%,var(--bg)) 48%,var(--bg) 100%) !important;\n}\n\nhtml[class*="premium-theme-"] .container,\nhtml[class*="premium-theme-"] .hero,\nhtml[class*="premium-theme-"] .brand-prayer-hero,\nhtml[class*="premium-theme-"] .today-hub,\nhtml[class*="premium-theme-"] .about-project-card,\nhtml[class*="premium-theme-"] .barakaway-pro-final,\nhtml[class*="premium-theme-"] .block,\nhtml[class*="premium-theme-"] .card,\nhtml[class*="premium-theme-"] .box,\nhtml[class*="premium-theme-"] .panel,\nhtml[class*="premium-theme-"] .quote,\nhtml[class*="premium-theme-"] .empty,\nhtml[class*="premium-theme-"] .article,\nhtml[class*="premium-theme-"] .category-panel,\nhtml[class*="premium-theme-"] .surah-card,\nhtml[class*="premium-theme-"] .prayer-card,\nhtml[class*="premium-theme-"] .toggle-row,\nhtml[class*="premium-theme-"] .meta-item,\nhtml[class*="premium-theme-"] .note-box,\nhtml[class*="premium-theme-"] .jumuah-box,\nhtml[class*="premium-theme-"] .month-day,\nhtml[class*="premium-theme-"] .month-head,\nhtml[class*="premium-theme-"] .wallet-support,\nhtml[class*="premium-theme-"] .home-widget,\nhtml[class*="premium-theme-"] .dua-card,\nhtml[class*="premium-theme-"] .ayah-card,\nhtml[class*="premium-theme-"] .master-audio-wrap,\nhtml[class*="premium-theme-"] .reader-side,\nhtml[class*="premium-theme-"] .reader-main,\nhtml[class*="premium-theme-"] .dua-side,\nhtml[class*="premium-theme-"] .dua-main,\nhtml[class*="premium-theme-"] .ai-side,\nhtml[class*="premium-theme-"] .ai-main,\nhtml[class*="premium-theme-"] .player-panel,\nhtml[class*="premium-theme-"] .preview-panel,\nhtml[class*="premium-theme-"] .app-menu-btn,\nhtml[class*="premium-theme-"] .today-action,\nhtml[class*="premium-theme-"] .premium-resource-card{\n  background:\n    radial-gradient(circle at 94% 0%, color-mix(in srgb, var(--bw-accent) 12%, transparent), transparent 30%),\n    linear-gradient(135deg,color-mix(in srgb,var(--surface) 92%,#000) 0%,var(--surface-2) 54%,color-mix(in srgb,var(--surface-3) 84%,#000) 100%) !important;\n  border-color:var(--border) !important;\n  color:var(--text) !important;\n  box-shadow:0 18px 42px color-mix(in srgb,var(--bg) 70%,transparent), inset 0 1px 0 rgba(255,255,255,.055) !important;\n  transition:var(--bw-pro-transition) !important;\n}\n\nhtml[class*="premium-theme-"] h1,\nhtml[class*="premium-theme-"] h2,\nhtml[class*="premium-theme-"] h3,\nhtml[class*="premium-theme-"] h4,\nhtml[class*="premium-theme-"] .title,\nhtml[class*="premium-theme-"] .category-title,\nhtml[class*="premium-theme-"] .section h2,\nhtml[class*="premium-theme-"] .surah-name,\nhtml[class*="premium-theme-"] .dua-title,\nhtml[class*="premium-theme-"] .ayah-arabic{\n  color:var(--text) !important;\n}\n\nhtml[class*="premium-theme-"] p,\nhtml[class*="premium-theme-"] li,\nhtml[class*="premium-theme-"] .subtitle,\nhtml[class*="premium-theme-"] .small,\nhtml[class*="premium-theme-"] .note,\nhtml[class*="premium-theme-"] .muted,\nhtml[class*="premium-theme-"] .category-intro,\nhtml[class*="premium-theme-"] .ref,\nhtml[class*="premium-theme-"] .label,\nhtml[class*="premium-theme-"] .translit,\nhtml[class*="premium-theme-"] .meaning,\nhtml[class*="premium-theme-"] .when,\nhtml[class*="premium-theme-"] .surah-meta,\nhtml[class*="premium-theme-"] .article p,\nhtml[class*="premium-theme-"] .dua-translit,\nhtml[class*="premium-theme-"] .ayah-translit,\nhtml[class*="premium-theme-"] .ayah-meaning{\n  color:var(--text-soft) !important;\n}\n\nhtml[class*="premium-theme-"] strong,\nhtml[class*="premium-theme-"] a,\nhtml[class*="premium-theme-"] .surah-number,\nhtml[class*="premium-theme-"] .badge,\nhtml[class*="premium-theme-"] .chip,\nhtml[class*="premium-theme-"] .wallet-badge{\n  color:var(--bw-accent) !important;\n}\n\nhtml[class*="premium-theme-"] .btn.primary,\nhtml[class*="premium-theme-"] .copy-wallet-btn,\nhtml[class*="premium-theme-"] .install-btn,\nhtml[class*="premium-theme-"] .support-project-btn,\nhtml[class*="premium-theme-"] button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item){\n  background:linear-gradient(135deg,var(--green-strong) 0%, color-mix(in srgb,var(--bw-accent) 72%,var(--green-strong)) 100%) !important;\n  color:#fff !important;\n  border-color:var(--border-2) !important;\n  box-shadow:0 14px 30px color-mix(in srgb,var(--green-strong) 24%,transparent) !important;\n}\n\nhtml[class*="premium-theme-"] input,\nhtml[class*="premium-theme-"] textarea,\nhtml[class*="premium-theme-"] select,\nhtml[class*="premium-theme-"] .search-input,\nhtml[class*="premium-theme-"] .wallet-address{\n  background:color-mix(in srgb,var(--surface-3) 74%,#000) !important;\n  color:var(--text) !important;\n  border-color:var(--border-2) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav{\n  background:linear-gradient(180deg,color-mix(in srgb,var(--surface) 88%,transparent),color-mix(in srgb,var(--bg) 96%,transparent)) !important;\n  border-top-color:var(--border) !important;\n  box-shadow:0 -18px 44px color-mix(in srgb,var(--bg) 70%,transparent), inset 0 1px 0 rgba(255,255,255,.04) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav-inner{\n  background:linear-gradient(180deg,color-mix(in srgb,var(--surface-2) 92%,transparent),color-mix(in srgb,var(--surface) 94%,transparent)) !important;\n  border-color:var(--border) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav-item{\n  color:var(--text-soft) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav-item.active,\nhtml[class*="premium-theme-"] .bottom-app-nav-item.is-active{\n  background:linear-gradient(135deg,color-mix(in srgb,var(--bw-accent) 24%,transparent),color-mix(in srgb,var(--green-strong) 28%,transparent)) !important;\n  color:var(--text) !important;\n  border-color:var(--border-2) !important;\n}\n/* ===== END BARAKAWAY PRO PREMIUM THEMES RUNTIME ===== */\n';

  function safeGet(key){
    try{ return localStorage.getItem(key); }catch(e){ return null; }
  }

  function safeSet(key,value){
    try{ localStorage.setItem(key,value); }catch(e){}
  }

  function safeRemove(key){
    try{ localStorage.removeItem(key); }catch(e){}
  }

  function injectPremiumStyle(){
    if(document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = PREMIUM_CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function normalizeSiteTheme(theme){
    return theme === 'light' ? 'light' : 'dark';
  }

  function normalizePremiumTheme(theme){
    return PREMIUM_THEMES.indexOf(theme) !== -1 ? theme : '';
  }

  function removePremiumThemeClasses(root){
    if(!root) return;

    Array.from(root.classList).forEach(function(cls){
      if(
        cls.indexOf('premium-theme-') === 0 ||
        cls.indexOf('bw-theme-') === 0 ||
        (cls.indexOf('theme-') === 0 && cls !== 'theme-toggle' && cls !== 'theme-toggle-label')
      ){
        root.classList.remove(cls);
      }
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);

    document.documentElement.classList.remove('light-mode','dark-mode');
    document.documentElement.classList.add(selected + '-mode');

    if(document.body){
      document.body.classList.remove('light-mode','dark-mode');
      document.body.classList.add(selected + '-mode');
    }

    safeSet(SITE_THEME_KEY, selected);
  }

  function applyPremiumTheme(theme){
    injectPremiumStyle();

    const selected = normalizePremiumTheme(theme);

    removePremiumThemeClasses(document.documentElement);
    if(document.body) removePremiumThemeClasses(document.body);

    if(selected){
      document.documentElement.classList.add('premium-theme-' + selected);
      document.documentElement.classList.add('theme-' + selected);
      document.documentElement.setAttribute('data-premium-theme', selected);

      if(document.body){
        document.body.classList.add('premium-theme-' + selected);
        document.body.classList.add('bw-theme-' + selected);
        document.body.classList.add('theme-' + selected);
        document.body.setAttribute('data-premium-theme', selected);
      }
    }else{
      document.documentElement.removeAttribute('data-premium-theme');
      if(document.body) document.body.removeAttribute('data-premium-theme');
    }
  }

  function refresh(){
    injectPremiumStyle();

    const siteTheme = safeGet(SITE_THEME_KEY) || 'dark';
    const premiumTheme = safeGet(PREMIUM_THEME_KEY) || '';

    applySiteTheme(siteTheme);
    applyPremiumTheme(premiumTheme);
  }

  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),

    applySiteTheme:function(theme){
      const selected = normalizeSiteTheme(theme);
      applySiteTheme(selected);
      window.dispatchEvent(new CustomEvent('barakaway:site-theme-change', {detail:{theme:selected}}));
    },

    applyPremiumTheme:function(theme){
      const selected = normalizePremiumTheme(theme);

      if(selected) safeSet(PREMIUM_THEME_KEY, selected);
      else safeRemove(PREMIUM_THEME_KEY);

      applyPremiumTheme(selected);

      window.dispatchEvent(new CustomEvent('barakaway:premium-theme-change', {detail:{theme:selected}}));
    },

    clearPremiumTheme:function(){
      safeRemove(PREMIUM_THEME_KEY);
      applyPremiumTheme('');
      window.dispatchEvent(new CustomEvent('barakaway:premium-theme-change', {detail:{theme:''}}));
    },

    refresh:refresh,

    currentPremiumTheme:function(){
      return normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY) || '');
    }
  };

  refresh();

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', refresh);
  }else{
    refresh();
  }

  window.addEventListener('storage', function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY){
      refresh();
    }
  });
})();

(function(){
  const STYLE_ID = "barakaway-logo-only-transparency-fix";
  const CSS = `
/* ===== BARAKAWAY LOGO ONLY TRANSPARENCY FIX ===== */

/* Do not let PRO themes repaint the BarakaWay logo or its compact logo wrapper */
html[class*="premium-theme-"] .barakaway-logo,
html[class*="premium-theme-"] .brand-logo,
html[class*="premium-theme-"] .app-logo,
html[class*="premium-theme-"] .logo,
html[class*="premium-theme-"] .wordmark,
html[class*="premium-theme-"] .brand-wordmark,
html[class*="premium-theme-"] [data-logo],
html[class*="premium-theme-"] [data-brand-logo],
html[class*="premium-theme-"] [class*="barakaway-logo"],
html[class*="premium-theme-"] [class*="brand-logo"],
html[class*="premium-theme-"] [class*="app-logo"],
html[class*="premium-theme-"] [class*="wordmark"],
html[class*="premium-theme-"] [class*="logo"]{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  border-color:transparent !important;
  box-shadow:none !important;
  filter:none !important;
  backdrop-filter:none !important;
  -webkit-backdrop-filter:none !important;
}

html[class*="premium-theme-"] .barakaway-logo *,
html[class*="premium-theme-"] .brand-logo *,
html[class*="premium-theme-"] .app-logo *,
html[class*="premium-theme-"] .logo *,
html[class*="premium-theme-"] .wordmark *,
html[class*="premium-theme-"] .brand-wordmark *,
html[class*="premium-theme-"] [data-logo] *,
html[class*="premium-theme-"] [data-brand-logo] *,
html[class*="premium-theme-"] [class*="barakaway-logo"] *,
html[class*="premium-theme-"] [class*="brand-logo"] *,
html[class*="premium-theme-"] [class*="app-logo"] *,
html[class*="premium-theme-"] [class*="wordmark"] *,
html[class*="premium-theme-"] [class*="logo"] *{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  border-color:transparent !important;
  box-shadow:none !important;
  filter:none !important;
  backdrop-filter:none !important;
  -webkit-backdrop-filter:none !important;
}

/* JS adds this class directly to the detected logo wrapper */
html[class*="premium-theme-"] .bw-logo-transparent-lock,
html[class*="premium-theme-"] .bw-logo-transparent-lock *{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  border-color:transparent !important;
  box-shadow:none !important;
  filter:none !important;
  backdrop-filter:none !important;
  -webkit-backdrop-filter:none !important;
}

/* ===== END BARAKAWAY LOGO ONLY TRANSPARENCY FIX ===== */
`;

  function injectLogoOnlyCss(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = CSS;
  }

  function makeTransparent(node){
    if(!node || node === document.body || node === document.documentElement) return;
    node.classList.add("bw-logo-transparent-lock");
    node.style.setProperty("background", "transparent", "important");
    node.style.setProperty("background-color", "transparent", "important");
    node.style.setProperty("background-image", "none", "important");
    node.style.setProperty("border-color", "transparent", "important");
    node.style.setProperty("box-shadow", "none", "important");
    node.style.setProperty("filter", "none", "important");
    node.style.setProperty("backdrop-filter", "none", "important");
    node.style.setProperty("-webkit-backdrop-filter", "none", "important");
  }

  function looksLikeCompactLogoWrapper(node){
    if(!node || node === document.body || node === document.documentElement) return false;

    const rect = node.getBoundingClientRect ? node.getBoundingClientRect() : null;
    if(!rect) return false;

    const text = (node.textContent || "").replace(/\s+/g, "").trim();
    const compactSize = rect.width > 20 && rect.width < 360 && rect.height > 10 && rect.height < 120;
    const logoText = text === "BarakaWay" || text === "BARAKAWAY" || text === "BarakaWayApp";

    return compactSize && logoText;
  }

  function protectBarakaWayLogo(){
    injectLogoOnlyCss();

    const all = document.querySelectorAll("body *");

    all.forEach(function(node){
      const rawText = (node.textContent || "").replace(/\s+/g, "").trim();
      const cls = String(node.className || "").toLowerCase();

      const isLogoByText =
        rawText === "BarakaWay" ||
        rawText === "BARAKAWAY" ||
        rawText === "BarakaWayApp";

      const isLogoByClass =
        cls.indexOf("logo") !== -1 ||
        cls.indexOf("wordmark") !== -1 ||
        cls.indexOf("brand-logo") !== -1 ||
        cls.indexOf("barakaway-logo") !== -1;

      if(!isLogoByText && !isLogoByClass) return;

      makeTransparent(node);

      let parent = node.parentElement;
      let depth = 0;

      while(parent && depth < 4){
        if(looksLikeCompactLogoWrapper(parent)){
          makeTransparent(parent);
        }
        parent = parent.parentElement;
        depth++;
      }
    });
  }

  protectBarakaWayLogo();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", protectBarakaWayLogo);
  }else{
    setTimeout(protectBarakaWayLogo, 0);
  }

  window.addEventListener("storage", protectBarakaWayLogo);
  window.addEventListener("barakaway:premium-theme-change", protectBarakaWayLogo);

  setTimeout(protectBarakaWayLogo, 250);
  setTimeout(protectBarakaWayLogo, 1000);
})();

(function(){
function forceThemes(){
document.querySelectorAll('.theme-card').forEach(function(card){
const t=(card.textContent||'').toLowerCase();
if(t.includes('детская')) card.classList.add('theme-child','bw-theme-sample-children-soft');
if(t.includes('ночная')) card.classList.add('theme-night','bw-theme-sample-night-mosque');
if(t.includes('песочная')) card.classList.add('theme-sand','bw-theme-sample-desert-sand');
});
}
if(document.readyState==='loading'){
document.addEventListener('DOMContentLoaded',forceThemes);
}else{forceThemes();}
setTimeout(forceThemes,400);
})();

/* ===== BARAKAWAY PREMIUM MATERIAL THEMES FINAL INJECTOR ===== */

/* ===== END BARAKAWAY PREMIUM MATERIAL THEMES FINAL INJECTOR ===== */


/* ===== BARAKAWAY PREMIUM THEMES NO-SQUARE FINAL INJECTOR ===== */

/* ===== END BARAKAWAY PREMIUM THEMES NO-SQUARE FINAL INJECTOR ===== */


/* ===== BARAKAWAY REFERENCE-BASED PREMIUM THEMES CLEAN FINAL INJECTOR ===== */
(function(){
  const STYLE_ID = 'barakaway-reference-based-premium-themes-clean-final';
  const CSS = `
/* ===== BARAKAWAY REFERENCE-BASED PREMIUM THEMES CLEAN FINAL ===== */
/* Old square/grid/oversized pattern layers removed. These styles are the only final visual materials for non-carbon premium themes. */

.theme-card:not(.theme-carbon)::before,
.theme-card:not([data-theme="carbon-elite"])::before{
  content:"" !important;
  position:absolute !important;
  inset:0 !important;
  z-index:1 !important;
  pointer-events:none !important;
  opacity:.72 !important;
  background:
    linear-gradient(118deg, transparent 0%, rgba(255,255,255,.16) 21%, transparent 34%, transparent 64%, rgba(255,255,255,.08) 78%, transparent 100%) !important;
}

.theme-card:not(.theme-carbon)::after,
.theme-card:not([data-theme="carbon-elite"])::after{
  pointer-events:none !important;
}

body .theme-grid .theme-card.theme-gold,
body .theme-grid .theme-card[data-theme="royal-gold"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-gold,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="royal-gold"],
html[class*="premium-theme-"] .bw-theme-sample-royal-gold{
  background-color:#c8953f !important;
  background-image:
    radial-gradient(circle at 86% 18%, rgba(255,246,201,.66), transparent 28%),
    radial-gradient(circle at 12% 90%, rgba(164,103,32,.30), transparent 34%),
    linear-gradient(103deg, rgba(255,255,255,.26) 0%, rgba(255,255,255,.04) 17%, rgba(255,224,132,.36) 39%, rgba(166,99,29,.18) 63%, rgba(255,255,255,.18) 100%),
    linear-gradient(145deg,#9a5f21 0%,#d6a04a 44%,#ffe07a 72%,#b97826 100%) !important;
  background-size:100% 100% !important;
  background-position:center !important;
  background-repeat:no-repeat !important;
  border-color:rgba(255,229,153,.58) !important;
  box-shadow:0 24px 58px rgba(108,69,18,.38), inset 0 1px 0 rgba(255,255,255,.24), inset 0 -24px 42px rgba(128,76,20,.18) !important;
}

body .theme-grid .theme-card.theme-emerald,
body .theme-grid .theme-card[data-theme="emerald-quran"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-emerald,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="emerald-quran"],
html[class*="premium-theme-"] .bw-theme-sample-emerald-quran{
  background-color:#004b2d !important;
  background-image:
    linear-gradient(135deg, rgba(0,15,10,.38), rgba(0,0,0,0) 34%, rgba(150,255,203,.12) 68%, rgba(0,0,0,.22)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%0A%3Cdefs%3E%0A%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23001b12'/%3E%3Cstop offset='.45' stop-color='%23006a3c'/%3E%3Cstop offset='1' stop-color='%2348f29d'/%3E%3C/linearGradient%3E%0A%3ClinearGradient id='h' x1='0' x2='1'%3E%3Cstop offset='0' stop-color='%23bfffe0' stop-opacity='.50'/%3E%3Cstop offset='1' stop-color='%23002b1a' stop-opacity='.04'/%3E%3C/linearGradient%3E%0A%3C/defs%3E%0A%3Crect width='1600' height='900' fill='url(%23g)'/%3E%0A%3Cg opacity='.55'%3E%0A%3Cpolygon points='0,0 360,0 180,220' fill='%230fd884' fill-opacity='.22'/%3E%3Cpolygon points='360,0 780,0 520,260' fill='%23071d17' fill-opacity='.32'/%3E%3Cpolygon points='780,0 1160,0 930,240' fill='%234affb3' fill-opacity='.18'/%3E%3Cpolygon points='1160,0 1600,0 1380,260' fill='%23002819' fill-opacity='.28'/%3E%0A%3Cpolygon points='0,900 330,900 170,610' fill='%234affb3' fill-opacity='.14'/%3E%3Cpolygon points='330,900 760,900 540,590' fill='%23001910' fill-opacity='.28'/%3E%3Cpolygon points='760,900 1170,900 960,620' fill='%2313d37f' fill-opacity='.16'/%3E%3Cpolygon points='1170,900 1600,900 1390,610' fill='%23091c18' fill-opacity='.25'/%3E%0A%3Cpolygon points='170,220 520,260 310,520' fill='%23ffffff' fill-opacity='.13'/%3E%3Cpolygon points='520,260 930,240 730,530' fill='%23001a12' fill-opacity='.30'/%3E%3Cpolygon points='930,240 1380,260 1120,540' fill='%237dffc2' fill-opacity='.16'/%3E%3Cpolygon points='310,520 730,530 540,790' fill='%2313d37f' fill-opacity='.18'/%3E%3Cpolygon points='730,530 1120,540 960,790' fill='%23031c14' fill-opacity='.24'/%3E%3Cpolygon points='1120,540 1600,410 1390,780' fill='%23ffffff' fill-opacity='.10'/%3E%0A%3C/g%3E%3Crect width='1600' height='900' fill='url(%23h)' opacity='.75'/%3E%3C/svg%3E") !important;
  background-size:100% 100%, cover !important;
  background-position:center, center !important;
  background-repeat:no-repeat, no-repeat !important;
  border-color:rgba(98,244,165,.50) !important;
  box-shadow:0 24px 58px rgba(0,50,30,.42), 0 0 34px rgba(42,255,151,.12), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -24px 42px rgba(0,0,0,.22) !important;
}

body .theme-grid .theme-card.theme-violet,
body .theme-grid .theme-card[data-theme="violet-noor"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-violet,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="violet-noor"],
html[class*="premium-theme-"] .bw-theme-sample-violet-noor{
  background-color:#2c114c !important;
  background-image:
    radial-gradient(ellipse at 18% 16%, rgba(255,218,255,.22), transparent 34%),
    radial-gradient(ellipse at 84% 28%, rgba(83,70,209,.38), transparent 38%),
    radial-gradient(ellipse at 48% 86%, rgba(227,148,255,.22), transparent 42%),
    linear-gradient(126deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,.02) 22%, rgba(119,66,177,.42) 43%, rgba(22,10,42,.32) 64%, rgba(228,156,255,.20) 100%),
    linear-gradient(145deg,#16091f 0%,#4b1d76 48%,#9b55d8 100%) !important;
  background-size:100% 100% !important;
  background-position:center !important;
  background-repeat:no-repeat !important;
  border-color:rgba(217,170,255,.48) !important;
  box-shadow:0 24px 58px rgba(38,10,74,.42), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -24px 42px rgba(0,0,0,.22) !important;
}

body .theme-grid .theme-card.theme-rose,
body .theme-grid .theme-card[data-theme="rose-soft"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-rose,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="rose-soft"],
html[class*="premium-theme-"] .bw-theme-sample-rose-soft{
  background-color:#bf5d8e !important;
  background-image:
    radial-gradient(ellipse at 18% 16%, rgba(255,242,248,.42), transparent 32%),
    radial-gradient(ellipse at 82% 20%, rgba(255,155,204,.38), transparent 40%),
    radial-gradient(ellipse at 42% 84%, rgba(255,221,235,.22), transparent 42%),
    linear-gradient(120deg, rgba(255,255,255,.24) 0%, rgba(255,255,255,.04) 18%, rgba(235,93,159,.42) 43%, rgba(121,34,79,.22) 64%, rgba(255,210,232,.32) 100%),
    linear-gradient(145deg,#7f2854 0%,#d46d9d 52%,#ffb8d6 100%) !important;
  background-size:100% 100% !important;
  background-position:center !important;
  background-repeat:no-repeat !important;
  border-color:rgba(255,204,226,.50) !important;
  box-shadow:0 24px 58px rgba(99,31,66,.36), inset 0 1px 0 rgba(255,255,255,.20), inset 0 -24px 42px rgba(105,31,66,.16) !important;
}

body .theme-grid .theme-card.theme-child,
body .theme-grid .theme-card[data-theme="children-soft"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="children-soft"],
html[class*="premium-theme-"] .bw-theme-sample-children-soft{
  background-color:#85c8ef !important;
  background-image:
    linear-gradient(135deg, rgba(255,255,255,.24), rgba(255,231,241,.12)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%0A%3Cdefs%3E%3ClinearGradient id='bg' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23bfe9ff'/%3E%3Cstop offset='.55' stop-color='%2379bdeb'/%3E%3Cstop offset='1' stop-color='%23fff0f6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23bg)'/%3E%0A%3Cg opacity='.72' fill='none' stroke='%23ffffff' stroke-opacity='.34' stroke-width='3'%3E%3Cpath d='M80 130c80-70 180-40 230 20 50-60 150-90 230-20'/%3E%3Cpath d='M940 780c80-70 180-40 230 20 50-60 150-90 230-20'/%3E%3C/g%3E%0A%3Cg transform='translate(210 150) scale(2.2)' opacity='.36'%3E%3Ccircle cx='24' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='56' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='40' cy='42' r='30' fill='%23fff8e6'/%3E%3Ccircle cx='31' cy='36' r='3.2' fill='%23463018'/%3E%3Ccircle cx='49' cy='36' r='3.2' fill='%23463018'/%3E%3Cellipse cx='40' cy='48' rx='6' ry='5' fill='%23f1b6c8'/%3E%3Cpath d='M31 58q9 8 18 0' stroke='%23463018' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Crect x='20' y='76' width='40' height='34' rx='17' fill='%23fff8e6'/%3E%3C/g%3E%0A%3Cg transform='translate(920 80) scale(1.75)' opacity='.28'%3E%3Ccircle cx='24' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='56' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='40' cy='42' r='30' fill='%23fff8e6'/%3E%3Ccircle cx='31' cy='36' r='3.2' fill='%23463018'/%3E%3Ccircle cx='49' cy='36' r='3.2' fill='%23463018'/%3E%3Cellipse cx='40' cy='48' rx='6' ry='5' fill='%23f1b6c8'/%3E%3Cpath d='M31 58q9 8 18 0' stroke='%23463018' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Crect x='20' y='76' width='40' height='34' rx='17' fill='%23fff8e6'/%3E%3C/g%3E%0A%3Cg transform='translate(1160 520) scale(2.0)' opacity='.30'%3E%3Ccircle cx='24' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='56' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='40' cy='42' r='30' fill='%23fff8e6'/%3E%3Ccircle cx='31' cy='36' r='3.2' fill='%23463018'/%3E%3Ccircle cx='49' cy='36' r='3.2' fill='%23463018'/%3E%3Cellipse cx='40' cy='48' rx='6' ry='5' fill='%23f1b6c8'/%3E%3Cpath d='M31 58q9 8 18 0' stroke='%23463018' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Crect x='20' y='76' width='40' height='34' rx='17' fill='%23fff8e6'/%3E%3C/g%3E%3C/svg%3E") !important;
  background-size:100% 100%, cover !important;
  background-position:center, center !important;
  background-repeat:no-repeat, no-repeat !important;
  border-color:rgba(228,246,255,.66) !important;
  box-shadow:0 24px 58px rgba(46,104,148,.34), inset 0 1px 0 rgba(255,255,255,.34), inset 0 -24px 42px rgba(42,108,158,.14) !important;
}

body .theme-grid .theme-card.theme-night,
body .theme-grid .theme-card[data-theme="night-mosque"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="night-mosque"],
html[class*="premium-theme-"] .bw-theme-sample-night-mosque{
  background-color:#07091f !important;
  background-image:
    radial-gradient(circle at 86% 16%, rgba(255,255,255,.18), transparent 24%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%2307091f'/%3E%3Cg fill='%23fff'%3E%0A%3Ccircle cx='80' cy='70' r='4'/%3E%3Ccircle cx='210' cy='120' r='2.2'/%3E%3Ccircle cx='360' cy='80' r='3.2'/%3E%3Ccircle cx='520' cy='160' r='2.5'/%3E%3Ccircle cx='710' cy='90' r='3'/%3E%3Ccircle cx='930' cy='130' r='2.2'/%3E%3Ccircle cx='1120' cy='70' r='3.5'/%3E%3Ccircle cx='1360' cy='150' r='2.4'/%3E%3Ccircle cx='1510' cy='80' r='3.2'/%3E%0A%3Ccircle cx='140' cy='330' r='2.3'/%3E%3Ccircle cx='280' cy='420' r='4.5'/%3E%3Ccircle cx='430' cy='310' r='2.4'/%3E%3Ccircle cx='610' cy='380' r='3.8'/%3E%3Ccircle cx='790' cy='280' r='2.6'/%3E%3Ccircle cx='980' cy='440' r='3'/%3E%3Ccircle cx='1190' cy='330' r='4.2'/%3E%3Ccircle cx='1420' cy='420' r='2.4'/%3E%0A%3Ccircle cx='60' cy='760' r='3.8'/%3E%3Ccircle cx='260' cy='700' r='2.3'/%3E%3Ccircle cx='470' cy='810' r='3.3'/%3E%3Ccircle cx='690' cy='690' r='2.8'/%3E%3Ccircle cx='900' cy='780' r='4.2'/%3E%3Ccircle cx='1130' cy='700' r='2.4'/%3E%3Ccircle cx='1300' cy='810' r='3.6'/%3E%3Ccircle cx='1540' cy='710' r='2.8'/%3E%0A%3C/g%3E%3Cg fill='%23fff' opacity='.58'%3E%3Ccircle cx='160' cy='200' r='1.6'/%3E%3Ccircle cx='390' cy='210' r='1.8'/%3E%3Ccircle cx='760' cy='220' r='1.5'/%3E%3Ccircle cx='1010' cy='240' r='1.6'/%3E%3Ccircle cx='1260' cy='230' r='1.7'/%3E%3Ccircle cx='1480' cy='260' r='1.5'/%3E%3Ccircle cx='230' cy='560' r='1.6'/%3E%3Ccircle cx='580' cy='540' r='1.7'/%3E%3Ccircle cx='840' cy='590' r='1.6'/%3E%3Ccircle cx='1080' cy='560' r='1.6'/%3E%3Ccircle cx='1330' cy='590' r='1.7'/%3E%3Ccircle cx='1510' cy='560' r='1.5'/%3E%3C/g%3E%3Cg filter='url(%23none)'%3E%3Ccircle cx='520' cy='160' r='10' fill='%23fff' opacity='.18'/%3E%3Ccircle cx='1190' cy='330' r='14' fill='%23fff' opacity='.16'/%3E%3Ccircle cx='280' cy='420' r='16' fill='%23fff' opacity='.16'/%3E%3Ccircle cx='900' cy='780' r='15' fill='%23fff' opacity='.14'/%3E%3C/g%3E%3C/svg%3E") !important;
  background-size:100% 100%, cover !important;
  background-position:center, center !important;
  background-repeat:no-repeat, no-repeat !important;
  border-color:rgba(189,205,255,.34) !important;
  box-shadow:0 24px 58px rgba(0,7,31,.54), 0 0 34px rgba(144,175,255,.14), inset 0 1px 0 rgba(255,255,255,.15), inset 0 -24px 42px rgba(0,0,0,.28) !important;
}

body .theme-grid .theme-card.theme-sand,
body .theme-grid .theme-card[data-theme="desert-sand"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="desert-sand"],
html[class*="premium-theme-"] .bw-theme-sample-desert-sand{
  background-color:#d8a862 !important;
  background-image:
    radial-gradient(circle at 90% 12%, rgba(255,247,214,.24), transparent 30%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='sand' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f7dfaa'/%3E%3Cstop offset='.48' stop-color='%23c8954c'/%3E%3Cstop offset='1' stop-color='%23efd092'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23sand)'/%3E%3Cg fill='none' stroke='%23fff2c7' stroke-opacity='.36' stroke-width='9'%3E%3Cpath d='M-60 190C220 60 430 300 690 170s520-70 970 20'/%3E%3Cpath d='M-90 430C210 260 470 560 760 390s560-80 930 40'/%3E%3Cpath d='M-70 700C250 520 480 820 790 640s560-70 910 50'/%3E%3C/g%3E%3Cg fill='none' stroke='%238d5f24' stroke-opacity='.16' stroke-width='7'%3E%3Cpath d='M-40 250C260 130 430 350 720 230s570-50 930 40'/%3E%3Cpath d='M-40 510C260 360 510 620 820 470s560-50 900 60'/%3E%3Cpath d='M-40 790C260 640 520 870 850 720s560-40 900 50'/%3E%3C/g%3E%3C/svg%3E") !important;
  background-size:100% 100%, cover !important;
  background-position:center, center !important;
  background-repeat:no-repeat, no-repeat !important;
  border-color:rgba(255,232,184,.50) !important;
  box-shadow:0 24px 58px rgba(120,82,33,.36), inset 0 1px 0 rgba(255,255,255,.22), inset 0 -24px 42px rgba(98,62,20,.14) !important;
}

body .theme-grid .theme-card.theme-child h3,
body .theme-grid .theme-card.theme-child p,
body .theme-grid .theme-card[data-theme="children-soft"] h3,
body .theme-grid .theme-card[data-theme="children-soft"] p{
  color:#ffffff !important;
  text-shadow:0 2px 14px rgba(27,65,96,.58) !important;
}

body .theme-grid .theme-card:not(.restore-original-theme-card) h3,
body .theme-grid .theme-card:not(.restore-original-theme-card) p{
  text-shadow:0 2px 14px rgba(0,0,0,.58) !important;
}

html.premium-theme-royal-gold{
  --bg:#91601f; --surface:#b77b2f; --surface-2:#d69b45; --surface-3:#ffe08a; --border:rgba(255,229,153,.46); --border-2:rgba(255,241,196,.58); --text:#fff8e6; --text-soft:#ffedbd; --text-muted:#e7c47b; --green:#f5d987; --green-strong:#a66b24; --green-soft:#fff0bd; --bw-accent:#f5d987; --bw-accent-2:#fff3c2;
  --bw-ref-bg:radial-gradient(circle at 86% 18%, rgba(255,246,201,.50), transparent 28%), radial-gradient(circle at 12% 90%, rgba(164,103,32,.24), transparent 34%), linear-gradient(103deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,.04) 17%, rgba(255,224,132,.32) 39%, rgba(166,99,29,.16) 63%, rgba(255,255,255,.16) 100%), linear-gradient(145deg,#9a5f21 0%,#d6a04a 44%,#ffe07a 72%,#b97826 100%);
  --bw-ref-size:100% 100%; --bw-ref-position:center; --bw-ref-repeat:no-repeat;
}
html.premium-theme-emerald-quran{
  --bg:#00331f; --surface:#004b2d; --surface-2:#006a3c; --surface-3:#16b970; --border:rgba(98,244,165,.36); --border-2:rgba(165,255,204,.46); --text:#f0fff7; --text-soft:#c9ffdf; --text-muted:#8ee6af; --green:#74f2a8; --green-strong:#04733f; --green-soft:#c5ffdc; --bw-accent:#74f2a8; --bw-accent-2:#c5ffdc;
  --bw-ref-bg:linear-gradient(135deg, rgba(0,15,10,.38), rgba(0,0,0,0) 34%, rgba(150,255,203,.12) 68%, rgba(0,0,0,.22)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%0A%3Cdefs%3E%0A%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23001b12'/%3E%3Cstop offset='.45' stop-color='%23006a3c'/%3E%3Cstop offset='1' stop-color='%2348f29d'/%3E%3C/linearGradient%3E%0A%3ClinearGradient id='h' x1='0' x2='1'%3E%3Cstop offset='0' stop-color='%23bfffe0' stop-opacity='.50'/%3E%3Cstop offset='1' stop-color='%23002b1a' stop-opacity='.04'/%3E%3C/linearGradient%3E%0A%3C/defs%3E%0A%3Crect width='1600' height='900' fill='url(%23g)'/%3E%0A%3Cg opacity='.55'%3E%0A%3Cpolygon points='0,0 360,0 180,220' fill='%230fd884' fill-opacity='.22'/%3E%3Cpolygon points='360,0 780,0 520,260' fill='%23071d17' fill-opacity='.32'/%3E%3Cpolygon points='780,0 1160,0 930,240' fill='%234affb3' fill-opacity='.18'/%3E%3Cpolygon points='1160,0 1600,0 1380,260' fill='%23002819' fill-opacity='.28'/%3E%0A%3Cpolygon points='0,900 330,900 170,610' fill='%234affb3' fill-opacity='.14'/%3E%3Cpolygon points='330,900 760,900 540,590' fill='%23001910' fill-opacity='.28'/%3E%3Cpolygon points='760,900 1170,900 960,620' fill='%2313d37f' fill-opacity='.16'/%3E%3Cpolygon points='1170,900 1600,900 1390,610' fill='%23091c18' fill-opacity='.25'/%3E%0A%3Cpolygon points='170,220 520,260 310,520' fill='%23ffffff' fill-opacity='.13'/%3E%3Cpolygon points='520,260 930,240 730,530' fill='%23001a12' fill-opacity='.30'/%3E%3Cpolygon points='930,240 1380,260 1120,540' fill='%237dffc2' fill-opacity='.16'/%3E%3Cpolygon points='310,520 730,530 540,790' fill='%2313d37f' fill-opacity='.18'/%3E%3Cpolygon points='730,530 1120,540 960,790' fill='%23031c14' fill-opacity='.24'/%3E%3Cpolygon points='1120,540 1600,410 1390,780' fill='%23ffffff' fill-opacity='.10'/%3E%0A%3C/g%3E%3Crect width='1600' height='900' fill='url(%23h)' opacity='.75'/%3E%3C/svg%3E");
  --bw-ref-size:100% 100%, cover; --bw-ref-position:center, center; --bw-ref-repeat:no-repeat, no-repeat;
}
html.premium-theme-violet-noor{
  --bg:#16091f; --surface:#2c114c; --surface-2:#4b1d76; --surface-3:#9b55d8; --border:rgba(217,170,255,.34); --border-2:rgba(239,214,255,.48); --text:#fbf7ff; --text-soft:#ead8ff; --text-muted:#caa4ef; --green:#d7b4ff; --green-strong:#6d39a7; --green-soft:#f1dcff; --bw-accent:#d7b4ff; --bw-accent-2:#f1dcff;
  --bw-ref-bg:radial-gradient(ellipse at 18% 16%, rgba(255,218,255,.22), transparent 34%), radial-gradient(ellipse at 84% 28%, rgba(83,70,209,.38), transparent 38%), radial-gradient(ellipse at 48% 86%, rgba(227,148,255,.22), transparent 42%), linear-gradient(126deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,.02) 22%, rgba(119,66,177,.42) 43%, rgba(22,10,42,.32) 64%, rgba(228,156,255,.20) 100%), linear-gradient(145deg,#16091f 0%,#4b1d76 48%,#9b55d8 100%);
  --bw-ref-size:100% 100%; --bw-ref-position:center; --bw-ref-repeat:no-repeat;
}
html.premium-theme-rose-soft{
  --bg:#7f2854; --surface:#a83d72; --surface-2:#d46d9d; --surface-3:#ffb8d6; --border:rgba(255,204,226,.36); --border-2:rgba(255,235,244,.48); --text:#fff8fc; --text-soft:#ffe3ef; --text-muted:#f1aecb; --green:#ffd2e4; --green-strong:#b84678; --green-soft:#ffe5f0; --bw-accent:#ffd2e4; --bw-accent-2:#ffe5f0;
  --bw-ref-bg:radial-gradient(ellipse at 18% 16%, rgba(255,242,248,.42), transparent 32%), radial-gradient(ellipse at 82% 20%, rgba(255,155,204,.38), transparent 40%), radial-gradient(ellipse at 42% 84%, rgba(255,221,235,.22), transparent 42%), linear-gradient(120deg, rgba(255,255,255,.24) 0%, rgba(255,255,255,.04) 18%, rgba(235,93,159,.42) 43%, rgba(121,34,79,.22) 64%, rgba(255,210,232,.32) 100%), linear-gradient(145deg,#7f2854 0%,#d46d9d 52%,#ffb8d6 100%);
  --bw-ref-size:100% 100%; --bw-ref-position:center; --bw-ref-repeat:no-repeat;
}
html.premium-theme-children-soft{
  --bg:#75b9e5; --surface:#85c8ef; --surface-2:#a7dbf7; --surface-3:#fff0f6; --border:rgba(228,246,255,.50); --border-2:rgba(255,245,207,.50); --text:#ffffff; --text-soft:#f4fbff; --text-muted:#e4f4ff; --green:#fff1be; --green-strong:#5297c8; --green-soft:#fff6d8; --bw-accent:#fff1be; --bw-accent-2:#fff6d8;
  --bw-ref-bg:linear-gradient(135deg, rgba(255,255,255,.24), rgba(255,231,241,.12)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%0A%3Cdefs%3E%3ClinearGradient id='bg' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23bfe9ff'/%3E%3Cstop offset='.55' stop-color='%2379bdeb'/%3E%3Cstop offset='1' stop-color='%23fff0f6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23bg)'/%3E%0A%3Cg opacity='.72' fill='none' stroke='%23ffffff' stroke-opacity='.34' stroke-width='3'%3E%3Cpath d='M80 130c80-70 180-40 230 20 50-60 150-90 230-20'/%3E%3Cpath d='M940 780c80-70 180-40 230 20 50-60 150-90 230-20'/%3E%3C/g%3E%0A%3Cg transform='translate(210 150) scale(2.2)' opacity='.36'%3E%3Ccircle cx='24' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='56' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='40' cy='42' r='30' fill='%23fff8e6'/%3E%3Ccircle cx='31' cy='36' r='3.2' fill='%23463018'/%3E%3Ccircle cx='49' cy='36' r='3.2' fill='%23463018'/%3E%3Cellipse cx='40' cy='48' rx='6' ry='5' fill='%23f1b6c8'/%3E%3Cpath d='M31 58q9 8 18 0' stroke='%23463018' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Crect x='20' y='76' width='40' height='34' rx='17' fill='%23fff8e6'/%3E%3C/g%3E%0A%3Cg transform='translate(920 80) scale(1.75)' opacity='.28'%3E%3Ccircle cx='24' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='56' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='40' cy='42' r='30' fill='%23fff8e6'/%3E%3Ccircle cx='31' cy='36' r='3.2' fill='%23463018'/%3E%3Ccircle cx='49' cy='36' r='3.2' fill='%23463018'/%3E%3Cellipse cx='40' cy='48' rx='6' ry='5' fill='%23f1b6c8'/%3E%3Cpath d='M31 58q9 8 18 0' stroke='%23463018' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Crect x='20' y='76' width='40' height='34' rx='17' fill='%23fff8e6'/%3E%3C/g%3E%0A%3Cg transform='translate(1160 520) scale(2.0)' opacity='.30'%3E%3Ccircle cx='24' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='56' cy='18' r='10' fill='%23fff8e6'/%3E%3Ccircle cx='40' cy='42' r='30' fill='%23fff8e6'/%3E%3Ccircle cx='31' cy='36' r='3.2' fill='%23463018'/%3E%3Ccircle cx='49' cy='36' r='3.2' fill='%23463018'/%3E%3Cellipse cx='40' cy='48' rx='6' ry='5' fill='%23f1b6c8'/%3E%3Cpath d='M31 58q9 8 18 0' stroke='%23463018' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Crect x='20' y='76' width='40' height='34' rx='17' fill='%23fff8e6'/%3E%3C/g%3E%3C/svg%3E");
  --bw-ref-size:100% 100%, cover; --bw-ref-position:center, center; --bw-ref-repeat:no-repeat, no-repeat;
}
html.premium-theme-night-mosque{
  --bg:#07091f; --surface:#090d2f; --surface-2:#10184a; --surface-3:#1e3471; --border:rgba(189,205,255,.30); --border-2:rgba(255,255,255,.38); --text:#f7fbff; --text-soft:#dce7ff; --text-muted:#adc0ef; --green:#ffffff; --green-strong:#355d9a; --green-soft:#f4f7ff; --bw-accent:#ffffff; --bw-accent-2:#a9bdff;
  --bw-ref-bg:radial-gradient(circle at 86% 16%, rgba(255,255,255,.18), transparent 24%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%2307091f'/%3E%3Cg fill='%23fff'%3E%0A%3Ccircle cx='80' cy='70' r='4'/%3E%3Ccircle cx='210' cy='120' r='2.2'/%3E%3Ccircle cx='360' cy='80' r='3.2'/%3E%3Ccircle cx='520' cy='160' r='2.5'/%3E%3Ccircle cx='710' cy='90' r='3'/%3E%3Ccircle cx='930' cy='130' r='2.2'/%3E%3Ccircle cx='1120' cy='70' r='3.5'/%3E%3Ccircle cx='1360' cy='150' r='2.4'/%3E%3Ccircle cx='1510' cy='80' r='3.2'/%3E%0A%3Ccircle cx='140' cy='330' r='2.3'/%3E%3Ccircle cx='280' cy='420' r='4.5'/%3E%3Ccircle cx='430' cy='310' r='2.4'/%3E%3Ccircle cx='610' cy='380' r='3.8'/%3E%3Ccircle cx='790' cy='280' r='2.6'/%3E%3Ccircle cx='980' cy='440' r='3'/%3E%3Ccircle cx='1190' cy='330' r='4.2'/%3E%3Ccircle cx='1420' cy='420' r='2.4'/%3E%0A%3Ccircle cx='60' cy='760' r='3.8'/%3E%3Ccircle cx='260' cy='700' r='2.3'/%3E%3Ccircle cx='470' cy='810' r='3.3'/%3E%3Ccircle cx='690' cy='690' r='2.8'/%3E%3Ccircle cx='900' cy='780' r='4.2'/%3E%3Ccircle cx='1130' cy='700' r='2.4'/%3E%3Ccircle cx='1300' cy='810' r='3.6'/%3E%3Ccircle cx='1540' cy='710' r='2.8'/%3E%0A%3C/g%3E%3Cg fill='%23fff' opacity='.58'%3E%3Ccircle cx='160' cy='200' r='1.6'/%3E%3Ccircle cx='390' cy='210' r='1.8'/%3E%3Ccircle cx='760' cy='220' r='1.5'/%3E%3Ccircle cx='1010' cy='240' r='1.6'/%3E%3Ccircle cx='1260' cy='230' r='1.7'/%3E%3Ccircle cx='1480' cy='260' r='1.5'/%3E%3Ccircle cx='230' cy='560' r='1.6'/%3E%3Ccircle cx='580' cy='540' r='1.7'/%3E%3Ccircle cx='840' cy='590' r='1.6'/%3E%3Ccircle cx='1080' cy='560' r='1.6'/%3E%3Ccircle cx='1330' cy='590' r='1.7'/%3E%3Ccircle cx='1510' cy='560' r='1.5'/%3E%3C/g%3E%3Cg filter='url(%23none)'%3E%3Ccircle cx='520' cy='160' r='10' fill='%23fff' opacity='.18'/%3E%3Ccircle cx='1190' cy='330' r='14' fill='%23fff' opacity='.16'/%3E%3Ccircle cx='280' cy='420' r='16' fill='%23fff' opacity='.16'/%3E%3Ccircle cx='900' cy='780' r='15' fill='%23fff' opacity='.14'/%3E%3C/g%3E%3C/svg%3E");
  --bw-ref-size:100% 100%, cover; --bw-ref-position:center, center; --bw-ref-repeat:no-repeat, no-repeat;
}
html.premium-theme-desert-sand{
  --bg:#b98542; --surface:#d8a862; --surface-2:#e8bd78; --surface-3:#f6dca6; --border:rgba(255,232,184,.38); --border-2:rgba(255,245,212,.50); --text:#fff9ed; --text-soft:#fff0cf; --text-muted:#e7c48d; --green:#fff0c8; --green-strong:#9b6729; --green-soft:#fff5d7; --bw-accent:#fff0c8; --bw-accent-2:#fff5d7;
  --bw-ref-bg:radial-gradient(circle at 90% 12%, rgba(255,247,214,.24), transparent 30%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='sand' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f7dfaa'/%3E%3Cstop offset='.48' stop-color='%23c8954c'/%3E%3Cstop offset='1' stop-color='%23efd092'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23sand)'/%3E%3Cg fill='none' stroke='%23fff2c7' stroke-opacity='.36' stroke-width='9'%3E%3Cpath d='M-60 190C220 60 430 300 690 170s520-70 970 20'/%3E%3Cpath d='M-90 430C210 260 470 560 760 390s560-80 930 40'/%3E%3Cpath d='M-70 700C250 520 480 820 790 640s560-70 910 50'/%3E%3C/g%3E%3Cg fill='none' stroke='%238d5f24' stroke-opacity='.16' stroke-width='7'%3E%3Cpath d='M-40 250C260 130 430 350 720 230s570-50 930 40'/%3E%3Cpath d='M-40 510C260 360 510 620 820 470s560-50 900 60'/%3E%3Cpath d='M-40 790C260 640 520 870 850 720s560-40 900 50'/%3E%3C/g%3E%3C/svg%3E");
  --bw-ref-size:100% 100%, cover; --bw-ref-position:center, center; --bw-ref-repeat:no-repeat, no-repeat;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) body,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .container,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .hero,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .brand-prayer-hero,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .today-hub,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .about-project-card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .barakaway-pro-final,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .block,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .box,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .panel,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .quote,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .empty,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .article,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .category-panel,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .surah-card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .prayer-card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .toggle-row,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .meta-item,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .note-box,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .jumuah-box,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .month-day,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .month-head,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .wallet-support,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .home-widget,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .dua-card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ayah-card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .master-audio-wrap,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .reader-side,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .reader-main,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .dua-side,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .dua-main,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ai-side,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ai-main,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .player-panel,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .preview-panel,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .app-menu-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .today-action,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .premium-resource-card,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bottom-app-nav,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bottom-app-nav-inner{
  background-color:var(--surface) !important;
  background-image:var(--bw-ref-bg) !important;
  background-size:var(--bw-ref-size) !important;
  background-position:var(--bw-ref-position) !important;
  background-repeat:var(--bw-ref-repeat) !important;
  color:var(--text) !important;
  border-color:var(--border) !important;
  box-shadow:0 24px 58px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -24px 42px rgba(0,0,0,.18) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .install-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .support-project-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .copy-wallet-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .quick-btn{
  background:linear-gradient(180deg,var(--green) 0%,var(--green-strong) 100%) !important;
  color:#ffffff !important;
  border-color:var(--border-2) !important;
}

html.premium-theme-royal-gold button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-royal-gold .btn,
html.premium-theme-night-mosque button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-night-mosque .btn,
html.premium-theme-children-soft button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-children-soft .btn,
html.premium-theme-desert-sand button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-desert-sand .btn{
  color:#1a1308 !important;
}
/* ===== END BARAKAWAY REFERENCE-BASED PREMIUM THEMES CLEAN FINAL ===== */
`;
  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject, {once:true});
  }else{
    inject();
  }
})();
/* ===== END BARAKAWAY REFERENCE-BASED PREMIUM THEMES CLEAN FINAL INJECTOR ===== */


/* ===== BARAKAWAY CARBON ELITE CLEAN FINAL INJECTOR ===== */
(function(){
  const STYLE_ID='barakaway-carbon-elite-clean-final';
  const CSS=`
/* ===== BARAKAWAY CARBON ELITE CLEAN FINAL ===== */
.theme-carbon,
.theme-grid .theme-card.theme-carbon,
body .theme-grid .theme-card[data-theme="carbon-elite"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-carbon,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="carbon-elite"],
html[class*="premium-theme-"] .bw-theme-sample-carbon-elite{
  background-color:#080b0f !important;
  background-image:
    linear-gradient(45deg, rgba(255,255,255,.10) 0 12%, transparent 12% 38%, rgba(255,255,255,.08) 38% 62%, transparent 62% 100%),
    linear-gradient(-45deg, rgba(255,255,255,.055) 0 12%, transparent 12% 38%, rgba(255,255,255,.045) 38% 62%, transparent 62% 100%),
    radial-gradient(circle at 86% 14%, rgba(255,255,255,.22), transparent 24%),
    linear-gradient(135deg,#050608 0%,#161d25 52%,#4d5965 100%) !important;
  background-size:28px 28px,28px 28px,100% 100%,100% 100% !important;
  background-position:0 0,14px 14px,center,center !important;
  background-repeat:repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(230,238,246,.24) !important;
  box-shadow:0 24px 56px rgba(0,0,0,.46),0 0 0 1px rgba(255,255,255,.06),inset 0 1px 0 rgba(255,255,255,.16),inset 0 -22px 34px rgba(0,0,0,.38) !important;
}

html.premium-theme-carbon-elite{
  --bg:#050608;
  --surface:#0a0d11;
  --surface-2:#10161d;
  --surface-3:#1a222b;
  --border:rgba(230,238,246,.18);
  --border-2:rgba(255,255,255,.24);
  --text:#f7fafc;
  --text-soft:#d5dde7;
  --text-muted:#9ba8b6;
  --green:#dfe7ef;
  --green-strong:#59636e;
  --green-soft:#f5f7fa;
  --bw-accent:#dfe7ef;
  --bw-accent-2:#ffffff;
}

html.premium-theme-carbon-elite body,
html.premium-theme-carbon-elite .container,
html.premium-theme-carbon-elite .hero,
html.premium-theme-carbon-elite .brand-prayer-hero,
html.premium-theme-carbon-elite .today-hub,
html.premium-theme-carbon-elite .about-project-card,
html.premium-theme-carbon-elite .barakaway-pro-final,
html.premium-theme-carbon-elite .block,
html.premium-theme-carbon-elite .card,
html.premium-theme-carbon-elite .box,
html.premium-theme-carbon-elite .panel,
html.premium-theme-carbon-elite .quote,
html.premium-theme-carbon-elite .empty,
html.premium-theme-carbon-elite .article,
html.premium-theme-carbon-elite .category-panel,
html.premium-theme-carbon-elite .surah-card,
html.premium-theme-carbon-elite .prayer-card,
html.premium-theme-carbon-elite .toggle-row,
html.premium-theme-carbon-elite .meta-item,
html.premium-theme-carbon-elite .note-box,
html.premium-theme-carbon-elite .jumuah-box,
html.premium-theme-carbon-elite .month-day,
html.premium-theme-carbon-elite .month-head,
html.premium-theme-carbon-elite .wallet-support,
html.premium-theme-carbon-elite .home-widget,
html.premium-theme-carbon-elite .dua-card,
html.premium-theme-carbon-elite .ayah-card,
html.premium-theme-carbon-elite .master-audio-wrap,
html.premium-theme-carbon-elite .reader-side,
html.premium-theme-carbon-elite .reader-main,
html.premium-theme-carbon-elite .dua-side,
html.premium-theme-carbon-elite .dua-main,
html.premium-theme-carbon-elite .ai-side,
html.premium-theme-carbon-elite .ai-main,
html.premium-theme-carbon-elite .player-panel,
html.premium-theme-carbon-elite .preview-panel,
html.premium-theme-carbon-elite .app-menu-btn,
html.premium-theme-carbon-elite .today-action,
html.premium-theme-carbon-elite .premium-resource-card,
html.premium-theme-carbon-elite .bottom-app-nav,
html.premium-theme-carbon-elite .bottom-app-nav-inner{
  background-color:#080b0f !important;
  background-image:
    linear-gradient(45deg, rgba(255,255,255,.09) 0 12%, transparent 12% 38%, rgba(255,255,255,.075) 38% 62%, transparent 62% 100%),
    linear-gradient(-45deg, rgba(255,255,255,.050) 0 12%, transparent 12% 38%, rgba(255,255,255,.042) 38% 62%, transparent 62% 100%),
    radial-gradient(circle at 82% 12%, rgba(255,255,255,.18), transparent 24%),
    linear-gradient(135deg,#050608 0%,#111820 50%,#2a333d 100%) !important;
  background-size:28px 28px,28px 28px,100% 100%,100% 100% !important;
  background-position:0 0,14px 14px,center,center !important;
  background-repeat:repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(230,238,246,.18) !important;
  box-shadow:0 24px 58px rgba(0,0,0,.52),0 0 0 1px rgba(255,255,255,.055),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -24px 38px rgba(0,0,0,.38) !important;
}

html.premium-theme-carbon-elite button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-carbon-elite .btn,
html.premium-theme-carbon-elite .install-btn,
html.premium-theme-carbon-elite .support-project-btn,
html.premium-theme-carbon-elite .copy-wallet-btn,
html.premium-theme-carbon-elite .quick-btn{
  background:linear-gradient(180deg,#68727d 0%,#343c45 48%,#1a2027 100%) !important;
  border-color:rgba(255,255,255,.22) !important;
  color:#ffffff !important;
  box-shadow:0 16px 34px rgba(0,0,0,.40),inset 0 1px 0 rgba(255,255,255,.20),inset 0 -12px 24px rgba(0,0,0,.36) !important;
}

html.premium-theme-carbon-elite .bw-logo-transparent-lock,
html.premium-theme-carbon-elite .bw-logo-transparent-lock *,
html.premium-theme-carbon-elite [data-barakaway-logo-lock],
html.premium-theme-carbon-elite [data-barakaway-logo-lock] *{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  border-color:transparent !important;
}
/* ===== END BARAKAWAY CARBON ELITE CLEAN FINAL ===== */
`;
  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=CSS;
    (document.head||document.documentElement).appendChild(style);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',inject,{once:true});}else{inject();}
})();
/* ===== END BARAKAWAY CARBON ELITE CLEAN FINAL INJECTOR ===== */

/* ===== BARAKAWAY GLOBAL READABILITY FIX FOR LIGHT PREMIUM THEMES INJECTOR ===== */
(function(){
  const STYLE_ID = "barakaway-global-readability-light-premium-themes";
  const CSS = `/* ===== BARAKAWAY GLOBAL READABILITY FIX FOR LIGHT PREMIUM THEMES ===== */
/* Scope: light premium themes only. Dark premium themes and visual materials are untouched. */
html.premium-theme-royal-gold,
html.premium-theme-children-soft,
html.premium-theme-desert-sand{
  --bw-readable-text:#201407;
  --bw-readable-text-strong:#120b03;
  --bw-readable-text-soft:#3f2a12;
  --bw-readable-text-muted:#654b25;
  --bw-readable-accent:#6e4312;
  --bw-readable-accent-2:#7a531e;
}

html.premium-theme-children-soft{
  --bw-readable-text:#172839;
  --bw-readable-text-strong:#0c1b28;
  --bw-readable-text-soft:#28445a;
  --bw-readable-text-muted:#52718a;
  --bw-readable-accent:#2b6f9b;
  --bw-readable-accent-2:#7b5b8f;
}

html.premium-theme-royal-gold body,
html.premium-theme-children-soft body,
html.premium-theme-desert-sand body{
  color:var(--bw-readable-text) !important;
}

html.premium-theme-royal-gold .container,
html.premium-theme-royal-gold .hero,
html.premium-theme-royal-gold .brand-prayer-hero,
html.premium-theme-royal-gold .today-hub,
html.premium-theme-royal-gold .about-project-card,
html.premium-theme-royal-gold .barakaway-pro-final,
html.premium-theme-royal-gold .block,
html.premium-theme-royal-gold .card,
html.premium-theme-royal-gold .box,
html.premium-theme-royal-gold .panel,
html.premium-theme-royal-gold .quote,
html.premium-theme-royal-gold .empty,
html.premium-theme-royal-gold .article,
html.premium-theme-royal-gold .category-panel,
html.premium-theme-royal-gold .surah-card,
html.premium-theme-royal-gold .prayer-card,
html.premium-theme-royal-gold .toggle-row,
html.premium-theme-royal-gold .meta-item,
html.premium-theme-royal-gold .note-box,
html.premium-theme-royal-gold .jumuah-box,
html.premium-theme-royal-gold .month-day,
html.premium-theme-royal-gold .month-head,
html.premium-theme-royal-gold .wallet-support,
html.premium-theme-royal-gold .home-widget,
html.premium-theme-royal-gold .dua-card,
html.premium-theme-royal-gold .ayah-card,
html.premium-theme-royal-gold .master-audio-wrap,
html.premium-theme-royal-gold .reader-side,
html.premium-theme-royal-gold .reader-main,
html.premium-theme-royal-gold .dua-side,
html.premium-theme-royal-gold .dua-main,
html.premium-theme-royal-gold .ai-side,
html.premium-theme-royal-gold .ai-main,
html.premium-theme-royal-gold .player-panel,
html.premium-theme-royal-gold .preview-panel,
html.premium-theme-royal-gold .app-menu-btn,
html.premium-theme-royal-gold .today-action,
html.premium-theme-royal-gold .premium-resource-card,
html.premium-theme-royal-gold .bottom-app-nav,
html.premium-theme-royal-gold .bottom-app-nav-inner,
html.premium-theme-children-soft .container,
html.premium-theme-children-soft .hero,
html.premium-theme-children-soft .brand-prayer-hero,
html.premium-theme-children-soft .today-hub,
html.premium-theme-children-soft .about-project-card,
html.premium-theme-children-soft .barakaway-pro-final,
html.premium-theme-children-soft .block,
html.premium-theme-children-soft .card,
html.premium-theme-children-soft .box,
html.premium-theme-children-soft .panel,
html.premium-theme-children-soft .quote,
html.premium-theme-children-soft .empty,
html.premium-theme-children-soft .article,
html.premium-theme-children-soft .category-panel,
html.premium-theme-children-soft .surah-card,
html.premium-theme-children-soft .prayer-card,
html.premium-theme-children-soft .toggle-row,
html.premium-theme-children-soft .meta-item,
html.premium-theme-children-soft .note-box,
html.premium-theme-children-soft .jumuah-box,
html.premium-theme-children-soft .month-day,
html.premium-theme-children-soft .month-head,
html.premium-theme-children-soft .wallet-support,
html.premium-theme-children-soft .home-widget,
html.premium-theme-children-soft .dua-card,
html.premium-theme-children-soft .ayah-card,
html.premium-theme-children-soft .master-audio-wrap,
html.premium-theme-children-soft .reader-side,
html.premium-theme-children-soft .reader-main,
html.premium-theme-children-soft .dua-side,
html.premium-theme-children-soft .dua-main,
html.premium-theme-children-soft .ai-side,
html.premium-theme-children-soft .ai-main,
html.premium-theme-children-soft .player-panel,
html.premium-theme-children-soft .preview-panel,
html.premium-theme-children-soft .app-menu-btn,
html.premium-theme-children-soft .today-action,
html.premium-theme-children-soft .premium-resource-card,
html.premium-theme-children-soft .bottom-app-nav,
html.premium-theme-children-soft .bottom-app-nav-inner,
html.premium-theme-desert-sand .container,
html.premium-theme-desert-sand .hero,
html.premium-theme-desert-sand .brand-prayer-hero,
html.premium-theme-desert-sand .today-hub,
html.premium-theme-desert-sand .about-project-card,
html.premium-theme-desert-sand .barakaway-pro-final,
html.premium-theme-desert-sand .block,
html.premium-theme-desert-sand .card,
html.premium-theme-desert-sand .box,
html.premium-theme-desert-sand .panel,
html.premium-theme-desert-sand .quote,
html.premium-theme-desert-sand .empty,
html.premium-theme-desert-sand .article,
html.premium-theme-desert-sand .category-panel,
html.premium-theme-desert-sand .surah-card,
html.premium-theme-desert-sand .prayer-card,
html.premium-theme-desert-sand .toggle-row,
html.premium-theme-desert-sand .meta-item,
html.premium-theme-desert-sand .note-box,
html.premium-theme-desert-sand .jumuah-box,
html.premium-theme-desert-sand .month-day,
html.premium-theme-desert-sand .month-head,
html.premium-theme-desert-sand .wallet-support,
html.premium-theme-desert-sand .home-widget,
html.premium-theme-desert-sand .dua-card,
html.premium-theme-desert-sand .ayah-card,
html.premium-theme-desert-sand .master-audio-wrap,
html.premium-theme-desert-sand .reader-side,
html.premium-theme-desert-sand .reader-main,
html.premium-theme-desert-sand .dua-side,
html.premium-theme-desert-sand .dua-main,
html.premium-theme-desert-sand .ai-side,
html.premium-theme-desert-sand .ai-main,
html.premium-theme-desert-sand .player-panel,
html.premium-theme-desert-sand .preview-panel,
html.premium-theme-desert-sand .app-menu-btn,
html.premium-theme-desert-sand .today-action,
html.premium-theme-desert-sand .premium-resource-card,
html.premium-theme-desert-sand .bottom-app-nav,
html.premium-theme-desert-sand .bottom-app-nav-inner{
  color:var(--bw-readable-text) !important;
}

html.premium-theme-royal-gold h1,
html.premium-theme-royal-gold h2,
html.premium-theme-royal-gold h3,
html.premium-theme-royal-gold h4,
html.premium-theme-royal-gold h5,
html.premium-theme-royal-gold h6,
html.premium-theme-royal-gold .title,
html.premium-theme-royal-gold .section-title,
html.premium-theme-royal-gold .category-title,
html.premium-theme-royal-gold .surah-name,
html.premium-theme-royal-gold .dua-title,
html.premium-theme-royal-gold .ayah-arabic,
html.premium-theme-royal-gold .prayer-name,
html.premium-theme-royal-gold .prayer-time,
html.premium-theme-royal-gold .meta-value,
html.premium-theme-royal-gold .theme-card h3,
html.premium-theme-children-soft h1,
html.premium-theme-children-soft h2,
html.premium-theme-children-soft h3,
html.premium-theme-children-soft h4,
html.premium-theme-children-soft h5,
html.premium-theme-children-soft h6,
html.premium-theme-children-soft .title,
html.premium-theme-children-soft .section-title,
html.premium-theme-children-soft .category-title,
html.premium-theme-children-soft .surah-name,
html.premium-theme-children-soft .dua-title,
html.premium-theme-children-soft .ayah-arabic,
html.premium-theme-children-soft .prayer-name,
html.premium-theme-children-soft .prayer-time,
html.premium-theme-children-soft .meta-value,
html.premium-theme-children-soft .theme-card h3,
html.premium-theme-desert-sand h1,
html.premium-theme-desert-sand h2,
html.premium-theme-desert-sand h3,
html.premium-theme-desert-sand h4,
html.premium-theme-desert-sand h5,
html.premium-theme-desert-sand h6,
html.premium-theme-desert-sand .title,
html.premium-theme-desert-sand .section-title,
html.premium-theme-desert-sand .category-title,
html.premium-theme-desert-sand .surah-name,
html.premium-theme-desert-sand .dua-title,
html.premium-theme-desert-sand .ayah-arabic,
html.premium-theme-desert-sand .prayer-name,
html.premium-theme-desert-sand .prayer-time,
html.premium-theme-desert-sand .meta-value,
html.premium-theme-desert-sand .theme-card h3{
  color:var(--bw-readable-text-strong) !important;
  -webkit-text-fill-color:var(--bw-readable-text-strong) !important;
  text-shadow:none !important;
}

html.premium-theme-royal-gold p,
html.premium-theme-royal-gold li,
html.premium-theme-royal-gold small,
html.premium-theme-royal-gold label,
html.premium-theme-royal-gold .subtitle,
html.premium-theme-royal-gold .hero-text,
html.premium-theme-royal-gold .small,
html.premium-theme-royal-gold .note,
html.premium-theme-royal-gold .muted,
html.premium-theme-royal-gold .category-intro,
html.premium-theme-royal-gold .ref,
html.premium-theme-royal-gold .label,
html.premium-theme-royal-gold .translit,
html.premium-theme-royal-gold .meaning,
html.premium-theme-royal-gold .when,
html.premium-theme-royal-gold .surah-meta,
html.premium-theme-royal-gold .article p,
html.premium-theme-royal-gold .dua-translit,
html.premium-theme-royal-gold .ayah-translit,
html.premium-theme-royal-gold .ayah-meaning,
html.premium-theme-royal-gold .theme-card p,
html.premium-theme-royal-gold .bottom-app-nav-item,
html.premium-theme-children-soft p,
html.premium-theme-children-soft li,
html.premium-theme-children-soft small,
html.premium-theme-children-soft label,
html.premium-theme-children-soft .subtitle,
html.premium-theme-children-soft .hero-text,
html.premium-theme-children-soft .small,
html.premium-theme-children-soft .note,
html.premium-theme-children-soft .muted,
html.premium-theme-children-soft .category-intro,
html.premium-theme-children-soft .ref,
html.premium-theme-children-soft .label,
html.premium-theme-children-soft .translit,
html.premium-theme-children-soft .meaning,
html.premium-theme-children-soft .when,
html.premium-theme-children-soft .surah-meta,
html.premium-theme-children-soft .article p,
html.premium-theme-children-soft .dua-translit,
html.premium-theme-children-soft .ayah-translit,
html.premium-theme-children-soft .ayah-meaning,
html.premium-theme-children-soft .theme-card p,
html.premium-theme-children-soft .bottom-app-nav-item,
html.premium-theme-desert-sand p,
html.premium-theme-desert-sand li,
html.premium-theme-desert-sand small,
html.premium-theme-desert-sand label,
html.premium-theme-desert-sand .subtitle,
html.premium-theme-desert-sand .hero-text,
html.premium-theme-desert-sand .small,
html.premium-theme-desert-sand .note,
html.premium-theme-desert-sand .muted,
html.premium-theme-desert-sand .category-intro,
html.premium-theme-desert-sand .ref,
html.premium-theme-desert-sand .label,
html.premium-theme-desert-sand .translit,
html.premium-theme-desert-sand .meaning,
html.premium-theme-desert-sand .when,
html.premium-theme-desert-sand .surah-meta,
html.premium-theme-desert-sand .article p,
html.premium-theme-desert-sand .dua-translit,
html.premium-theme-desert-sand .ayah-translit,
html.premium-theme-desert-sand .ayah-meaning,
html.premium-theme-desert-sand .theme-card p,
html.premium-theme-desert-sand .bottom-app-nav-item{
  color:var(--bw-readable-text-soft) !important;
  -webkit-text-fill-color:var(--bw-readable-text-soft) !important;
  text-shadow:none !important;
}

html.premium-theme-royal-gold strong,
html.premium-theme-royal-gold b,
html.premium-theme-royal-gold a,
html.premium-theme-royal-gold .badge,
html.premium-theme-royal-gold .chip,
html.premium-theme-royal-gold .wallet-badge,
html.premium-theme-royal-gold .surah-number,
html.premium-theme-royal-gold .section-note,
html.premium-theme-children-soft strong,
html.premium-theme-children-soft b,
html.premium-theme-children-soft a,
html.premium-theme-children-soft .badge,
html.premium-theme-children-soft .chip,
html.premium-theme-children-soft .wallet-badge,
html.premium-theme-children-soft .surah-number,
html.premium-theme-children-soft .section-note,
html.premium-theme-desert-sand strong,
html.premium-theme-desert-sand b,
html.premium-theme-desert-sand a,
html.premium-theme-desert-sand .badge,
html.premium-theme-desert-sand .chip,
html.premium-theme-desert-sand .wallet-badge,
html.premium-theme-desert-sand .surah-number,
html.premium-theme-desert-sand .section-note{
  color:var(--bw-readable-accent) !important;
  -webkit-text-fill-color:var(--bw-readable-accent) !important;
  text-shadow:none !important;
}

html.premium-theme-royal-gold .btn,
html.premium-theme-royal-gold button:not(.icon-btn):not(.share-close):not(.install-help-close),
html.premium-theme-royal-gold .quick-btn,
html.premium-theme-royal-gold .install-btn,
html.premium-theme-royal-gold .support-project-btn,
html.premium-theme-royal-gold .copy-wallet-btn,
html.premium-theme-children-soft .btn,
html.premium-theme-children-soft button:not(.icon-btn):not(.share-close):not(.install-help-close),
html.premium-theme-children-soft .quick-btn,
html.premium-theme-children-soft .install-btn,
html.premium-theme-children-soft .support-project-btn,
html.premium-theme-children-soft .copy-wallet-btn,
html.premium-theme-desert-sand .btn,
html.premium-theme-desert-sand button:not(.icon-btn):not(.share-close):not(.install-help-close),
html.premium-theme-desert-sand .quick-btn,
html.premium-theme-desert-sand .install-btn,
html.premium-theme-desert-sand .support-project-btn,
html.premium-theme-desert-sand .copy-wallet-btn{
  color:var(--bw-readable-text-strong) !important;
  -webkit-text-fill-color:var(--bw-readable-text-strong) !important;
  text-shadow:none !important;
}

html.premium-theme-royal-gold input,
html.premium-theme-royal-gold textarea,
html.premium-theme-royal-gold select,
html.premium-theme-royal-gold .search-input,
html.premium-theme-royal-gold .wallet-address,
html.premium-theme-children-soft input,
html.premium-theme-children-soft textarea,
html.premium-theme-children-soft select,
html.premium-theme-children-soft .search-input,
html.premium-theme-children-soft .wallet-address,
html.premium-theme-desert-sand input,
html.premium-theme-desert-sand textarea,
html.premium-theme-desert-sand select,
html.premium-theme-desert-sand .search-input,
html.premium-theme-desert-sand .wallet-address{
  color:var(--bw-readable-text-strong) !important;
  -webkit-text-fill-color:var(--bw-readable-text-strong) !important;
}

html.premium-theme-royal-gold input::placeholder,
html.premium-theme-royal-gold textarea::placeholder,
html.premium-theme-children-soft input::placeholder,
html.premium-theme-children-soft textarea::placeholder,
html.premium-theme-desert-sand input::placeholder,
html.premium-theme-desert-sand textarea::placeholder{
  color:var(--bw-readable-text-muted) !important;
  opacity:1 !important;
}
/* ===== END BARAKAWAY GLOBAL READABILITY FIX FOR LIGHT PREMIUM THEMES ===== */`;
  function injectReadabilityFix(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = CSS;
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", injectReadabilityFix, {once:true});
  }else{
    injectReadabilityFix();
  }
  window.addEventListener("barakaway:premium-theme-change", injectReadabilityFix);
})();
/* ===== END BARAKAWAY GLOBAL READABILITY FIX FOR LIGHT PREMIUM THEMES INJECTOR ===== */
