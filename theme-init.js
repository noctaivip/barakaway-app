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

  const PREMIUM_CSS = '\n/* ===== BARAKAWAY PRO PREMIUM THEMES RUNTIME ===== */\n:root{\n  --bw-pro-transition: background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease;\n}\n\nhtml.premium-theme-royal-gold{\n  --bg:#090908;\n  --surface:#171208;\n  --surface-2:#20170a;\n  --surface-3:#2b2110;\n  --border:rgba(215,192,122,.36);\n  --border-2:rgba(244,220,148,.44);\n  --text:#fff8df;\n  --text-soft:#ead8a5;\n  --text-muted:#c7ad62;\n  --green:#d7c07a;\n  --green-strong:#9d7424;\n  --green-soft:#fff0b4;\n  --bw-accent:#d7c07a;\n  --bw-accent-2:#f4dc94;\n}\n\nhtml.premium-theme-emerald-quran{\n  --bg:#061109;\n  --surface:#07180e;\n  --surface-2:#0c2114;\n  --surface-3:#12301d;\n  --border:rgba(102,198,128,.34);\n  --border-2:rgba(102,198,128,.46);\n  --text:#f0fff4;\n  --text-soft:#c4f0d1;\n  --text-muted:#8fd9a2;\n  --green:#66c680;\n  --green-strong:#2d7a46;\n  --green-soft:#c9ffd7;\n  --bw-accent:#66c680;\n  --bw-accent-2:#b8ffd0;\n}\n\nhtml.premium-theme-violet-noor{\n  --bg:#0d0a15;\n  --surface:#141020;\n  --surface-2:#1b1530;\n  --surface-3:#241a42;\n  --border:rgba(161,118,255,.34);\n  --border-2:rgba(197,168,255,.42);\n  --text:#fbf8ff;\n  --text-soft:#dfd2ff;\n  --text-muted:#bda6f0;\n  --green:#c5a8ff;\n  --green-strong:#6f4dcc;\n  --green-soft:#eadfff;\n  --bw-accent:#a176ff;\n  --bw-accent-2:#d6c4ff;\n}\n\nhtml.premium-theme-rose-soft{\n  --bg:#160a12;\n  --surface:#21101a;\n  --surface-2:#301525;\n  --surface-3:#401b31;\n  --border:rgba(255,158,199,.34);\n  --border-2:rgba(255,190,218,.44);\n  --text:#fff8fb;\n  --text-soft:#ffd8e8;\n  --text-muted:#f0a9c8;\n  --green:#ff9ec7;\n  --green-strong:#b64d78;\n  --green-soft:#ffe2ee;\n  --bw-accent:#ff9ec7;\n  --bw-accent-2:#ffd0e4;\n}\n\nhtml.premium-theme-carbon-elite{\n  --bg:#050607;\n  --surface:#0d1116;\n  --surface-2:#121820;\n  --surface-3:#1a222c;\n  --border:rgba(170,184,199,.28);\n  --border-2:rgba(202,213,224,.34);\n  --text:#f7fafc;\n  --text-soft:#cfd8e3;\n  --text-muted:#99a7b5;\n  --green:#d6dde6;\n  --green-strong:#59616c;\n  --green-soft:#eef2f6;\n  --bw-accent:#aab8c7;\n  --bw-accent-2:#e8edf3;\n}\n\nhtml.premium-theme-children-soft{\n  --bg:#0c1f32;\n  --surface:#102b44;\n  --surface-2:#173a5c;\n  --surface-3:#234d75;\n  --border:rgba(135,203,255,.34);\n  --border-2:rgba(255,227,241,.40);\n  --text:#f4fbff;\n  --text-soft:#d3ecff;\n  --text-muted:#abd6f7;\n  --green:#87cbff;\n  --green-strong:#3d8bc7;\n  --green-soft:#dff4ff;\n  --bw-accent:#87cbff;\n  --bw-accent-2:#ffe3f1;\n}\n\nhtml.premium-theme-night-mosque{\n  --bg:#050b13;\n  --surface:#091426;\n  --surface-2:#10213d;\n  --surface-3:#172f58;\n  --border:rgba(215,192,122,.28);\n  --border-2:rgba(118,154,215,.36);\n  --text:#f3f7ff;\n  --text-soft:#c8d8f4;\n  --text-muted:#91a9ce;\n  --green:#d7c07a;\n  --green-strong:#355d9a;\n  --green-soft:#f4e6b2;\n  --bw-accent:#d7c07a;\n  --bw-accent-2:#7ca7ff;\n}\n\nhtml.premium-theme-desert-sand{\n  --bg:#130c05;\n  --surface:#1e1408;\n  --surface-2:#2e200e;\n  --surface-3:#3e2b13;\n  --border:rgba(255,237,190,.30);\n  --border-2:rgba(219,174,97,.40);\n  --text:#fff9ea;\n  --text-soft:#ecd7ad;\n  --text-muted:#c9a978;\n  --green:#ffedbe;\n  --green-strong:#9a6d2d;\n  --green-soft:#fff3cf;\n  --bw-accent:#ffedbe;\n  --bw-accent-2:#dbaE61;\n}\n\nhtml[class*="premium-theme-"] body{\n  color:var(--text) !important;\n  background:\n    radial-gradient(circle at 14% 0%, color-mix(in srgb, var(--bw-accent) 20%, transparent), transparent 28%),\n    radial-gradient(circle at 88% 8%, color-mix(in srgb, var(--bw-accent-2) 16%, transparent), transparent 32%),\n    linear-gradient(180deg,var(--bg) 0%,color-mix(in srgb,var(--surface) 72%,var(--bg)) 48%,var(--bg) 100%) !important;\n}\n\nhtml[class*="premium-theme-"] .container,\nhtml[class*="premium-theme-"] .hero,\nhtml[class*="premium-theme-"] .brand-prayer-hero,\nhtml[class*="premium-theme-"] .today-hub,\nhtml[class*="premium-theme-"] .about-project-card,\nhtml[class*="premium-theme-"] .barakaway-pro-final,\nhtml[class*="premium-theme-"] .block,\nhtml[class*="premium-theme-"] .card,\nhtml[class*="premium-theme-"] .box,\nhtml[class*="premium-theme-"] .panel,\nhtml[class*="premium-theme-"] .quote,\nhtml[class*="premium-theme-"] .empty,\nhtml[class*="premium-theme-"] .article,\nhtml[class*="premium-theme-"] .category-panel,\nhtml[class*="premium-theme-"] .surah-card,\nhtml[class*="premium-theme-"] .prayer-card,\nhtml[class*="premium-theme-"] .toggle-row,\nhtml[class*="premium-theme-"] .meta-item,\nhtml[class*="premium-theme-"] .note-box,\nhtml[class*="premium-theme-"] .jumuah-box,\nhtml[class*="premium-theme-"] .month-day,\nhtml[class*="premium-theme-"] .month-head,\nhtml[class*="premium-theme-"] .wallet-support,\nhtml[class*="premium-theme-"] .home-widget,\nhtml[class*="premium-theme-"] .dua-card,\nhtml[class*="premium-theme-"] .ayah-card,\nhtml[class*="premium-theme-"] .master-audio-wrap,\nhtml[class*="premium-theme-"] .reader-side,\nhtml[class*="premium-theme-"] .reader-main,\nhtml[class*="premium-theme-"] .dua-side,\nhtml[class*="premium-theme-"] .dua-main,\nhtml[class*="premium-theme-"] .ai-side,\nhtml[class*="premium-theme-"] .ai-main,\nhtml[class*="premium-theme-"] .player-panel,\nhtml[class*="premium-theme-"] .preview-panel,\nhtml[class*="premium-theme-"] .theme-card,\nhtml[class*="premium-theme-"] .app-menu-btn,\nhtml[class*="premium-theme-"] .today-action,\nhtml[class*="premium-theme-"] .premium-resource-card{\n  background:\n    radial-gradient(circle at 94% 0%, color-mix(in srgb, var(--bw-accent) 12%, transparent), transparent 30%),\n    linear-gradient(135deg,color-mix(in srgb,var(--surface) 92%,#000) 0%,var(--surface-2) 54%,color-mix(in srgb,var(--surface-3) 84%,#000) 100%) !important;\n  border-color:var(--border) !important;\n  color:var(--text) !important;\n  box-shadow:0 18px 42px color-mix(in srgb,var(--bg) 70%,transparent), inset 0 1px 0 rgba(255,255,255,.055) !important;\n  transition:var(--bw-pro-transition) !important;\n}\n\nhtml[class*="premium-theme-"] h1,\nhtml[class*="premium-theme-"] h2,\nhtml[class*="premium-theme-"] h3,\nhtml[class*="premium-theme-"] h4,\nhtml[class*="premium-theme-"] .title,\nhtml[class*="premium-theme-"] .category-title,\nhtml[class*="premium-theme-"] .section h2,\nhtml[class*="premium-theme-"] .surah-name,\nhtml[class*="premium-theme-"] .dua-title,\nhtml[class*="premium-theme-"] .ayah-arabic{\n  color:var(--text) !important;\n}\n\nhtml[class*="premium-theme-"] p,\nhtml[class*="premium-theme-"] li,\nhtml[class*="premium-theme-"] .subtitle,\nhtml[class*="premium-theme-"] .small,\nhtml[class*="premium-theme-"] .note,\nhtml[class*="premium-theme-"] .muted,\nhtml[class*="premium-theme-"] .category-intro,\nhtml[class*="premium-theme-"] .ref,\nhtml[class*="premium-theme-"] .label,\nhtml[class*="premium-theme-"] .translit,\nhtml[class*="premium-theme-"] .meaning,\nhtml[class*="premium-theme-"] .when,\nhtml[class*="premium-theme-"] .surah-meta,\nhtml[class*="premium-theme-"] .article p,\nhtml[class*="premium-theme-"] .dua-translit,\nhtml[class*="premium-theme-"] .ayah-translit,\nhtml[class*="premium-theme-"] .ayah-meaning{\n  color:var(--text-soft) !important;\n}\n\nhtml[class*="premium-theme-"] strong,\nhtml[class*="premium-theme-"] a,\nhtml[class*="premium-theme-"] .surah-number,\nhtml[class*="premium-theme-"] .badge,\nhtml[class*="premium-theme-"] .chip,\nhtml[class*="premium-theme-"] .wallet-badge{\n  color:var(--bw-accent) !important;\n}\n\nhtml[class*="premium-theme-"] .btn.primary,\nhtml[class*="premium-theme-"] .copy-wallet-btn,\nhtml[class*="premium-theme-"] .install-btn,\nhtml[class*="premium-theme-"] .support-project-btn,\nhtml[class*="premium-theme-"] button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item){\n  background:linear-gradient(135deg,var(--green-strong) 0%, color-mix(in srgb,var(--bw-accent) 72%,var(--green-strong)) 100%) !important;\n  color:#fff !important;\n  border-color:var(--border-2) !important;\n  box-shadow:0 14px 30px color-mix(in srgb,var(--green-strong) 24%,transparent) !important;\n}\n\nhtml[class*="premium-theme-"] input,\nhtml[class*="premium-theme-"] textarea,\nhtml[class*="premium-theme-"] select,\nhtml[class*="premium-theme-"] .search-input,\nhtml[class*="premium-theme-"] .wallet-address{\n  background:color-mix(in srgb,var(--surface-3) 74%,#000) !important;\n  color:var(--text) !important;\n  border-color:var(--border-2) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav{\n  background:linear-gradient(180deg,color-mix(in srgb,var(--surface) 88%,transparent),color-mix(in srgb,var(--bg) 96%,transparent)) !important;\n  border-top-color:var(--border) !important;\n  box-shadow:0 -18px 44px color-mix(in srgb,var(--bg) 70%,transparent), inset 0 1px 0 rgba(255,255,255,.04) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav-inner{\n  background:linear-gradient(180deg,color-mix(in srgb,var(--surface-2) 92%,transparent),color-mix(in srgb,var(--surface) 94%,transparent)) !important;\n  border-color:var(--border) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav-item{\n  color:var(--text-soft) !important;\n}\n\nhtml[class*="premium-theme-"] .bottom-app-nav-item.active,\nhtml[class*="premium-theme-"] .bottom-app-nav-item.is-active{\n  background:linear-gradient(135deg,color-mix(in srgb,var(--bw-accent) 24%,transparent),color-mix(in srgb,var(--green-strong) 28%,transparent)) !important;\n  color:var(--text) !important;\n  border-color:var(--border-2) !important;\n}\n/* ===== END BARAKAWAY PRO PREMIUM THEMES RUNTIME ===== */\n';

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
  const STYLE_ID = "barakaway-absolute-fix-theme-samples-logo";
  const CSS = `
/* ===== BARAKAWAY ABSOLUTE FIX: THEME SAMPLES + LOGO ===== */

/* Logo immunity */
html[class*="premium-theme-"] .barakaway-logo,
html[class*="premium-theme-"] .brand-logo,
html[class*="premium-theme-"] .app-logo,
html[class*="premium-theme-"] .logo,
html[class*="premium-theme-"] [data-logo],
html[class*="premium-theme-"] [class*="barakaway-logo"],
html[class*="premium-theme-"] [class*="brand-logo"],
html[class*="premium-theme-"] [class*="app-logo"],
html[class*="premium-theme-"] [class*="logo"]{
  background:transparent !important;
  background-color:transparent !important;
  box-shadow:none !important;
  border-color:transparent !important;
  filter:none !important;
}

html[class*="premium-theme-"] .barakaway-logo *,
html[class*="premium-theme-"] .brand-logo *,
html[class*="premium-theme-"] .app-logo *,
html[class*="premium-theme-"] .logo *,
html[class*="premium-theme-"] [data-logo] *,
html[class*="premium-theme-"] [class*="barakaway-logo"] *,
html[class*="premium-theme-"] [class*="brand-logo"] *,
html[class*="premium-theme-"] [class*="app-logo"] *,
html[class*="premium-theme-"] [class*="logo"] *{
  background:transparent !important;
  background-color:transparent !important;
  box-shadow:none !important;
  border-color:transparent !important;
}

/* Theme sample cards immunity */
html[class*="premium-theme-"] .theme-grid .theme-card,
html[class*="premium-theme-"] .theme-card[data-theme],
html[class*="premium-theme-"] .bw-theme-sample-card{
  color:#fff !important;
  isolation:isolate !important;
  overflow:hidden !important;
}

html[class*="premium-theme-"] .theme-grid .theme-card h3,
html[class*="premium-theme-"] .theme-grid .theme-card p,
html[class*="premium-theme-"] .theme-grid .theme-card strong,
html[class*="premium-theme-"] .bw-theme-sample-card h3,
html[class*="premium-theme-"] .bw-theme-sample-card p,
html[class*="premium-theme-"] .bw-theme-sample-card strong{
  color:#fff !important;
  text-shadow:0 2px 10px rgba(0,0,0,.24) !important;
}

html[class*="premium-theme-"] .theme-grid .theme-card p,
html[class*="premium-theme-"] .bw-theme-sample-card p{
  color:rgba(255,255,255,.86) !important;
}

html[class*="premium-theme-"] .theme-grid .theme-card .theme-chip,
html[class*="premium-theme-"] .bw-theme-sample-card .theme-chip{
  background:rgba(0,0,0,.26) !important;
  color:#fff !important;
  border-color:rgba(255,255,255,.22) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-original{
  background:
    radial-gradient(circle at 92% 6%,rgba(255,255,255,.10),transparent 30%),
    linear-gradient(135deg,#111820 0%,#1c2430 58%,#0d1118 100%) !important;
  border-color:rgba(255,255,255,.14) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-royal-gold,
html[class*="premium-theme-"] .theme-card[data-theme="royal-gold"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(255,244,190,.50),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(215,192,122,.22),transparent 35%),
    linear-gradient(135deg,#171208 0%,#4b3615 48%,#d7c07a 100%) !important;
  border-color:rgba(244,220,148,.64) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-emerald-quran,
html[class*="premium-theme-"] .theme-card[data-theme="emerald-quran"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(102,198,128,.44),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(45,122,70,.28),transparent 35%),
    linear-gradient(135deg,#061109 0%,#12301d 52%,#4caf6a 100%) !important;
  border-color:rgba(102,198,128,.64) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-violet-noor,
html[class*="premium-theme-"] .theme-card[data-theme="violet-noor"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(161,118,255,.48),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(64,42,120,.30),transparent 35%),
    linear-gradient(135deg,#0d0a15 0%,#241a42 52%,#a176ff 100%) !important;
  border-color:rgba(161,118,255,.64) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-rose-soft,
html[class*="premium-theme-"] .theme-card[data-theme="rose-soft"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(255,158,199,.50),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(182,77,120,.30),transparent 35%),
    linear-gradient(135deg,#160a12 0%,#401b31 52%,#ff9ec7 100%) !important;
  border-color:rgba(255,158,199,.64) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-carbon-elite,
html[class*="premium-theme-"] .theme-card[data-theme="carbon-elite"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(202,213,224,.30),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(89,97,108,.28),transparent 35%),
    linear-gradient(135deg,#050607 0%,#1a222c 52%,#59616c 100%) !important;
  border-color:rgba(202,213,224,.50) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-children-soft,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(255,227,241,.50),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(135,203,255,.36),transparent 35%),
    linear-gradient(135deg,#0c1f32 0%,#234d75 52%,#87cbff 100%) !important;
  border-color:rgba(135,203,255,.64) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-night-mosque,
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(215,192,122,.30),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(118,154,215,.30),transparent 35%),
    linear-gradient(135deg,#050b13 0%,#10213d 52%,#355d9a 100%) !important;
  border-color:rgba(118,154,215,.54) !important;
}

html[class*="premium-theme-"] .bw-theme-sample-desert-sand,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"]{
  background:
    radial-gradient(circle at 88% 10%,rgba(255,237,190,.42),transparent 32%),
    radial-gradient(circle at 18% 100%,rgba(219,174,97,.30),transparent 35%),
    linear-gradient(135deg,#130c05 0%,#3e2b13 52%,#dbae61 100%) !important;
  border-color:rgba(255,237,190,.56) !important;
}

/* Light/Dark switch hidden in every PRO theme */
html[class*="premium-theme-"] .theme-toggle-label,
html[class*="premium-theme-"] .theme-toggle,
html[class*="premium-theme-"] #themeSwitch,
html[class*="premium-theme-"] label[for="themeSwitch"],
html[class*="premium-theme-"] .switch,
html[class*="premium-theme-"] .mode-toggle,
html[class*="premium-theme-"] .theme-switch{
  display:none !important;
}

/* ===== END BARAKAWAY ABSOLUTE FIX: THEME SAMPLES + LOGO ===== */
`;

  const sampleMap = [
    {key:"original", words:["Оригинальная тема"]},
    {key:"royal-gold", words:["Королевское золото"]},
    {key:"emerald-quran", words:["Изумрудный Коран", "Изумрудный Корант"]},
    {key:"violet-noor", words:["Фиолетовый нур"]},
    {key:"rose-soft", words:["Розовая гармония"]},
    {key:"carbon-elite", words:["Карбоновая элита", "Карбон"]},
    {key:"children-soft", words:["Детская тема", "Детская"]},
    {key:"night-mosque", words:["Ночная мечеть"]},
    {key:"desert-sand", words:["Песочная классика", "Песочная"]}
  ];

  const sampleStyles = {
    "original": {
      background:"radial-gradient(circle at 92% 6%,rgba(255,255,255,.10),transparent 30%),linear-gradient(135deg,#111820 0%,#1c2430 58%,#0d1118 100%)",
      border:"rgba(255,255,255,.14)"
    },
    "royal-gold": {
      background:"radial-gradient(circle at 88% 10%,rgba(255,244,190,.50),transparent 32%),radial-gradient(circle at 18% 100%,rgba(215,192,122,.22),transparent 35%),linear-gradient(135deg,#171208 0%,#4b3615 48%,#d7c07a 100%)",
      border:"rgba(244,220,148,.64)"
    },
    "emerald-quran": {
      background:"radial-gradient(circle at 88% 10%,rgba(102,198,128,.44),transparent 32%),radial-gradient(circle at 18% 100%,rgba(45,122,70,.28),transparent 35%),linear-gradient(135deg,#061109 0%,#12301d 52%,#4caf6a 100%)",
      border:"rgba(102,198,128,.64)"
    },
    "violet-noor": {
      background:"radial-gradient(circle at 88% 10%,rgba(161,118,255,.48),transparent 32%),radial-gradient(circle at 18% 100%,rgba(64,42,120,.30),transparent 35%),linear-gradient(135deg,#0d0a15 0%,#241a42 52%,#a176ff 100%)",
      border:"rgba(161,118,255,.64)"
    },
    "rose-soft": {
      background:"radial-gradient(circle at 88% 10%,rgba(255,158,199,.50),transparent 32%),radial-gradient(circle at 18% 100%,rgba(182,77,120,.30),transparent 35%),linear-gradient(135deg,#160a12 0%,#401b31 52%,#ff9ec7 100%)",
      border:"rgba(255,158,199,.64)"
    },
    "carbon-elite": {
      background:"radial-gradient(circle at 88% 10%,rgba(202,213,224,.30),transparent 32%),radial-gradient(circle at 18% 100%,rgba(89,97,108,.28),transparent 35%),linear-gradient(135deg,#050607 0%,#1a222c 52%,#59616c 100%)",
      border:"rgba(202,213,224,.50)"
    },
    "children-soft": {
      background:"radial-gradient(circle at 88% 10%,rgba(255,227,241,.50),transparent 32%),radial-gradient(circle at 18% 100%,rgba(135,203,255,.36),transparent 35%),linear-gradient(135deg,#0c1f32 0%,#234d75 52%,#87cbff 100%)",
      border:"rgba(135,203,255,.64)"
    },
    "night-mosque": {
      background:"radial-gradient(circle at 88% 10%,rgba(215,192,122,.30),transparent 32%),radial-gradient(circle at 18% 100%,rgba(118,154,215,.30),transparent 35%),linear-gradient(135deg,#050b13 0%,#10213d 52%,#355d9a 100%)",
      border:"rgba(118,154,215,.54)"
    },
    "desert-sand": {
      background:"radial-gradient(circle at 88% 10%,rgba(255,237,190,.42),transparent 32%),radial-gradient(circle at 18% 100%,rgba(219,174,97,.30),transparent 35%),linear-gradient(135deg,#130c05 0%,#3e2b13 52%,#dbae61 100%)",
      border:"rgba(255,237,190,.56)"
    }
  };

  function injectStyle(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = CSS;
  }

  function markThemeSampleCards(){
    document.querySelectorAll(".theme-card").forEach(function(card){
      const text = (card.textContent || "").trim();

      sampleMap.forEach(function(item){
        const matched = item.words.some(function(word){ return text.indexOf(word) !== -1; });
        if(!matched) return;

        card.classList.add("bw-theme-sample-card");
        card.classList.add("bw-theme-sample-" + item.key);

        const style = sampleStyles[item.key];
        if(style){
          card.style.setProperty("background", style.background, "important");
          card.style.setProperty("border-color", style.border, "important");
          card.style.setProperty("color", "#ffffff", "important");
        }

        card.querySelectorAll("h3,p,strong,.theme-title,.theme-description").forEach(function(node){
          node.style.setProperty("color", "#ffffff", "important");
        });

        card.querySelectorAll("p,.theme-description").forEach(function(node){
          node.style.setProperty("color", "rgba(255,255,255,.86)", "important");
        });

        card.querySelectorAll(".theme-chip").forEach(function(node){
          node.style.setProperty("background", "rgba(0,0,0,.26)", "important");
          node.style.setProperty("color", "#ffffff", "important");
          node.style.setProperty("border-color", "rgba(255,255,255,.22)", "important");
        });
      });
    });
  }

  function protectBarakaWayLogo(){
    document.querySelectorAll("*").forEach(function(node){
      if(!node || !node.textContent) return;

      const text = node.textContent.trim();
      const isLogoText = text === "BarakaWay" || text === "BARAKAWAY" || text === "BarakaWay App";
      const className = String(node.className || "");

      if(
        isLogoText ||
        className.indexOf("logo") !== -1 ||
        className.indexOf("brand-logo") !== -1 ||
        className.indexOf("barakaway-logo") !== -1
      ){
        node.style.setProperty("background", "transparent", "important");
        node.style.setProperty("background-color", "transparent", "important");
        node.style.setProperty("box-shadow", "none", "important");
        node.style.setProperty("border-color", "transparent", "important");
        node.style.setProperty("filter", "none", "important");
      }
    });
  }

  function run(){
    injectStyle();
    markThemeSampleCards();
    protectBarakaWayLogo();
  }

  run();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", run);
  }else{
    setTimeout(run, 0);
  }

  window.addEventListener("storage", run);
  window.addEventListener("barakaway:premium-theme-change", run);
  setTimeout(run, 250);
  setTimeout(run, 900);
})();

