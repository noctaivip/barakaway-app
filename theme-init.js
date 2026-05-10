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
  const STYLE_ID = "barakaway-premium-3d-stability-final";
  const CSS = `
/* ===== BARAKAWAY PREMIUM 3D THEME LAYER FINAL ===== */

/* Global 3D premium depth for selected PRO themes */
html[class*="premium-theme-"]{
  --bw-3d-radius:28px;
  --bw-3d-border:rgba(255,255,255,.16);
  --bw-3d-glow:rgba(255,255,255,.10);
  --bw-3d-shadow-dark:rgba(0,0,0,.42);
  --bw-3d-inner:rgba(255,255,255,.09);
}

/* Royal Gold 3D */
html.premium-theme-royal-gold{
  --bw-3d-border:rgba(244,220,148,.56);
  --bw-3d-glow:rgba(244,220,148,.24);
  --bw-3d-inner:rgba(255,241,178,.16);
}

/* Emerald Quran 3D */
html.premium-theme-emerald-quran{
  --bw-3d-border:rgba(116,223,143,.54);
  --bw-3d-glow:rgba(116,223,143,.22);
  --bw-3d-inner:rgba(196,255,213,.13);
}

/* Violet Noor 3D */
html.premium-theme-violet-noor{
  --bw-3d-border:rgba(197,168,255,.52);
  --bw-3d-glow:rgba(161,118,255,.24);
  --bw-3d-inner:rgba(229,214,255,.13);
}

/* Rose Soft 3D */
html.premium-theme-rose-soft{
  --bw-3d-border:rgba(255,190,218,.52);
  --bw-3d-glow:rgba(255,158,199,.24);
  --bw-3d-inner:rgba(255,220,236,.13);
}

/* Carbon Elite 3D */
html.premium-theme-carbon-elite{
  --bw-3d-border:rgba(220,230,240,.34);
  --bw-3d-glow:rgba(170,184,199,.18);
  --bw-3d-inner:rgba(255,255,255,.10);
}

/* Children Soft 3D + playful child mood */
html.premium-theme-children-soft{
  --bg:#07172a;
  --surface:#102a46;
  --surface-2:#173a5c;
  --surface-3:#1f4f7d;
  --border:rgba(135,203,255,.40);
  --border-2:rgba(255,227,241,.46);
  --text:#f7fcff;
  --text-soft:#d9f0ff;
  --text-muted:#badfff;
  --green:#9bd8ff;
  --green-strong:#438fd0;
  --green-soft:#e4f7ff;
  --bw-accent:#9bd8ff;
  --bw-accent-2:#ffd9ef;
  --bw-3d-border:rgba(155,216,255,.58);
  --bw-3d-glow:rgba(255,217,239,.20);
  --bw-3d-inner:rgba(255,255,255,.14);
}

html.premium-theme-children-soft body{
  background:
    radial-gradient(circle at 16% 0%,rgba(155,216,255,.22),transparent 28%),
    radial-gradient(circle at 86% 8%,rgba(255,217,239,.20),transparent 34%),
    linear-gradient(180deg,#07172a 0%,#102a46 50%,#07172a 100%) !important;
}

/* Premium 3D surfaces */
html[class*="premium-theme-"] .container,
html[class*="premium-theme-"] .hero,
html[class*="premium-theme-"] .brand-prayer-hero,
html[class*="premium-theme-"] .today-hub,
html[class*="premium-theme-"] .about-project-card,
html[class*="premium-theme-"] .barakaway-pro-final,
html[class*="premium-theme-"] .block,
html[class*="premium-theme-"] .card,
html[class*="premium-theme-"] .box,
html[class*="premium-theme-"] .panel,
html[class*="premium-theme-"] .quote,
html[class*="premium-theme-"] .empty,
html[class*="premium-theme-"] .article,
html[class*="premium-theme-"] .category-panel,
html[class*="premium-theme-"] .surah-card,
html[class*="premium-theme-"] .prayer-card,
html[class*="premium-theme-"] .toggle-row,
html[class*="premium-theme-"] .meta-item,
html[class*="premium-theme-"] .note-box,
html[class*="premium-theme-"] .jumuah-box,
html[class*="premium-theme-"] .month-day,
html[class*="premium-theme-"] .month-head,
html[class*="premium-theme-"] .wallet-support,
html[class*="premium-theme-"] .home-widget,
html[class*="premium-theme-"] .dua-card,
html[class*="premium-theme-"] .ayah-card,
html[class*="premium-theme-"] .master-audio-wrap,
html[class*="premium-theme-"] .reader-side,
html[class*="premium-theme-"] .reader-main,
html[class*="premium-theme-"] .dua-side,
html[class*="premium-theme-"] .dua-main,
html[class*="premium-theme-"] .ai-side,
html[class*="premium-theme-"] .ai-main,
html[class*="premium-theme-"] .player-panel,
html[class*="premium-theme-"] .preview-panel,
html[class*="premium-theme-"] .app-menu-btn,
html[class*="premium-theme-"] .today-action,
html[class*="premium-theme-"] .premium-resource-card{
  border:1.5px solid var(--bw-3d-border) !important;
  box-shadow:
    0 22px 54px var(--bw-3d-shadow-dark),
    0 0 0 1px color-mix(in srgb,var(--bw-3d-border) 48%,transparent),
    0 0 32px var(--bw-3d-glow),
    inset 0 1px 0 var(--bw-3d-inner),
    inset 0 -18px 34px rgba(0,0,0,.16) !important;
  transform:translateZ(0) !important;
}

/* Buttons also get premium depth */
html[class*="premium-theme-"] button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html[class*="premium-theme-"] .btn,
html[class*="premium-theme-"] .install-btn,
html[class*="premium-theme-"] .support-project-btn,
html[class*="premium-theme-"] .copy-wallet-btn{
  border:1.5px solid var(--bw-3d-border) !important;
  box-shadow:
    0 14px 30px rgba(0,0,0,.26),
    0 0 22px var(--bw-3d-glow),
    inset 0 1px 0 var(--bw-3d-inner),
    inset 0 -10px 22px rgba(0,0,0,.16) !important;
}

/* Bottom nav 3D */
html[class*="premium-theme-"] .bottom-app-nav-inner{
  border:1.5px solid var(--bw-3d-border) !important;
  box-shadow:
    0 18px 44px rgba(0,0,0,.38),
    0 0 28px var(--bw-3d-glow),
    inset 0 1px 0 var(--bw-3d-inner) !important;
}

/* Children theme: add soft teddy-like decorative mood without touching layout */
html.premium-theme-children-soft .today-hub::before,
html.premium-theme-children-soft .brand-prayer-hero::before,
html.premium-theme-children-soft .container::before{
  content:"🧸";
  position:absolute;
  opacity:.08;
  font-size:78px;
  pointer-events:none;
  transform:rotate(-12deg);
}

html.premium-theme-children-soft .today-hub,
html.premium-theme-children-soft .brand-prayer-hero,
html.premium-theme-children-soft .container{
  position:relative;
  overflow:hidden;
}

html.premium-theme-children-soft .today-hub::before{right:24px;top:18px;}
html.premium-theme-children-soft .brand-prayer-hero::before{left:24px;bottom:18px;}
html.premium-theme-children-soft .container::before{right:28px;bottom:120px;}

/* Extra stability: theme selector cards never inherit active PRO 3D repaint */
html[class*="premium-theme-"] .theme-grid .theme-card,
html[class*="premium-theme-"] .theme-card[data-theme],
html[class*="premium-theme-"] .bw-theme-sample-card{
  transform:none !important;
}

/* ===== END BARAKAWAY PREMIUM 3D THEME LAYER FINAL ===== */
`;

  function injectPremium3D(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = CSS;
  }

  function runExistingGuards(){
    if(typeof window.BarakaWayTheme === "object" && typeof window.BarakaWayTheme.refresh === "function"){
      window.BarakaWayTheme.refresh();
    }

    window.dispatchEvent(new Event("storage"));
  }

  injectPremium3D();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", injectPremium3D);
  }else{
    setTimeout(injectPremium3D, 0);
  }

  window.addEventListener("storage", injectPremium3D);
  window.addEventListener("barakaway:premium-theme-change", injectPremium3D);

  let count = 0;
  const timer = setInterval(function(){
    injectPremium3D();
    count++;
    if(count >= 12) clearInterval(timer);
  }, 350);
})();


(function(){
  const STYLE_ID = "barakaway-luxury-pro-themes-final-layer";
  const CSS = `
/* ===== BARAKAWAY LUXURY PRO THEMES FINAL LAYER ===== */

/*
  Purpose:
  - premium 3D depth for all PRO themes;
  - gold accent separation for Emerald Quran and other dark premium themes;
  - visible premium borders without merging everything into one color;
  - keep theme selector cards protected;
  - keep BarakaWay logo transparent/protected.
*/

html[class*="premium-theme-"]{
  --bw-lux-gold:#d7c07a;
  --bw-lux-gold-soft:#f4dc94;
  --bw-lux-gold-deep:#9d7424;
  --bw-lux-border-main:rgba(215,192,122,.44);
  --bw-lux-border-soft:rgba(255,255,255,.12);
  --bw-lux-shadow:rgba(0,0,0,.46);
  --bw-lux-glow:rgba(215,192,122,.20);
  --bw-lux-inner:rgba(255,255,255,.10);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(244,220,148,.72),rgba(116,223,143,.50),transparent);
}

/* Per-theme luxury accent mapping */
html.premium-theme-royal-gold{
  --bw-lux-border-main:rgba(244,220,148,.62);
  --bw-lux-glow:rgba(244,220,148,.25);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(255,241,178,.92),rgba(157,116,36,.72),transparent);
}

html.premium-theme-emerald-quran{
  --bw-lux-border-main:rgba(215,192,122,.56);
  --bw-lux-glow:rgba(116,223,143,.22);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(215,192,122,.82),rgba(116,223,143,.62),transparent);
}

html.premium-theme-violet-noor{
  --bw-lux-border-main:rgba(215,192,122,.50);
  --bw-lux-glow:rgba(161,118,255,.24);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(215,192,122,.72),rgba(197,168,255,.72),transparent);
}

html.premium-theme-rose-soft{
  --bw-lux-border-main:rgba(215,192,122,.48);
  --bw-lux-glow:rgba(255,158,199,.22);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(215,192,122,.70),rgba(255,190,218,.72),transparent);
}

html.premium-theme-carbon-elite{
  --bw-lux-border-main:rgba(215,192,122,.42);
  --bw-lux-glow:rgba(202,213,224,.18);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(215,192,122,.62),rgba(202,213,224,.52),transparent);
}

html.premium-theme-children-soft{
  --bw-lux-border-main:rgba(255,227,241,.50);
  --bw-lux-glow:rgba(135,203,255,.20);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(255,227,241,.70),rgba(135,203,255,.72),transparent);
}

html.premium-theme-night-mosque{
  --bw-lux-border-main:rgba(215,192,122,.48);
  --bw-lux-glow:rgba(118,154,215,.20);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(215,192,122,.72),rgba(118,154,215,.62),transparent);
}

html.premium-theme-desert-sand{
  --bw-lux-border-main:rgba(255,237,190,.54);
  --bw-lux-glow:rgba(219,174,97,.22);
  --bw-lux-line:linear-gradient(90deg,transparent,rgba(255,237,190,.82),rgba(219,174,97,.62),transparent);
}

/* Premium background depth, less flat */
html[class*="premium-theme-"] body{
  background:
    radial-gradient(circle at 12% -4%, color-mix(in srgb,var(--bw-accent) 22%,transparent), transparent 28%),
    radial-gradient(circle at 92% 4%, color-mix(in srgb,var(--bw-lux-gold) 14%,transparent), transparent 32%),
    radial-gradient(circle at 48% 45%, rgba(255,255,255,.035), transparent 34%),
    linear-gradient(180deg,var(--bg) 0%,color-mix(in srgb,var(--surface) 72%,#000) 44%,var(--bg) 100%) !important;
}

/* Main premium surfaces: 3D frame + depth */
html[class*="premium-theme-"] .container,
html[class*="premium-theme-"] .hero,
html[class*="premium-theme-"] .brand-prayer-hero,
html[class*="premium-theme-"] .today-hub,
html[class*="premium-theme-"] .about-project-card,
html[class*="premium-theme-"] .barakaway-pro-final,
html[class*="premium-theme-"] .block,
html[class*="premium-theme-"] .card,
html[class*="premium-theme-"] .box,
html[class*="premium-theme-"] .panel,
html[class*="premium-theme-"] .quote,
html[class*="premium-theme-"] .empty,
html[class*="premium-theme-"] .article,
html[class*="premium-theme-"] .category-panel,
html[class*="premium-theme-"] .surah-card,
html[class*="premium-theme-"] .prayer-card,
html[class*="premium-theme-"] .toggle-row,
html[class*="premium-theme-"] .meta-item,
html[class*="premium-theme-"] .note-box,
html[class*="premium-theme-"] .jumuah-box,
html[class*="premium-theme-"] .month-day,
html[class*="premium-theme-"] .month-head,
html[class*="premium-theme-"] .wallet-support,
html[class*="premium-theme-"] .home-widget,
html[class*="premium-theme-"] .dua-card,
html[class*="premium-theme-"] .ayah-card,
html[class*="premium-theme-"] .master-audio-wrap,
html[class*="premium-theme-"] .reader-side,
html[class*="premium-theme-"] .reader-main,
html[class*="premium-theme-"] .dua-side,
html[class*="premium-theme-"] .dua-main,
html[class*="premium-theme-"] .ai-side,
html[class*="premium-theme-"] .ai-main,
html[class*="premium-theme-"] .player-panel,
html[class*="premium-theme-"] .preview-panel,
html[class*="premium-theme-"] .app-menu-btn,
html[class*="premium-theme-"] .today-action,
html[class*="premium-theme-"] .premium-resource-card{
  position:relative !important;
  border:1.5px solid var(--bw-lux-border-main) !important;
  background:
    radial-gradient(circle at 88% 0%, color-mix(in srgb,var(--bw-accent) 15%,transparent), transparent 30%),
    radial-gradient(circle at 0% 100%, color-mix(in srgb,var(--bw-lux-gold) 8%,transparent), transparent 28%),
    linear-gradient(145deg,color-mix(in srgb,var(--surface) 90%,#000) 0%,color-mix(in srgb,var(--surface-2) 94%,#000) 52%,color-mix(in srgb,var(--surface-3) 88%,#000) 100%) !important;
  box-shadow:
    0 24px 54px var(--bw-lux-shadow),
    0 0 0 1px color-mix(in srgb,var(--bw-lux-border-main) 54%,transparent),
    0 0 34px var(--bw-lux-glow),
    inset 0 1px 0 var(--bw-lux-inner),
    inset 0 -22px 36px rgba(0,0,0,.18) !important;
  transform:translateZ(0) !important;
}

/* Thin premium shine line on major blocks */
html[class*="premium-theme-"] .container::after,
html[class*="premium-theme-"] .hero::after,
html[class*="premium-theme-"] .brand-prayer-hero::after,
html[class*="premium-theme-"] .today-hub::after,
html[class*="premium-theme-"] .panel::after,
html[class*="premium-theme-"] .card::after,
html[class*="premium-theme-"] .box::after,
html[class*="premium-theme-"] .surah-card::after,
html[class*="premium-theme-"] .ayah-card::after,
html[class*="premium-theme-"] .prayer-card::after,
html[class*="premium-theme-"] .month-day::after,
html[class*="premium-theme-"] .today-action::after{
  content:"";
  position:absolute;
  left:18px;
  right:18px;
  top:0;
  height:1px;
  background:var(--bw-lux-line);
  opacity:.72;
  pointer-events:none;
}

/* Gold separators for titles, so green does not merge into green */
html[class*="premium-theme-"] h1,
html[class*="premium-theme-"] h2,
html[class*="premium-theme-"] h3,
html[class*="premium-theme-"] .section-title,
html[class*="premium-theme-"] .home-section-title,
html[class*="premium-theme-"] .surah-name,
html[class*="premium-theme-"] .dua-title{
  text-shadow:0 2px 14px rgba(0,0,0,.32) !important;
}

html[class*="premium-theme-"] .section h2,
html[class*="premium-theme-"] .section-title,
html[class*="premium-theme-"] h2{
  border-left-color:var(--bw-lux-gold) !important;
}

/* Buttons: gold/green premium split */
html[class*="premium-theme-"] button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html[class*="premium-theme-"] .btn,
html[class*="premium-theme-"] .install-btn,
html[class*="premium-theme-"] .support-project-btn,
html[class*="premium-theme-"] .copy-wallet-btn,
html[class*="premium-theme-"] .quick-btn,
html[class*="premium-theme-"] .help-option-btn{
  border:1.5px solid var(--bw-lux-border-main) !important;
  background:
    linear-gradient(135deg,color-mix(in srgb,var(--green-strong) 82%,#000) 0%,color-mix(in srgb,var(--bw-accent) 76%,var(--bw-lux-gold)) 54%,color-mix(in srgb,var(--bw-lux-gold) 70%,var(--green-strong)) 135%) !important;
  color:#ffffff !important;
  box-shadow:
    0 15px 30px rgba(0,0,0,.30),
    0 0 24px var(--bw-lux-glow),
    inset 0 1px 0 rgba(255,255,255,.16),
    inset 0 -10px 22px rgba(0,0,0,.20) !important;
}

/* Inputs/selects: quieter background with gold/green border */
html[class*="premium-theme-"] input,
html[class*="premium-theme-"] textarea,
html[class*="premium-theme-"] select,
html[class*="premium-theme-"] .search-input,
html[class*="premium-theme-"] .wallet-address,
html[class*="premium-theme-"] .input,
html[class*="premium-theme-"] .select{
  border:1.4px solid color-mix(in srgb,var(--bw-lux-border-main) 72%,transparent) !important;
  background:linear-gradient(180deg,color-mix(in srgb,var(--surface) 84%,#000),color-mix(in srgb,var(--surface-2) 84%,#000)) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    inset 0 -10px 22px rgba(0,0,0,.14),
    0 0 18px color-mix(in srgb,var(--bw-lux-glow) 70%,transparent) !important;
}

/* Prayer time cards get gold premium borders */
html[class*="premium-theme-"] .prayer-card,
html[class*="premium-theme-"] .month-day,
html[class*="premium-theme-"] .prayer-time-card,
html[class*="premium-theme-"] .time-card{
  border-color:color-mix(in srgb,var(--bw-lux-gold) 62%,var(--bw-accent)) !important;
}

/* Active items stronger */
html[class*="premium-theme-"] .prayer-card.active,
html[class*="premium-theme-"] .month-day.today,
html[class*="premium-theme-"] .bottom-app-nav-item.active,
html[class*="premium-theme-"] .bottom-app-nav-item.is-active{
  border-color:var(--bw-lux-gold-soft) !important;
  box-shadow:
    0 16px 34px rgba(0,0,0,.32),
    0 0 26px color-mix(in srgb,var(--bw-lux-gold) 32%,transparent),
    inset 0 1px 0 rgba(255,255,255,.16) !important;
}

/* Bottom nav: premium glass 3D */
html[class*="premium-theme-"] .bottom-app-nav{
  background:linear-gradient(180deg,rgba(0,0,0,.10),rgba(0,0,0,.44)) !important;
  border-top:1px solid var(--bw-lux-border-main) !important;
  box-shadow:
    0 -18px 44px rgba(0,0,0,.42),
    0 0 28px var(--bw-lux-glow),
    inset 0 1px 0 rgba(255,255,255,.08) !important;
}

html[class*="premium-theme-"] .bottom-app-nav-inner{
  border:1.5px solid var(--bw-lux-border-main) !important;
  box-shadow:
    0 18px 44px rgba(0,0,0,.38),
    0 0 30px var(--bw-lux-glow),
    inset 0 1px 0 rgba(255,255,255,.12) !important;
}

/* Children's theme: soft luxury without breaking layout */
html.premium-theme-children-soft .today-hub::before,
html.premium-theme-children-soft .brand-prayer-hero::before,
html.premium-theme-children-soft .container::before{
  content:"🧸";
  position:absolute;
  opacity:.075;
  font-size:76px;
  pointer-events:none;
  transform:rotate(-12deg);
  z-index:0;
}

html.premium-theme-children-soft .today-hub,
html.premium-theme-children-soft .brand-prayer-hero,
html.premium-theme-children-soft .container{
  position:relative;
  overflow:hidden;
}

html.premium-theme-children-soft .today-hub::before{right:22px;top:16px;}
html.premium-theme-children-soft .brand-prayer-hero::before{left:22px;bottom:16px;}
html.premium-theme-children-soft .container::before{right:28px;bottom:118px;}

/* Critical: do not apply premium repaint to theme sample cards */
html[class*="premium-theme-"] .theme-grid .theme-card,
html[class*="premium-theme-"] .theme-card[data-theme],
html[class*="premium-theme-"] .bw-theme-sample-card{
  transform:none !important;
}

/* Critical: do not repaint logo */
html[class*="premium-theme-"] .bw-logo-transparent-lock,
html[class*="premium-theme-"] .bw-logo-transparent-lock *,
html[class*="premium-theme-"] [data-barakaway-logo-lock],
html[class*="premium-theme-"] [data-barakaway-logo-lock] *{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  border-color:transparent !important;
  box-shadow:none !important;
  filter:none !important;
  backdrop-filter:none !important;
  -webkit-backdrop-filter:none !important;
}

/* Reduced motion safety */
@media (prefers-reduced-motion:no-preference){
  html[class*="premium-theme-"] .container,
  html[class*="premium-theme-"] .hero,
  html[class*="premium-theme-"] .brand-prayer-hero,
  html[class*="premium-theme-"] .today-hub,
  html[class*="premium-theme-"] .card,
  html[class*="premium-theme-"] .panel,
  html[class*="premium-theme-"] .box{
    transition:background .28s ease,border-color .28s ease,box-shadow .28s ease,transform .28s ease !important;
  }

  html[class*="premium-theme-"] .card:hover,
  html[class*="premium-theme-"] .panel:hover,
  html[class*="premium-theme-"] .box:hover,
  html[class*="premium-theme-"] .surah-card:hover,
  html[class*="premium-theme-"] .ayah-card:hover,
  html[class*="premium-theme-"] .today-action:hover{
    transform:translateY(-1px) !important;
  }
}

/* ===== END BARAKAWAY LUXURY PRO THEMES FINAL LAYER ===== */
`;

  function injectLuxuryLayer(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = CSS;
  }

  function stabilizeExistingProtection(){
    /*
      This intentionally does not rewrite app logic.
      It only re-triggers existing card/logo protection layers after theme changes,
      because some pages repaint late after storage/theme update.
    */
    window.dispatchEvent(new Event("storage"));
  }

  function run(){
    injectLuxuryLayer();
    setTimeout(stabilizeExistingProtection, 40);
    setTimeout(stabilizeExistingProtection, 260);
  }

  run();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", run);
  }else{
    setTimeout(run, 0);
  }

  window.addEventListener("storage", injectLuxuryLayer);
  window.addEventListener("barakaway:premium-theme-change", run);

  let count = 0;
  const timer = setInterval(function(){
    injectLuxuryLayer();
    count++;
    if(count >= 8) clearInterval(timer);
  }, 500);
})();


(function(){
  const STYLE_ID = "barakaway-carbon-fiber-final-fix";
  const CSS = `
/* ===== BARAKAWAY CARBON FIBER FINAL FIX ===== */
/* Only carbon theme/card is changed. Other themes, logo protection and existing logic are untouched. */

:root{
  --bw-carbon-bg:#050608;
  --bw-carbon-deep:#0a0d11;
  --bw-carbon-mid:#151b22;
  --bw-carbon-silver:rgba(230,238,246,.24);
  --bw-carbon-silver-soft:rgba(255,255,255,.10);
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
  --bw-lux-border-main:rgba(230,238,246,.26);
  --bw-lux-glow:rgba(210,224,238,.16);
}

/* Full app carbon texture */
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
  background-color:#07090c !important;
  background-image:
    linear-gradient(45deg, rgba(255,255,255,.105) 0 8%, transparent 8% 42%, rgba(255,255,255,.095) 42% 58%, transparent 58% 100%),
    linear-gradient(-45deg, rgba(255,255,255,.060) 0 8%, transparent 8% 42%, rgba(255,255,255,.052) 42% 58%, transparent 58% 100%),
    radial-gradient(circle at 82% 12%, rgba(255,255,255,.20), transparent 24%),
    linear-gradient(135deg,#050608 0%,#111820 50%,#2a333d 100%) !important;
  background-size:
    20px 20px,
    20px 20px,
    100% 100%,
    100% 100% !important;
  background-position:
    0 0,
    10px 10px,
    center,
    center !important;
  border-color:rgba(230,238,246,.18) !important;
  box-shadow:
    0 24px 58px rgba(0,0,0,.52),
    0 0 0 1px rgba(255,255,255,.055),
    inset 0 1px 0 rgba(255,255,255,.14),
    inset 0 -24px 38px rgba(0,0,0,.38) !important;
}

/* Carbon selector card on themes-pro page */
.theme-carbon,
.theme-grid .theme-card.theme-carbon,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-carbon,
html[class*="premium-theme-"] .bw-theme-sample-carbon-elite,
html[class*="premium-theme-"] .theme-card[data-theme="carbon-elite"]{
  background-color:#07090c !important;
  background-image:
    linear-gradient(45deg, rgba(255,255,255,.14) 0 8%, transparent 8% 42%, rgba(255,255,255,.12) 42% 58%, transparent 58% 100%),
    linear-gradient(-45deg, rgba(255,255,255,.078) 0 8%, transparent 8% 42%, rgba(255,255,255,.070) 42% 58%, transparent 58% 100%),
    radial-gradient(circle at 84% 10%, rgba(255,255,255,.24), transparent 24%),
    linear-gradient(135deg,#050608 0%,#151c24 52%,#4d5965 100%) !important;
  background-size:
    20px 20px,
    20px 20px,
    100% 100%,
    100% 100% !important;
  background-position:
    0 0,
    10px 10px,
    center,
    center !important;
  border-color:rgba(230,238,246,.24) !important;
  box-shadow:
    0 24px 56px rgba(0,0,0,.46),
    0 0 0 1px rgba(255,255,255,.06),
    inset 0 1px 0 rgba(255,255,255,.16),
    inset 0 -22px 34px rgba(0,0,0,.38) !important;
}

/* Metallic light sweep only for carbon cards/surfaces */
.theme-carbon::after,
html[class*="premium-theme-"] .bw-theme-sample-carbon-elite::after,
html[class*="premium-theme-"] .theme-card[data-theme="carbon-elite"]::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    linear-gradient(118deg,
      transparent 0%,
      rgba(255,255,255,.14) 20%,
      transparent 33%,
      transparent 66%,
      rgba(255,255,255,.060) 78%,
      transparent 100%);
  pointer-events:none;
  mix-blend-mode:screen;
}

/* Carbon buttons */
html.premium-theme-carbon-elite button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-carbon-elite .btn,
html.premium-theme-carbon-elite .install-btn,
html.premium-theme-carbon-elite .support-project-btn,
html.premium-theme-carbon-elite .copy-wallet-btn,
html.premium-theme-carbon-elite .quick-btn{
  background:
    linear-gradient(180deg,#68727d 0%,#343c45 48%,#1a2027 100%) !important;
  border-color:rgba(255,255,255,.22) !important;
  color:#ffffff !important;
  box-shadow:
    0 16px 34px rgba(0,0,0,.40),
    inset 0 1px 0 rgba(255,255,255,.20),
    inset 0 -12px 24px rgba(0,0,0,.36) !important;
}

/* Keep protected logo untouched */
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

/* ===== END BARAKAWAY CARBON FIBER FINAL FIX ===== */
`;

  const carbonBg =
    "linear-gradient(45deg, rgba(255,255,255,.14) 0 8%, transparent 8% 42%, rgba(255,255,255,.12) 42% 58%, transparent 58% 100%)," +
    "linear-gradient(-45deg, rgba(255,255,255,.078) 0 8%, transparent 8% 42%, rgba(255,255,255,.070) 42% 58%, transparent 58% 100%)," +
    "radial-gradient(circle at 84% 10%, rgba(255,255,255,.24), transparent 24%)," +
    "linear-gradient(135deg,#050608 0%,#151c24 52%,#4d5965 100%)";

  function injectCarbonCss(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = CSS;
  }

  function lockCarbonCards(){
    document.querySelectorAll(".theme-card, .theme-carbon, [data-theme='carbon-elite'], .bw-theme-sample-carbon-elite").forEach(function(card){
      const text = (card.textContent || "").replace(/\s+/g, " ").trim();
      const isCarbon =
        card.classList.contains("theme-carbon") ||
        card.classList.contains("bw-theme-sample-carbon-elite") ||
        card.getAttribute("data-theme") === "carbon-elite" ||
        text.indexOf("Карбоновая элита") !== -1 ||
        text.indexOf("Карбон") !== -1;

      if(!isCarbon) return;

      card.classList.add("theme-carbon");
      card.classList.add("bw-theme-sample-card");
      card.classList.add("bw-theme-sample-carbon-elite");

      card.style.setProperty("background-color", "#07090c", "important");
      card.style.setProperty("background-image", carbonBg, "important");
      card.style.setProperty("background-size", "20px 20px,20px 20px,100% 100%,100% 100%", "important");
      card.style.setProperty("background-position", "0 0,10px 10px,center,center", "important");
      card.style.setProperty("border-color", "rgba(230,238,246,.24)", "important");
      card.style.setProperty("box-shadow", "0 24px 56px rgba(0,0,0,.46),0 0 0 1px rgba(255,255,255,.06),inset 0 1px 0 rgba(255,255,255,.16),inset 0 -22px 34px rgba(0,0,0,.38)", "important");
    });
  }

  function run(){
    injectCarbonCss();
    lockCarbonCards();
  }

  run();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", run);
  }else{
    setTimeout(run, 0);
  }

  window.addEventListener("storage", run);
  window.addEventListener("barakaway:premium-theme-change", run);

  let count = 0;
  const timer = setInterval(function(){
    run();
    count++;
    if(count >= 12) clearInterval(timer);
  }, 350);
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


(function(){
  const STYLE_ID = "barakaway-same-logic-as-carbon-final";
  const CSS = "body .theme-grid .theme-card.theme-child h3,body .theme-grid .theme-card.theme-child p,body .theme-grid .theme-card.bw-theme-sample-children-soft h3,body .theme-grid .theme-card.bw-theme-sample-children-soft p{color:#2b2230!important;text-shadow:0 1px 8px rgba(255,255,255,.94)!important;}";
  function injectFallback(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement("style");
    style.id=STYLE_ID;
    style.textContent=CSS;
    (document.head||document.documentElement).appendChild(style);
  }
  function markVisualCards(){
    document.querySelectorAll(".theme-grid .theme-card,.theme-card").forEach(function(card){
      const text=(card.textContent||"").replace(/\s+/g," ").trim();
      if(text.indexOf("Детская")!==-1) card.classList.add("theme-child","bw-theme-sample-card","bw-theme-sample-children-soft");
      if(text.indexOf("Ночная мечеть")!==-1) card.classList.add("theme-night","bw-theme-sample-card","bw-theme-sample-night-mosque");
      if(text.indexOf("Песочная")!==-1) card.classList.add("theme-sand","bw-theme-sample-card","bw-theme-sample-desert-sand");
    });
  }
  function run(){injectFallback();markVisualCards();}
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",run);}else{run();}
  window.addEventListener("storage",run);
  window.addEventListener("barakaway:premium-theme-change",run);
  setTimeout(run,250);
  setTimeout(run,900);
})();


(function(){
  const STYLE_ID = "barakaway-premium-theme-background-materials";
  if(document.getElementById(STYLE_ID)) return;

  const CSS = `
/* ===== BARAKAWAY PREMIUM THEME BACKGROUND MATERIALS ===== */
html[class*="premium-theme-"] body::before{
  content:"";
  position:fixed;
  inset:0;
  z-index:-2;
  pointer-events:none;
  background:transparent;
}

html[class*="premium-theme-"] body::after{
  content:"";
  position:fixed;
  inset:0;
  z-index:-1;
  pointer-events:none;
  background:
    linear-gradient(115deg,transparent 0%,rgba(255,255,255,.035) 46%,transparent 58%);
  opacity:.72;
  mix-blend-mode:screen;
}

html.premium-theme-royal-gold body{
  background-color:#090908 !important;
  background-image:
    linear-gradient(27deg,rgba(244,220,148,.12) 5%,transparent 5%,transparent 45%,rgba(244,220,148,.10) 45%,rgba(244,220,148,.10) 55%,transparent 55%,transparent),
    linear-gradient(207deg,rgba(157,116,36,.14) 5%,transparent 5%,transparent 45%,rgba(157,116,36,.10) 45%,rgba(157,116,36,.10) 55%,transparent 55%,transparent),
    radial-gradient(circle at 16% 0%,rgba(244,220,148,.22),transparent 30%),
    radial-gradient(circle at 88% 8%,rgba(215,192,122,.18),transparent 34%),
    linear-gradient(180deg,#090908 0%,#171208 52%,#090908 100%) !important;
  background-size:22px 22px,22px 22px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,11px 11px,center,center,center !important;
}

html.premium-theme-emerald-quran body{
  background-color:#061109 !important;
  background-image:
    linear-gradient(45deg,rgba(184,255,208,.09) 12.5%,transparent 12.5%,transparent 37.5%,rgba(184,255,208,.08) 37.5%,rgba(184,255,208,.08) 62.5%,transparent 62.5%,transparent 87.5%,rgba(184,255,208,.09) 87.5%),
    linear-gradient(135deg,rgba(102,198,128,.08) 12.5%,transparent 12.5%,transparent 37.5%,rgba(102,198,128,.08) 37.5%,rgba(102,198,128,.08) 62.5%,transparent 62.5%,transparent 87.5%,rgba(102,198,128,.08) 87.5%),
    radial-gradient(circle at 14% 0%,rgba(102,198,128,.22),transparent 30%),
    radial-gradient(circle at 86% 8%,rgba(184,255,208,.15),transparent 34%),
    linear-gradient(180deg,#061109 0%,#07180e 52%,#061109 100%) !important;
  background-size:28px 28px,28px 28px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,14px 14px,center,center,center !important;
}

html.premium-theme-violet-noor body{
  background-color:#0d0a15 !important;
  background-image:
    linear-gradient(30deg,rgba(197,168,255,.11) 6%,transparent 6%,transparent 44%,rgba(197,168,255,.09) 44%,rgba(197,168,255,.09) 56%,transparent 56%,transparent),
    linear-gradient(210deg,rgba(111,77,204,.13) 6%,transparent 6%,transparent 44%,rgba(111,77,204,.10) 44%,rgba(111,77,204,.10) 56%,transparent 56%,transparent),
    radial-gradient(circle at 16% 0%,rgba(161,118,255,.22),transparent 30%),
    radial-gradient(circle at 88% 8%,rgba(214,196,255,.16),transparent 34%),
    linear-gradient(180deg,#0d0a15 0%,#141020 52%,#0d0a15 100%) !important;
  background-size:24px 24px,24px 24px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,12px 12px,center,center,center !important;
}

html.premium-theme-rose-soft body{
  background-color:#160a12 !important;
  background-image:
    radial-gradient(ellipse at 20% 20%,rgba(255,208,228,.16) 0 10%,transparent 11%),
    radial-gradient(ellipse at 72% 64%,rgba(255,158,199,.14) 0 9%,transparent 10%),
    linear-gradient(35deg,rgba(255,190,218,.10) 7%,transparent 7%,transparent 43%,rgba(255,190,218,.08) 43%,rgba(255,190,218,.08) 57%,transparent 57%,transparent),
    radial-gradient(circle at 14% 0%,rgba(255,158,199,.24),transparent 30%),
    radial-gradient(circle at 88% 8%,rgba(255,208,228,.18),transparent 34%),
    linear-gradient(180deg,#160a12 0%,#21101a 52%,#160a12 100%) !important;
  background-size:96px 72px,112px 82px,24px 24px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,36px 28px,0 0,center,center,center !important;
}

html.premium-theme-carbon-elite body{
  background-color:#050607 !important;
  background-image:
    linear-gradient(27deg,rgba(255,255,255,.10) 5%,transparent 5%,transparent 45%,rgba(255,255,255,.10) 45%,rgba(255,255,255,.10) 55%,transparent 55%,transparent),
    linear-gradient(207deg,rgba(255,255,255,.06) 5%,transparent 5%,transparent 45%,rgba(255,255,255,.06) 45%,rgba(255,255,255,.06) 55%,transparent 55%,transparent),
    radial-gradient(circle at 14% 0%,rgba(170,184,199,.18),transparent 30%),
    radial-gradient(circle at 88% 8%,rgba(232,237,243,.12),transparent 34%),
    linear-gradient(180deg,#050607 0%,#0d1116 52%,#050607 100%) !important;
  background-size:18px 18px,18px 18px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,9px 9px,center,center,center !important;
}

html.premium-theme-children-soft body{
  background-color:#07172a !important;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='.17' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='32' cy='35' r='14'/%3E%3Ccircle cx='20' cy='25' r='6'/%3E%3Ccircle cx='44' cy='25' r='6'/%3E%3Ccircle cx='28' cy='35' r='1.8' fill='%23ffffff' fill-opacity='.20'/%3E%3Ccircle cx='36' cy='35' r='1.8' fill='%23ffffff' fill-opacity='.20'/%3E%3Cpath d='M28 43q4 4 8 0'/%3E%3Cpath d='M63 26l2.6 5.4 6 .8-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.8z'/%3E%3Cpath d='M18 68c7-7 18-7 25 0 7-7 18-7 25 0'/%3E%3C/g%3E%3C/svg%3E"),
    radial-gradient(circle at 16% 0%,rgba(155,216,255,.25),transparent 30%),
    radial-gradient(circle at 88% 8%,rgba(255,217,239,.22),transparent 36%),
    linear-gradient(180deg,#07172a 0%,#102a46 52%,#07172a 100%) !important;
  background-size:96px 96px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,center,center,center !important;
}

html.premium-theme-night-mosque body{
  background-color:#050b13 !important;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%23ffffff' fill-opacity='.36'%3E%3Ccircle cx='16' cy='18' r='1.2'/%3E%3Ccircle cx='48' cy='31' r='.9'/%3E%3Ccircle cx='82' cy='16' r='1.1'/%3E%3Ccircle cx='104' cy='52' r='.8'/%3E%3Ccircle cx='30' cy='78' r='1'/%3E%3Ccircle cx='74' cy='92' r='.75'/%3E%3Ccircle cx='111' cy='105' r='1.1'/%3E%3Cpath d='M68 34a13 13 0 1 1-13-13 10 10 0 1 0 13 13z' fill='%23d7c07a' fill-opacity='.23'/%3E%3C/g%3E%3Cg fill='none' stroke='%23d7c07a' stroke-opacity='.12' stroke-width='1.4'%3E%3Cpath d='M18 112h84'/%3E%3Cpath d='M36 112V85q8-18 16 0v27'/%3E%3Cpath d='M68 112V76q10-22 20 0v36'/%3E%3C/g%3E%3C/svg%3E"),
    radial-gradient(circle at 82% 12%,rgba(215,192,122,.22),transparent 18%),
    radial-gradient(circle at 18% 0%,rgba(124,167,255,.18),transparent 34%),
    linear-gradient(180deg,#050b13 0%,#091426 48%,#050b13 100%) !important;
  background-size:120px 120px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,center,center,center !important;
}

html.premium-theme-desert-sand body{
  background-color:#130c05 !important;
  background-image:
    radial-gradient(circle at 1px 1px,rgba(255,237,190,.18) 1px,transparent 1.5px),
    radial-gradient(circle at 11px 9px,rgba(219,174,97,.13) 1px,transparent 1.5px),
    linear-gradient(25deg,rgba(255,237,190,.10) 5%,transparent 5%,transparent 45%,rgba(255,237,190,.08) 45%,rgba(255,237,190,.08) 55%,transparent 55%,transparent),
    radial-gradient(circle at 88% 10%,rgba(255,237,190,.24),transparent 32%),
    radial-gradient(circle at 16% 0%,rgba(219,174,97,.18),transparent 32%),
    linear-gradient(180deg,#130c05 0%,#1e1408 52%,#130c05 100%) !important;
  background-size:16px 16px,18px 18px,30px 30px,100% 100%,100% 100%,100% 100% !important;
  background-position:0 0,6px 8px,0 0,center,center,center !important;
}

html[class*="premium-theme-"] .container,
html[class*="premium-theme-"] .hero,
html[class*="premium-theme-"] .brand-prayer-hero,
html[class*="premium-theme-"] .today-hub,
html[class*="premium-theme-"] .about-project-card,
html[class*="premium-theme-"] .barakaway-pro-final,
html[class*="premium-theme-"] .block,
html[class*="premium-theme-"] .card,
html[class*="premium-theme-"] .box,
html[class*="premium-theme-"] .panel,
html[class*="premium-theme-"] .quote,
html[class*="premium-theme-"] .empty,
html[class*="premium-theme-"] .article,
html[class*="premium-theme-"] .category-panel,
html[class*="premium-theme-"] .surah-card,
html[class*="premium-theme-"] .prayer-card,
html[class*="premium-theme-"] .toggle-row,
html[class*="premium-theme-"] .meta-item,
html[class*="premium-theme-"] .note-box,
html[class*="premium-theme-"] .jumuah-box,
html[class*="premium-theme-"] .month-day,
html[class*="premium-theme-"] .month-head,
html[class*="premium-theme-"] .wallet-support,
html[class*="premium-theme-"] .home-widget,
html[class*="premium-theme-"] .dua-card,
html[class*="premium-theme-"] .ayah-card,
html[class*="premium-theme-"] .master-audio-wrap,
html[class*="premium-theme-"] .reader-side,
html[class*="premium-theme-"] .reader-main,
html[class*="premium-theme-"] .dua-side,
html[class*="premium-theme-"] .dua-main,
html[class*="premium-theme-"] .ai-side,
html[class*="premium-theme-"] .ai-main,
html[class*="premium-theme-"] .player-panel,
html[class*="premium-theme-"] .preview-panel,
html[class*="premium-theme-"] .app-menu-btn,
html[class*="premium-theme-"] .today-action,
html[class*="premium-theme-"] .premium-resource-card{
  background-image:
    linear-gradient(115deg,transparent 0%,rgba(255,255,255,.055) 44%,transparent 60%),
    radial-gradient(circle at 94% 0%,color-mix(in srgb,var(--bw-accent) 14%,transparent),transparent 30%),
    linear-gradient(135deg,color-mix(in srgb,var(--surface) 92%,#000) 0%,var(--surface-2) 54%,color-mix(in srgb,var(--surface-3) 84%,#000) 100%) !important;
  box-shadow:
    0 22px 54px color-mix(in srgb,var(--bg) 74%,transparent),
    0 0 0 1px color-mix(in srgb,var(--border) 58%,transparent),
    inset 0 1px 0 rgba(255,255,255,.09),
    inset 0 -18px 34px rgba(0,0,0,.18) !important;
}
/* ===== END BARAKAWAY PREMIUM THEME BACKGROUND MATERIALS ===== */
`;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);
})();



(function(){
  const STYLE_ID = 'barakaway-premium-final-material-upgrade-20260510';
  if(document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `

/* ===== BARAKAWAY PREMIUM THEMES FINAL MATERIAL UPGRADE 2026-05-10 ===== */
/* Carbon Elite remains the reference architecture. These three themes use the same full-surface material logic. */

html.premium-theme-children-soft{
  --bg:#071527;
  --surface:#0a1b31;
  --surface-2:#0e2744;
  --surface-3:#14365c;
  --border:rgba(138,196,255,.34);
  --border-2:rgba(255,238,214,.42);
  --text:#f7fbff;
  --text-soft:#dceeff;
  --text-muted:#a9cce9;
  --green:#8fcaff;
  --green-strong:#315f9a;
  --green-soft:#fff1d8;
  --bw-accent:#8fcaff;
  --bw-accent-2:#fff1d8;
}

html.premium-theme-night-mosque{
  --bg:#020712;
  --surface:#051127;
  --surface-2:#081a3a;
  --surface-3:#0d2856;
  --border:rgba(153,188,255,.30);
  --border-2:rgba(215,232,255,.38);
  --text:#f8fbff;
  --text-soft:#dce9ff;
  --text-muted:#9fbbe8;
  --green:#d7e8ff;
  --green-strong:#2d5790;
  --green-soft:#ffffff;
  --bw-accent:#d7e8ff;
  --bw-accent-2:#79aaff;
}

html.premium-theme-desert-sand{
  --bg:#efe0bc;
  --surface:#f6e7c6;
  --surface-2:#e8c98f;
  --surface-3:#c89955;
  --border:rgba(119,82,35,.28);
  --border-2:rgba(104,71,28,.34);
  --text:#2d2112;
  --text-soft:#443219;
  --text-muted:#6f5128;
  --green:#7a5221;
  --green-strong:#8e642d;
  --green-soft:#fff4d4;
  --bw-accent:#8e642d;
  --bw-accent-2:#c89955;
}

body .theme-grid .theme-card.theme-child,
body .theme-grid .theme-card.bw-theme-sample-children-soft,
body .theme-grid .theme-card[data-theme="children-soft"]{
  background-color:#071527 !important;
  background-image:
    radial-gradient(circle at 85% 8%,rgba(143,202,255,.28),transparent 26%),
    radial-gradient(circle at 16% 88%,rgba(255,241,216,.16),transparent 30%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27156%27%20height%3D%27156%27%20viewBox%3D%270%200%20156%20156%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27rgba%28255%2C238%2C214%2C.28%29%27%20stroke-width%3D%274%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Ccircle%20cx%3D%2754%27%20cy%3D%2762%27%20r%3D%2722%27%2F%3E%3Ccircle%20cx%3D%2734%27%20cy%3D%2742%27%20r%3D%2710%27%2F%3E%3Ccircle%20cx%3D%2774%27%20cy%3D%2742%27%20r%3D%2710%27%2F%3E%3Ccircle%20cx%3D%27102%27%20cy%3D%2784%27%20r%3D%2720%27%2F%3E%3Ccircle%20cx%3D%2784%27%20cy%3D%2763%27%20r%3D%279%27%2F%3E%3Ccircle%20cx%3D%27120%27%20cy%3D%2763%27%20r%3D%279%27%2F%3E%3Cpath%20d%3D%27M45%2068q9%209%2018%200M93%2090q9%209%2018%200%27%2F%3E%3Cpath%20d%3D%27M29%20118c16-15%2038-15%2054%200%2016-15%2038-15%2054%200%27%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%27rgba%28255%2C255%2C255%2C.34%29%27%3E%3Ccircle%20cx%3D%2747%27%20cy%3D%2758%27%20r%3D%272.4%27%2F%3E%3Ccircle%20cx%3D%2761%27%20cy%3D%2758%27%20r%3D%272.4%27%2F%3E%3Ccircle%20cx%3D%2795%27%20cy%3D%2780%27%20r%3D%272.2%27%2F%3E%3Ccircle%20cx%3D%27109%27%20cy%3D%2780%27%20r%3D%272.2%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
    linear-gradient(135deg,#061120 0%,#0d2746 52%,#1a4774 100%) !important;
  background-size:100% 100%,100% 100%,156px 156px,100% 100% !important;
  background-position:center,center,14px 12px,center !important;
  background-repeat:no-repeat,no-repeat,repeat,no-repeat !important;
  border-color:rgba(143,202,255,.38) !important;
  color:#f7fbff !important;
  box-shadow:0 24px 58px rgba(0,12,34,.48), inset 0 1px 0 rgba(255,255,255,.16), inset 0 -26px 40px rgba(0,0,0,.22) !important;
}

body .theme-grid .theme-card.theme-night,
body .theme-grid .theme-card.bw-theme-sample-night-mosque,
body .theme-grid .theme-card[data-theme="night-mosque"]{
  background-color:#020712 !important;
  background-image:
    radial-gradient(circle at 50% 5%,rgba(102,157,255,.20),transparent 30%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27220%27%20height%3D%27220%27%20viewBox%3D%270%200%20220%20220%27%3E%3Cg%20fill%3D%27rgba%28255%2C255%2C255%2C.92%29%27%3E%3Ccircle%20cx%3D%2714%27%20cy%3D%2718%27%20r%3D%271.1%27%2F%3E%3Ccircle%20cx%3D%2737%27%20cy%3D%2776%27%20r%3D%27.8%27%2F%3E%3Ccircle%20cx%3D%2758%27%20cy%3D%2728%27%20r%3D%271.5%27%2F%3E%3Ccircle%20cx%3D%2781%27%20cy%3D%27112%27%20r%3D%27.9%27%2F%3E%3Ccircle%20cx%3D%27105%27%20cy%3D%2747%27%20r%3D%271.2%27%2F%3E%3Ccircle%20cx%3D%27133%27%20cy%3D%2791%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27162%27%20cy%3D%2726%27%20r%3D%271.4%27%2F%3E%3Ccircle%20cx%3D%27190%27%20cy%3D%2772%27%20r%3D%27.9%27%2F%3E%3Ccircle%20cx%3D%27207%27%20cy%3D%27139%27%20r%3D%271.1%27%2F%3E%3Ccircle%20cx%3D%2726%27%20cy%3D%27171%27%20r%3D%271.3%27%2F%3E%3Ccircle%20cx%3D%2769%27%20cy%3D%27197%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27119%27%20cy%3D%27166%27%20r%3D%271.6%27%2F%3E%3Ccircle%20cx%3D%27151%27%20cy%3D%27188%27%20r%3D%27.8%27%2F%3E%3Ccircle%20cx%3D%27184%27%20cy%3D%27172%27%20r%3D%271.2%27%2F%3E%3Ccircle%20cx%3D%2797%27%20cy%3D%2712%27%20r%3D%27.65%27%2F%3E%3Ccircle%20cx%3D%27144%27%20cy%3D%27136%27%20r%3D%27.95%27%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%27rgba%28169%2C205%2C255%2C.58%29%27%3E%3Ccircle%20cx%3D%2744%27%20cy%3D%27141%27%20r%3D%27.9%27%2F%3E%3Ccircle%20cx%3D%2774%27%20cy%3D%2764%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27128%27%20cy%3D%2722%27%20r%3D%27.8%27%2F%3E%3Ccircle%20cx%3D%27176%27%20cy%3D%27110%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27213%27%20cy%3D%2736%27%20r%3D%27.75%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
    linear-gradient(180deg,#020712 0%,#071c3c 55%,#031023 100%) !important;
  background-size:100% 100%,220px 220px,100% 100% !important;
  background-position:center,0 0,center !important;
  background-repeat:no-repeat,repeat,no-repeat !important;
  border-color:rgba(153,188,255,.36) !important;
  color:#f8fbff !important;
  box-shadow:0 24px 58px rgba(0,8,32,.58), 0 0 34px rgba(120,160,255,.16), inset 0 1px 0 rgba(255,255,255,.16), inset 0 -26px 40px rgba(0,0,0,.34) !important;
}

body .theme-grid .theme-card.theme-sand,
body .theme-grid .theme-card.bw-theme-sample-desert-sand,
body .theme-grid .theme-card[data-theme="desert-sand"]{
  background-color:#efe0bc !important;
  background-image:
    radial-gradient(circle at 20% 35%,rgba(255,248,226,.46) 0 1px,transparent 1.5px),
    radial-gradient(circle at 78% 62%,rgba(143,99,42,.18) 0 1px,transparent 1.6px),
    linear-gradient(16deg,rgba(255,248,226,.32) 0 12%,transparent 13% 38%,rgba(187,138,69,.18) 39% 52%,transparent 53%),
    radial-gradient(ellipse at 18% 8%,rgba(255,250,234,.45),transparent 34%),
    linear-gradient(135deg,#f7e9c8 0%,#dfbd7c 54%,#b9823e 100%) !important;
  background-size:14px 14px,18px 18px,180px 90px,100% 100%,100% 100% !important;
  background-position:0 0,7px 9px,0 0,center,center !important;
  background-repeat:repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(119,82,35,.30) !important;
  color:#2d2112 !important;
  box-shadow:0 24px 58px rgba(120,82,33,.28), 0 0 0 1px rgba(255,245,218,.24), inset 0 1px 0 rgba(255,255,255,.34), inset 0 -26px 40px rgba(92,58,20,.14) !important;
}

body .theme-grid .theme-card.theme-child h3,
body .theme-grid .theme-card.theme-child p,
body .theme-grid .theme-card.theme-child strong,
body .theme-grid .theme-card.bw-theme-sample-children-soft h3,
body .theme-grid .theme-card.bw-theme-sample-children-soft p,
body .theme-grid .theme-card.bw-theme-sample-children-soft strong,
body .theme-grid .theme-card[data-theme="children-soft"] h3,
body .theme-grid .theme-card[data-theme="children-soft"] p,
body .theme-grid .theme-card[data-theme="children-soft"] strong,
body .theme-grid .theme-card.theme-night h3,
body .theme-grid .theme-card.theme-night p,
body .theme-grid .theme-card.theme-night strong,
body .theme-grid .theme-card.bw-theme-sample-night-mosque h3,
body .theme-grid .theme-card.bw-theme-sample-night-mosque p,
body .theme-grid .theme-card.bw-theme-sample-night-mosque strong,
body .theme-grid .theme-card[data-theme="night-mosque"] h3,
body .theme-grid .theme-card[data-theme="night-mosque"] p,
body .theme-grid .theme-card[data-theme="night-mosque"] strong{
  color:#f8fbff !important;
  text-shadow:0 2px 14px rgba(0,0,0,.72) !important;
}

body .theme-grid .theme-card.theme-sand h3,
body .theme-grid .theme-card.theme-sand p,
body .theme-grid .theme-card.theme-sand strong,
body .theme-grid .theme-card.bw-theme-sample-desert-sand h3,
body .theme-grid .theme-card.bw-theme-sample-desert-sand p,
body .theme-grid .theme-card.bw-theme-sample-desert-sand strong,
body .theme-grid .theme-card[data-theme="desert-sand"] h3,
body .theme-grid .theme-card[data-theme="desert-sand"] p,
body .theme-grid .theme-card[data-theme="desert-sand"] strong{
  color:#2d2112 !important;
  text-shadow:0 1px 9px rgba(255,248,226,.72) !important;
}

html.premium-theme-children-soft body,
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
html.premium-theme-children-soft .bottom-app-nav-inner{
  background-color:#071527 !important;
  background-image:
    radial-gradient(circle at 82% 4%,rgba(143,202,255,.18),transparent 30%),
    radial-gradient(circle at 12% 92%,rgba(255,241,216,.10),transparent 32%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27156%27%20height%3D%27156%27%20viewBox%3D%270%200%20156%20156%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27rgba%28255%2C238%2C214%2C.28%29%27%20stroke-width%3D%274%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Ccircle%20cx%3D%2754%27%20cy%3D%2762%27%20r%3D%2722%27%2F%3E%3Ccircle%20cx%3D%2734%27%20cy%3D%2742%27%20r%3D%2710%27%2F%3E%3Ccircle%20cx%3D%2774%27%20cy%3D%2742%27%20r%3D%2710%27%2F%3E%3Ccircle%20cx%3D%27102%27%20cy%3D%2784%27%20r%3D%2720%27%2F%3E%3Ccircle%20cx%3D%2784%27%20cy%3D%2763%27%20r%3D%279%27%2F%3E%3Ccircle%20cx%3D%27120%27%20cy%3D%2763%27%20r%3D%279%27%2F%3E%3Cpath%20d%3D%27M45%2068q9%209%2018%200M93%2090q9%209%2018%200%27%2F%3E%3Cpath%20d%3D%27M29%20118c16-15%2038-15%2054%200%2016-15%2038-15%2054%200%27%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%27rgba%28255%2C255%2C255%2C.34%29%27%3E%3Ccircle%20cx%3D%2747%27%20cy%3D%2758%27%20r%3D%272.4%27%2F%3E%3Ccircle%20cx%3D%2761%27%20cy%3D%2758%27%20r%3D%272.4%27%2F%3E%3Ccircle%20cx%3D%2795%27%20cy%3D%2780%27%20r%3D%272.2%27%2F%3E%3Ccircle%20cx%3D%27109%27%20cy%3D%2780%27%20r%3D%272.2%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
    linear-gradient(135deg,rgba(5,14,28,.96) 0%,rgba(10,31,55,.94) 56%,rgba(20,54,92,.94) 100%) !important;
  background-size:100% 100%,100% 100%,156px 156px,100% 100% !important;
  background-position:center,center,16px 12px,center !important;
  background-repeat:no-repeat,no-repeat,repeat,no-repeat !important;
  border-color:rgba(143,202,255,.30) !important;
}

html.premium-theme-night-mosque body,
html.premium-theme-night-mosque .container,
html.premium-theme-night-mosque .hero,
html.premium-theme-night-mosque .brand-prayer-hero,
html.premium-theme-night-mosque .today-hub,
html.premium-theme-night-mosque .about-project-card,
html.premium-theme-night-mosque .barakaway-pro-final,
html.premium-theme-night-mosque .block,
html.premium-theme-night-mosque .card,
html.premium-theme-night-mosque .box,
html.premium-theme-night-mosque .panel,
html.premium-theme-night-mosque .quote,
html.premium-theme-night-mosque .empty,
html.premium-theme-night-mosque .article,
html.premium-theme-night-mosque .category-panel,
html.premium-theme-night-mosque .surah-card,
html.premium-theme-night-mosque .prayer-card,
html.premium-theme-night-mosque .toggle-row,
html.premium-theme-night-mosque .meta-item,
html.premium-theme-night-mosque .note-box,
html.premium-theme-night-mosque .jumuah-box,
html.premium-theme-night-mosque .month-day,
html.premium-theme-night-mosque .month-head,
html.premium-theme-night-mosque .wallet-support,
html.premium-theme-night-mosque .home-widget,
html.premium-theme-night-mosque .dua-card,
html.premium-theme-night-mosque .ayah-card,
html.premium-theme-night-mosque .master-audio-wrap,
html.premium-theme-night-mosque .reader-side,
html.premium-theme-night-mosque .reader-main,
html.premium-theme-night-mosque .dua-side,
html.premium-theme-night-mosque .dua-main,
html.premium-theme-night-mosque .ai-side,
html.premium-theme-night-mosque .ai-main,
html.premium-theme-night-mosque .player-panel,
html.premium-theme-night-mosque .preview-panel,
html.premium-theme-night-mosque .app-menu-btn,
html.premium-theme-night-mosque .today-action,
html.premium-theme-night-mosque .premium-resource-card,
html.premium-theme-night-mosque .bottom-app-nav,
html.premium-theme-night-mosque .bottom-app-nav-inner{
  background-color:#020712 !important;
  background-image:
    radial-gradient(circle at 52% 0%,rgba(105,162,255,.18),transparent 30%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27220%27%20height%3D%27220%27%20viewBox%3D%270%200%20220%20220%27%3E%3Cg%20fill%3D%27rgba%28255%2C255%2C255%2C.92%29%27%3E%3Ccircle%20cx%3D%2714%27%20cy%3D%2718%27%20r%3D%271.1%27%2F%3E%3Ccircle%20cx%3D%2737%27%20cy%3D%2776%27%20r%3D%27.8%27%2F%3E%3Ccircle%20cx%3D%2758%27%20cy%3D%2728%27%20r%3D%271.5%27%2F%3E%3Ccircle%20cx%3D%2781%27%20cy%3D%27112%27%20r%3D%27.9%27%2F%3E%3Ccircle%20cx%3D%27105%27%20cy%3D%2747%27%20r%3D%271.2%27%2F%3E%3Ccircle%20cx%3D%27133%27%20cy%3D%2791%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27162%27%20cy%3D%2726%27%20r%3D%271.4%27%2F%3E%3Ccircle%20cx%3D%27190%27%20cy%3D%2772%27%20r%3D%27.9%27%2F%3E%3Ccircle%20cx%3D%27207%27%20cy%3D%27139%27%20r%3D%271.1%27%2F%3E%3Ccircle%20cx%3D%2726%27%20cy%3D%27171%27%20r%3D%271.3%27%2F%3E%3Ccircle%20cx%3D%2769%27%20cy%3D%27197%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27119%27%20cy%3D%27166%27%20r%3D%271.6%27%2F%3E%3Ccircle%20cx%3D%27151%27%20cy%3D%27188%27%20r%3D%27.8%27%2F%3E%3Ccircle%20cx%3D%27184%27%20cy%3D%27172%27%20r%3D%271.2%27%2F%3E%3Ccircle%20cx%3D%2797%27%20cy%3D%2712%27%20r%3D%27.65%27%2F%3E%3Ccircle%20cx%3D%27144%27%20cy%3D%27136%27%20r%3D%27.95%27%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%27rgba%28169%2C205%2C255%2C.58%29%27%3E%3Ccircle%20cx%3D%2744%27%20cy%3D%27141%27%20r%3D%27.9%27%2F%3E%3Ccircle%20cx%3D%2774%27%20cy%3D%2764%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27128%27%20cy%3D%2722%27%20r%3D%27.8%27%2F%3E%3Ccircle%20cx%3D%27176%27%20cy%3D%27110%27%20r%3D%27.7%27%2F%3E%3Ccircle%20cx%3D%27213%27%20cy%3D%2736%27%20r%3D%27.75%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
    linear-gradient(180deg,rgba(2,7,18,.98) 0%,rgba(7,28,60,.94) 55%,rgba(3,16,35,.98) 100%) !important;
  background-size:100% 100%,220px 220px,100% 100% !important;
  background-position:center,0 0,center !important;
  background-repeat:no-repeat,repeat,no-repeat !important;
  border-color:rgba(153,188,255,.28) !important;
}

html.premium-theme-desert-sand body,
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
  background-color:#efe0bc !important;
  background-image:
    radial-gradient(circle at 20% 35%,rgba(255,248,226,.44) 0 1px,transparent 1.5px),
    radial-gradient(circle at 78% 62%,rgba(143,99,42,.16) 0 1px,transparent 1.6px),
    linear-gradient(16deg,rgba(255,248,226,.30) 0 12%,transparent 13% 38%,rgba(187,138,69,.16) 39% 52%,transparent 53%),
    radial-gradient(ellipse at 18% 8%,rgba(255,250,234,.38),transparent 34%),
    linear-gradient(135deg,rgba(247,233,200,.96) 0%,rgba(223,189,124,.94) 54%,rgba(185,130,62,.94) 100%) !important;
  background-size:14px 14px,18px 18px,180px 90px,100% 100%,100% 100% !important;
  background-position:0 0,7px 9px,0 0,center,center !important;
  background-repeat:repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(119,82,35,.26) !important;
}

html.premium-theme-children-soft h1,
html.premium-theme-children-soft h2,
html.premium-theme-children-soft h3,
html.premium-theme-children-soft h4,
html.premium-theme-children-soft h5,
html.premium-theme-children-soft p,
html.premium-theme-children-soft li,
html.premium-theme-children-soft .subtitle,
html.premium-theme-children-soft .note,
html.premium-theme-children-soft .muted,
html.premium-theme-night-mosque h1,
html.premium-theme-night-mosque h2,
html.premium-theme-night-mosque h3,
html.premium-theme-night-mosque h4,
html.premium-theme-night-mosque h5,
html.premium-theme-night-mosque p,
html.premium-theme-night-mosque li,
html.premium-theme-night-mosque .subtitle,
html.premium-theme-night-mosque .note,
html.premium-theme-night-mosque .muted{
  color:var(--text) !important;
  text-shadow:0 2px 14px rgba(0,0,0,.62) !important;
}

html.premium-theme-desert-sand h1,
html.premium-theme-desert-sand h2,
html.premium-theme-desert-sand h3,
html.premium-theme-desert-sand h4,
html.premium-theme-desert-sand h5,
html.premium-theme-desert-sand p,
html.premium-theme-desert-sand li,
html.premium-theme-desert-sand .subtitle,
html.premium-theme-desert-sand .note,
html.premium-theme-desert-sand .muted{
  color:#2d2112 !important;
  text-shadow:0 1px 8px rgba(255,248,226,.62) !important;
}

html.premium-theme-children-soft .barakaway-logo,
html.premium-theme-children-soft .brand-logo,
html.premium-theme-children-soft .app-logo,
html.premium-theme-children-soft .logo,
html.premium-theme-children-soft [data-logo],
html.premium-theme-night-mosque .barakaway-logo,
html.premium-theme-night-mosque .brand-logo,
html.premium-theme-night-mosque .app-logo,
html.premium-theme-night-mosque .logo,
html.premium-theme-night-mosque [data-logo],
html.premium-theme-desert-sand .barakaway-logo,
html.premium-theme-desert-sand .brand-logo,
html.premium-theme-desert-sand .app-logo,
html.premium-theme-desert-sand .logo,
html.premium-theme-desert-sand [data-logo],
html.premium-theme-children-soft .bw-logo-transparent-lock,
html.premium-theme-night-mosque .bw-logo-transparent-lock,
html.premium-theme-desert-sand .bw-logo-transparent-lock{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  border-color:transparent !important;
}
/* ===== END BARAKAWAY PREMIUM THEMES FINAL MATERIAL UPGRADE ===== */
`;
  (document.head || document.documentElement).appendChild(style);
})();


(function(){
  const STYLE_ID = 'barakaway-theme-cards-carbon-parity-final-fix';
  if(document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `

/* ===== BARAKAWAY THEME CARDS CARBON-PARITY FINAL FIX ===== */
/* Selector cards are protected from the active app theme and visually show the real theme before selection. */
.theme-grid .theme-card.theme-child,
.theme-grid .theme-card.theme-night,
.theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"],
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"],
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"]{
  position:relative !important;
  overflow:hidden !important;
  isolation:isolate !important;
  border-width:1px !important;
  box-shadow:
    0 24px 56px rgba(0,0,0,.42),
    0 0 0 1px rgba(255,255,255,.055),
    inset 0 1px 0 rgba(255,255,255,.15),
    inset 0 -22px 34px rgba(0,0,0,.24) !important;
}

/* Детская тема — premium dark-blue card with CSS teddy-bear pattern */
.theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"]{
  background-color:#071527 !important;
  background-image:
    radial-gradient(circle at 86% 10%,rgba(180,219,255,.42),transparent 26%),
    radial-gradient(circle at 18% 92%,rgba(255,214,232,.18),transparent 30%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27172%27%20height%3D%27172%27%20viewBox%3D%270%200%20172%20172%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27rgba%28255%2C239%2C218%2C.34%29%27%20stroke-width%3D%274.2%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Ccircle%20cx%3D%2754%27%20cy%3D%2766%27%20r%3D%2724%27%2F%3E%3Ccircle%20cx%3D%2732%27%20cy%3D%2744%27%20r%3D%2711%27%2F%3E%3Ccircle%20cx%3D%2776%27%20cy%3D%2744%27%20r%3D%2711%27%2F%3E%3Ccircle%20cx%3D%27114%27%20cy%3D%2793%27%20r%3D%2722%27%2F%3E%3Ccircle%20cx%3D%2795%27%20cy%3D%2770%27%20r%3D%279%27%2F%3E%3Ccircle%20cx%3D%27133%27%20cy%3D%2770%27%20r%3D%279%27%2F%3E%3Cpath%20d%3D%27M45%2073q9%208%2018%200M105%2099q9%208%2018%200%27%2F%3E%3Cpath%20d%3D%27M28%20134c18-17%2042-17%2060%200%2018-17%2042-17%2060%200%27%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%27rgba%28255%2C255%2C255%2C.40%29%27%3E%3Ccircle%20cx%3D%2747%27%20cy%3D%2762%27%20r%3D%272.3%27%2F%3E%3Ccircle%20cx%3D%2761%27%20cy%3D%2762%27%20r%3D%272.3%27%2F%3E%3Ccircle%20cx%3D%27107%27%20cy%3D%2788%27%20r%3D%272.1%27%2F%3E%3Ccircle%20cx%3D%27121%27%20cy%3D%2788%27%20r%3D%272.1%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
    linear-gradient(135deg,#071527 0%,#113052 48%,#69b7ed 100%) !important;
  background-size:100% 100%,100% 100%,172px 172px,100% 100% !important;
  background-position:center,center,18px 18px,center !important;
  background-repeat:no-repeat,no-repeat,repeat,no-repeat !important;
  border-color:rgba(154,211,255,.36) !important;
}

/* Ночная мечеть — only premium blue night sky and randomly placed stars; no moon, no mosque */
.theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"]{
  background-color:#020713 !important;
  background-image:
    radial-gradient(circle at 12% 18%,rgba(255,255,255,.95) 0 1px,transparent 1.6px),
    radial-gradient(circle at 31% 72%,rgba(255,255,255,.86) 0 .8px,transparent 1.4px),
    radial-gradient(circle at 57% 34%,rgba(199,221,255,.92) 0 1.2px,transparent 1.9px),
    radial-gradient(circle at 78% 68%,rgba(255,255,255,.72) 0 .9px,transparent 1.5px),
    radial-gradient(circle at 91% 22%,rgba(180,210,255,.86) 0 1.1px,transparent 1.7px),
    radial-gradient(circle at 48% 6%,rgba(105,162,255,.22),transparent 31%),
    linear-gradient(135deg,#020713 0%,#081b3c 52%,#183f75 100%) !important;
  background-size:97px 83px,137px 109px,173px 131px,211px 157px,149px 181px,100% 100%,100% 100% !important;
  background-position:0 0,17px 11px,31px 19px,7px 23px,43px 5px,center,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(153,188,255,.34) !important;
}

/* Песочная классика — light sand texture, dark text */
.theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"]{
  background-color:#efd9a5 !important;
  background-image:
    radial-gradient(circle at 18% 32%,rgba(255,248,226,.62) 0 1px,transparent 1.45px),
    radial-gradient(circle at 72% 66%,rgba(142,94,38,.22) 0 1px,transparent 1.55px),
    linear-gradient(14deg,rgba(255,250,231,.42) 0 12%,transparent 13% 38%,rgba(185,129,58,.20) 39% 54%,transparent 55%),
    radial-gradient(ellipse at 18% 10%,rgba(255,250,235,.48),transparent 34%),
    linear-gradient(135deg,#f8eac7 0%,#dfbd7c 54%,#b9863f 100%) !important;
  background-size:13px 13px,19px 19px,190px 92px,100% 100%,100% 100% !important;
  background-position:0 0,8px 9px,0 0,center,center !important;
  background-repeat:repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(122,82,31,.34) !important;
}

.theme-grid .theme-card.theme-child h3,
.theme-grid .theme-card.theme-child p,
.theme-grid .theme-card.theme-night h3,
.theme-grid .theme-card.theme-night p,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"] h3,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"] p,
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"] h3,
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"] p{
  color:#ffffff !important;
  text-shadow:0 2px 14px rgba(0,0,0,.60) !important;
}

.theme-grid .theme-card.theme-sand h3,
.theme-grid .theme-card.theme-sand p,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"] h3,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"] p{
  color:#2b2114 !important;
  text-shadow:0 1px 8px rgba(255,248,226,.75) !important;
}

.theme-grid .theme-card.theme-sand .theme-chip,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"] .theme-chip{
  background:rgba(55,36,14,.18) !important;
  border-color:rgba(55,36,14,.22) !important;
  color:#2b2114 !important;
}

/* Full application after selection — carbon-style coverage for the three material themes. */
html.premium-theme-children-soft{
  --bg:#071527; --surface:#0a1d34; --surface-2:#102d4d; --surface-3:#173e68;
  --border:rgba(154,211,255,.30); --border-2:rgba(255,229,241,.34);
  --text:#f7fbff; --text-soft:#d7ecff; --text-muted:#afd4f3;
  --green:#9ad3ff; --green-strong:#347eb7; --green-soft:#e6f6ff;
  --bw-accent:#9ad3ff; --bw-accent-2:#ffe5f1;
}

html.premium-theme-night-mosque{
  --bg:#020713; --surface:#071429; --surface-2:#0d2144; --surface-3:#143363;
  --border:rgba(153,188,255,.28); --border-2:rgba(207,226,255,.34);
  --text:#f5f8ff; --text-soft:#cbdaf3; --text-muted:#92abd2;
  --green:#d8e7ff; --green-strong:#315c9a; --green-soft:#edf5ff;
  --bw-accent:#d8e7ff; --bw-accent-2:#74a8ff;
}

html.premium-theme-desert-sand{
  --bg:#e9d19a; --surface:#f2dfb0; --surface-2:#e7c987; --surface-3:#d5aa5d;
  --border:rgba(122,82,31,.24); --border-2:rgba(87,57,21,.30);
  --text:#2b2114; --text-soft:#4b3921; --text-muted:#725533;
  --green:#7a5622; --green-strong:#8c6026; --green-soft:#3a2a16;
  --bw-accent:#7a5622; --bw-accent-2:#fff4cf;
}

html.premium-theme-children-soft body,
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
html.premium-theme-children-soft .bottom-app-nav-inner{
  background-color:#071527 !important;
  background-image:
    radial-gradient(circle at 86% 10%,rgba(180,219,255,.28),transparent 28%),
    radial-gradient(circle at 14% 92%,rgba(255,214,232,.12),transparent 32%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27172%27%20height%3D%27172%27%20viewBox%3D%270%200%20172%20172%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27rgba%28255%2C239%2C218%2C.22%29%27%20stroke-width%3D%274.2%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Ccircle%20cx%3D%2754%27%20cy%3D%2766%27%20r%3D%2724%27%2F%3E%3Ccircle%20cx%3D%2732%27%20cy%3D%2744%27%20r%3D%2711%27%2F%3E%3Ccircle%20cx%3D%2776%27%20cy%3D%2744%27%20r%3D%2711%27%2F%3E%3Ccircle%20cx%3D%27114%27%20cy%3D%2793%27%20r%3D%2722%27%2F%3E%3Ccircle%20cx%3D%2795%27%20cy%3D%2770%27%20r%3D%279%27%2F%3E%3Ccircle%20cx%3D%27133%27%20cy%3D%2770%27%20r%3D%279%27%2F%3E%3Cpath%20d%3D%27M45%2073q9%208%2018%200M105%2099q9%208%2018%200%27%2F%3E%3Cpath%20d%3D%27M28%20134c18-17%2042-17%2060%200%2018-17%2042-17%2060%200%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
    linear-gradient(135deg,#071527 0%,#102f50 52%,#224f83 100%) !important;
  background-size:100% 100%,100% 100%,172px 172px,100% 100% !important;
  background-position:center,center,18px 18px,center !important;
  background-repeat:no-repeat,no-repeat,repeat,no-repeat !important;
  border-color:rgba(154,211,255,.30) !important;
}

html.premium-theme-night-mosque body,
html.premium-theme-night-mosque .container,
html.premium-theme-night-mosque .hero,
html.premium-theme-night-mosque .brand-prayer-hero,
html.premium-theme-night-mosque .today-hub,
html.premium-theme-night-mosque .about-project-card,
html.premium-theme-night-mosque .barakaway-pro-final,
html.premium-theme-night-mosque .block,
html.premium-theme-night-mosque .card,
html.premium-theme-night-mosque .box,
html.premium-theme-night-mosque .panel,
html.premium-theme-night-mosque .quote,
html.premium-theme-night-mosque .empty,
html.premium-theme-night-mosque .article,
html.premium-theme-night-mosque .category-panel,
html.premium-theme-night-mosque .surah-card,
html.premium-theme-night-mosque .prayer-card,
html.premium-theme-night-mosque .toggle-row,
html.premium-theme-night-mosque .meta-item,
html.premium-theme-night-mosque .note-box,
html.premium-theme-night-mosque .jumuah-box,
html.premium-theme-night-mosque .month-day,
html.premium-theme-night-mosque .month-head,
html.premium-theme-night-mosque .wallet-support,
html.premium-theme-night-mosque .home-widget,
html.premium-theme-night-mosque .dua-card,
html.premium-theme-night-mosque .ayah-card,
html.premium-theme-night-mosque .master-audio-wrap,
html.premium-theme-night-mosque .reader-side,
html.premium-theme-night-mosque .reader-main,
html.premium-theme-night-mosque .dua-side,
html.premium-theme-night-mosque .dua-main,
html.premium-theme-night-mosque .ai-side,
html.premium-theme-night-mosque .ai-main,
html.premium-theme-night-mosque .player-panel,
html.premium-theme-night-mosque .preview-panel,
html.premium-theme-night-mosque .app-menu-btn,
html.premium-theme-night-mosque .today-action,
html.premium-theme-night-mosque .premium-resource-card,
html.premium-theme-night-mosque .bottom-app-nav,
html.premium-theme-night-mosque .bottom-app-nav-inner{
  background-color:#020713 !important;
  background-image:
    radial-gradient(circle at 12% 18%,rgba(255,255,255,.92) 0 1px,transparent 1.6px),
    radial-gradient(circle at 31% 72%,rgba(255,255,255,.82) 0 .8px,transparent 1.4px),
    radial-gradient(circle at 57% 34%,rgba(199,221,255,.88) 0 1.2px,transparent 1.9px),
    radial-gradient(circle at 78% 68%,rgba(255,255,255,.68) 0 .9px,transparent 1.5px),
    radial-gradient(circle at 91% 22%,rgba(180,210,255,.82) 0 1.1px,transparent 1.7px),
    radial-gradient(circle at 48% 6%,rgba(105,162,255,.18),transparent 31%),
    linear-gradient(135deg,#020713 0%,#081b3c 52%,#183f75 100%) !important;
  background-size:97px 83px,137px 109px,173px 131px,211px 157px,149px 181px,100% 100%,100% 100% !important;
  background-position:0 0,17px 11px,31px 19px,7px 23px,43px 5px,center,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(153,188,255,.28) !important;
}

html.premium-theme-desert-sand body,
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
  background-color:#efd9a5 !important;
  background-image:
    radial-gradient(circle at 18% 32%,rgba(255,248,226,.62) 0 1px,transparent 1.45px),
    radial-gradient(circle at 72% 66%,rgba(142,94,38,.22) 0 1px,transparent 1.55px),
    linear-gradient(14deg,rgba(255,250,231,.42) 0 12%,transparent 13% 38%,rgba(185,129,58,.20) 39% 54%,transparent 55%),
    radial-gradient(ellipse at 18% 10%,rgba(255,250,235,.48),transparent 34%),
    linear-gradient(135deg,#f8eac7 0%,#dfbd7c 54%,#b9863f 100%) !important;
  background-size:13px 13px,19px 19px,190px 92px,100% 100%,100% 100% !important;
  background-position:0 0,8px 9px,0 0,center,center !important;
  background-repeat:repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(122,82,31,.24) !important;
}

html.premium-theme-children-soft h1, html.premium-theme-children-soft h2, html.premium-theme-children-soft h3, html.premium-theme-children-soft h4, html.premium-theme-children-soft h5,
html.premium-theme-children-soft p, html.premium-theme-children-soft li, html.premium-theme-children-soft .subtitle, html.premium-theme-children-soft .note, html.premium-theme-children-soft .muted,
html.premium-theme-night-mosque h1, html.premium-theme-night-mosque h2, html.premium-theme-night-mosque h3, html.premium-theme-night-mosque h4, html.premium-theme-night-mosque h5,
html.premium-theme-night-mosque p, html.premium-theme-night-mosque li, html.premium-theme-night-mosque .subtitle, html.premium-theme-night-mosque .note, html.premium-theme-night-mosque .muted{
  color:var(--text) !important;
  text-shadow:0 2px 14px rgba(0,0,0,.58) !important;
}
html.premium-theme-desert-sand h1, html.premium-theme-desert-sand h2, html.premium-theme-desert-sand h3, html.premium-theme-desert-sand h4, html.premium-theme-desert-sand h5,
html.premium-theme-desert-sand p, html.premium-theme-desert-sand li, html.premium-theme-desert-sand .subtitle, html.premium-theme-desert-sand .note, html.premium-theme-desert-sand .muted,
html.premium-theme-desert-sand .bottom-app-nav-item{
  color:#2b2114 !important;
  text-shadow:0 1px 8px rgba(255,248,226,.62) !important;
}

html.premium-theme-children-soft button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-night-mosque button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-children-soft .btn,
html.premium-theme-night-mosque .btn{
  background:linear-gradient(180deg,#6db8f1 0%,#2f6da5 50%,#15395f 100%) !important;
  border-color:rgba(214,235,255,.26) !important;
  color:#ffffff !important;
}
html.premium-theme-desert-sand button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html.premium-theme-desert-sand .btn{
  background:linear-gradient(180deg,#fff1c8 0%,#c99343 52%,#805620 100%) !important;
  border-color:rgba(87,57,21,.28) !important;
  color:#2b2114 !important;
}
/* ===== END BARAKAWAY THEME CARDS CARBON-PARITY FINAL FIX ===== */
`;
  (document.head || document.documentElement).appendChild(style);
})();
