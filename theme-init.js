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
        card.style.setProperty("color", "#ffffff", "important");

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
  background-color:#07172a !important;
  background-image:
    radial-gradient(circle at 30px 34px, rgba(255,255,255,.18) 0 12px, transparent 12.8px),
    radial-gradient(circle at 19px 24px, rgba(255,255,255,.14) 0 5.8px, transparent 6.4px),
    radial-gradient(circle at 41px 24px, rgba(255,255,255,.14) 0 5.8px, transparent 6.4px),
    linear-gradient(27deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,227,241,.06) 5%, transparent 5%, transparent 45%, rgba(255,227,241,.06) 45%, rgba(255,227,241,.06) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#07172a 0%,#102a46 50%,#07172a 100%) !important;
  background-size:96px 96px,96px 96px,96px 96px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat !important;
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
    radial-gradient(circle at 30px 34px, rgba(255,255,255,.18) 0 12px, transparent 12.8px),
    radial-gradient(circle at 19px 24px, rgba(255,255,255,.14) 0 5.8px, transparent 6.4px),
    radial-gradient(circle at 41px 24px, rgba(255,255,255,.14) 0 5.8px, transparent 6.4px),
    linear-gradient(27deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,227,241,.06) 5%, transparent 5%, transparent 45%, rgba(255,227,241,.06) 45%, rgba(255,227,241,.06) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#07172a 0%,#102a46 50%,#07172a 100%) !important;
  background-size:96px 96px,96px 96px,96px 96px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat !important;
}

html.premium-theme-night-mosque body{
  background-color:#050b13 !important;
  background-image:
    radial-gradient(circle at 18px 18px, rgba(255,255,255,.42) 0 1.2px, transparent 1.8px),
    radial-gradient(circle at 48px 31px, rgba(255,255,255,.36) 0 1px, transparent 1.6px),
    radial-gradient(circle at 82px 16px, rgba(255,255,255,.38) 0 1.1px, transparent 1.7px),
    radial-gradient(circle at 68px 34px, rgba(215,192,122,.22) 0 10px, transparent 10.8px),
    linear-gradient(90deg, transparent 0 31%, rgba(215,192,122,.10) 31% 33%, transparent 33% 57%, rgba(215,192,122,.10) 57% 59%, transparent 59% 100%),
    linear-gradient(27deg, rgba(215,192,122,.08) 5%, transparent 5%, transparent 45%, rgba(215,192,122,.08) 45%, rgba(215,192,122,.08) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(124,167,255,.07) 5%, transparent 5%, transparent 45%, rgba(124,167,255,.07) 45%, rgba(124,167,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#050b13 0%,#091426 48%,#050b13 100%) !important;
  background-size:120px 120px,120px 120px,120px 120px,120px 120px,120px 120px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,0 0,0 0,0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,repeat,repeat,no-repeat !important;
}

html.premium-theme-desert-sand body{
  background-color:#130c05 !important;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(255,237,190,.20) 0 1px, transparent 1.7px),
    radial-gradient(circle at 10px 8px, rgba(219,174,97,.16) 0 1px, transparent 1.8px),
    linear-gradient(27deg, rgba(255,237,190,.11) 5%, transparent 5%, transparent 45%, rgba(255,237,190,.11) 45%, rgba(255,237,190,.11) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(120,72,18,.13) 5%, transparent 5%, transparent 45%, rgba(120,72,18,.13) 45%, rgba(120,72,18,.13) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#130c05 0%,#1e1408 52%,#130c05 100%) !important;
  background-size:16px 16px,18px 18px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,6px 8px,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,no-repeat !important;
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
  const STYLE_ID = "barakaway-final-pure-css-premium-theme-patterns";
  if(document.getElementById(STYLE_ID)) return;
  const CSS = '\n\n/* ===== BARAKAWAY FINAL PURE CSS PREMIUM THEME PATTERNS ===== */\n/* Pure CSS / inline SVG patterns. No external theme images. Same runtime logic as Carbon Elite. */\nhtml.premium-theme-children-soft{\n  --bg:#07172a;\n  --surface:#102b44;\n  --surface-2:#173a5c;\n  --surface-3:#234d75;\n  --border:rgba(135,203,255,.38);\n  --border-2:rgba(255,227,241,.46);\n  --text:#f5fbff;\n  --text-soft:#d8efff;\n  --text-muted:#b8ddf7;\n  --green:#87cbff;\n  --green-strong:#3d8bc7;\n  --green-soft:#dff4ff;\n  --bw-accent:#87cbff;\n  --bw-accent-2:#ffe3f1;\n}\nhtml.premium-theme-night-mosque{\n  --bg:#050b13;\n  --surface:#091426;\n  --surface-2:#10213d;\n  --surface-3:#172f58;\n  --border:rgba(215,192,122,.30);\n  --border-2:rgba(118,154,215,.40);\n  --text:#f5f8ff;\n  --text-soft:#d2e0f7;\n  --text-muted:#9fb7dc;\n  --green:#d7c07a;\n  --green-strong:#355d9a;\n  --green-soft:#f4e6b2;\n  --bw-accent:#d7c07a;\n  --bw-accent-2:#7ca7ff;\n}\nhtml.premium-theme-desert-sand{\n  --bg:#e2bd7b;\n  --surface:#f1d497;\n  --surface-2:#e3b86d;\n  --surface-3:#fff0c1;\n  --border:rgba(92,58,20,.34);\n  --border-2:rgba(121,78,26,.46);\n  --text:#2b1a08;\n  --text-soft:#4a2d0d;\n  --text-muted:#6a471d;\n  --green:#7a511d;\n  --green-strong:#7c501a;\n  --green-soft:#3a2209;\n  --bw-accent:#7a511d;\n  --bw-accent-2:#fff1c6;\n}\n\nhtml.premium-theme-children-soft body{
  background-color:#07172a !important;
  background-image:
    radial-gradient(circle at 30px 34px, rgba(255,255,255,.18) 0 12px, transparent 12.8px),
    radial-gradient(circle at 19px 24px, rgba(255,255,255,.14) 0 5.8px, transparent 6.4px),
    radial-gradient(circle at 41px 24px, rgba(255,255,255,.14) 0 5.8px, transparent 6.4px),
    linear-gradient(27deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,227,241,.06) 5%, transparent 5%, transparent 45%, rgba(255,227,241,.06) 45%, rgba(255,227,241,.06) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#07172a 0%,#102a46 50%,#07172a 100%) !important;
  background-size:96px 96px,96px 96px,96px 96px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat !important;
}\nhtml.premium-theme-night-mosque body{
  background-color:#050b13 !important;
  background-image:
    radial-gradient(circle at 18px 18px, rgba(255,255,255,.42) 0 1.2px, transparent 1.8px),
    radial-gradient(circle at 48px 31px, rgba(255,255,255,.36) 0 1px, transparent 1.6px),
    radial-gradient(circle at 82px 16px, rgba(255,255,255,.38) 0 1.1px, transparent 1.7px),
    radial-gradient(circle at 68px 34px, rgba(215,192,122,.22) 0 10px, transparent 10.8px),
    linear-gradient(90deg, transparent 0 31%, rgba(215,192,122,.10) 31% 33%, transparent 33% 57%, rgba(215,192,122,.10) 57% 59%, transparent 59% 100%),
    linear-gradient(27deg, rgba(215,192,122,.08) 5%, transparent 5%, transparent 45%, rgba(215,192,122,.08) 45%, rgba(215,192,122,.08) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(124,167,255,.07) 5%, transparent 5%, transparent 45%, rgba(124,167,255,.07) 45%, rgba(124,167,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#050b13 0%,#091426 48%,#050b13 100%) !important;
  background-size:120px 120px,120px 120px,120px 120px,120px 120px,120px 120px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,0 0,0 0,0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,repeat,repeat,no-repeat !important;
}\nhtml.premium-theme-desert-sand body{
  background-color:#130c05 !important;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(255,237,190,.20) 0 1px, transparent 1.7px),
    radial-gradient(circle at 10px 8px, rgba(219,174,97,.16) 0 1px, transparent 1.8px),
    linear-gradient(27deg, rgba(255,237,190,.11) 5%, transparent 5%, transparent 45%, rgba(255,237,190,.11) 45%, rgba(255,237,190,.11) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(120,72,18,.13) 5%, transparent 5%, transparent 45%, rgba(120,72,18,.13) 45%, rgba(120,72,18,.13) 55%, transparent 55%, transparent),
    linear-gradient(180deg,#130c05 0%,#1e1408 52%,#130c05 100%) !important;
  background-size:16px 16px,18px 18px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,6px 8px,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,no-repeat !important;
}\n\nbody .theme-grid .theme-card.theme-child,\nbody .theme-grid .theme-card.bw-theme-sample-children-soft,\nbody .theme-grid .theme-card[data-theme="children-soft"]{\n  background-color:#07172a!important;\n  background-image:\n    linear-gradient(115deg,transparent 0%,rgba(255,255,255,.12) 44%,transparent 60%),\n    url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'112\' height=\'112\' viewBox=\'0 0 112 112\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'.22\' stroke-width=\'2.4\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Ccircle cx=\'34\' cy=\'38\' r=\'15\'/%3E%3Ccircle cx=\'21\' cy=\'27\' r=\'6.5\'/%3E%3Ccircle cx=\'47\' cy=\'27\' r=\'6.5\'/%3E%3Ccircle cx=\'30\' cy=\'38\' r=\'1.8\' fill=\'%23ffffff\' fill-opacity=\'.25\'/%3E%3Ccircle cx=\'39\' cy=\'38\' r=\'1.8\' fill=\'%23ffffff\' fill-opacity=\'.25\'/%3E%3Cpath d=\'M30 47q4.5 4 9 0\'/%3E%3Cpath d=\'M76 24l3.2 6.5 7.2 1-5.2 5.1 1.2 7.1-6.4-3.4-6.4 3.4 1.2-7.1-5.2-5.1 7.2-1z\'/%3E%3Cpath d=\'M20 78c8-7 20-7 28 0 8-7 20-7 28 0\'/%3E%3C/g%3E%3C/svg%3E"),\n    radial-gradient(circle at 88% 10%,rgba(255,227,241,.24),transparent 30%),\n    linear-gradient(135deg,#102b44 0%,#173a5c 54%,#234d75 100%)!important;\n  background-size:100% 100%,112px 112px,100% 100%,100% 100%!important;\n  background-position:center,0 0,center,center!important;\n  background-repeat:no-repeat,repeat,no-repeat,no-repeat!important;\n  border-color:rgba(135,203,255,.46)!important;\n  box-shadow:0 24px 58px rgba(7,23,42,.42),inset 0 1px 0 rgba(255,255,255,.12),inset 0 -24px 38px rgba(0,0,0,.20)!important;\n}\nbody .theme-grid .theme-card.theme-night,\nbody .theme-grid .theme-card.bw-theme-sample-night-mosque,\nbody .theme-grid .theme-card[data-theme="night-mosque"]{\n  background-color:#050b13!important;\n  background-image:\n    linear-gradient(115deg,transparent 0%,rgba(255,255,255,.08) 44%,transparent 60%),\n    url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'124\' height=\'124\' viewBox=\'0 0 124 124\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'.42\'%3E%3Ccircle cx=\'14\' cy=\'18\' r=\'1.1\'/%3E%3Ccircle cx=\'47\' cy=\'29\' r=\'.85\'/%3E%3Ccircle cx=\'82\' cy=\'14\' r=\'1.1\'/%3E%3Ccircle cx=\'108\' cy=\'51\' r=\'.8\'/%3E%3Ccircle cx=\'29\' cy=\'81\' r=\'1\'/%3E%3Ccircle cx=\'76\' cy=\'95\' r=\'.8\'/%3E%3Ccircle cx=\'113\' cy=\'109\' r=\'1.1\'/%3E%3Cpath d=\'M70 35a14 14 0 1 1-14-14 10.5 10.5 0 1 0 14 14z\' fill=\'%23d7c07a\' fill-opacity=\'.30\'/%3E%3C/g%3E%3Cg fill=\'none\' stroke=\'%23d7c07a\' stroke-opacity=\'.15\' stroke-width=\'1.45\'%3E%3Cpath d=\'M18 116h88\'/%3E%3Cpath d=\'M36 116V86q8-19 17 0v30\'/%3E%3Cpath d=\'M70 116V77q11-23 22 0v39\'/%3E%3C/g%3E%3C/svg%3E"),\n    radial-gradient(circle at 82% 12%,rgba(215,192,122,.22),transparent 22%),\n    linear-gradient(135deg,#050b13 0%,#091426 50%,#172f58 100%)!important;\n  background-size:100% 100%,124px 124px,100% 100%,100% 100%!important;\n  background-position:center,0 0,center,center!important;\n  background-repeat:no-repeat,repeat,no-repeat,no-repeat!important;\n  border-color:rgba(118,154,215,.40)!important;\n  box-shadow:0 24px 58px rgba(0,8,32,.54),0 0 34px rgba(120,160,255,.14),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -24px 38px rgba(0,0,0,.34)!important;\n}\nbody .theme-grid .theme-card.theme-sand,\nbody .theme-grid .theme-card.bw-theme-sample-desert-sand,\nbody .theme-grid .theme-card[data-theme="desert-sand"]{\n  background-color:#e2bd7b!important;\n  background-image:\n    linear-gradient(115deg,transparent 0%,rgba(255,255,255,.18) 44%,transparent 60%),\n    url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\' viewBox=\'0 0 64 64\'%3E%3Cg fill=\'%23fff0c8\' fill-opacity=\'.28\'%3E%3Ccircle cx=\'6\' cy=\'9\' r=\'1.1\'/%3E%3Ccircle cx=\'26\' cy=\'13\' r=\'.8\'/%3E%3Ccircle cx=\'47\' cy=\'6\' r=\'1\'/%3E%3Ccircle cx=\'56\' cy=\'30\' r=\'.9\'/%3E%3Ccircle cx=\'11\' cy=\'42\' r=\'.8\'/%3E%3Ccircle cx=\'34\' cy=\'52\' r=\'1\'/%3E%3Ccircle cx=\'59\' cy=\'58\' r=\'.75\'/%3E%3C/g%3E%3Cg fill=\'%23a86f2c\' fill-opacity=\'.14\'%3E%3Ccircle cx=\'18\' cy=\'26\' r=\'.9\'/%3E%3Ccircle cx=\'39\' cy=\'34\' r=\'.8\'/%3E%3Ccircle cx=\'50\' cy=\'47\' r=\'.75\'/%3E%3C/g%3E%3C/svg%3E"),\n    radial-gradient(circle at 88% 10%,rgba(255,241,198,.36),transparent 30%),\n    linear-gradient(135deg,#8d5f25 0%,#d4a95f 52%,#fff0c1 100%)!important;\n  background-size:100% 100%,64px 64px,100% 100%,100% 100%!important;\n  background-position:center,0 0,center,center!important;\n  background-repeat:no-repeat,repeat,no-repeat,no-repeat!important;\n  border-color:rgba(255,239,198,.58)!important;\n  box-shadow:0 24px 58px rgba(120,82,33,.38),inset 0 1px 0 rgba(255,255,255,.30),inset 0 -24px 38px rgba(92,58,20,.22)!important;\n}\n\nbody .theme-grid .theme-card.theme-child h3,\nbody .theme-grid .theme-card.theme-child p,\nbody .theme-grid .theme-card.theme-child strong,\nbody .theme-grid .theme-card.bw-theme-sample-children-soft h3,\nbody .theme-grid .theme-card.bw-theme-sample-children-soft p,\nbody .theme-grid .theme-card.bw-theme-sample-children-soft strong,\nbody .theme-grid .theme-card[data-theme="children-soft"] h3,\nbody .theme-grid .theme-card[data-theme="children-soft"] p,\nbody .theme-grid .theme-card[data-theme="children-soft"] strong,\nbody .theme-grid .theme-card.theme-night h3,\nbody .theme-grid .theme-card.theme-night p,\nbody .theme-grid .theme-card.theme-night strong,\nbody .theme-grid .theme-card.bw-theme-sample-night-mosque h3,\nbody .theme-grid .theme-card.bw-theme-sample-night-mosque p,\nbody .theme-grid .theme-card.bw-theme-sample-night-mosque strong,\nbody .theme-grid .theme-card[data-theme="night-mosque"] h3,\nbody .theme-grid .theme-card[data-theme="night-mosque"] p,\nbody .theme-grid .theme-card[data-theme="night-mosque"] strong{\n  color:#fff!important;\n  text-shadow:0 2px 14px rgba(0,0,0,.58)!important;\n}\nbody .theme-grid .theme-card.theme-sand h3,\nbody .theme-grid .theme-card.theme-sand p,\nbody .theme-grid .theme-card.theme-sand strong,\nbody .theme-grid .theme-card.bw-theme-sample-desert-sand h3,\nbody .theme-grid .theme-card.bw-theme-sample-desert-sand p,\nbody .theme-grid .theme-card.bw-theme-sample-desert-sand strong,\nbody .theme-grid .theme-card[data-theme="desert-sand"] h3,\nbody .theme-grid .theme-card[data-theme="desert-sand"] p,\nbody .theme-grid .theme-card[data-theme="desert-sand"] strong{\n  color:#fff8e7!important;\n  text-shadow:0 2px 14px rgba(43,26,8,.72)!important;\n}\n\nhtml.premium-theme-desert-sand h1,\nhtml.premium-theme-desert-sand h2,\nhtml.premium-theme-desert-sand h3,\nhtml.premium-theme-desert-sand h4,\nhtml.premium-theme-desert-sand h5,\nhtml.premium-theme-desert-sand h6,\nhtml.premium-theme-desert-sand .title,\nhtml.premium-theme-desert-sand .section-title,\nhtml.premium-theme-desert-sand .category-title,\nhtml.premium-theme-desert-sand .meta-value,\nhtml.premium-theme-desert-sand .prayer-name,\nhtml.premium-theme-desert-sand .prayer-time,\nhtml.premium-theme-desert-sand .big-location,\nhtml.premium-theme-desert-sand .next-name{\n  color:#2b1a08!important;\n  text-shadow:0 1px 8px rgba(255,239,198,.62)!important;\n}\nhtml.premium-theme-desert-sand p,\nhtml.premium-theme-desert-sand li,\nhtml.premium-theme-desert-sand .subtitle,\nhtml.premium-theme-desert-sand .small,\nhtml.premium-theme-desert-sand .note,\nhtml.premium-theme-desert-sand .muted,\nhtml.premium-theme-desert-sand .category-intro,\nhtml.premium-theme-desert-sand .ref,\nhtml.premium-theme-desert-sand .label,\nhtml.premium-theme-desert-sand .translit,\nhtml.premium-theme-desert-sand .meaning,\nhtml.premium-theme-desert-sand .when,\nhtml.premium-theme-desert-sand .surah-meta,\nhtml.premium-theme-desert-sand .article p,\nhtml.premium-theme-desert-sand .ayah-translit,\nhtml.premium-theme-desert-sand .ayah-meaning{\n  color:#4a2d0d!important;\n  text-shadow:0 1px 8px rgba(255,239,198,.46)!important;\n}\nhtml.premium-theme-desert-sand .bottom-app-nav,\nhtml.premium-theme-desert-sand .bottom-app-nav-inner{\n  color:#2b1a08!important;\n}\nhtml.premium-theme-night-mosque h1,\nhtml.premium-theme-night-mosque h2,\nhtml.premium-theme-night-mosque h3,\nhtml.premium-theme-night-mosque h4,\nhtml.premium-theme-night-mosque p,\nhtml.premium-theme-night-mosque li,\nhtml.premium-theme-children-soft h1,\nhtml.premium-theme-children-soft h2,\nhtml.premium-theme-children-soft h3,\nhtml.premium-theme-children-soft h4,\nhtml.premium-theme-children-soft p,\nhtml.premium-theme-children-soft li{\n  text-shadow:0 2px 12px rgba(0,0,0,.35)!important;\n}\n/* ===== END BARAKAWAY FINAL PURE CSS PREMIUM THEME PATTERNS ===== */\n';
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);
})();


(function(){
  const STYLE_ID='barakaway-final-theme-card-independence-clean';
  const CSS=`

/* ===== FINAL CLEAN FIX: THEME CARDS DO NOT INHERIT ACTIVE PRO THEME ===== */
html[class*="premium-theme-"] .theme-grid .theme-card{
  color:#fff !important;
  isolation:isolate !important;
  overflow:hidden !important;
}

html[class*="premium-theme-"] .theme-grid .theme-card.theme-gold,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="royal-gold"]{
  background-color:#171208 !important;
  background-image:
    linear-gradient(27deg, rgba(255,239,184,.15) 5%, transparent 5%, transparent 45%, rgba(255,239,184,.15) 45%, rgba(255,239,184,.15) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(175,132,48,.13) 5%, transparent 5%, transparent 45%, rgba(175,132,48,.13) 45%, rgba(175,132,48,.13) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#171208 0%,#4b3615 52%,#d7c07a 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(244,220,148,.58) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-emerald,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="emerald-quran"]{
  background-color:#061109 !important;
  background-image:
    linear-gradient(27deg, rgba(102,198,128,.14) 5%, transparent 5%, transparent 45%, rgba(102,198,128,.14) 45%, rgba(102,198,128,.14) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#061109 0%,#12301d 52%,#4caf6a 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(102,198,128,.58) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-violet,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="violet-noor"]{
  background-color:#0d0a15 !important;
  background-image:
    linear-gradient(27deg, rgba(197,168,255,.14) 5%, transparent 5%, transparent 45%, rgba(197,168,255,.14) 45%, rgba(197,168,255,.14) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#0d0a15 0%,#241a42 52%,#a176ff 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(197,168,255,.58) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-rose,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="rose-soft"]{
  background-color:#160a12 !important;
  background-image:
    radial-gradient(circle at 28px 28px, rgba(255,158,199,.18) 0 10px, transparent 11px),
    linear-gradient(27deg, rgba(255,190,218,.13) 5%, transparent 5%, transparent 45%, rgba(255,190,218,.13) 45%, rgba(255,190,218,.13) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#160a12 0%,#401b31 52%,#ff9ec7 100%) !important;
  background-size:96px 96px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(255,190,218,.58) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-carbon,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="carbon-elite"]{
  background-color:#0b0f14 !important;
  background-image:
    linear-gradient(27deg, rgba(255,255,255,.10) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.10) 45%, rgba(255,255,255,.10) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.06) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.06) 45%, rgba(255,255,255,.06) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#07090c 0%,#1c232c 52%,#4b5562 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(255,255,255,.12) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="children-soft"]{
  background-color:#07172a !important;
  background-image:
    linear-gradient(27deg, rgba(255,255,255,.13) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.13) 45%, rgba(255,255,255,.13) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,227,241,.10) 5%, transparent 5%, transparent 45%, rgba(255,227,241,.10) 45%, rgba(255,227,241,.10) 55%, transparent 55%, transparent),
    radial-gradient(circle at 30px 34px, rgba(255,255,255,.34) 0 12px, transparent 12.8px),
    radial-gradient(circle at 19px 24px, rgba(255,255,255,.28) 0 5.8px, transparent 6.4px),
    radial-gradient(circle at 41px 24px, rgba(255,255,255,.28) 0 5.8px, transparent 6.4px),
    linear-gradient(145deg,#07172a 0%,#225983 52%,#8fcfff 100%) !important;
  background-size:18px 18px,18px 18px,96px 96px,96px 96px,96px 96px,100% 100% !important;
  background-position:0 0,9px 9px,0 0,0 0,0 0,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(160,220,255,.46) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="night-mosque"]{
  background-color:#050b13 !important;
  background-image:
    linear-gradient(27deg, rgba(215,192,122,.12) 5%, transparent 5%, transparent 45%, rgba(215,192,122,.12) 45%, rgba(215,192,122,.12) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(124,167,255,.10) 5%, transparent 5%, transparent 45%, rgba(124,167,255,.10) 45%, rgba(124,167,255,.10) 55%, transparent 55%, transparent),
    radial-gradient(circle at 18px 18px, rgba(255,255,255,.48) 0 1.2px, transparent 1.8px),
    radial-gradient(circle at 68px 34px, rgba(215,192,122,.30) 0 10px, transparent 10.8px),
    linear-gradient(90deg, transparent 0 31%, rgba(215,192,122,.18) 31% 33%, transparent 33% 57%, rgba(215,192,122,.18) 57% 59%, transparent 59% 100%),
    linear-gradient(145deg,#050b13 0%,#10213d 52%,#294f86 100%) !important;
  background-size:18px 18px,18px 18px,120px 120px,120px 120px,120px 120px,100% 100% !important;
  background-position:0 0,9px 9px,0 0,0 0,0 0,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(118,154,215,.44) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-grid .theme-card[data-theme="desert-sand"]{
  background-color:#2b1906 !important;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(255,237,190,.36) 0 1px, transparent 1.7px),
    radial-gradient(circle at 10px 8px, rgba(219,174,97,.26) 0 1px, transparent 1.8px),
    linear-gradient(27deg, rgba(255,237,190,.18) 5%, transparent 5%, transparent 45%, rgba(255,237,190,.18) 45%, rgba(255,237,190,.18) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(120,72,18,.18) 5%, transparent 5%, transparent 45%, rgba(120,72,18,.18) 45%, rgba(120,72,18,.18) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#2b1906 0%,#8a6227 52%,#d7a85e 100%) !important;
  background-size:16px 16px,18px 18px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,6px 8px,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(255,237,190,.48) !important;
}

html[class*="premium-theme-"] .theme-grid .theme-card h3,
html[class*="premium-theme-"] .theme-grid .theme-card p,
html[class*="premium-theme-"] .theme-grid .theme-card strong{
  color:#fff !important;
  text-shadow:0 2px 14px rgba(0,0,0,.58) !important;
}
html[class*="premium-theme-"] .theme-grid .theme-card .theme-chip{
  background:rgba(0,0,0,.26) !important;
  color:#fff !important;
  border-color:rgba(255,255,255,.22) !important;
}

/* Logo transparency only, without repainting parent sections */
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
}
/* ===== END FINAL CLEAN FIX ===== */
`;
  function inject(){
    let style=document.getElementById(STYLE_ID);
    if(!style){style=document.createElement('style');style.id=STYLE_ID;(document.head||document.documentElement).appendChild(style);}
    style.textContent=CSS;
  }
  inject();
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',inject);}
  window.addEventListener('barakaway:premium-theme-change',inject);
  window.addEventListener('storage',inject);
})();


(function(){
  const STYLE_ID='barakaway-theme-selector-card-material-lock-v20260510';
  const CSS = `

/* ===== BARAKAWAY THEME SELECTOR CARD MATERIAL LOCK — V20260510 ===== */
/* Theme selector cards must never inherit the currently active PRO theme. */
html body .page .theme-grid .theme-card,
html[class*="premium-theme-"] body .page .theme-grid .theme-card{
  color:#ffffff !important;
  isolation:isolate !important;
  overflow:hidden !important;
  text-shadow:0 2px 10px rgba(0,0,0,.32) !important;
}

html body .page .theme-grid .theme-card h3,
html body .page .theme-grid .theme-card p,
html body .page .theme-grid .theme-card strong,
html[class*="premium-theme-"] body .page .theme-grid .theme-card h3,
html[class*="premium-theme-"] body .page .theme-grid .theme-card p,
html[class*="premium-theme-"] body .page .theme-grid .theme-card strong{
  color:#ffffff !important;
  text-shadow:0 2px 10px rgba(0,0,0,.36) !important;
}

html body .page .theme-grid .theme-card .theme-chip,
html[class*="premium-theme-"] body .page .theme-grid .theme-card .theme-chip{
  background:rgba(0,0,0,.26) !important;
  border-color:rgba(255,255,255,.22) !important;
  color:#ffffff !important;
}

html body .page .theme-grid .theme-card.theme-gold,
html body .page .theme-grid .theme-card[data-theme="royal-gold"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-gold,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="royal-gold"]{
  background-color:#171208 !important;
  background-image:
    linear-gradient(27deg, rgba(255,239,184,.15) 5%, transparent 5%, transparent 45%, rgba(255,239,184,.15) 45%, rgba(255,239,184,.15) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(175,132,48,.13) 5%, transparent 5%, transparent 45%, rgba(175,132,48,.13) 45%, rgba(175,132,48,.13) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#171208 0%,#4b3615 52%,#d7c07a 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(244,220,148,.58) !important;
}

html body .page .theme-grid .theme-card.theme-emerald,
html body .page .theme-grid .theme-card[data-theme="emerald-quran"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-emerald,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="emerald-quran"]{
  background-color:#061109 !important;
  background-image:
    linear-gradient(27deg, rgba(102,198,128,.14) 5%, transparent 5%, transparent 45%, rgba(102,198,128,.14) 45%, rgba(102,198,128,.14) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#061109 0%,#12301d 52%,#4caf6a 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(102,198,128,.58) !important;
}

html body .page .theme-grid .theme-card.theme-violet,
html body .page .theme-grid .theme-card[data-theme="violet-noor"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-violet,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="violet-noor"]{
  background-color:#0d0a15 !important;
  background-image:
    linear-gradient(27deg, rgba(197,168,255,.14) 5%, transparent 5%, transparent 45%, rgba(197,168,255,.14) 45%, rgba(197,168,255,.14) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#0d0a15 0%,#241a42 52%,#a176ff 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(197,168,255,.58) !important;
}

html body .page .theme-grid .theme-card.theme-rose,
html body .page .theme-grid .theme-card[data-theme="rose-soft"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-rose,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="rose-soft"]{
  background-color:#160a12 !important;
  background-image:
    radial-gradient(circle at 28px 28px, rgba(255,158,199,.18) 0 10px, transparent 11px),
    linear-gradient(27deg, rgba(255,190,218,.13) 5%, transparent 5%, transparent 45%, rgba(255,190,218,.13) 45%, rgba(255,190,218,.13) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.07) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.07) 45%, rgba(255,255,255,.07) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#160a12 0%,#401b31 52%,#ff9ec7 100%) !important;
  background-size:96px 96px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(255,190,218,.58) !important;
}

html body .page .theme-grid .theme-card.theme-carbon,
html body .page .theme-grid .theme-card[data-theme="carbon-elite"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-carbon,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="carbon-elite"]{
  background-color:#0b0f14 !important;
  background-image:
    linear-gradient(27deg, rgba(255,255,255,.10) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.10) 45%, rgba(255,255,255,.10) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,255,255,.06) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.06) 45%, rgba(255,255,255,.06) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#07090c 0%,#1c232c 52%,#4b5562 100%) !important;
  background-size:18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,no-repeat !important;
  border-color:rgba(255,255,255,.12) !important;
}

html body .page .theme-grid .theme-card.theme-child,
html body .page .theme-grid .theme-card[data-theme="children-soft"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="children-soft"]{
  background-color:#07172a !important;
  background-image:
    linear-gradient(27deg, rgba(255,255,255,.13) 5%, transparent 5%, transparent 45%, rgba(255,255,255,.13) 45%, rgba(255,255,255,.13) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(255,227,241,.10) 5%, transparent 5%, transparent 45%, rgba(255,227,241,.10) 45%, rgba(255,227,241,.10) 55%, transparent 55%, transparent),
    radial-gradient(circle at 30px 34px, rgba(255,255,255,.34) 0 12px, transparent 12.8px),
    radial-gradient(circle at 19px 24px, rgba(255,255,255,.28) 0 5.8px, transparent 6.4px),
    radial-gradient(circle at 41px 24px, rgba(255,255,255,.28) 0 5.8px, transparent 6.4px),
    linear-gradient(145deg,#07172a 0%,#225983 52%,#8fcfff 100%) !important;
  background-size:18px 18px,18px 18px,96px 96px,96px 96px,96px 96px,100% 100% !important;
  background-position:0 0,9px 9px,0 0,0 0,0 0,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(160,220,255,.46) !important;
}

html body .page .theme-grid .theme-card.theme-night,
html body .page .theme-grid .theme-card[data-theme="night-mosque"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="night-mosque"]{
  background-color:#050b13 !important;
  background-image:
    radial-gradient(circle at 18px 18px, rgba(255,255,255,.48) 0 1.2px, transparent 1.8px),
    radial-gradient(circle at 48px 31px, rgba(255,255,255,.40) 0 1px, transparent 1.6px),
    radial-gradient(circle at 82px 16px, rgba(255,255,255,.44) 0 1.1px, transparent 1.7px),
    radial-gradient(circle at 68px 34px, rgba(215,192,122,.30) 0 10px, transparent 10.8px),
    linear-gradient(90deg, transparent 0 31%, rgba(215,192,122,.18) 31% 33%, transparent 33% 57%, rgba(215,192,122,.18) 57% 59%, transparent 59% 100%),
    linear-gradient(27deg, rgba(215,192,122,.12) 5%, transparent 5%, transparent 45%, rgba(215,192,122,.12) 45%, rgba(215,192,122,.12) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(124,167,255,.10) 5%, transparent 5%, transparent 45%, rgba(124,167,255,.10) 45%, rgba(124,167,255,.10) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#050b13 0%,#10213d 52%,#294f86 100%) !important;
  background-size:120px 120px,120px 120px,120px 120px,120px 120px,120px 120px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,0 0,0 0,0 0,0 0,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(118,154,215,.44) !important;
}

html body .page .theme-grid .theme-card.theme-sand,
html body .page .theme-grid .theme-card[data-theme="desert-sand"],
html[class*="premium-theme-"] body .page .theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] body .page .theme-grid .theme-card[data-theme="desert-sand"]{
  background-color:#2b1906 !important;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(255,237,190,.36) 0 1px, transparent 1.7px),
    radial-gradient(circle at 10px 8px, rgba(219,174,97,.26) 0 1px, transparent 1.8px),
    linear-gradient(27deg, rgba(255,237,190,.18) 5%, transparent 5%, transparent 45%, rgba(255,237,190,.18) 45%, rgba(255,237,190,.18) 55%, transparent 55%, transparent),
    linear-gradient(207deg, rgba(120,72,18,.18) 5%, transparent 5%, transparent 45%, rgba(120,72,18,.18) 45%, rgba(120,72,18,.18) 55%, transparent 55%, transparent),
    linear-gradient(145deg,#2b1906 0%,#8a6227 52%,#d7a85e 100%) !important;
  background-size:16px 16px,18px 18px,18px 18px,18px 18px,100% 100% !important;
  background-position:0 0,6px 8px,0 0,9px 9px,center !important;
  background-repeat:repeat,repeat,repeat,repeat,no-repeat !important;
  border-color:rgba(255,237,190,.48) !important;
}

html[class*="premium-theme-"] [class*="barakaway-logo"],
html[class*="premium-theme-"] [class*="brand-logo"],
html[class*="premium-theme-"] [class*="app-logo"],
html[class*="premium-theme-"] [class*="logo"],
html[class*="premium-theme-"] [data-logo],
html[class*="premium-theme-"] [data-barakaway-logo-lock],
html[class*="premium-theme-"] [class*="barakaway-logo"] *,
html[class*="premium-theme-"] [class*="brand-logo"] *,
html[class*="premium-theme-"] [class*="app-logo"] *,
html[class*="premium-theme-"] [class*="logo"] *,
html[class*="premium-theme-"] [data-logo] *,
html[class*="premium-theme-"] [data-barakaway-logo-lock] *{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  border-color:transparent !important;
  outline-color:transparent !important;
}
/* ===== END BARAKAWAY THEME SELECTOR CARD MATERIAL LOCK — V20260510 ===== */
`;
  function inject(){
    let style=document.getElementById(STYLE_ID);
    if(!style){
      style=document.createElement('style');
      style.id=STYLE_ID;
      (document.head||document.documentElement).appendChild(style);
    }
    style.textContent=CSS;
  }
  inject();
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', inject);
  window.addEventListener('barakaway:premium-theme-change', inject);
  setTimeout(inject,250);
  setTimeout(inject,1000);
})();

;(function(){
  var STYLE_ID = 'barakaway-all-premium-carbon-architecture-final';
  if(document.getElementById(STYLE_ID)) return;
  var style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = "\n\n/* ===== BARAKAWAY ALL PREMIUM THEMES: CARBON-ELITE ARCHITECTURE FINAL ===== */\n/* All non-carbon premium themes now use the same architecture as Carbon Elite: variables, full-app texture, selector card texture, buttons, and protected logo. */\n\nhtml.premium-theme-royal-gold{\n  --bg:#080604;\n  --surface:#130d05;\n  --surface-2:#211607;\n  --surface-3:#3a270b;\n  --border:rgba(244,220,148,.24);\n  --border-2:rgba(255,239,184,.34);\n  --text:#fff9e8;\n  --text-soft:#ead7a7;\n  --text-muted:#c4a867;\n  --green:#f2d982;\n  --green-strong:#9d7424;\n  --green-soft:#fff2bd;\n  --bw-accent:#f2d982;\n  --bw-accent-2:#fff6d2;\n  --bw-lux-border-main:rgba(255,232,160,.30);\n  --bw-lux-glow:rgba(255,210,95,.18);\n}\n\nhtml.premium-theme-emerald-quran{\n  --bg:#031009;\n  --surface:#06170e;\n  --surface-2:#0b2416;\n  --surface-3:#123823;\n  --border:rgba(139,236,167,.22);\n  --border-2:rgba(184,255,208,.32);\n  --text:#f2fff6;\n  --text-soft:#c8f4d5;\n  --text-muted:#89dca0;\n  --green:#86e6a1;\n  --green-strong:#186437;\n  --green-soft:#d9ffe3;\n  --bw-accent:#86e6a1;\n  --bw-accent-2:#d8ffd5;\n  --bw-lux-border-main:rgba(139,236,167,.30);\n  --bw-lux-glow:rgba(77,255,136,.16);\n}\n\nhtml.premium-theme-violet-noor{\n  --bg:#0a0613;\n  --surface:#120b22;\n  --surface-2:#1b1035;\n  --surface-3:#2b1856;\n  --border:rgba(199,172,255,.23);\n  --border-2:rgba(223,205,255,.34);\n  --text:#fcf8ff;\n  --text-soft:#e1d3ff;\n  --text-muted:#bca5ef;\n  --green:#c7acff;\n  --green-strong:#6740c8;\n  --green-soft:#efe7ff;\n  --bw-accent:#b98cff;\n  --bw-accent-2:#f0dcff;\n  --bw-lux-border-main:rgba(199,172,255,.30);\n  --bw-lux-glow:rgba(174,116,255,.18);\n}\n\nhtml.premium-theme-rose-soft{\n  --bg:#13070f;\n  --surface:#1e0b17;\n  --surface-2:#301020;\n  --surface-3:#4a1932;\n  --border:rgba(255,186,218,.23);\n  --border-2:rgba(255,216,233,.34);\n  --text:#fff8fb;\n  --text-soft:#ffd9e9;\n  --text-muted:#efa8c9;\n  --green:#ff9ec7;\n  --green-strong:#9f355f;\n  --green-soft:#ffe7f1;\n  --bw-accent:#ff9ec7;\n  --bw-accent-2:#ffe1ee;\n  --bw-lux-border-main:rgba(255,186,218,.30);\n  --bw-lux-glow:rgba(255,120,180,.16);\n}\n\nhtml.premium-theme-children-soft{\n  --bg:#fff7fb;\n  --surface:#fff2f9;\n  --surface-2:#f6edff;\n  --surface-3:#ffe3f3;\n  --border:rgba(255,255,255,.62);\n  --border-2:rgba(255,159,210,.48);\n  --text:#2b2230;\n  --text-soft:#4a3b52;\n  --text-muted:#725f7c;\n  --green:#ff9fd2;\n  --green-strong:#9b67df;\n  --green-soft:#fff0fa;\n  --bw-accent:#ff9fd2;\n  --bw-accent-2:#b69cff;\n  --bw-lux-border-main:rgba(255,255,255,.72);\n  --bw-lux-glow:rgba(255,159,210,.22);\n}\n\nhtml.premium-theme-night-mosque{\n  --bg:#020817;\n  --surface:#06112d;\n  --surface-2:#081744;\n  --surface-3:#102760;\n  --border:rgba(150,180,255,.28);\n  --border-2:rgba(215,192,122,.36);\n  --text:#f8fbff;\n  --text-soft:#dce9ff;\n  --text-muted:#a9c2f0;\n  --green:#d7c07a;\n  --green-strong:#274f92;\n  --green-soft:#fff0b4;\n  --bw-accent:#d7c07a;\n  --bw-accent-2:#8fb5ff;\n  --bw-lux-border-main:rgba(150,180,255,.32);\n  --bw-lux-glow:rgba(110,150,255,.17);\n}\n\nhtml.premium-theme-desert-sand{\n  --bg:#150c04;\n  --surface:#2a1908;\n  --surface-2:#5a3514;\n  --surface-3:#a57136;\n  --border:rgba(255,239,198,.28);\n  --border-2:rgba(255,246,214,.40);\n  --text:#fff8e7;\n  --text-soft:#f2dfb8;\n  --text-muted:#d1ad73;\n  --green:#ffedbe;\n  --green-strong:#8a5a20;\n  --green-soft:#fff3cf;\n  --bw-accent:#ffedbe;\n  --bw-accent-2:#dbae61;\n  --bw-lux-border-main:rgba(255,239,198,.34);\n  --bw-lux-glow:rgba(219,174,97,.18);\n}\n\nhtml.premium-theme-royal-gold body,\nhtml.premium-theme-royal-gold .container,\nhtml.premium-theme-royal-gold .hero,\nhtml.premium-theme-royal-gold .brand-prayer-hero,\nhtml.premium-theme-royal-gold .today-hub,\nhtml.premium-theme-royal-gold .about-project-card,\nhtml.premium-theme-royal-gold .barakaway-pro-final,\nhtml.premium-theme-royal-gold .block,\nhtml.premium-theme-royal-gold .card,\nhtml.premium-theme-royal-gold .box,\nhtml.premium-theme-royal-gold .panel,\nhtml.premium-theme-royal-gold .quote,\nhtml.premium-theme-royal-gold .empty,\nhtml.premium-theme-royal-gold .article,\nhtml.premium-theme-royal-gold .category-panel,\nhtml.premium-theme-royal-gold .surah-card,\nhtml.premium-theme-royal-gold .prayer-card,\nhtml.premium-theme-royal-gold .toggle-row,\nhtml.premium-theme-royal-gold .meta-item,\nhtml.premium-theme-royal-gold .note-box,\nhtml.premium-theme-royal-gold .jumuah-box,\nhtml.premium-theme-royal-gold .month-day,\nhtml.premium-theme-royal-gold .month-head,\nhtml.premium-theme-royal-gold .wallet-support,\nhtml.premium-theme-royal-gold .home-widget,\nhtml.premium-theme-royal-gold .dua-card,\nhtml.premium-theme-royal-gold .ayah-card,\nhtml.premium-theme-royal-gold .master-audio-wrap,\nhtml.premium-theme-royal-gold .reader-side,\nhtml.premium-theme-royal-gold .reader-main,\nhtml.premium-theme-royal-gold .dua-side,\nhtml.premium-theme-royal-gold .dua-main,\nhtml.premium-theme-royal-gold .ai-side,\nhtml.premium-theme-royal-gold .ai-main,\nhtml.premium-theme-royal-gold .player-panel,\nhtml.premium-theme-royal-gold .preview-panel,\nhtml.premium-theme-royal-gold .app-menu-btn,\nhtml.premium-theme-royal-gold .today-action,\nhtml.premium-theme-royal-gold .premium-resource-card,\nhtml.premium-theme-royal-gold .bottom-app-nav,\nhtml.premium-theme-royal-gold .bottom-app-nav-inner{\n  background-color:#130d05 !important;\n  background-image:\n    linear-gradient(45deg,rgba(255,236,170,.115) 0 8%,transparent 8% 42%,rgba(255,218,118,.105) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.055) 0 8%,transparent 8% 42%,rgba(255,220,120,.055) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(255,238,174,.24),transparent 24%),\n    radial-gradient(circle at 16% 88%,rgba(175,132,48,.18),transparent 28%),\n    linear-gradient(135deg,#080604 0%,#241707 50%,#7b5316 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center,center !important;\n  border-color:rgba(255,232,160,.24) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.50),0 0 0 1px rgba(255,232,160,.055),inset 0 1px 0 rgba(255,246,208,.16),inset 0 -24px 38px rgba(70,41,8,.40) !important;\n}\n\nhtml.premium-theme-emerald-quran body,\nhtml.premium-theme-emerald-quran .container,\nhtml.premium-theme-emerald-quran .hero,\nhtml.premium-theme-emerald-quran .brand-prayer-hero,\nhtml.premium-theme-emerald-quran .today-hub,\nhtml.premium-theme-emerald-quran .about-project-card,\nhtml.premium-theme-emerald-quran .barakaway-pro-final,\nhtml.premium-theme-emerald-quran .block,\nhtml.premium-theme-emerald-quran .card,\nhtml.premium-theme-emerald-quran .box,\nhtml.premium-theme-emerald-quran .panel,\nhtml.premium-theme-emerald-quran .quote,\nhtml.premium-theme-emerald-quran .empty,\nhtml.premium-theme-emerald-quran .article,\nhtml.premium-theme-emerald-quran .category-panel,\nhtml.premium-theme-emerald-quran .surah-card,\nhtml.premium-theme-emerald-quran .prayer-card,\nhtml.premium-theme-emerald-quran .toggle-row,\nhtml.premium-theme-emerald-quran .meta-item,\nhtml.premium-theme-emerald-quran .note-box,\nhtml.premium-theme-emerald-quran .jumuah-box,\nhtml.premium-theme-emerald-quran .month-day,\nhtml.premium-theme-emerald-quran .month-head,\nhtml.premium-theme-emerald-quran .wallet-support,\nhtml.premium-theme-emerald-quran .home-widget,\nhtml.premium-theme-emerald-quran .dua-card,\nhtml.premium-theme-emerald-quran .ayah-card,\nhtml.premium-theme-emerald-quran .master-audio-wrap,\nhtml.premium-theme-emerald-quran .reader-side,\nhtml.premium-theme-emerald-quran .reader-main,\nhtml.premium-theme-emerald-quran .dua-side,\nhtml.premium-theme-emerald-quran .dua-main,\nhtml.premium-theme-emerald-quran .ai-side,\nhtml.premium-theme-emerald-quran .ai-main,\nhtml.premium-theme-emerald-quran .player-panel,\nhtml.premium-theme-emerald-quran .preview-panel,\nhtml.premium-theme-emerald-quran .app-menu-btn,\nhtml.premium-theme-emerald-quran .today-action,\nhtml.premium-theme-emerald-quran .premium-resource-card,\nhtml.premium-theme-emerald-quran .bottom-app-nav,\nhtml.premium-theme-emerald-quran .bottom-app-nav-inner{\n  background-color:#06170e !important;\n  background-image:\n    linear-gradient(45deg,rgba(139,236,167,.105) 0 8%,transparent 8% 42%,rgba(216,255,213,.075) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.045) 0 8%,transparent 8% 42%,rgba(134,230,161,.060) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(139,236,167,.22),transparent 24%),\n    radial-gradient(circle at 16% 88%,rgba(17,108,57,.30),transparent 30%),\n    linear-gradient(135deg,#031009 0%,#082517 50%,#155c35 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center,center !important;\n  border-color:rgba(139,236,167,.22) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.50),0 0 0 1px rgba(184,255,208,.050),inset 0 1px 0 rgba(218,255,226,.15),inset 0 -24px 38px rgba(0,34,17,.40) !important;\n}\n\nhtml.premium-theme-violet-noor body,\nhtml.premium-theme-violet-noor .container,\nhtml.premium-theme-violet-noor .hero,\nhtml.premium-theme-violet-noor .brand-prayer-hero,\nhtml.premium-theme-violet-noor .today-hub,\nhtml.premium-theme-violet-noor .about-project-card,\nhtml.premium-theme-violet-noor .barakaway-pro-final,\nhtml.premium-theme-violet-noor .block,\nhtml.premium-theme-violet-noor .card,\nhtml.premium-theme-violet-noor .box,\nhtml.premium-theme-violet-noor .panel,\nhtml.premium-theme-violet-noor .quote,\nhtml.premium-theme-violet-noor .empty,\nhtml.premium-theme-violet-noor .article,\nhtml.premium-theme-violet-noor .category-panel,\nhtml.premium-theme-violet-noor .surah-card,\nhtml.premium-theme-violet-noor .prayer-card,\nhtml.premium-theme-violet-noor .toggle-row,\nhtml.premium-theme-violet-noor .meta-item,\nhtml.premium-theme-violet-noor .note-box,\nhtml.premium-theme-violet-noor .jumuah-box,\nhtml.premium-theme-violet-noor .month-day,\nhtml.premium-theme-violet-noor .month-head,\nhtml.premium-theme-violet-noor .wallet-support,\nhtml.premium-theme-violet-noor .home-widget,\nhtml.premium-theme-violet-noor .dua-card,\nhtml.premium-theme-violet-noor .ayah-card,\nhtml.premium-theme-violet-noor .master-audio-wrap,\nhtml.premium-theme-violet-noor .reader-side,\nhtml.premium-theme-violet-noor .reader-main,\nhtml.premium-theme-violet-noor .dua-side,\nhtml.premium-theme-violet-noor .dua-main,\nhtml.premium-theme-violet-noor .ai-side,\nhtml.premium-theme-violet-noor .ai-main,\nhtml.premium-theme-violet-noor .player-panel,\nhtml.premium-theme-violet-noor .preview-panel,\nhtml.premium-theme-violet-noor .app-menu-btn,\nhtml.premium-theme-violet-noor .today-action,\nhtml.premium-theme-violet-noor .premium-resource-card,\nhtml.premium-theme-violet-noor .bottom-app-nav,\nhtml.premium-theme-violet-noor .bottom-app-nav-inner{\n  background-color:#120b22 !important;\n  background-image:\n    linear-gradient(45deg,rgba(199,172,255,.105) 0 8%,transparent 8% 42%,rgba(240,220,255,.070) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.045) 0 8%,transparent 8% 42%,rgba(185,140,255,.065) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(199,172,255,.24),transparent 24%),\n    radial-gradient(circle at 16% 88%,rgba(103,64,200,.28),transparent 30%),\n    linear-gradient(135deg,#0a0613 0%,#1d1139 50%,#4a2f8c 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center,center !important;\n  border-color:rgba(199,172,255,.23) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.52),0 0 0 1px rgba(223,205,255,.052),inset 0 1px 0 rgba(246,236,255,.15),inset 0 -24px 38px rgba(20,7,55,.42) !important;\n}\n\nhtml.premium-theme-rose-soft body,\nhtml.premium-theme-rose-soft .container,\nhtml.premium-theme-rose-soft .hero,\nhtml.premium-theme-rose-soft .brand-prayer-hero,\nhtml.premium-theme-rose-soft .today-hub,\nhtml.premium-theme-rose-soft .about-project-card,\nhtml.premium-theme-rose-soft .barakaway-pro-final,\nhtml.premium-theme-rose-soft .block,\nhtml.premium-theme-rose-soft .card,\nhtml.premium-theme-rose-soft .box,\nhtml.premium-theme-rose-soft .panel,\nhtml.premium-theme-rose-soft .quote,\nhtml.premium-theme-rose-soft .empty,\nhtml.premium-theme-rose-soft .article,\nhtml.premium-theme-rose-soft .category-panel,\nhtml.premium-theme-rose-soft .surah-card,\nhtml.premium-theme-rose-soft .prayer-card,\nhtml.premium-theme-rose-soft .toggle-row,\nhtml.premium-theme-rose-soft .meta-item,\nhtml.premium-theme-rose-soft .note-box,\nhtml.premium-theme-rose-soft .jumuah-box,\nhtml.premium-theme-rose-soft .month-day,\nhtml.premium-theme-rose-soft .month-head,\nhtml.premium-theme-rose-soft .wallet-support,\nhtml.premium-theme-rose-soft .home-widget,\nhtml.premium-theme-rose-soft .dua-card,\nhtml.premium-theme-rose-soft .ayah-card,\nhtml.premium-theme-rose-soft .master-audio-wrap,\nhtml.premium-theme-rose-soft .reader-side,\nhtml.premium-theme-rose-soft .reader-main,\nhtml.premium-theme-rose-soft .dua-side,\nhtml.premium-theme-rose-soft .dua-main,\nhtml.premium-theme-rose-soft .ai-side,\nhtml.premium-theme-rose-soft .ai-main,\nhtml.premium-theme-rose-soft .player-panel,\nhtml.premium-theme-rose-soft .preview-panel,\nhtml.premium-theme-rose-soft .app-menu-btn,\nhtml.premium-theme-rose-soft .today-action,\nhtml.premium-theme-rose-soft .premium-resource-card,\nhtml.premium-theme-rose-soft .bottom-app-nav,\nhtml.premium-theme-rose-soft .bottom-app-nav-inner{\n  background-color:#1e0b17 !important;\n  background-image:\n    linear-gradient(45deg,rgba(255,186,218,.105) 0 8%,transparent 8% 42%,rgba(255,225,238,.075) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.048) 0 8%,transparent 8% 42%,rgba(255,158,199,.068) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(255,186,218,.23),transparent 24%),\n    radial-gradient(circle at 16% 88%,rgba(159,53,95,.28),transparent 30%),\n    linear-gradient(135deg,#13070f 0%,#301020 50%,#78304f 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center,center !important;\n  border-color:rgba(255,186,218,.23) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.50),0 0 0 1px rgba(255,216,233,.052),inset 0 1px 0 rgba(255,238,246,.16),inset 0 -24px 38px rgba(54,10,30,.40) !important;\n}\n\nhtml.premium-theme-children-soft body,\nhtml.premium-theme-children-soft .container,\nhtml.premium-theme-children-soft .hero,\nhtml.premium-theme-children-soft .brand-prayer-hero,\nhtml.premium-theme-children-soft .today-hub,\nhtml.premium-theme-children-soft .about-project-card,\nhtml.premium-theme-children-soft .barakaway-pro-final,\nhtml.premium-theme-children-soft .block,\nhtml.premium-theme-children-soft .card,\nhtml.premium-theme-children-soft .box,\nhtml.premium-theme-children-soft .panel,\nhtml.premium-theme-children-soft .quote,\nhtml.premium-theme-children-soft .empty,\nhtml.premium-theme-children-soft .article,\nhtml.premium-theme-children-soft .category-panel,\nhtml.premium-theme-children-soft .surah-card,\nhtml.premium-theme-children-soft .prayer-card,\nhtml.premium-theme-children-soft .toggle-row,\nhtml.premium-theme-children-soft .meta-item,\nhtml.premium-theme-children-soft .note-box,\nhtml.premium-theme-children-soft .jumuah-box,\nhtml.premium-theme-children-soft .month-day,\nhtml.premium-theme-children-soft .month-head,\nhtml.premium-theme-children-soft .wallet-support,\nhtml.premium-theme-children-soft .home-widget,\nhtml.premium-theme-children-soft .dua-card,\nhtml.premium-theme-children-soft .ayah-card,\nhtml.premium-theme-children-soft .master-audio-wrap,\nhtml.premium-theme-children-soft .reader-side,\nhtml.premium-theme-children-soft .reader-main,\nhtml.premium-theme-children-soft .dua-side,\nhtml.premium-theme-children-soft .dua-main,\nhtml.premium-theme-children-soft .ai-side,\nhtml.premium-theme-children-soft .ai-main,\nhtml.premium-theme-children-soft .player-panel,\nhtml.premium-theme-children-soft .preview-panel,\nhtml.premium-theme-children-soft .app-menu-btn,\nhtml.premium-theme-children-soft .today-action,\nhtml.premium-theme-children-soft .premium-resource-card,\nhtml.premium-theme-children-soft .bottom-app-nav,\nhtml.premium-theme-children-soft .bottom-app-nav-inner{\n  background-color:#fff7fb !important;\n  background-image:\n    linear-gradient(45deg,rgba(255,255,255,.46) 0 8%,transparent 8% 42%,rgba(255,194,226,.16) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(182,156,255,.12) 0 8%,transparent 8% 42%,rgba(255,255,255,.22) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(255,255,255,.68),transparent 24%),\n    radial-gradient(circle at 16% 88%,rgba(255,159,210,.24),transparent 30%),\n    linear-gradient(135deg,#fff7fb 0%,#f6edff 50%,#ffd9ef 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center,center !important;\n  border-color:rgba(255,255,255,.62) !important;\n  box-shadow:0 24px 58px rgba(142,73,128,.16),0 0 0 1px rgba(255,255,255,.48),inset 0 1px 0 rgba(255,255,255,.82),inset 0 -24px 38px rgba(255,159,210,.12) !important;\n}\n\nhtml.premium-theme-night-mosque body,\nhtml.premium-theme-night-mosque .container,\nhtml.premium-theme-night-mosque .hero,\nhtml.premium-theme-night-mosque .brand-prayer-hero,\nhtml.premium-theme-night-mosque .today-hub,\nhtml.premium-theme-night-mosque .about-project-card,\nhtml.premium-theme-night-mosque .barakaway-pro-final,\nhtml.premium-theme-night-mosque .block,\nhtml.premium-theme-night-mosque .card,\nhtml.premium-theme-night-mosque .box,\nhtml.premium-theme-night-mosque .panel,\nhtml.premium-theme-night-mosque .quote,\nhtml.premium-theme-night-mosque .empty,\nhtml.premium-theme-night-mosque .article,\nhtml.premium-theme-night-mosque .category-panel,\nhtml.premium-theme-night-mosque .surah-card,\nhtml.premium-theme-night-mosque .prayer-card,\nhtml.premium-theme-night-mosque .toggle-row,\nhtml.premium-theme-night-mosque .meta-item,\nhtml.premium-theme-night-mosque .note-box,\nhtml.premium-theme-night-mosque .jumuah-box,\nhtml.premium-theme-night-mosque .month-day,\nhtml.premium-theme-night-mosque .month-head,\nhtml.premium-theme-night-mosque .wallet-support,\nhtml.premium-theme-night-mosque .home-widget,\nhtml.premium-theme-night-mosque .dua-card,\nhtml.premium-theme-night-mosque .ayah-card,\nhtml.premium-theme-night-mosque .master-audio-wrap,\nhtml.premium-theme-night-mosque .reader-side,\nhtml.premium-theme-night-mosque .reader-main,\nhtml.premium-theme-night-mosque .dua-side,\nhtml.premium-theme-night-mosque .dua-main,\nhtml.premium-theme-night-mosque .ai-side,\nhtml.premium-theme-night-mosque .ai-main,\nhtml.premium-theme-night-mosque .player-panel,\nhtml.premium-theme-night-mosque .preview-panel,\nhtml.premium-theme-night-mosque .app-menu-btn,\nhtml.premium-theme-night-mosque .today-action,\nhtml.premium-theme-night-mosque .premium-resource-card,\nhtml.premium-theme-night-mosque .bottom-app-nav,\nhtml.premium-theme-night-mosque .bottom-app-nav-inner{\n  background-color:#06112d !important;\n  background-image:\n    radial-gradient(circle at 16px 18px,rgba(255,255,255,.40) 0 1.2px,transparent 1.9px),\n    radial-gradient(circle at 48px 32px,rgba(255,255,255,.32) 0 1px,transparent 1.7px),\n    linear-gradient(45deg,rgba(150,180,255,.095) 0 8%,transparent 8% 42%,rgba(215,192,122,.070) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.045) 0 8%,transparent 8% 42%,rgba(143,181,255,.060) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(215,192,122,.22),transparent 24%),\n    linear-gradient(135deg,#020817 0%,#081744 50%,#1f4d93 100%) !important;\n  background-size:124px 124px,124px 124px,22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,0 0,0 0,11px 11px,center,center !important;\n  border-color:rgba(150,180,255,.28) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.56),0 0 0 1px rgba(150,180,255,.052),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -24px 38px rgba(0,8,32,.46) !important;\n}\n\nhtml.premium-theme-desert-sand body,\nhtml.premium-theme-desert-sand .container,\nhtml.premium-theme-desert-sand .hero,\nhtml.premium-theme-desert-sand .brand-prayer-hero,\nhtml.premium-theme-desert-sand .today-hub,\nhtml.premium-theme-desert-sand .about-project-card,\nhtml.premium-theme-desert-sand .barakaway-pro-final,\nhtml.premium-theme-desert-sand .block,\nhtml.premium-theme-desert-sand .card,\nhtml.premium-theme-desert-sand .box,\nhtml.premium-theme-desert-sand .panel,\nhtml.premium-theme-desert-sand .quote,\nhtml.premium-theme-desert-sand .empty,\nhtml.premium-theme-desert-sand .article,\nhtml.premium-theme-desert-sand .category-panel,\nhtml.premium-theme-desert-sand .surah-card,\nhtml.premium-theme-desert-sand .prayer-card,\nhtml.premium-theme-desert-sand .toggle-row,\nhtml.premium-theme-desert-sand .meta-item,\nhtml.premium-theme-desert-sand .note-box,\nhtml.premium-theme-desert-sand .jumuah-box,\nhtml.premium-theme-desert-sand .month-day,\nhtml.premium-theme-desert-sand .month-head,\nhtml.premium-theme-desert-sand .wallet-support,\nhtml.premium-theme-desert-sand .home-widget,\nhtml.premium-theme-desert-sand .dua-card,\nhtml.premium-theme-desert-sand .ayah-card,\nhtml.premium-theme-desert-sand .master-audio-wrap,\nhtml.premium-theme-desert-sand .reader-side,\nhtml.premium-theme-desert-sand .reader-main,\nhtml.premium-theme-desert-sand .dua-side,\nhtml.premium-theme-desert-sand .dua-main,\nhtml.premium-theme-desert-sand .ai-side,\nhtml.premium-theme-desert-sand .ai-main,\nhtml.premium-theme-desert-sand .player-panel,\nhtml.premium-theme-desert-sand .preview-panel,\nhtml.premium-theme-desert-sand .app-menu-btn,\nhtml.premium-theme-desert-sand .today-action,\nhtml.premium-theme-desert-sand .premium-resource-card,\nhtml.premium-theme-desert-sand .bottom-app-nav,\nhtml.premium-theme-desert-sand .bottom-app-nav-inner{\n  background-color:#2a1908 !important;\n  background-image:\n    radial-gradient(circle at 7px 8px,rgba(255,239,198,.30) 0 1px,transparent 1.8px),\n    linear-gradient(45deg,rgba(255,239,198,.105) 0 8%,transparent 8% 42%,rgba(219,174,97,.080) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.046) 0 8%,transparent 8% 42%,rgba(255,237,190,.060) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 82% 12%,rgba(255,239,198,.22),transparent 24%),\n    linear-gradient(135deg,#150c04 0%,#5a3514 50%,#c8944f 100%) !important;\n  background-size:18px 18px,22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,0 0,11px 11px,center,center !important;\n  border-color:rgba(255,239,198,.28) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.50),0 0 0 1px rgba(255,246,214,.052),inset 0 1px 0 rgba(255,246,214,.16),inset 0 -24px 38px rgba(64,36,10,.40) !important;\n}\n\n.theme-grid .theme-card.theme-gold,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-gold,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-royal-gold,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"royal-gold\"],\nbody .theme-grid .theme-card[data-theme=\"royal-gold\"]{\n  background-color:#130d05 !important;\n  background-image:\n    linear-gradient(45deg,rgba(255,236,170,.16) 0 8%,transparent 8% 42%,rgba(255,218,118,.13) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.070) 0 8%,transparent 8% 42%,rgba(255,220,120,.075) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(255,238,174,.30),transparent 24%),\n    linear-gradient(135deg,#080604 0%,#2d1d08 52%,#b88928 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center !important;\n  border-color:rgba(255,232,160,.34) !important;\n  box-shadow:0 24px 56px rgba(0,0,0,.42),0 0 0 1px rgba(255,232,160,.08),inset 0 1px 0 rgba(255,246,208,.18),inset 0 -22px 34px rgba(70,41,8,.34) !important;\n}\n\n.theme-grid .theme-card.theme-emerald,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-emerald,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-emerald-quran,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"emerald-quran\"],\nbody .theme-grid .theme-card[data-theme=\"emerald-quran\"]{\n  background-color:#06170e !important;\n  background-image:\n    linear-gradient(45deg,rgba(139,236,167,.15) 0 8%,transparent 8% 42%,rgba(216,255,213,.11) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.062) 0 8%,transparent 8% 42%,rgba(134,230,161,.080) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(139,236,167,.30),transparent 24%),\n    linear-gradient(135deg,#031009 0%,#0b2c1a 52%,#20935a 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center !important;\n  border-color:rgba(139,236,167,.34) !important;\n  box-shadow:0 24px 56px rgba(0,0,0,.44),0 0 0 1px rgba(184,255,208,.08),inset 0 1px 0 rgba(218,255,226,.18),inset 0 -22px 34px rgba(0,34,17,.34) !important;\n}\n\n.theme-grid .theme-card.theme-violet,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-violet,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-violet-noor,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"violet-noor\"],\nbody .theme-grid .theme-card[data-theme=\"violet-noor\"]{\n  background-color:#120b22 !important;\n  background-image:\n    linear-gradient(45deg,rgba(199,172,255,.15) 0 8%,transparent 8% 42%,rgba(240,220,255,.105) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.062) 0 8%,transparent 8% 42%,rgba(185,140,255,.080) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(199,172,255,.32),transparent 24%),\n    linear-gradient(135deg,#0a0613 0%,#24134c 52%,#8758ff 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center !important;\n  border-color:rgba(199,172,255,.34) !important;\n  box-shadow:0 24px 56px rgba(0,0,0,.46),0 0 0 1px rgba(223,205,255,.08),inset 0 1px 0 rgba(246,236,255,.18),inset 0 -22px 34px rgba(20,7,55,.35) !important;\n}\n\n.theme-grid .theme-card.theme-rose,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-rose,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-rose-soft,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"rose-soft\"],\nbody .theme-grid .theme-card[data-theme=\"rose-soft\"]{\n  background-color:#1e0b17 !important;\n  background-image:\n    linear-gradient(45deg,rgba(255,186,218,.15) 0 8%,transparent 8% 42%,rgba(255,225,238,.105) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.064) 0 8%,transparent 8% 42%,rgba(255,158,199,.085) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(255,186,218,.31),transparent 24%),\n    linear-gradient(135deg,#13070f 0%,#3a1026 52%,#d65b91 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center !important;\n  border-color:rgba(255,186,218,.34) !important;\n  box-shadow:0 24px 56px rgba(0,0,0,.44),0 0 0 1px rgba(255,216,233,.08),inset 0 1px 0 rgba(255,238,246,.18),inset 0 -22px 34px rgba(54,10,30,.34) !important;\n}\n\n.theme-grid .theme-card.theme-child,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-child,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-children-soft,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"children-soft\"],\nbody .theme-grid .theme-card[data-theme=\"children-soft\"]{\n  background-color:#fff7fb !important;\n  background-image:\n    linear-gradient(45deg,rgba(255,255,255,.54) 0 8%,transparent 8% 42%,rgba(255,194,226,.20) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(182,156,255,.16) 0 8%,transparent 8% 42%,rgba(255,255,255,.24) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(255,255,255,.70),transparent 24%),\n    linear-gradient(135deg,#fff7fb 0%,#f6edff 52%,#ffcce8 100%) !important;\n  background-size:22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,11px 11px,center,center !important;\n  border-color:rgba(255,255,255,.72) !important;\n  box-shadow:0 24px 56px rgba(142,73,128,.18),0 0 0 1px rgba(255,255,255,.52),inset 0 1px 0 rgba(255,255,255,.86),inset 0 -22px 34px rgba(255,159,210,.12) !important;\n}\n\n.theme-grid .theme-card.theme-night,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-night,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-night-mosque,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"night-mosque\"],\nbody .theme-grid .theme-card[data-theme=\"night-mosque\"]{\n  background-color:#06112d !important;\n  background-image:\n    radial-gradient(circle at 16px 18px,rgba(255,255,255,.42) 0 1.2px,transparent 1.9px),\n    linear-gradient(45deg,rgba(150,180,255,.13) 0 8%,transparent 8% 42%,rgba(215,192,122,.095) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.060) 0 8%,transparent 8% 42%,rgba(143,181,255,.078) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(215,192,122,.27),transparent 24%),\n    linear-gradient(135deg,#020817 0%,#081744 52%,#2f65bc 100%) !important;\n  background-size:124px 124px,22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,0 0,11px 11px,center,center !important;\n  border-color:rgba(150,180,255,.38) !important;\n  box-shadow:0 24px 56px rgba(0,0,0,.50),0 0 0 1px rgba(150,180,255,.08),inset 0 1px 0 rgba(255,255,255,.16),inset 0 -22px 34px rgba(0,8,32,.40) !important;\n}\n\n.theme-grid .theme-card.theme-sand,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-sand,\nhtml[class*=\"premium-theme-\"] .bw-theme-sample-desert-sand,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"desert-sand\"],\nbody .theme-grid .theme-card[data-theme=\"desert-sand\"]{\n  background-color:#2a1908 !important;\n  background-image:\n    radial-gradient(circle at 7px 8px,rgba(255,239,198,.34) 0 1px,transparent 1.8px),\n    linear-gradient(45deg,rgba(255,239,198,.145) 0 8%,transparent 8% 42%,rgba(219,174,97,.100) 42% 58%,transparent 58% 100%),\n    linear-gradient(-45deg,rgba(255,255,255,.060) 0 8%,transparent 8% 42%,rgba(255,237,190,.075) 42% 58%,transparent 58% 100%),\n    radial-gradient(circle at 84% 10%,rgba(255,239,198,.27),transparent 24%),\n    linear-gradient(135deg,#150c04 0%,#5a3514 52%,#d59b4e 100%) !important;\n  background-size:18px 18px,22px 22px,22px 22px,100% 100%,100% 100% !important;\n  background-position:0 0,0 0,11px 11px,center,center !important;\n  border-color:rgba(255,239,198,.42) !important;\n  box-shadow:0 24px 56px rgba(0,0,0,.44),0 0 0 1px rgba(255,246,214,.08),inset 0 1px 0 rgba(255,246,214,.18),inset 0 -22px 34px rgba(64,36,10,.34) !important;\n}\n\n.theme-grid .theme-card.theme-gold::after,\n.theme-grid .theme-card.theme-emerald::after,\n.theme-grid .theme-card.theme-violet::after,\n.theme-grid .theme-card.theme-rose::after,\n.theme-grid .theme-card.theme-child::after,\n.theme-grid .theme-card.theme-night::after,\n.theme-grid .theme-card.theme-sand::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"royal-gold\"]::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"emerald-quran\"]::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"violet-noor\"]::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"rose-soft\"]::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"children-soft\"]::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"night-mosque\"]::after,\nhtml[class*=\"premium-theme-\"] .theme-card[data-theme=\"desert-sand\"]::after{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:linear-gradient(118deg,transparent 0%,rgba(255,255,255,.16) 20%,transparent 33%,transparent 66%,rgba(255,255,255,.070) 78%,transparent 100%);\n  pointer-events:none;\n  mix-blend-mode:screen;\n}\n\nhtml.premium-theme-royal-gold button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-royal-gold .btn,\nhtml.premium-theme-royal-gold .install-btn,\nhtml.premium-theme-royal-gold .support-project-btn,\nhtml.premium-theme-royal-gold .copy-wallet-btn,\nhtml.premium-theme-royal-gold .quick-btn{background:linear-gradient(180deg,#f6dd88 0%,#b98729 48%,#4b2d09 100%) !important;border-color:rgba(255,239,184,.34) !important;color:#140e05 !important;box-shadow:0 16px 34px rgba(0,0,0,.38),inset 0 1px 0 rgba(255,255,255,.28),inset 0 -12px 24px rgba(70,41,8,.34) !important;}\nhtml.premium-theme-emerald-quran button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-emerald-quran .btn,\nhtml.premium-theme-emerald-quran .install-btn,\nhtml.premium-theme-emerald-quran .support-project-btn,\nhtml.premium-theme-emerald-quran .copy-wallet-btn,\nhtml.premium-theme-emerald-quran .quick-btn{background:linear-gradient(180deg,#8beca7 0%,#21884f 48%,#083d20 100%) !important;border-color:rgba(184,255,208,.32) !important;color:#ffffff !important;box-shadow:0 16px 34px rgba(0,0,0,.40),inset 0 1px 0 rgba(255,255,255,.24),inset 0 -12px 24px rgba(0,34,17,.36) !important;}\nhtml.premium-theme-violet-noor button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-violet-noor .btn,\nhtml.premium-theme-violet-noor .install-btn,\nhtml.premium-theme-violet-noor .support-project-btn,\nhtml.premium-theme-violet-noor .copy-wallet-btn,\nhtml.premium-theme-violet-noor .quick-btn{background:linear-gradient(180deg,#c7acff 0%,#7651d8 48%,#2a1760 100%) !important;border-color:rgba(223,205,255,.34) !important;color:#ffffff !important;box-shadow:0 16px 34px rgba(0,0,0,.40),inset 0 1px 0 rgba(255,255,255,.22),inset 0 -12px 24px rgba(20,7,55,.36) !important;}\nhtml.premium-theme-rose-soft button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-rose-soft .btn,\nhtml.premium-theme-rose-soft .install-btn,\nhtml.premium-theme-rose-soft .support-project-btn,\nhtml.premium-theme-rose-soft .copy-wallet-btn,\nhtml.premium-theme-rose-soft .quick-btn{background:linear-gradient(180deg,#ffbadb 0%,#c95586 48%,#582039 100%) !important;border-color:rgba(255,216,233,.34) !important;color:#ffffff !important;box-shadow:0 16px 34px rgba(0,0,0,.40),inset 0 1px 0 rgba(255,255,255,.24),inset 0 -12px 24px rgba(54,10,30,.36) !important;}\nhtml.premium-theme-children-soft button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-children-soft .btn,\nhtml.premium-theme-children-soft .install-btn,\nhtml.premium-theme-children-soft .support-project-btn,\nhtml.premium-theme-children-soft .copy-wallet-btn,\nhtml.premium-theme-children-soft .quick-btn{background:linear-gradient(180deg,#ffffff 0%,#ff9fd2 48%,#9b67df 100%) !important;border-color:rgba(255,255,255,.76) !important;color:#2b2230 !important;box-shadow:0 16px 34px rgba(142,73,128,.20),inset 0 1px 0 rgba(255,255,255,.82),inset 0 -12px 24px rgba(255,159,210,.18) !important;}\nhtml.premium-theme-night-mosque button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-night-mosque .btn,\nhtml.premium-theme-night-mosque .install-btn,\nhtml.premium-theme-night-mosque .support-project-btn,\nhtml.premium-theme-night-mosque .copy-wallet-btn,\nhtml.premium-theme-night-mosque .quick-btn{background:linear-gradient(180deg,#d7c07a 0%,#315d9f 48%,#071531 100%) !important;border-color:rgba(215,192,122,.36) !important;color:#ffffff !important;box-shadow:0 16px 34px rgba(0,0,0,.42),inset 0 1px 0 rgba(255,255,255,.22),inset 0 -12px 24px rgba(0,8,32,.38) !important;}\nhtml.premium-theme-desert-sand button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml.premium-theme-desert-sand .btn,\nhtml.premium-theme-desert-sand .install-btn,\nhtml.premium-theme-desert-sand .support-project-btn,\nhtml.premium-theme-desert-sand .copy-wallet-btn,\nhtml.premium-theme-desert-sand .quick-btn{background:linear-gradient(180deg,#ffedbe 0%,#b77c36 48%,#3a2109 100%) !important;border-color:rgba(255,246,214,.40) !important;color:#ffffff !important;box-shadow:0 16px 34px rgba(0,0,0,.40),inset 0 1px 0 rgba(255,255,255,.22),inset 0 -12px 24px rgba(64,36,10,.36) !important;}\n\nhtml.premium-theme-children-soft h1,\nhtml.premium-theme-children-soft h2,\nhtml.premium-theme-children-soft h3,\nhtml.premium-theme-children-soft h4,\nhtml.premium-theme-children-soft h5,\nhtml.premium-theme-children-soft h6,\nhtml.premium-theme-children-soft p,\nhtml.premium-theme-children-soft li,\nhtml.premium-theme-children-soft .subtitle,\nhtml.premium-theme-children-soft .section-title,\nhtml.premium-theme-children-soft .category-title,\nhtml.premium-theme-children-soft .article p,\nhtml.premium-theme-children-soft .ayah-meaning,\nhtml.premium-theme-children-soft .dua-translit,\nhtml.premium-theme-children-soft .ayah-translit{color:#2b2230 !important;text-shadow:0 1px 10px rgba(255,255,255,.86) !important;}\nhtml.premium-theme-children-soft .muted,\nhtml.premium-theme-children-soft .small,\nhtml.premium-theme-children-soft .note,\nhtml.premium-theme-children-soft .label,\nhtml.premium-theme-children-soft .surah-meta{color:#5c4d64 !important;}\n\nbody .theme-grid .theme-card.theme-child h3,\nbody .theme-grid .theme-card.theme-child p,\nbody .theme-grid .theme-card.theme-child strong,\nbody .theme-grid .theme-card[data-theme=\"children-soft\"] h3,\nbody .theme-grid .theme-card[data-theme=\"children-soft\"] p,\nbody .theme-grid .theme-card[data-theme=\"children-soft\"] strong{color:#2b2230 !important;text-shadow:0 1px 10px rgba(255,255,255,.90) !important;}\n\nhtml.premium-theme-royal-gold .bw-logo-transparent-lock,\nhtml.premium-theme-royal-gold .bw-logo-transparent-lock *,\nhtml.premium-theme-royal-gold [data-barakaway-logo-lock],\nhtml.premium-theme-royal-gold [data-barakaway-logo-lock] *,\nhtml.premium-theme-emerald-quran .bw-logo-transparent-lock,\nhtml.premium-theme-emerald-quran .bw-logo-transparent-lock *,\nhtml.premium-theme-emerald-quran [data-barakaway-logo-lock],\nhtml.premium-theme-emerald-quran [data-barakaway-logo-lock] *,\nhtml.premium-theme-violet-noor .bw-logo-transparent-lock,\nhtml.premium-theme-violet-noor .bw-logo-transparent-lock *,\nhtml.premium-theme-violet-noor [data-barakaway-logo-lock],\nhtml.premium-theme-violet-noor [data-barakaway-logo-lock] *,\nhtml.premium-theme-rose-soft .bw-logo-transparent-lock,\nhtml.premium-theme-rose-soft .bw-logo-transparent-lock *,\nhtml.premium-theme-rose-soft [data-barakaway-logo-lock],\nhtml.premium-theme-rose-soft [data-barakaway-logo-lock] *,\nhtml.premium-theme-children-soft .bw-logo-transparent-lock,\nhtml.premium-theme-children-soft .bw-logo-transparent-lock *,\nhtml.premium-theme-children-soft [data-barakaway-logo-lock],\nhtml.premium-theme-children-soft [data-barakaway-logo-lock] *,\nhtml.premium-theme-night-mosque .bw-logo-transparent-lock,\nhtml.premium-theme-night-mosque .bw-logo-transparent-lock *,\nhtml.premium-theme-night-mosque [data-barakaway-logo-lock],\nhtml.premium-theme-night-mosque [data-barakaway-logo-lock] *,\nhtml.premium-theme-desert-sand .bw-logo-transparent-lock,\nhtml.premium-theme-desert-sand .bw-logo-transparent-lock *,\nhtml.premium-theme-desert-sand [data-barakaway-logo-lock],\nhtml.premium-theme-desert-sand [data-barakaway-logo-lock] *{\n  background:transparent !important;\n  background-color:transparent !important;\n  background-image:none !important;\n  box-shadow:none !important;\n  border-color:transparent !important;\n}\n\n/* ===== END BARAKAWAY ALL PREMIUM THEMES: CARBON-ELITE ARCHITECTURE FINAL ===== */\n";
  (document.head || document.documentElement).appendChild(style);
})();



(function(){
  var STYLE_ID='barakaway-premium-theme-visual-upgrade-v20260510b';
  var CSS="\n/* ===== BARAKAWAY PREMIUM THEMES VISUAL UPGRADE \u2014 V20260510B ===== */\n/* Final override: every premium theme uses Carbon Elite architecture with its own premium material. */\n\nhtml.premium-theme-royal-gold{\n  --bg:#080704;--surface:#141008;--surface-2:#21170a;--surface-3:#3a2a0f;\n  --border:rgba(245,219,132,.30);--border-2:rgba(255,237,177,.42);\n  --text:#fff8df;--text-soft:#ead8a5;--text-muted:#c8ad62;\n  --green:#e8cc74;--green-strong:#9d7424;--green-soft:#fff0b4;\n  --bw-accent:#e8cc74;--bw-accent-2:#fff4bd;\n  --bw-premium-material:\n    radial-gradient(circle at 84% 10%,rgba(255,244,189,.24),transparent 25%),\n    radial-gradient(circle at 12% 88%,rgba(157,116,36,.34),transparent 30%),\n    repeating-linear-gradient(135deg,rgba(255,238,170,.11) 0 1px,transparent 1px 18px),\n    linear-gradient(135deg,#070604 0%,#1d1508 48%,#6f531b 100%);\n}\nhtml.premium-theme-emerald-quran{\n  --bg:#031009;--surface:#06170d;--surface-2:#0a2616;--surface-3:#0f3a22;\n  --border:rgba(102,226,150,.28);--border-2:rgba(164,255,196,.42);\n  --text:#f2fff6;--text-soft:#c7f4d4;--text-muted:#91dba6;\n  --green:#66d98a;--green-strong:#176b3d;--green-soft:#c9ffd7;\n  --bw-accent:#66d98a;--bw-accent-2:#c6ffd7;\n  --bw-premium-material:\n    radial-gradient(circle at 82% 12%,rgba(176,255,201,.22),transparent 25%),\n    radial-gradient(circle at 14% 88%,rgba(21,107,61,.42),transparent 31%),\n    linear-gradient(90deg,transparent 0 30%,rgba(180,255,205,.09) 30% 31%,transparent 31% 63%,rgba(180,255,205,.07) 63% 64%,transparent 64% 100%),\n    repeating-linear-gradient(45deg,rgba(255,255,255,.085) 0 1px,transparent 1px 17px),\n    linear-gradient(135deg,#031009 0%,#0a2a18 52%,#2f8f55 100%);\n}\nhtml.premium-theme-violet-noor{\n  --bg:#0b0714;--surface:#130d22;--surface-2:#20153b;--surface-3:#35215f;\n  --border:rgba(181,143,255,.30);--border-2:rgba(221,204,255,.44);\n  --text:#fcf9ff;--text-soft:#e1d4ff;--text-muted:#baa4ee;\n  --green:#b995ff;--green-strong:#6946c7;--green-soft:#eadfff;\n  --bw-accent:#b995ff;--bw-accent-2:#f0e7ff;\n  --bw-premium-material:\n    radial-gradient(circle at 84% 10%,rgba(235,222,255,.24),transparent 26%),\n    radial-gradient(circle at 12% 86%,rgba(105,70,199,.42),transparent 32%),\n    repeating-linear-gradient(120deg,rgba(255,255,255,.10) 0 1px,transparent 1px 19px),\n    linear-gradient(135deg,#0b0714 0%,#231843 50%,#6d4ed0 100%);\n}\nhtml.premium-theme-rose-soft{\n  --bg:#160811;--surface:#22101b;--surface-2:#321529;--surface-3:#4c1f3b;\n  --border:rgba(255,166,204,.30);--border-2:rgba(255,218,234,.44);\n  --text:#fff9fc;--text-soft:#ffd8e9;--text-muted:#efa9c9;\n  --green:#ffa8cf;--green-strong:#b64d78;--green-soft:#ffe2ee;\n  --bw-accent:#ffa8cf;--bw-accent-2:#ffe3ef;\n  --bw-premium-material:\n    radial-gradient(circle at 18% 20%,rgba(255,255,255,.18) 0 2px,transparent 2.8px),\n    radial-gradient(circle at 82% 12%,rgba(255,220,236,.24),transparent 26%),\n    radial-gradient(circle at 15% 85%,rgba(182,77,120,.42),transparent 32%),\n    repeating-linear-gradient(135deg,rgba(255,255,255,.09) 0 1px,transparent 1px 20px),\n    linear-gradient(135deg,#160811 0%,#3a1830 52%,#d86199 100%);\n}\nhtml.premium-theme-children-soft{\n  --bg:#09213a;--surface:#102f4c;--surface-2:#1a456a;--surface-3:#6eb7e8;\n  --border:rgba(190,230,255,.36);--border-2:rgba(255,231,247,.48);\n  --text:#f7fcff;--text-soft:#d7efff;--text-muted:#acd7f4;\n  --green:#9bd9ff;--green-strong:#3e8fc7;--green-soft:#e4f6ff;\n  --bw-accent:#9bd9ff;--bw-accent-2:#ffe5f4;\n  --bw-premium-material:\n    radial-gradient(circle at 18% 22%,rgba(255,255,255,.42) 0 10px,transparent 11px),\n    radial-gradient(circle at 86% 16%,rgba(255,231,247,.38),transparent 26%),\n    radial-gradient(circle at 12% 86%,rgba(89,170,220,.42),transparent 32%),\n    repeating-linear-gradient(135deg,rgba(255,255,255,.08) 0 1px,transparent 1px 20px),\n    linear-gradient(135deg,#09213a 0%,#1f5f91 54%,#a8dcff 100%);\n}\nhtml.premium-theme-night-mosque{\n  --bg:#020716;--surface:#06112b;--surface-2:#0a1e4b;--surface-3:#17396f;\n  --border:rgba(148,180,255,.28);--border-2:rgba(215,192,122,.40);\n  --text:#f8fbff;--text-soft:#dce9ff;--text-muted:#a8c0ed;\n  --green:#d7c07a;--green-strong:#315c9b;--green-soft:#fff0b4;\n  --bw-accent:#d7c07a;--bw-accent-2:#8fb5ff;\n  --bw-premium-material:\n    radial-gradient(circle at 14% 18%,rgba(255,255,255,.50) 0 1.2px,transparent 1.9px),\n    radial-gradient(circle at 42% 28%,rgba(255,255,255,.38) 0 1px,transparent 1.7px),\n    radial-gradient(circle at 76% 18%,rgba(215,192,122,.34) 0 12px,transparent 13px),\n    linear-gradient(90deg,transparent 0 32%,rgba(215,192,122,.12) 32% 33%,transparent 33% 68%,rgba(215,192,122,.10) 68% 69%,transparent 69% 100%),\n    repeating-linear-gradient(135deg,rgba(143,181,255,.08) 0 1px,transparent 1px 20px),\n    linear-gradient(135deg,#020716 0%,#0b214f 54%,#1d4b8d 100%);\n}\nhtml.premium-theme-desert-sand{\n  --bg:#120a03;--surface:#261606;--surface-2:#4a2f10;--surface-3:#a97835;\n  --border:rgba(255,237,190,.32);--border-2:rgba(255,246,214,.48);\n  --text:#fff8e7;--text-soft:#f7e4bd;--text-muted:#e0be82;\n  --green:#ffedbe;--green-strong:#9a6d2d;--green-soft:#fff3cf;\n  --bw-accent:#ffedbe;--bw-accent-2:#dbae61;\n  --bw-premium-material:\n    radial-gradient(circle at 82% 12%,rgba(255,239,198,.24),transparent 26%),\n    radial-gradient(circle at 12% 86%,rgba(154,109,45,.44),transparent 32%),\n    repeating-radial-gradient(circle at 20% 40%,rgba(255,240,200,.14) 0 1px,transparent 1px 11px),\n    linear-gradient(160deg,transparent 0 48%,rgba(255,237,190,.16) 49%,transparent 51% 100%),\n    linear-gradient(135deg,#120a03 0%,#5e3c14 52%,#d9a85d 100%);\n}\n\nhtml[class*=\"premium-theme-\"] body,\nhtml[class*=\"premium-theme-\"] .container,\nhtml[class*=\"premium-theme-\"] .hero,\nhtml[class*=\"premium-theme-\"] .brand-prayer-hero,\nhtml[class*=\"premium-theme-\"] .today-hub,\nhtml[class*=\"premium-theme-\"] .about-project-card,\nhtml[class*=\"premium-theme-\"] .barakaway-pro-final,\nhtml[class*=\"premium-theme-\"] .block,\nhtml[class*=\"premium-theme-\"] .card,\nhtml[class*=\"premium-theme-\"] .box,\nhtml[class*=\"premium-theme-\"] .panel,\nhtml[class*=\"premium-theme-\"] .quote,\nhtml[class*=\"premium-theme-\"] .empty,\nhtml[class*=\"premium-theme-\"] .article,\nhtml[class*=\"premium-theme-\"] .category-panel,\nhtml[class*=\"premium-theme-\"] .surah-card,\nhtml[class*=\"premium-theme-\"] .prayer-card,\nhtml[class*=\"premium-theme-\"] .toggle-row,\nhtml[class*=\"premium-theme-\"] .meta-item,\nhtml[class*=\"premium-theme-\"] .note-box,\nhtml[class*=\"premium-theme-\"] .jumuah-box,\nhtml[class*=\"premium-theme-\"] .month-day,\nhtml[class*=\"premium-theme-\"] .month-head,\nhtml[class*=\"premium-theme-\"] .wallet-support,\nhtml[class*=\"premium-theme-\"] .home-widget,\nhtml[class*=\"premium-theme-\"] .dua-card,\nhtml[class*=\"premium-theme-\"] .ayah-card,\nhtml[class*=\"premium-theme-\"] .master-audio-wrap,\nhtml[class*=\"premium-theme-\"] .reader-side,\nhtml[class*=\"premium-theme-\"] .reader-main,\nhtml[class*=\"premium-theme-\"] .dua-side,\nhtml[class*=\"premium-theme-\"] .dua-main,\nhtml[class*=\"premium-theme-\"] .ai-side,\nhtml[class*=\"premium-theme-\"] .ai-main,\nhtml[class*=\"premium-theme-\"] .player-panel,\nhtml[class*=\"premium-theme-\"] .preview-panel,\nhtml[class*=\"premium-theme-\"] .app-menu-btn,\nhtml[class*=\"premium-theme-\"] .today-action,\nhtml[class*=\"premium-theme-\"] .premium-resource-card,\nhtml[class*=\"premium-theme-\"] .bottom-app-nav,\nhtml[class*=\"premium-theme-\"] .bottom-app-nav-inner{\n  background-color:var(--bg) !important;\n  background-image:var(--bw-premium-material) !important;\n  background-size:auto,auto,auto,auto,100% 100% !important;\n  background-position:center,center,center,center,center !important;\n  background-repeat:no-repeat,no-repeat,repeat,repeat,no-repeat !important;\n  border-color:var(--border) !important;\n  color:var(--text) !important;\n  box-shadow:\n    0 24px 58px rgba(0,0,0,.46),\n    0 0 0 1px rgba(255,255,255,.045),\n    inset 0 1px 0 rgba(255,255,255,.13),\n    inset 0 -24px 38px rgba(0,0,0,.30) !important;\n}\n\nhtml[class*=\"premium-theme-\"] button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),\nhtml[class*=\"premium-theme-\"] .btn,\nhtml[class*=\"premium-theme-\"] .install-btn,\nhtml[class*=\"premium-theme-\"] .support-project-btn,\nhtml[class*=\"premium-theme-\"] .copy-wallet-btn,\nhtml[class*=\"premium-theme-\"] .quick-btn{\n  background:linear-gradient(180deg,color-mix(in srgb,var(--bw-accent-2) 78%,#ffffff) 0%,var(--bw-accent) 44%,var(--green-strong) 100%) !important;\n  border-color:var(--border-2) !important;\n  color:#101010 !important;\n  box-shadow:0 16px 34px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,255,255,.32),inset 0 -12px 24px rgba(0,0,0,.22) !important;\n}\n\nhtml[class*=\"premium-theme-\"] .bw-logo-transparent-lock,\nhtml[class*=\"premium-theme-\"] .bw-logo-transparent-lock *,\nhtml[class*=\"premium-theme-\"] [data-barakaway-logo-lock],\nhtml[class*=\"premium-theme-\"] [data-barakaway-logo-lock] *{\n  background:transparent !important;background-color:transparent !important;background-image:none !important;box-shadow:none !important;border-color:transparent !important;\n}\n\nhtml body .page .theme-grid .theme-card[data-theme]{\n  min-height:236px !important;\n  border-width:1px !important;\n  isolation:isolate !important;\n  overflow:hidden !important;\n}\nhtml body .page .theme-grid .theme-card[data-theme]::before{\n  content:\"\" !important;\n  position:absolute !important;\n  inset:0 !important;\n  z-index:1 !important;\n  background:\n    linear-gradient(118deg,transparent 0%,rgba(255,255,255,.18) 18%,transparent 31%,transparent 66%,rgba(255,255,255,.08) 78%,transparent 100%),\n    radial-gradient(circle at 86% 12%,rgba(255,255,255,.18),transparent 26%) !important;\n  pointer-events:none !important;\n  opacity:.95 !important;\n}\nhtml body .page .theme-grid .theme-card[data-theme]::after{\n  content:\"\" !important;\n  position:absolute !important;\n  inset:auto -10% -34% -10% !important;\n  height:62% !important;\n  z-index:1 !important;\n  background:radial-gradient(ellipse at center,rgba(255,255,255,.20),transparent 64%) !important;\n  pointer-events:none !important;\n  opacity:.72 !important;\n}\nhtml body .page .theme-grid .theme-card[data-theme] .theme-top,\nhtml body .page .theme-grid .theme-card[data-theme] h3,\nhtml body .page .theme-grid .theme-card[data-theme] p,\nhtml body .page .theme-grid .theme-card[data-theme] .theme-preview{\n  position:relative !important;\n  z-index:3 !important;\n}\nhtml body .page .theme-grid .theme-card[data-theme] h3,\nhtml body .page .theme-grid .theme-card[data-theme] p{\n  color:#fff !important;\n  text-shadow:0 2px 16px rgba(0,0,0,.68) !important;\n}\nhtml body .page .theme-grid .theme-card[data-theme] .theme-icon{\n  background:rgba(0,0,0,.22) !important;\n  border-color:rgba(255,255,255,.18) !important;\n  box-shadow:inset 0 1px 0 rgba(255,255,255,.20),0 10px 28px rgba(0,0,0,.24) !important;\n}\nhtml body .page .theme-grid .theme-card[data-theme] .theme-chip{\n  background:rgba(0,0,0,.26) !important;\n  border-color:rgba(255,255,255,.20) !important;\n  color:#fff !important;\n}\n\nhtml body .page .theme-grid .theme-card.theme-gold[data-theme=\"royal-gold\"]{background-image:var(--bw-premium-material, radial-gradient(circle at 84% 10%,rgba(255,244,189,.24),transparent 25%),radial-gradient(circle at 12% 88%,rgba(157,116,36,.34),transparent 30%),repeating-linear-gradient(135deg,rgba(255,238,170,.11) 0 1px,transparent 1px 18px),linear-gradient(135deg,#070604 0%,#1d1508 48%,#6f531b 100%)) !important;background-color:#080704 !important;border-color:rgba(245,219,132,.34) !important;box-shadow:0 24px 58px rgba(90,62,12,.42),0 0 0 1px rgba(255,238,170,.12),inset 0 1px 0 rgba(255,255,255,.18),inset 0 -24px 38px rgba(0,0,0,.34) !important;}\nhtml body .page .theme-grid .theme-card.theme-emerald[data-theme=\"emerald-quran\"]{background-image:radial-gradient(circle at 82% 12%,rgba(176,255,201,.22),transparent 25%),radial-gradient(circle at 14% 88%,rgba(21,107,61,.42),transparent 31%),linear-gradient(90deg,transparent 0 30%,rgba(180,255,205,.09) 30% 31%,transparent 31% 63%,rgba(180,255,205,.07) 63% 64%,transparent 64% 100%),repeating-linear-gradient(45deg,rgba(255,255,255,.085) 0 1px,transparent 1px 17px),linear-gradient(135deg,#031009 0%,#0a2a18 52%,#2f8f55 100%) !important;background-color:#031009 !important;border-color:rgba(102,226,150,.34) !important;box-shadow:0 24px 58px rgba(0,70,36,.42),0 0 0 1px rgba(164,255,196,.10),inset 0 1px 0 rgba(255,255,255,.18),inset 0 -24px 38px rgba(0,0,0,.34) !important;}\nhtml body .page .theme-grid .theme-card.theme-violet[data-theme=\"violet-noor\"]{background-image:radial-gradient(circle at 84% 10%,rgba(235,222,255,.24),transparent 26%),radial-gradient(circle at 12% 86%,rgba(105,70,199,.42),transparent 32%),repeating-linear-gradient(120deg,rgba(255,255,255,.10) 0 1px,transparent 1px 19px),linear-gradient(135deg,#0b0714 0%,#231843 50%,#6d4ed0 100%) !important;background-color:#0b0714 !important;border-color:rgba(181,143,255,.38) !important;box-shadow:0 24px 58px rgba(54,24,120,.46),0 0 0 1px rgba(221,204,255,.12),inset 0 1px 0 rgba(255,255,255,.18),inset 0 -24px 38px rgba(0,0,0,.34) !important;}\nhtml body .page .theme-grid .theme-card.theme-rose[data-theme=\"rose-soft\"]{background-image:radial-gradient(circle at 18% 20%,rgba(255,255,255,.18) 0 2px,transparent 2.8px),radial-gradient(circle at 82% 12%,rgba(255,220,236,.24),transparent 26%),radial-gradient(circle at 15% 85%,rgba(182,77,120,.42),transparent 32%),repeating-linear-gradient(135deg,rgba(255,255,255,.09) 0 1px,transparent 1px 20px),linear-gradient(135deg,#160811 0%,#3a1830 52%,#d86199 100%) !important;background-color:#160811 !important;border-color:rgba(255,166,204,.38) !important;box-shadow:0 24px 58px rgba(130,35,82,.42),0 0 0 1px rgba(255,218,234,.12),inset 0 1px 0 rgba(255,255,255,.18),inset 0 -24px 38px rgba(0,0,0,.34) !important;}\nhtml body .page .theme-grid .theme-card.theme-child[data-theme=\"children-soft\"]{background-image:radial-gradient(circle at 18% 22%,rgba(255,255,255,.42) 0 10px,transparent 11px),radial-gradient(circle at 86% 16%,rgba(255,231,247,.38),transparent 26%),radial-gradient(circle at 12% 86%,rgba(89,170,220,.42),transparent 32%),repeating-linear-gradient(135deg,rgba(255,255,255,.08) 0 1px,transparent 1px 20px),linear-gradient(135deg,#09213a 0%,#1f5f91 54%,#a8dcff 100%) !important;background-color:#09213a !important;border-color:rgba(190,230,255,.44) !important;box-shadow:0 24px 58px rgba(28,98,145,.42),0 0 0 1px rgba(255,231,247,.14),inset 0 1px 0 rgba(255,255,255,.26),inset 0 -24px 38px rgba(0,0,0,.24) !important;}\nhtml body .page .theme-grid .theme-card.theme-night[data-theme=\"night-mosque\"]{background-image:radial-gradient(circle at 14% 18%,rgba(255,255,255,.50) 0 1.2px,transparent 1.9px),radial-gradient(circle at 42% 28%,rgba(255,255,255,.38) 0 1px,transparent 1.7px),radial-gradient(circle at 76% 18%,rgba(215,192,122,.34) 0 12px,transparent 13px),linear-gradient(90deg,transparent 0 32%,rgba(215,192,122,.12) 32% 33%,transparent 33% 68%,rgba(215,192,122,.10) 68% 69%,transparent 69% 100%),repeating-linear-gradient(135deg,rgba(143,181,255,.08) 0 1px,transparent 1px 20px),linear-gradient(135deg,#020716 0%,#0b214f 54%,#1d4b8d 100%) !important;background-color:#020716 !important;border-color:rgba(148,180,255,.34) !important;box-shadow:0 24px 58px rgba(0,13,55,.56),0 0 0 1px rgba(215,192,122,.10),inset 0 1px 0 rgba(255,255,255,.16),inset 0 -24px 38px rgba(0,0,0,.38) !important;}\nhtml body .page .theme-grid .theme-card.theme-sand[data-theme=\"desert-sand\"]{background-image:radial-gradient(circle at 82% 12%,rgba(255,239,198,.24),transparent 26%),radial-gradient(circle at 12% 86%,rgba(154,109,45,.44),transparent 32%),repeating-radial-gradient(circle at 20% 40%,rgba(255,240,200,.14) 0 1px,transparent 1px 11px),linear-gradient(160deg,transparent 0 48%,rgba(255,237,190,.16) 49%,transparent 51% 100%),linear-gradient(135deg,#120a03 0%,#5e3c14 52%,#d9a85d 100%) !important;background-color:#120a03 !important;border-color:rgba(255,237,190,.40) !important;box-shadow:0 24px 58px rgba(110,67,18,.44),0 0 0 1px rgba(255,246,214,.12),inset 0 1px 0 rgba(255,255,255,.20),inset 0 -24px 38px rgba(0,0,0,.28) !important;}\n/* ===== END BARAKAWAY PREMIUM THEMES VISUAL UPGRADE \u2014 V20260510B ===== */\n";
  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    var style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=CSS;
    document.head.appendChild(style);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', inject); else inject();
})();
