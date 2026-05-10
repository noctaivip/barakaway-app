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


/* ===== BARAKAWAY PREMIUM MATERIAL THEMES FINAL INJECTOR ===== */
(function(){
  const STYLE_ID = "barakaway-premium-material-themes-final";
  const CSS = `/* ===== BARAKAWAY PREMIUM MATERIAL THEMES FINAL ===== */
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite){
  --bw-material-text:#ffffff;
  --bw-material-text-soft:rgba(255,255,255,.86);
  --bw-material-border:rgba(255,255,255,.20);
  --bw-material-border-strong:rgba(255,255,255,.32);
  --bw-material-accent:#ffffff;
  --bw-material-accent-soft:rgba(255,255,255,.18);
  --bw-material-page-bg:linear-gradient(180deg,#0b1016 0%,#101820 52%,#0b1016 100%);
  --bw-material-surface-color:#101820;
  --bw-material-surface-bg:linear-gradient(135deg,#151d26 0%,#101820 50%,#17261f 100%);
  --bw-material-surface-bg-size:100% 100%;
  --bw-material-surface-bg-position:center;
  --bw-material-surface-bg-repeat:no-repeat;
  --bw-material-button-bg:linear-gradient(135deg,#66c680 0%,#2d7a46 100%);
  --bw-material-button-text:#ffffff;
  --bw-material-input-bg:linear-gradient(180deg,rgba(10,16,22,.88),rgba(16,24,32,.95));
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) body{
  background:var(--bw-material-page-bg) !important;
  color:var(--bw-material-text) !important;
}

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
  background-color:var(--bw-material-surface-color) !important;
  background-image:var(--bw-material-surface-bg) !important;
  background-size:var(--bw-material-surface-bg-size) !important;
  background-position:var(--bw-material-surface-bg-position) !important;
  background-repeat:var(--bw-material-surface-bg-repeat) !important;
  border-color:var(--bw-material-border) !important;
  color:var(--bw-material-text) !important;
  box-shadow:
    0 24px 58px rgba(0,0,0,.42),
    0 0 0 1px rgba(255,255,255,.05),
    inset 0 1px 0 rgba(255,255,255,.14),
    inset 0 -22px 34px rgba(0,0,0,.28) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h1,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h2,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h3,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h4,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .title,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .category-title,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .surah-name,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .dua-title,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ayah-arabic{
  color:var(--bw-material-text) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) p,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) li,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .subtitle,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .small,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .note,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .muted,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .label,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .meaning,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .when,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .surah-meta,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .article p,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .dua-translit,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ayah-translit,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ayah-meaning{
  color:var(--bw-material-text-soft) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) strong,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) a,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .surah-number,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .badge,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .chip,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .wallet-badge{
  color:var(--bw-material-accent) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bottom-app-nav-item.active,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bottom-app-nav-item.is-active{
  background:linear-gradient(135deg,var(--bw-material-accent-soft),rgba(255,255,255,.08)) !important;
  color:var(--bw-material-text) !important;
  border-color:var(--bw-material-border-strong) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .install-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .support-project-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .copy-wallet-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .quick-btn{
  background:var(--bw-material-button-bg) !important;
  border-color:var(--bw-material-border-strong) !important;
  color:var(--bw-material-button-text) !important;
  box-shadow:0 16px 34px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.18) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) input,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) textarea,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) select,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .search-input,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .wallet-address{
  background:var(--bw-material-input-bg) !important;
  color:var(--bw-material-text) !important;
  border-color:var(--bw-material-border-strong) !important;
}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .theme-grid .theme-card .theme-chip,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bw-theme-sample-card .theme-chip{
  background:rgba(0,0,0,.24) !important;
  border-color:rgba(255,255,255,.22) !important;
  color:#ffffff !important;
}

body .theme-grid .theme-card.theme-gold,
body .theme-grid .theme-card[data-theme="royal-gold"],
html[class*="premium-theme-"] .bw-theme-sample-royal-gold,
html[class*="premium-theme-"] .theme-card[data-theme="royal-gold"]{
  background-color:#291906 !important;
  background-image:
    radial-gradient(circle at 84% 18%, rgba(255,250,232,.44), transparent 22%),
    radial-gradient(circle at 18% 92%, rgba(246,205,110,.18), transparent 28%),
    linear-gradient(115deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,.04) 18%, rgba(255,220,122,.26) 42%, rgba(255,255,255,.08) 58%, rgba(0,0,0,0) 78%),
    linear-gradient(135deg,#2a1906 0%,#8f662c 54%,#f2cf7a 100%) !important;
  background-size:100% 100%,100% 100%,100% 100%,100% 100% !important;
  background-position:center,center,center,center !important;
  background-repeat:no-repeat !important;
  border-color:rgba(255,226,155,.54) !important;
  box-shadow:0 24px 56px rgba(84,55,14,.38), 0 0 0 1px rgba(255,244,206,.12), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -24px 38px rgba(74,45,12,.16) !important;
}
body .theme-grid .theme-card.theme-gold .preview-pill,
body .theme-grid .theme-card[data-theme="royal-gold"] .preview-pill{background:rgba(255,243,207,.52) !important;}

body .theme-grid .theme-card.theme-emerald,
body .theme-grid .theme-card[data-theme="emerald-quran"],
html[class*="premium-theme-"] .bw-theme-sample-emerald-quran,
html[class*="premium-theme-"] .theme-card[data-theme="emerald-quran"]{
  background-color:#06140c !important;
  background-image:
    radial-gradient(circle at 82% 16%, rgba(186,255,214,.30), transparent 22%),
    radial-gradient(circle at 16% 84%, rgba(72,214,129,.18), transparent 28%),
    linear-gradient(118deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 20%, rgba(92,232,149,.14) 44%, rgba(255,255,255,.08) 58%, rgba(0,0,0,0) 76%),
    linear-gradient(135deg,#06140c 0%,#114126 52%,#39a460 100%) !important;
  background-size:100% 100%,100% 100%,100% 100%,100% 100% !important;
  background-position:center,center,center,center !important;
  background-repeat:no-repeat !important;
  border-color:rgba(129,233,163,.48) !important;
  box-shadow:0 24px 56px rgba(10,42,24,.40), 0 0 0 1px rgba(178,255,208,.10), inset 0 1px 0 rgba(255,255,255,.16), inset 0 -24px 38px rgba(0,0,0,.18) !important;
}
body .theme-grid .theme-card.theme-emerald .preview-pill,
body .theme-grid .theme-card[data-theme="emerald-quran"] .preview-pill{background:rgba(210,255,224,.46) !important;}

body .theme-grid .theme-card.theme-violet,
body .theme-grid .theme-card[data-theme="violet-noor"],
html[class*="premium-theme-"] .bw-theme-sample-violet-noor,
html[class*="premium-theme-"] .theme-card[data-theme="violet-noor"]{
  background-color:#0f0a18 !important;
  background-image:
    radial-gradient(circle at 82% 16%, rgba(242,233,255,.34), transparent 22%),
    radial-gradient(circle at 18% 88%, rgba(168,112,255,.18), transparent 28%),
    linear-gradient(118deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 18%, rgba(200,168,255,.16) 46%, rgba(255,255,255,.08) 60%, rgba(0,0,0,0) 78%),
    linear-gradient(135deg,#0f0a18 0%,#341c61 52%,#a87dff 100%) !important;
  background-size:100% 100%,100% 100%,100% 100%,100% 100% !important;
  background-position:center,center,center,center !important;
  background-repeat:no-repeat !important;
  border-color:rgba(214,191,255,.48) !important;
  box-shadow:0 24px 56px rgba(30,13,66,.40), 0 0 0 1px rgba(235,225,255,.10), inset 0 1px 0 rgba(255,255,255,.16), inset 0 -24px 38px rgba(0,0,0,.18) !important;
}
body .theme-grid .theme-card.theme-violet .preview-pill,
body .theme-grid .theme-card[data-theme="violet-noor"] .preview-pill{background:rgba(235,224,255,.44) !important;}

body .theme-grid .theme-card.theme-rose,
body .theme-grid .theme-card[data-theme="rose-soft"],
html[class*="premium-theme-"] .bw-theme-sample-rose-soft,
html[class*="premium-theme-"] .theme-card[data-theme="rose-soft"]{
  background-color:#1a0b15 !important;
  background-image:
    radial-gradient(circle at 84% 18%, rgba(255,241,247,.38), transparent 24%),
    radial-gradient(circle at 16% 84%, rgba(255,176,209,.18), transparent 30%),
    radial-gradient(circle at 24% 18%, rgba(255,205,226,.14) 0 10px, transparent 11px),
    radial-gradient(circle at 72% 76%, rgba(255,205,226,.14) 0 12px, transparent 13px),
    linear-gradient(122deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,0) 20%, rgba(255,189,221,.12) 46%, rgba(255,255,255,.08) 60%, rgba(0,0,0,0) 78%),
    linear-gradient(135deg,#1a0b15 0%,#6a3551 56%,#f1a6c9 100%) !important;
  background-size:100% 100%,100% 100%,96px 96px,128px 128px,100% 100%,100% 100% !important;
  background-position:center,center,0 0,18px 14px,center,center !important;
  background-repeat:no-repeat,no-repeat,repeat,repeat,no-repeat,no-repeat !important;
  border-color:rgba(255,206,225,.50) !important;
  box-shadow:0 24px 56px rgba(92,33,64,.34), 0 0 0 1px rgba(255,241,247,.10), inset 0 1px 0 rgba(255,255,255,.16), inset 0 -24px 38px rgba(0,0,0,.16) !important;
}
body .theme-grid .theme-card.theme-rose .preview-pill,
body .theme-grid .theme-card[data-theme="rose-soft"] .preview-pill{background:rgba(255,233,243,.44) !important;}

body .theme-grid .theme-card.theme-child,
body .theme-grid .theme-card[data-theme="children-soft"],
html[class*="premium-theme-"] .bw-theme-sample-children-soft,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"]{
  background-color:#143960 !important;
  background-image:
    linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,227,241,.04)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%0A  %3Cg opacity='.28'%3E%0A    %3Cg transform='translate(10 18)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(84 4) scale(.9)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(126 54) scale(.78)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(54 58) scale(.84)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A  %3C/g%3E%0A%3C/svg%3E"),
    linear-gradient(135deg,#12304d 0%,#4e96d0 58%,#88c7ff 100%) !important;
  background-size:100% 100%,180px 120px,100% 100% !important;
  background-position:center,0 0,center !important;
  background-repeat:no-repeat,repeat,no-repeat !important;
  border-color:rgba(214,236,255,.50) !important;
  box-shadow:0 24px 56px rgba(16,48,78,.38), 0 0 0 1px rgba(255,255,255,.10), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -24px 38px rgba(0,0,0,.14) !important;
}
body .theme-grid .theme-card.theme-child .preview-pill,
body .theme-grid .theme-card[data-theme="children-soft"] .preview-pill{background:rgba(255,247,214,.50) !important;}

body .theme-grid .theme-card.theme-night,
body .theme-grid .theme-card[data-theme="night-mosque"],
html[class*="premium-theme-"] .bw-theme-sample-night-mosque,
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"]{
  background-color:#041021 !important;
  background-image:
    linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,0) 28%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%0A  %3Crect width='180' height='120' fill='none'/%3E%0A  %3Cg fill='%23ffffff' fill-opacity='.55'%3E%0A    %3Ccircle cx='14' cy='18' r='1.3'/%3E%3Ccircle cx='38' cy='28' r='1'/%3E%3Ccircle cx='61' cy='12' r='1.2'/%3E%3Ccircle cx='91' cy='22' r='1'/%3E%3Ccircle cx='123' cy='16' r='1.25'/%3E%3Ccircle cx='152' cy='34' r='1.05'/%3E%3Ccircle cx='169' cy='18' r='1.1'/%3E%0A    %3Ccircle cx='22' cy='52' r='1.15'/%3E%3Ccircle cx='49' cy='61' r='1'/%3E%3Ccircle cx='78' cy='44' r='1.2'/%3E%3Ccircle cx='112' cy='58' r='1'/%3E%3Ccircle cx='138' cy='49' r='1.2'/%3E%3Ccircle cx='162' cy='63' r='1'/%3E%0A    %3Ccircle cx='18' cy='92' r='1.1'/%3E%3Ccircle cx='44' cy='104' r='1'/%3E%3Ccircle cx='83' cy='90' r='1.2'/%3E%3Ccircle cx='109' cy='98' r='1'/%3E%3Ccircle cx='145' cy='88' r='1.2'/%3E%3Ccircle cx='170' cy='104' r='1'/%3E%0A  %3C/g%3E%0A  %3Cpath d='M128 29a14 14 0 1 1-13-19 10 10 0 1 0 13 19z' fill='%23f1df9f' fill-opacity='.55'/%3E%0A%3C/svg%3E"),
    linear-gradient(135deg,#041021 0%,#0f2d59 54%,#1b4b8f 100%) !important;
  background-size:100% 100%,180px 120px,100% 100% !important;
  background-position:center,0 0,center !important;
  background-repeat:no-repeat,repeat,no-repeat !important;
  border-color:rgba(191,214,255,.38) !important;
  box-shadow:0 24px 56px rgba(0,10,30,.48), 0 0 28px rgba(104,146,255,.14), inset 0 1px 0 rgba(255,255,255,.16), inset 0 -24px 38px rgba(0,0,0,.24) !important;
}
body .theme-grid .theme-card.theme-night .preview-pill,
body .theme-grid .theme-card[data-theme="night-mosque"] .preview-pill{background:rgba(224,234,255,.38) !important;}

body .theme-grid .theme-card.theme-sand,
body .theme-grid .theme-card[data-theme="desert-sand"],
html[class*="premium-theme-"] .bw-theme-sample-desert-sand,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"]{
  background-color:#6d471d !important;
  background-image:
    radial-gradient(circle at 84% 16%, rgba(255,246,217,.24), transparent 24%),
    radial-gradient(circle at 14% 86%, rgba(255,219,147,.16), transparent 26%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120'%3E%0A  %3Cg fill='%23fff1c8' fill-opacity='.22'%3E%0A    %3Ccircle cx='8' cy='11' r='1.2'/%3E%3Ccircle cx='31' cy='18' r='1'/%3E%3Ccircle cx='52' cy='8' r='1.1'/%3E%3Ccircle cx='77' cy='16' r='1'/%3E%3Ccircle cx='101' cy='9' r='1.15'/%3E%3Ccircle cx='123' cy='19' r='1'/%3E%3Ccircle cx='146' cy='12' r='1.1'/%3E%0A    %3Ccircle cx='18' cy='42' r='1'/%3E%3Ccircle cx='43' cy='37' r='1.15'/%3E%3Ccircle cx='68' cy='46' r='1'/%3E%3Ccircle cx='92' cy='39' r='1.2'/%3E%3Ccircle cx='116' cy='47' r='1'/%3E%3Ccircle cx='141' cy='40' r='1.1'/%3E%0A    %3Ccircle cx='11' cy='71' r='1.1'/%3E%3Ccircle cx='37' cy='78' r='1'/%3E%3Ccircle cx='59' cy='69' r='1.2'/%3E%3Ccircle cx='84' cy='80' r='1'/%3E%3Ccircle cx='109' cy='73' r='1.1'/%3E%3Ccircle cx='136' cy='81' r='1'/%3E%0A    %3Ccircle cx='19' cy='101' r='1.05'/%3E%3Ccircle cx='48' cy='110' r='1'/%3E%3Ccircle cx='74' cy='98' r='1.1'/%3E%3Ccircle cx='98' cy='109' r='1'/%3E%3Ccircle cx='126' cy='101' r='1.15'/%3E%3Ccircle cx='149' cy='111' r='1'/%3E%0A  %3C/g%3E%0A  %3Cg fill='none' stroke='%23b87c39' stroke-opacity='.18' stroke-width='2'%3E%0A    %3Cpath d='M-6 88c18-9 40-9 58 0 17 8 36 8 54 0 18-9 36-9 54 0'/%3E%0A    %3Cpath d='M-8 103c22-9 42-9 64 0 20 8 38 8 58 0 18-8 34-8 50 0'/%3E%0A  %3C/g%3E%0A%3C/svg%3E"),
    linear-gradient(150deg,#6d471d 0%,#bf8a46 58%,#efd49b 100%) !important;
  background-size:100% 100%,100% 100%,160px 120px,100% 100% !important;
  background-position:center,center,0 0,center !important;
  background-repeat:no-repeat,no-repeat,repeat,no-repeat !important;
  border-color:rgba(255,236,188,.48) !important;
  box-shadow:0 24px 56px rgba(88,60,24,.38), 0 0 0 1px rgba(255,243,212,.10), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -24px 38px rgba(92,58,20,.18) !important;
}
body .theme-grid .theme-card.theme-sand .preview-pill,
body .theme-grid .theme-card[data-theme="desert-sand"] .preview-pill{background:rgba(255,241,206,.46) !important;}

html.premium-theme-royal-gold{
  --bw-material-text:#fff8e7;
  --bw-material-text-soft:rgba(255,244,214,.84);
  --bw-material-border:rgba(255,226,155,.30);
  --bw-material-border-strong:rgba(255,236,188,.44);
  --bw-material-accent:#f5d987;
  --bw-material-accent-soft:rgba(245,217,135,.22);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(255,233,170,.18), transparent 28%), radial-gradient(circle at 84% 10%, rgba(255,210,118,.12), transparent 30%), linear-gradient(180deg,#120b03 0%,#342108 42%,#8a642e 74%,#160f05 100%);
  --bw-material-surface-color:#291906;
  --bw-material-surface-bg:radial-gradient(circle at 84% 18%, rgba(255,250,232,.34), transparent 22%), radial-gradient(circle at 16% 84%, rgba(246,205,110,.14), transparent 28%), linear-gradient(115deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.04) 18%, rgba(255,220,122,.22) 42%, rgba(255,255,255,.08) 58%, rgba(0,0,0,0) 78%), linear-gradient(135deg,#2a1906 0%,#8f662c 54%,#f2cf7a 100%);
  --bw-material-surface-bg-size:100% 100%,100% 100%,100% 100%,100% 100%;
  --bw-material-surface-bg-position:center,center,center,center;
  --bw-material-surface-bg-repeat:no-repeat,no-repeat,no-repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#f6dc96 0%,#c8953a 100%);
  --bw-material-button-text:#1f1304;
  --bw-material-input-bg:linear-gradient(180deg,rgba(68,42,12,.88),rgba(38,24,8,.96));
}

html.premium-theme-emerald-quran{
  --bw-material-text:#f3fff6;
  --bw-material-text-soft:rgba(226,255,234,.84);
  --bw-material-border:rgba(129,233,163,.28);
  --bw-material-border-strong:rgba(178,255,208,.40);
  --bw-material-accent:#91efb2;
  --bw-material-accent-soft:rgba(145,239,178,.22);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(88,228,143,.16), transparent 28%), radial-gradient(circle at 84% 10%, rgba(186,255,214,.10), transparent 30%), linear-gradient(180deg,#051109 0%,#0d2e1b 44%,#1d6c3d 74%,#06120a 100%);
  --bw-material-surface-color:#06140c;
  --bw-material-surface-bg:radial-gradient(circle at 82% 16%, rgba(186,255,214,.28), transparent 22%), radial-gradient(circle at 16% 84%, rgba(72,214,129,.14), transparent 28%), linear-gradient(118deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 20%, rgba(92,232,149,.14) 44%, rgba(255,255,255,.08) 58%, rgba(0,0,0,0) 76%), linear-gradient(135deg,#06140c 0%,#114126 52%,#39a460 100%);
  --bw-material-surface-bg-size:100% 100%,100% 100%,100% 100%,100% 100%;
  --bw-material-surface-bg-position:center,center,center,center;
  --bw-material-surface-bg-repeat:no-repeat,no-repeat,no-repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#79d796 0%,#287547 100%);
  --bw-material-button-text:#ffffff;
  --bw-material-input-bg:linear-gradient(180deg,rgba(14,56,32,.88),rgba(8,26,16,.96));
}

html.premium-theme-violet-noor{
  --bw-material-text:#fcf9ff;
  --bw-material-text-soft:rgba(239,230,255,.84);
  --bw-material-border:rgba(214,191,255,.28);
  --bw-material-border-strong:rgba(235,225,255,.42);
  --bw-material-accent:#dcc8ff;
  --bw-material-accent-soft:rgba(220,200,255,.22);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(195,156,255,.16), transparent 28%), radial-gradient(circle at 84% 12%, rgba(242,233,255,.12), transparent 30%), linear-gradient(180deg,#0d0816 0%,#27124a 44%,#5631a3 74%,#100918 100%);
  --bw-material-surface-color:#0f0a18;
  --bw-material-surface-bg:radial-gradient(circle at 82% 16%, rgba(242,233,255,.32), transparent 22%), radial-gradient(circle at 18% 88%, rgba(168,112,255,.16), transparent 28%), linear-gradient(118deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 18%, rgba(200,168,255,.16) 46%, rgba(255,255,255,.08) 60%, rgba(0,0,0,0) 78%), linear-gradient(135deg,#0f0a18 0%,#341c61 52%,#a87dff 100%);
  --bw-material-surface-bg-size:100% 100%,100% 100%,100% 100%,100% 100%;
  --bw-material-surface-bg-position:center,center,center,center;
  --bw-material-surface-bg-repeat:no-repeat,no-repeat,no-repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#d3bbff 0%,#6d49d5 100%);
  --bw-material-button-text:#ffffff;
  --bw-material-input-bg:linear-gradient(180deg,rgba(42,23,78,.88),rgba(18,10,32,.96));
}

html.premium-theme-rose-soft{
  --bw-material-text:#fff9fc;
  --bw-material-text-soft:rgba(255,234,244,.84);
  --bw-material-border:rgba(255,206,225,.30);
  --bw-material-border-strong:rgba(255,233,243,.42);
  --bw-material-accent:#ffd2e5;
  --bw-material-accent-soft:rgba(255,210,229,.22);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(255,196,221,.16), transparent 28%), radial-gradient(circle at 84% 12%, rgba(255,241,247,.12), transparent 30%), linear-gradient(180deg,#160913 0%,#412039 44%,#8c4d6b 74%,#180a13 100%);
  --bw-material-surface-color:#1a0b15;
  --bw-material-surface-bg:radial-gradient(circle at 84% 18%, rgba(255,241,247,.34), transparent 24%), radial-gradient(circle at 16% 84%, rgba(255,176,209,.16), transparent 30%), radial-gradient(circle at 24% 18%, rgba(255,205,226,.12) 0 10px, transparent 11px), radial-gradient(circle at 72% 76%, rgba(255,205,226,.12) 0 12px, transparent 13px), linear-gradient(122deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,0) 20%, rgba(255,189,221,.12) 46%, rgba(255,255,255,.08) 60%, rgba(0,0,0,0) 78%), linear-gradient(135deg,#1a0b15 0%,#6a3551 56%,#f1a6c9 100%);
  --bw-material-surface-bg-size:100% 100%,100% 100%,96px 96px,128px 128px,100% 100%,100% 100%;
  --bw-material-surface-bg-position:center,center,0 0,18px 14px,center,center;
  --bw-material-surface-bg-repeat:no-repeat,no-repeat,repeat,repeat,no-repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#ffc2db 0%,#c45d88 100%);
  --bw-material-button-text:#ffffff;
  --bw-material-input-bg:linear-gradient(180deg,rgba(82,35,59,.88),rgba(28,12,22,.96));
}

html.premium-theme-children-soft{
  --bw-material-text:#ffffff;
  --bw-material-text-soft:rgba(245,251,255,.88);
  --bw-material-border:rgba(214,236,255,.28);
  --bw-material-border-strong:rgba(255,247,214,.38);
  --bw-material-accent:#fff1be;
  --bw-material-accent-soft:rgba(255,241,190,.22);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(182,226,255,.18), transparent 28%), radial-gradient(circle at 84% 12%, rgba(255,227,241,.10), transparent 30%), linear-gradient(180deg,#102d49 0%,#2c6ba2 44%,#6eb4ec 74%,#143960 100%);
  --bw-material-surface-color:#143960;
  --bw-material-surface-bg:linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,227,241,.04)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%0A  %3Cg opacity='.28'%3E%0A    %3Cg transform='translate(10 18)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(84 4) scale(.9)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(126 54) scale(.78)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(54 58) scale(.84)'%3E%0A      %3Ccircle cx='24' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='40' cy='16' r='8' fill='%23ffffff'/%3E%0A      %3Ccircle cx='32' cy='28' r='18' fill='%23fff6d8'/%3E%0A      %3Ccircle cx='27' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='37' cy='25' r='2.4' fill='%237d5a2f'/%3E%0A      %3Ccircle cx='32' cy='31' r='3.6' fill='%23f3b0c8'/%3E%0A      %3Cpath d='M27 36q5 5 10 0' fill='none' stroke='%237d5a2f' stroke-width='2.2' stroke-linecap='round'/%3E%0A      %3Crect x='20' y='44' width='24' height='18' rx='10' fill='%23fff6d8'/%3E%0A    %3C/g%3E%0A  %3C/g%3E%0A%3C/svg%3E"), linear-gradient(135deg,#12304d 0%,#4e96d0 58%,#88c7ff 100%);
  --bw-material-surface-bg-size:100% 100%,180px 120px,100% 100%;
  --bw-material-surface-bg-position:center,0 0,center;
  --bw-material-surface-bg-repeat:no-repeat,repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#ffe9a6 0%,#ef9ebf 100%);
  --bw-material-button-text:#3a2242;
  --bw-material-input-bg:linear-gradient(180deg,rgba(39,92,137,.88),rgba(17,47,79,.96));
}

html.premium-theme-night-mosque{
  --bw-material-text:#f7fbff;
  --bw-material-text-soft:rgba(225,234,255,.84);
  --bw-material-border:rgba(191,214,255,.24);
  --bw-material-border-strong:rgba(241,223,159,.30);
  --bw-material-accent:#f1df9f;
  --bw-material-accent-soft:rgba(241,223,159,.20);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(124,167,255,.14), transparent 28%), radial-gradient(circle at 84% 10%, rgba(241,223,159,.10), transparent 30%), linear-gradient(180deg,#030d1a 0%,#0d2345 42%,#153870 74%,#041021 100%);
  --bw-material-surface-color:#041021;
  --bw-material-surface-bg:linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,0) 28%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%0A  %3Crect width='180' height='120' fill='none'/%3E%0A  %3Cg fill='%23ffffff' fill-opacity='.55'%3E%0A    %3Ccircle cx='14' cy='18' r='1.3'/%3E%3Ccircle cx='38' cy='28' r='1'/%3E%3Ccircle cx='61' cy='12' r='1.2'/%3E%3Ccircle cx='91' cy='22' r='1'/%3E%3Ccircle cx='123' cy='16' r='1.25'/%3E%3Ccircle cx='152' cy='34' r='1.05'/%3E%3Ccircle cx='169' cy='18' r='1.1'/%3E%0A    %3Ccircle cx='22' cy='52' r='1.15'/%3E%3Ccircle cx='49' cy='61' r='1'/%3E%3Ccircle cx='78' cy='44' r='1.2'/%3E%3Ccircle cx='112' cy='58' r='1'/%3E%3Ccircle cx='138' cy='49' r='1.2'/%3E%3Ccircle cx='162' cy='63' r='1'/%3E%0A    %3Ccircle cx='18' cy='92' r='1.1'/%3E%3Ccircle cx='44' cy='104' r='1'/%3E%3Ccircle cx='83' cy='90' r='1.2'/%3E%3Ccircle cx='109' cy='98' r='1'/%3E%3Ccircle cx='145' cy='88' r='1.2'/%3E%3Ccircle cx='170' cy='104' r='1'/%3E%0A  %3C/g%3E%0A  %3Cpath d='M128 29a14 14 0 1 1-13-19 10 10 0 1 0 13 19z' fill='%23f1df9f' fill-opacity='.55'/%3E%0A%3C/svg%3E"), linear-gradient(135deg,#041021 0%,#0f2d59 54%,#1b4b8f 100%);
  --bw-material-surface-bg-size:100% 100%,180px 120px,100% 100%;
  --bw-material-surface-bg-position:center,0 0,center;
  --bw-material-surface-bg-repeat:no-repeat,repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#f1df9f 0%,#4d78cb 100%);
  --bw-material-button-text:#0f1b34;
  --bw-material-input-bg:linear-gradient(180deg,rgba(16,36,68,.88),rgba(5,16,34,.96));
}

html.premium-theme-desert-sand{
  --bw-material-text:#fffaf0;
  --bw-material-text-soft:rgba(255,241,220,.84);
  --bw-material-border:rgba(255,236,188,.28);
  --bw-material-border-strong:rgba(255,243,212,.40);
  --bw-material-accent:#fff0c8;
  --bw-material-accent-soft:rgba(255,240,200,.20);
  --bw-material-page-bg:radial-gradient(circle at 16% 0%, rgba(255,233,170,.14), transparent 28%), radial-gradient(circle at 84% 10%, rgba(255,246,217,.10), transparent 30%), linear-gradient(180deg,#5f3e18 0%,#9b6c33 44%,#d7ac69 74%,#6d471d 100%);
  --bw-material-surface-color:#6d471d;
  --bw-material-surface-bg:radial-gradient(circle at 84% 16%, rgba(255,246,217,.24), transparent 24%), radial-gradient(circle at 14% 86%, rgba(255,219,147,.16), transparent 26%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120'%3E%0A  %3Cg fill='%23fff1c8' fill-opacity='.22'%3E%0A    %3Ccircle cx='8' cy='11' r='1.2'/%3E%3Ccircle cx='31' cy='18' r='1'/%3E%3Ccircle cx='52' cy='8' r='1.1'/%3E%3Ccircle cx='77' cy='16' r='1'/%3E%3Ccircle cx='101' cy='9' r='1.15'/%3E%3Ccircle cx='123' cy='19' r='1'/%3E%3Ccircle cx='146' cy='12' r='1.1'/%3E%0A    %3Ccircle cx='18' cy='42' r='1'/%3E%3Ccircle cx='43' cy='37' r='1.15'/%3E%3Ccircle cx='68' cy='46' r='1'/%3E%3Ccircle cx='92' cy='39' r='1.2'/%3E%3Ccircle cx='116' cy='47' r='1'/%3E%3Ccircle cx='141' cy='40' r='1.1'/%3E%0A    %3Ccircle cx='11' cy='71' r='1.1'/%3E%3Ccircle cx='37' cy='78' r='1'/%3E%3Ccircle cx='59' cy='69' r='1.2'/%3E%3Ccircle cx='84' cy='80' r='1'/%3E%3Ccircle cx='109' cy='73' r='1.1'/%3E%3Ccircle cx='136' cy='81' r='1'/%3E%0A    %3Ccircle cx='19' cy='101' r='1.05'/%3E%3Ccircle cx='48' cy='110' r='1'/%3E%3Ccircle cx='74' cy='98' r='1.1'/%3E%3Ccircle cx='98' cy='109' r='1'/%3E%3Ccircle cx='126' cy='101' r='1.15'/%3E%3Ccircle cx='149' cy='111' r='1'/%3E%0A  %3C/g%3E%0A  %3Cg fill='none' stroke='%23b87c39' stroke-opacity='.18' stroke-width='2'%3E%0A    %3Cpath d='M-6 88c18-9 40-9 58 0 17 8 36 8 54 0 18-9 36-9 54 0'/%3E%0A    %3Cpath d='M-8 103c22-9 42-9 64 0 20 8 38 8 58 0 18-8 34-8 50 0'/%3E%0A  %3C/g%3E%0A%3C/svg%3E"), linear-gradient(150deg,#6d471d 0%,#bf8a46 58%,#efd49b 100%);
  --bw-material-surface-bg-size:100% 100%,100% 100%,160px 120px,100% 100%;
  --bw-material-surface-bg-position:center,center,0 0,center;
  --bw-material-surface-bg-repeat:no-repeat,no-repeat,repeat,no-repeat;
  --bw-material-button-bg:linear-gradient(180deg,#ffe4aa 0%,#bb7f35 100%);
  --bw-material-button-text:#3c2408;
  --bw-material-input-bg:linear-gradient(180deg,rgba(126,85,38,.88),rgba(74,46,17,.96));
}
/* ===== END BARAKAWAY PREMIUM MATERIAL THEMES FINAL ===== */`;
  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject, {once:true});
  } else {
    inject();
  }
})();
/* ===== END BARAKAWAY PREMIUM MATERIAL THEMES FINAL INJECTOR ===== */


/* ===== BARAKAWAY PREMIUM THEMES NO-SQUARE FINAL INJECTOR ===== */
(function(){
  const STYLE_ID = "barakaway-premium-themes-no-square-final";
  const CSS = `
/* ===== BARAKAWAY PREMIUM THEMES NO-SQUARE FINAL OVERRIDE ===== */
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite){
  --bw-final-bg:#101820;
  --bw-final-material:#101820;
  --bw-final-material-bg:linear-gradient(135deg,#151d26 0%,#101820 100%);
  --bw-final-material-size:100% 100%;
  --bw-final-material-position:center;
  --bw-final-material-repeat:no-repeat;
  --bw-final-text:#ffffff;
  --bw-final-text-soft:rgba(255,255,255,.86);
  --bw-final-border:rgba(255,255,255,.22);
  --bw-final-border-strong:rgba(255,255,255,.34);
  --bw-final-accent:#ffffff;
  --bw-final-button:linear-gradient(135deg,#444 0%,#111 100%);
  --bw-final-button-text:#ffffff;
}

html.premium-theme-royal-gold{
  --bw-final-bg:linear-gradient(180deg,#130b02 0%,#3a2408 46%,#8e6527 74%,#160e04 100%);
  --bw-final-material:#311c05;
  --bw-final-material-bg:radial-gradient(circle at 82% 18%,rgba(255,248,218,.38),transparent 24%),radial-gradient(circle at 18% 84%,rgba(255,206,96,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.03) 22%,rgba(255,215,112,.20) 46%,rgba(255,255,255,.08) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#311c05 0%,#8a5d1e 56%,#e8bd59 100%);
  --bw-final-border:rgba(255,221,135,.42);
  --bw-final-border-strong:rgba(255,236,186,.56);
  --bw-final-accent:#f4d27a;
  --bw-final-button:linear-gradient(180deg,#f2d47d 0%,#b67c25 100%);
  --bw-final-button-text:#1e1103;
}
html.premium-theme-emerald-quran{
  --bw-final-bg:linear-gradient(180deg,#041107 0%,#0d321b 48%,#1e7840 74%,#051108 100%);
  --bw-final-material:#06170c;
  --bw-final-material-bg:radial-gradient(circle at 82% 18%,rgba(185,255,211,.28),transparent 24%),radial-gradient(circle at 18% 84%,rgba(82,220,134,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 22%,rgba(79,225,138,.14) 46%,rgba(255,255,255,.07) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#06170c 0%,#114326 56%,#37a75d 100%);
  --bw-final-border:rgba(119,232,157,.40);
  --bw-final-border-strong:rgba(178,255,206,.50);
  --bw-final-accent:#8cf2ad;
  --bw-final-button:linear-gradient(180deg,#79dc97 0%,#237841 100%);
}
html.premium-theme-violet-noor{
  --bw-final-bg:linear-gradient(180deg,#0c0716 0%,#28124d 48%,#6034b5 74%,#10091b 100%);
  --bw-final-material:#10091b;
  --bw-final-material-bg:radial-gradient(circle at 82% 18%,rgba(241,231,255,.32),transparent 24%),radial-gradient(circle at 18% 84%,rgba(168,112,255,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 22%,rgba(204,174,255,.16) 46%,rgba(255,255,255,.07) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#10091b 0%,#351b65 56%,#a77bff 100%);
  --bw-final-border:rgba(214,191,255,.40);
  --bw-final-border-strong:rgba(235,225,255,.52);
  --bw-final-accent:#dcc8ff;
  --bw-final-button:linear-gradient(180deg,#ceb4ff 0%,#704ad6 100%);
}
html.premium-theme-rose-soft{
  --bw-final-bg:linear-gradient(180deg,#160812 0%,#432039 48%,#965271 74%,#180912 100%);
  --bw-final-material:#1a0a14;
  --bw-final-material-bg:radial-gradient(circle at 84% 18%,rgba(255,241,247,.34),transparent 26%),radial-gradient(circle at 18% 84%,rgba(255,172,208,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 22%,rgba(255,190,221,.15) 46%,rgba(255,255,255,.07) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#1a0a14 0%,#6a3551 58%,#e89bbe 100%);
  --bw-final-border:rgba(255,204,225,.42);
  --bw-final-border-strong:rgba(255,232,243,.54);
  --bw-final-accent:#ffd2e5;
  --bw-final-button:linear-gradient(180deg,#ffc0da 0%,#bf5a83 100%);
}
html.premium-theme-children-soft{
  --bw-final-bg:linear-gradient(180deg,#0f2d49 0%,#2e6fa8 48%,#78bdf1 74%,#123a60 100%);
  --bw-final-material:#143a61;
  --bw-final-material-bg:linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,227,241,.05)),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='150' viewBox='0 0 220 150'%3E%0A  %3Cdefs%3E%0A    %3Cg id='bear'%3E%0A      %3Ccircle cx='24' cy='18' r='9' fill='%23fff2c8' opacity='.72'/%3E%0A      %3Ccircle cx='48' cy='18' r='9' fill='%23fff2c8' opacity='.72'/%3E%0A      %3Ccircle cx='36' cy='34' r='23' fill='%23ffe8b8' opacity='.76'/%3E%0A      %3Ccircle cx='28' cy='30' r='2.6' fill='%237a5430' opacity='.72'/%3E%0A      %3Ccircle cx='44' cy='30' r='2.6' fill='%237a5430' opacity='.72'/%3E%0A      %3Cellipse cx='36' cy='39' rx='5.6' ry='4.6' fill='%23f5b7cb' opacity='.72'/%3E%0A      %3Cpath d='M28 48q8 7 16 0' fill='none' stroke='%237a5430' stroke-width='2.4' stroke-linecap='round' opacity='.68'/%3E%0A      %3Crect x='22' y='56' width='28' height='22' rx='13' fill='%23ffe8b8' opacity='.68'/%3E%0A    %3C/g%3E%0A  %3C/defs%3E%0A  %3Cuse href='%23bear' x='10' y='8'/%3E%0A  %3Cuse href='%23bear' x='94' y='0' transform='scale(.9)'/%3E%0A  %3Cuse href='%23bear' x='160' y='54' transform='scale(.72)'/%3E%0A  %3Cuse href='%23bear' x='58' y='80' transform='scale(.76)'/%3E%0A%3C/svg%3E"),linear-gradient(135deg,#12304d 0%,#4d95d0 58%,#8bcaff 100%);
  --bw-final-material-size:100% 100%,220px 150px,100% 100%;
  --bw-final-material-position:center,0 0,center;
  --bw-final-material-repeat:no-repeat,repeat,no-repeat;
  --bw-final-border:rgba(214,236,255,.42);
  --bw-final-border-strong:rgba(255,247,214,.52);
  --bw-final-accent:#fff0bf;
  --bw-final-button:linear-gradient(180deg,#ffe8a6 0%,#ef9ec0 100%);
  --bw-final-button-text:#3a2242;
}
html.premium-theme-night-mosque{
  --bw-final-bg:linear-gradient(180deg,#020914 0%,#0d2448 48%,#16407c 74%,#030d1a 100%);
  --bw-final-material:#041021;
  --bw-final-material-bg:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,0) 30%),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='150' viewBox='0 0 220 150'%3E%0A  %3Cdefs%3E%0A    %3Cpath id='s' d='M0,-5 L1.45,-1.45 L5,0 L1.45,1.45 L0,5 L-1.45,1.45 L-5,0 L-1.45,-1.45 Z' fill='%23ffffff' opacity='.62'/%3E%0A    %3Cpath id='g' d='M0,-6 L1.8,-1.8 L6,0 L1.8,1.8 L0,6 L-1.8,1.8 L-6,0 L-1.8,-1.8 Z' fill='%23f5df9b' opacity='.55'/%3E%0A  %3C/defs%3E%0A  %3Cuse href='%23s' x='18' y='20'/%3E%3Cuse href='%23s' x='48' y='36' transform='scale(.72)'/%3E%3Cuse href='%23g' x='78' y='18' transform='scale(.78)'/%3E%0A  %3Cuse href='%23s' x='118' y='30' transform='scale(.62)'/%3E%3Cuse href='%23s' x='154' y='18' transform='scale(.82)'/%3E%3Cuse href='%23g' x='194' y='42' transform='scale(.72)'/%3E%0A  %3Cuse href='%23s' x='28' y='76' transform='scale(.68)'/%3E%3Cuse href='%23g' x='64' y='94' transform='scale(.6)'/%3E%3Cuse href='%23s' x='104' y='76' transform='scale(.78)'/%3E%0A  %3Cuse href='%23s' x='144' y='98' transform='scale(.66)'/%3E%3Cuse href='%23g' x='186' y='84' transform='scale(.7)'/%3E%3Cuse href='%23s' x='204' y='124' transform='scale(.6)'/%3E%0A  %3Cpath d='M164 44a17 17 0 1 1-16-23 12 12 0 1 0 16 23z' fill='%23f1db91' opacity='.36'/%3E%0A%3C/svg%3E"),linear-gradient(135deg,#041021 0%,#102f5e 56%,#1b4c91 100%);
  --bw-final-material-size:100% 100%,220px 150px,100% 100%;
  --bw-final-material-position:center,0 0,center;
  --bw-final-material-repeat:no-repeat,repeat,no-repeat;
  --bw-final-border:rgba(190,214,255,.34);
  --bw-final-border-strong:rgba(241,223,159,.44);
  --bw-final-accent:#f1df9f;
  --bw-final-button:linear-gradient(180deg,#f1df9f 0%,#4f79cc 100%);
  --bw-final-button-text:#101b33;
}
html.premium-theme-desert-sand{
  --bw-final-bg:linear-gradient(180deg,#5f3e18 0%,#9d6f35 48%,#d9ad68 74%,#6d471d 100%);
  --bw-final-material:#755022;
  --bw-final-material-bg:radial-gradient(circle at 84% 16%,rgba(255,246,217,.22),transparent 26%),radial-gradient(circle at 14% 86%,rgba(255,218,143,.15),transparent 30%),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='160' viewBox='0 0 260 160'%3E%0A  %3Cpath d='M-20 94 C30 68 70 70 118 94 S210 122 280 88' fill='none' stroke='%23fff0c8' stroke-opacity='.16' stroke-width='18' stroke-linecap='round'/%3E%0A  %3Cpath d='M-30 124 C28 96 84 98 136 122 S222 150 292 108' fill='none' stroke='%239f6429' stroke-opacity='.13' stroke-width='22' stroke-linecap='round'/%3E%0A  %3Cpath d='M-20 42 C42 18 88 24 132 44 S208 70 280 36' fill='none' stroke='%23fff8d8' stroke-opacity='.12' stroke-width='14' stroke-linecap='round'/%3E%0A%3C/svg%3E"),linear-gradient(150deg,#6d471d 0%,#bd8743 58%,#efd19a 100%);
  --bw-final-material-size:100% 100%,100% 100%,260px 160px,100% 100%;
  --bw-final-material-position:center,center,0 0,center;
  --bw-final-material-repeat:no-repeat,no-repeat,repeat,no-repeat;
  --bw-final-border:rgba(255,236,188,.40);
  --bw-final-border-strong:rgba(255,243,212,.52);
  --bw-final-accent:#fff0c8;
  --bw-final-button:linear-gradient(180deg,#ffe3a8 0%,#b77b32 100%);
  --bw-final-button-text:#3b2408;
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
  background-color:var(--bw-final-material) !important;
  background-image:var(--bw-final-material-bg) !important;
  background-size:var(--bw-final-material-size) !important;
  background-position:var(--bw-final-material-position) !important;
  background-repeat:var(--bw-final-material-repeat) !important;
  border-color:var(--bw-final-border) !important;
  color:var(--bw-final-text) !important;
  box-shadow:0 24px 58px rgba(0,0,0,.40),0 0 0 1px rgba(255,255,255,.045),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -22px 34px rgba(0,0,0,.22) !important;
}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) body{background:var(--bw-final-bg) !important;color:var(--bw-final-text) !important;}

body .theme-grid .theme-card.theme-gold,
body .theme-grid .theme-card[data-theme="royal-gold"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-gold,
html[class*="premium-theme-"] .theme-card[data-theme="royal-gold"]{background-color:#311c05!important;background-image:radial-gradient(circle at 82% 18%,rgba(255,248,218,.38),transparent 24%),radial-gradient(circle at 18% 84%,rgba(255,206,96,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.03) 22%,rgba(255,215,112,.20) 46%,rgba(255,255,255,.08) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#311c05 0%,#8a5d1e 56%,#e8bd59 100%)!important;background-size:100% 100%!important;background-position:center!important;background-repeat:no-repeat!important;border-color:rgba(255,221,135,.48)!important;}
body .theme-grid .theme-card.theme-emerald,
body .theme-grid .theme-card[data-theme="emerald-quran"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-emerald,
html[class*="premium-theme-"] .theme-card[data-theme="emerald-quran"]{background-color:#06170c!important;background-image:radial-gradient(circle at 82% 18%,rgba(185,255,211,.28),transparent 24%),radial-gradient(circle at 18% 84%,rgba(82,220,134,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 22%,rgba(79,225,138,.14) 46%,rgba(255,255,255,.07) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#06170c 0%,#114326 56%,#37a75d 100%)!important;background-size:100% 100%!important;background-position:center!important;background-repeat:no-repeat!important;border-color:rgba(119,232,157,.46)!important;}
body .theme-grid .theme-card.theme-violet,
body .theme-grid .theme-card[data-theme="violet-noor"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-violet,
html[class*="premium-theme-"] .theme-card[data-theme="violet-noor"]{background-color:#10091b!important;background-image:radial-gradient(circle at 82% 18%,rgba(241,231,255,.32),transparent 24%),radial-gradient(circle at 18% 84%,rgba(168,112,255,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 22%,rgba(204,174,255,.16) 46%,rgba(255,255,255,.07) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#10091b 0%,#351b65 56%,#a77bff 100%)!important;background-size:100% 100%!important;background-position:center!important;background-repeat:no-repeat!important;border-color:rgba(214,191,255,.46)!important;}
body .theme-grid .theme-card.theme-rose,
body .theme-grid .theme-card[data-theme="rose-soft"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-rose,
html[class*="premium-theme-"] .theme-card[data-theme="rose-soft"]{background-color:#1a0a14!important;background-image:radial-gradient(circle at 84% 18%,rgba(255,241,247,.34),transparent 26%),radial-gradient(circle at 18% 84%,rgba(255,172,208,.18),transparent 34%),linear-gradient(118deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 22%,rgba(255,190,221,.15) 46%,rgba(255,255,255,.07) 62%,rgba(0,0,0,0) 82%),linear-gradient(135deg,#1a0a14 0%,#6a3551 58%,#e89bbe 100%)!important;background-size:100% 100%!important;background-position:center!important;background-repeat:no-repeat!important;border-color:rgba(255,204,225,.48)!important;}
body .theme-grid .theme-card.theme-child,
body .theme-grid .theme-card[data-theme="children-soft"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-child,
html[class*="premium-theme-"] .theme-card[data-theme="children-soft"]{background-color:#143a61!important;background-image:linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,227,241,.05)),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='150' viewBox='0 0 220 150'%3E%0A  %3Cdefs%3E%0A    %3Cg id='bear'%3E%0A      %3Ccircle cx='24' cy='18' r='9' fill='%23fff2c8' opacity='.72'/%3E%0A      %3Ccircle cx='48' cy='18' r='9' fill='%23fff2c8' opacity='.72'/%3E%0A      %3Ccircle cx='36' cy='34' r='23' fill='%23ffe8b8' opacity='.76'/%3E%0A      %3Ccircle cx='28' cy='30' r='2.6' fill='%237a5430' opacity='.72'/%3E%0A      %3Ccircle cx='44' cy='30' r='2.6' fill='%237a5430' opacity='.72'/%3E%0A      %3Cellipse cx='36' cy='39' rx='5.6' ry='4.6' fill='%23f5b7cb' opacity='.72'/%3E%0A      %3Cpath d='M28 48q8 7 16 0' fill='none' stroke='%237a5430' stroke-width='2.4' stroke-linecap='round' opacity='.68'/%3E%0A      %3Crect x='22' y='56' width='28' height='22' rx='13' fill='%23ffe8b8' opacity='.68'/%3E%0A    %3C/g%3E%0A  %3C/defs%3E%0A  %3Cuse href='%23bear' x='10' y='8'/%3E%0A  %3Cuse href='%23bear' x='94' y='0' transform='scale(.9)'/%3E%0A  %3Cuse href='%23bear' x='160' y='54' transform='scale(.72)'/%3E%0A  %3Cuse href='%23bear' x='58' y='80' transform='scale(.76)'/%3E%0A%3C/svg%3E"),linear-gradient(135deg,#12304d 0%,#4d95d0 58%,#8bcaff 100%)!important;background-size:100% 100%,220px 150px,100% 100%!important;background-position:center,0 0,center!important;background-repeat:no-repeat,repeat,no-repeat!important;border-color:rgba(214,236,255,.48)!important;}
body .theme-grid .theme-card.theme-night,
body .theme-grid .theme-card[data-theme="night-mosque"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-night,
html[class*="premium-theme-"] .theme-card[data-theme="night-mosque"]{background-color:#041021!important;background-image:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,0) 30%),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='150' viewBox='0 0 220 150'%3E%0A  %3Cdefs%3E%0A    %3Cpath id='s' d='M0,-5 L1.45,-1.45 L5,0 L1.45,1.45 L0,5 L-1.45,1.45 L-5,0 L-1.45,-1.45 Z' fill='%23ffffff' opacity='.62'/%3E%0A    %3Cpath id='g' d='M0,-6 L1.8,-1.8 L6,0 L1.8,1.8 L0,6 L-1.8,1.8 L-6,0 L-1.8,-1.8 Z' fill='%23f5df9b' opacity='.55'/%3E%0A  %3C/defs%3E%0A  %3Cuse href='%23s' x='18' y='20'/%3E%3Cuse href='%23s' x='48' y='36' transform='scale(.72)'/%3E%3Cuse href='%23g' x='78' y='18' transform='scale(.78)'/%3E%0A  %3Cuse href='%23s' x='118' y='30' transform='scale(.62)'/%3E%3Cuse href='%23s' x='154' y='18' transform='scale(.82)'/%3E%3Cuse href='%23g' x='194' y='42' transform='scale(.72)'/%3E%0A  %3Cuse href='%23s' x='28' y='76' transform='scale(.68)'/%3E%3Cuse href='%23g' x='64' y='94' transform='scale(.6)'/%3E%3Cuse href='%23s' x='104' y='76' transform='scale(.78)'/%3E%0A  %3Cuse href='%23s' x='144' y='98' transform='scale(.66)'/%3E%3Cuse href='%23g' x='186' y='84' transform='scale(.7)'/%3E%3Cuse href='%23s' x='204' y='124' transform='scale(.6)'/%3E%0A  %3Cpath d='M164 44a17 17 0 1 1-16-23 12 12 0 1 0 16 23z' fill='%23f1db91' opacity='.36'/%3E%0A%3C/svg%3E"),linear-gradient(135deg,#041021 0%,#102f5e 56%,#1b4c91 100%)!important;background-size:100% 100%,220px 150px,100% 100%!important;background-position:center,0 0,center!important;background-repeat:no-repeat,repeat,no-repeat!important;border-color:rgba(190,214,255,.42)!important;}
body .theme-grid .theme-card.theme-sand,
body .theme-grid .theme-card[data-theme="desert-sand"],
html[class*="premium-theme-"] .theme-grid .theme-card.theme-sand,
html[class*="premium-theme-"] .theme-card[data-theme="desert-sand"]{background-color:#755022!important;background-image:radial-gradient(circle at 84% 16%,rgba(255,246,217,.22),transparent 26%),radial-gradient(circle at 14% 86%,rgba(255,218,143,.15),transparent 30%),url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='160' viewBox='0 0 260 160'%3E%0A  %3Cpath d='M-20 94 C30 68 70 70 118 94 S210 122 280 88' fill='none' stroke='%23fff0c8' stroke-opacity='.16' stroke-width='18' stroke-linecap='round'/%3E%0A  %3Cpath d='M-30 124 C28 96 84 98 136 122 S222 150 292 108' fill='none' stroke='%239f6429' stroke-opacity='.13' stroke-width='22' stroke-linecap='round'/%3E%0A  %3Cpath d='M-20 42 C42 18 88 24 132 44 S208 70 280 36' fill='none' stroke='%23fff8d8' stroke-opacity='.12' stroke-width='14' stroke-linecap='round'/%3E%0A%3C/svg%3E"),linear-gradient(150deg,#6d471d 0%,#bd8743 58%,#efd19a 100%)!important;background-size:100% 100%,100% 100%,260px 160px,100% 100%!important;background-position:center,center,0 0,center!important;background-repeat:no-repeat,no-repeat,repeat,no-repeat!important;border-color:rgba(255,236,188,.46)!important;}

html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .theme-card::before{background:none!important;opacity:0!important;}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .theme-card::after{background:linear-gradient(118deg,transparent 0%,rgba(255,255,255,.10) 22%,transparent 40%,transparent 68%,rgba(255,255,255,.05) 82%,transparent 100%)!important;}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .theme-card h3,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .theme-card p{color:#fff!important;text-shadow:0 2px 14px rgba(0,0,0,.55)!important;}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h1,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h2,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h3,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) h4,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .title,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .category-title,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .surah-name,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .dua-title,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .ayah-arabic{color:var(--bw-final-text)!important;}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) p,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) li,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .subtitle,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .small,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .note,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .muted,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .label,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .meaning,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .when{color:var(--bw-final-text-soft)!important;}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .install-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .support-project-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .copy-wallet-btn,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .quick-btn{background:var(--bw-final-button)!important;color:var(--bw-final-button-text)!important;border-color:var(--bw-final-border-strong)!important;box-shadow:0 16px 34px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,255,255,.18)!important;}
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bw-logo-transparent-lock,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) .bw-logo-transparent-lock *,
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) [data-barakaway-logo-lock],
html[class*="premium-theme-"]:not(.premium-theme-carbon-elite) [data-barakaway-logo-lock] *{background:transparent!important;background-color:transparent!important;background-image:none!important;box-shadow:none!important;border-color:transparent!important;}
/* ===== END BARAKAWAY PREMIUM THEMES NO-SQUARE FINAL OVERRIDE ===== */
`;
  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", inject, {once:true});
  }else{
    inject();
  }
})();
/* ===== END BARAKAWAY PREMIUM THEMES NO-SQUARE FINAL INJECTOR ===== */


/* ===== BARAKAWAY NO-SQUARE PREMIUM THEMES FINAL INJECTOR ===== */
(function(){
  const STYLE_ID = 'barakaway-no-square-premium-themes-final-override';
  const CSS = "\n/* ===== BARAKAWAY NO-SQUARE PREMIUM THEMES FINAL OVERRIDE ===== */\nhtml.premium-theme-royal-gold{\n  --bg:#130b02;--surface:#291805;--surface-2:#654216;--surface-3:#d3a64c;--border:rgba(255,226,155,.42);--border-2:rgba(255,240,196,.56);--text:#fff8e5;--text-soft:#ffecc2;--text-muted:#e2bd73;--green:#f3d47c;--green-strong:#b77b20;--green-soft:#fff0c0;--bw-accent:#f3d47c;--bw-accent-2:#fff4d3;\n  --bw-final-body:radial-gradient(circle at 15% 0%,rgba(255,236,180,.18),transparent 30%),radial-gradient(circle at 85% 12%,rgba(255,211,118,.16),transparent 32%),linear-gradient(180deg,#120902 0%,#3b2408 44%,#9b6c27 78%,#140b02 100%);\n  --bw-final-card:radial-gradient(circle at 88% 12%,rgba(255,249,227,.30),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.16),rgba(255,255,255,0) 28%,rgba(255,218,120,.24) 48%,rgba(255,255,255,.10) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#2b1905 0%,#9f6d23 58%,#f2cf7a 100%);\n  --bw-final-card-size:100% 100%,100% 100%,100% 100%;--bw-final-card-repeat:no-repeat,no-repeat,no-repeat;--bw-final-card-position:center,center,center;--bw-final-button:linear-gradient(180deg,#ffe8a8 0%,#c98d2d 100%);--bw-final-button-text:#221305;\n}\nhtml.premium-theme-emerald-quran{\n  --bg:#031109;--surface:#061a0e;--surface-2:#0e4b29;--surface-3:#37a763;--border:rgba(126,235,166,.38);--border-2:rgba(183,255,211,.50);--text:#f4fff7;--text-soft:#d7ffe3;--text-muted:#a2eaba;--green:#75e598;--green-strong:#20713e;--green-soft:#cffff0;--bw-accent:#75e598;--bw-accent-2:#cffff0;\n  --bw-final-body:radial-gradient(circle at 15% 0%,rgba(95,232,148,.16),transparent 30%),radial-gradient(circle at 85% 12%,rgba(197,255,220,.12),transparent 32%),linear-gradient(180deg,#031109 0%,#0b2d19 44%,#1d7844 78%,#031109 100%);\n  --bw-final-card:radial-gradient(circle at 88% 12%,rgba(205,255,225,.24),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.10),rgba(255,255,255,0) 28%,rgba(90,230,145,.18) 48%,rgba(255,255,255,.08) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#06170c 0%,#126334 58%,#47bd70 100%);\n  --bw-final-card-size:100% 100%,100% 100%,100% 100%;--bw-final-card-repeat:no-repeat,no-repeat,no-repeat;--bw-final-card-position:center,center,center;--bw-final-button:linear-gradient(180deg,#8cf0a9 0%,#267947 100%);--bw-final-button-text:#ffffff;\n}\nhtml.premium-theme-violet-noor{\n  --bg:#10071a;--surface:#1b0f2d;--surface-2:#46247b;--surface-3:#a77dff;--border:rgba(217,195,255,.38);--border-2:rgba(238,228,255,.52);--text:#fcf8ff;--text-soft:#efdeff;--text-muted:#cfb2ff;--green:#c9a8ff;--green-strong:#6540c9;--green-soft:#efe4ff;--bw-accent:#c9a8ff;--bw-accent-2:#f4eaff;\n  --bw-final-body:radial-gradient(circle at 15% 0%,rgba(196,155,255,.17),transparent 30%),radial-gradient(circle at 85% 12%,rgba(244,232,255,.12),transparent 32%),linear-gradient(180deg,#0f0719 0%,#2c1352 44%,#6940bd 78%,#11071a 100%);\n  --bw-final-card:radial-gradient(circle at 88% 12%,rgba(245,236,255,.28),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.12),rgba(255,255,255,0) 28%,rgba(198,165,255,.20) 48%,rgba(255,255,255,.08) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#13091f 0%,#4d2a86 58%,#a77dff 100%);\n  --bw-final-card-size:100% 100%,100% 100%,100% 100%;--bw-final-card-repeat:no-repeat,no-repeat,no-repeat;--bw-final-card-position:center,center,center;--bw-final-button:linear-gradient(180deg,#d9c4ff 0%,#704bd4 100%);--bw-final-button-text:#ffffff;\n}\nhtml.premium-theme-rose-soft{\n  --bg:#180812;--surface:#28101e;--surface-2:#6e3551;--surface-3:#efa5c8;--border:rgba(255,205,226,.38);--border-2:rgba(255,236,246,.52);--text:#fff8fc;--text-soft:#ffe0ee;--text-muted:#f3aecb;--green:#ffb2d1;--green-strong:#b64f78;--green-soft:#ffe8f2;--bw-accent:#ffb2d1;--bw-accent-2:#fff0f7;\n  --bw-final-body:radial-gradient(circle at 15% 0%,rgba(255,194,221,.16),transparent 30%),radial-gradient(circle at 85% 12%,rgba(255,241,247,.12),transparent 32%),linear-gradient(180deg,#180812 0%,#462039 44%,#955476 78%,#190812 100%);\n  --bw-final-card:radial-gradient(circle at 88% 12%,rgba(255,241,247,.28),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.12),rgba(255,255,255,0) 28%,rgba(255,189,221,.19) 48%,rgba(255,255,255,.08) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#1d0b16 0%,#7a3c5b 58%,#f1a7ca 100%);\n  --bw-final-card-size:100% 100%,100% 100%,100% 100%;--bw-final-card-repeat:no-repeat,no-repeat,no-repeat;--bw-final-card-position:center,center,center;--bw-final-button:linear-gradient(180deg,#ffc6de 0%,#bf5a84 100%);--bw-final-button-text:#ffffff;\n}\nhtml.premium-theme-children-soft{\n  --bg:#0d2e4f;--surface:#143d65;--surface-2:#4a95ce;--surface-3:#91d0ff;--border:rgba(222,242,255,.42);--border-2:rgba(255,246,215,.46);--text:#ffffff;--text-soft:#eff9ff;--text-muted:#cdefff;--green:#fff0b8;--green-strong:#e9a4c1;--green-soft:#ffffff;--bw-accent:#fff0b8;--bw-accent-2:#ffe4f1;\n  --bw-final-body:radial-gradient(circle at 16% 0%,rgba(187,227,255,.18),transparent 30%),radial-gradient(circle at 82% 14%,rgba(255,226,241,.12),transparent 32%),linear-gradient(180deg,#10365b 0%,#347eb8 50%,#85c8f6 100%);\n  --bw-final-card:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,226,241,.05)),url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%0A  %3Cg opacity='.34'%3E%0A    %3Cg transform='translate(18 20)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(90 10) scale(.82)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(150 62) scale(.78)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(54 78) scale(.70)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A  %3C/g%3E%0A%3C/svg%3E\"),linear-gradient(135deg,#12375c 0%,#5ba7dc 58%,#94d0ff 100%);\n  --bw-final-card-size:100% 100%,220px 140px,100% 100%;--bw-final-card-repeat:no-repeat,repeat,no-repeat;--bw-final-card-position:center,0 0,center;--bw-final-button:linear-gradient(180deg,#fff1b8 0%,#f1a7c6 100%);--bw-final-button-text:#37223c;\n}\nhtml.premium-theme-night-mosque{\n  --bg:#030c1b;--surface:#06142b;--surface-2:#0f2f60;--surface-3:#1d4e96;--border:rgba(190,215,255,.30);--border-2:rgba(241,223,159,.34);--text:#f8fbff;--text-soft:#e4edff;--text-muted:#adc6f3;--green:#f1df9f;--green-strong:#426fb8;--green-soft:#fff1ba;--bw-accent:#f1df9f;--bw-accent-2:#bcd4ff;\n  --bw-final-body:radial-gradient(circle at 16% 0%,rgba(126,168,255,.14),transparent 30%),radial-gradient(circle at 84% 12%,rgba(241,223,159,.10),transparent 32%),linear-gradient(180deg,#030c1b 0%,#0c2347 48%,#174a88 100%);\n  --bw-final-card:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,0) 30%),url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%0A  %3Cg fill='%23ffffff' fill-opacity='.72'%3E%0A    %3Cpath d='M22 20l2.1 5.8 5.9 2-5.9 2-2.1 5.8-2.1-5.8-5.9-2 5.9-2z'/%3E%0A    %3Cpath d='M65 34l1.5 4.1 4.2 1.4-4.2 1.4-1.5 4.1-1.5-4.1-4.2-1.4 4.2-1.4z'/%3E%0A    %3Cpath d='M118 18l1.8 5 5.1 1.7-5.1 1.7-1.8 5-1.8-5-5.1-1.7 5.1-1.7z'/%3E%0A    %3Cpath d='M179 32l1.6 4.4 4.5 1.5-4.5 1.5-1.6 4.4-1.6-4.4-4.5-1.5 4.5-1.5z'/%3E%0A    %3Cpath d='M40 86l1.9 5.3 5.4 1.8-5.4 1.8-1.9 5.3-1.9-5.3-5.4-1.8 5.4-1.8z'/%3E%0A    %3Cpath d='M92 104l1.4 3.9 4 1.3-4 1.3-1.4 3.9-1.4-3.9-4-1.3 4-1.3z'/%3E%0A    %3Cpath d='M147 83l2.2 6 6.1 2-6.1 2-2.2 6-2.2-6-6.1-2 6.1-2z'/%3E%0A    %3Cpath d='M200 96l1.5 4.2 4.3 1.4-4.3 1.4-1.5 4.2-1.5-4.2-4.3-1.4 4.3-1.4z'/%3E%0A  %3C/g%3E%0A  %3Cpath d='M160 22c-8 13-2 29 13 33-15 3-31-7-34-23-3-15 7-29 21-34-4 7-4 16 0 24z' fill='%23f3d77a' fill-opacity='.58'/%3E%0A%3C/svg%3E\"),linear-gradient(135deg,#041022 0%,#12366b 58%,#1b4f91 100%);\n  --bw-final-card-size:100% 100%,220px 140px,100% 100%;--bw-final-card-repeat:no-repeat,repeat,no-repeat;--bw-final-card-position:center,0 0,center;--bw-final-button:linear-gradient(180deg,#f3df99 0%,#4878c8 100%);--bw-final-button-text:#101c34;\n}\nhtml.premium-theme-desert-sand{\n  --bg:#5f3b13;--surface:#7b501e;--surface-2:#b98543;--surface-3:#edd097;--border:rgba(255,236,190,.38);--border-2:rgba(255,245,216,.50);--text:#fffaf0;--text-soft:#fff0d6;--text-muted:#efd0a0;--green:#fff0c8;--green-strong:#b77b35;--green-soft:#fff5d8;--bw-accent:#fff0c8;--bw-accent-2:#fff6de;\n  --bw-final-body:radial-gradient(circle at 16% 0%,rgba(255,231,170,.14),transparent 30%),radial-gradient(circle at 84% 12%,rgba(255,246,217,.10),transparent 32%),linear-gradient(180deg,#5a3813 0%,#9f6e32 48%,#d8ad69 100%);\n  --bw-final-card:radial-gradient(ellipse at 82% 12%,rgba(255,246,217,.22),transparent 32%),linear-gradient(165deg,rgba(255,238,190,.20),rgba(255,238,190,0) 38%,rgba(111,67,20,.18) 72%,rgba(255,255,255,.08)),linear-gradient(150deg,#75501f 0%,#c58f46 58%,#efd29a 100%);\n  --bw-final-card-size:100% 100%,100% 100%,100% 100%;--bw-final-card-repeat:no-repeat,no-repeat,no-repeat;--bw-final-card-position:center,center,center;--bw-final-button:linear-gradient(180deg,#ffe4aa 0%,#bd8239 100%);--bw-final-button-text:#3c2408;\n}\n\nhtml.premium-theme-royal-gold body,\nhtml.premium-theme-emerald-quran body,\nhtml.premium-theme-violet-noor body,\nhtml.premium-theme-rose-soft body,\nhtml.premium-theme-children-soft body,\nhtml.premium-theme-night-mosque body,\nhtml.premium-theme-desert-sand body{\n  background-image:var(--bw-final-body) !important;\n  background-size:100% 100% !important;\n  background-position:center !important;\n  background-repeat:no-repeat !important;\n  color:var(--text) !important;\n}\n\nhtml.premium-theme-royal-gold body,\nhtml.premium-theme-royal-gold .container,\nhtml.premium-theme-royal-gold .hero,\nhtml.premium-theme-royal-gold .brand-prayer-hero,\nhtml.premium-theme-royal-gold .today-hub,\nhtml.premium-theme-royal-gold .about-project-card,\nhtml.premium-theme-royal-gold .barakaway-pro-final,\nhtml.premium-theme-royal-gold .block,\nhtml.premium-theme-royal-gold .card,\nhtml.premium-theme-royal-gold .box,\nhtml.premium-theme-royal-gold .panel,\nhtml.premium-theme-royal-gold .quote,\nhtml.premium-theme-royal-gold .empty,\nhtml.premium-theme-royal-gold .article,\nhtml.premium-theme-royal-gold .category-panel,\nhtml.premium-theme-royal-gold .surah-card,\nhtml.premium-theme-royal-gold .prayer-card,\nhtml.premium-theme-royal-gold .toggle-row,\nhtml.premium-theme-royal-gold .meta-item,\nhtml.premium-theme-royal-gold .note-box,\nhtml.premium-theme-royal-gold .jumuah-box,\nhtml.premium-theme-royal-gold .month-day,\nhtml.premium-theme-royal-gold .month-head,\nhtml.premium-theme-royal-gold .wallet-support,\nhtml.premium-theme-royal-gold .home-widget,\nhtml.premium-theme-royal-gold .dua-card,\nhtml.premium-theme-royal-gold .ayah-card,\nhtml.premium-theme-royal-gold .master-audio-wrap,\nhtml.premium-theme-royal-gold .reader-side,\nhtml.premium-theme-royal-gold .reader-main,\nhtml.premium-theme-royal-gold .dua-side,\nhtml.premium-theme-royal-gold .dua-main,\nhtml.premium-theme-royal-gold .ai-side,\nhtml.premium-theme-royal-gold .ai-main,\nhtml.premium-theme-royal-gold .player-panel,\nhtml.premium-theme-royal-gold .preview-panel,\nhtml.premium-theme-royal-gold .app-menu-btn,\nhtml.premium-theme-royal-gold .today-action,\nhtml.premium-theme-royal-gold .premium-resource-card,\nhtml.premium-theme-royal-gold .bottom-app-nav,\nhtml.premium-theme-royal-gold .bottom-app-nav-inner,\nhtml.premium-theme-emerald-quran body,\nhtml.premium-theme-emerald-quran .container,\nhtml.premium-theme-emerald-quran .hero,\nhtml.premium-theme-emerald-quran .brand-prayer-hero,\nhtml.premium-theme-emerald-quran .today-hub,\nhtml.premium-theme-emerald-quran .about-project-card,\nhtml.premium-theme-emerald-quran .barakaway-pro-final,\nhtml.premium-theme-emerald-quran .block,\nhtml.premium-theme-emerald-quran .card,\nhtml.premium-theme-emerald-quran .box,\nhtml.premium-theme-emerald-quran .panel,\nhtml.premium-theme-emerald-quran .quote,\nhtml.premium-theme-emerald-quran .empty,\nhtml.premium-theme-emerald-quran .article,\nhtml.premium-theme-emerald-quran .category-panel,\nhtml.premium-theme-emerald-quran .surah-card,\nhtml.premium-theme-emerald-quran .prayer-card,\nhtml.premium-theme-emerald-quran .toggle-row,\nhtml.premium-theme-emerald-quran .meta-item,\nhtml.premium-theme-emerald-quran .note-box,\nhtml.premium-theme-emerald-quran .jumuah-box,\nhtml.premium-theme-emerald-quran .month-day,\nhtml.premium-theme-emerald-quran .month-head,\nhtml.premium-theme-emerald-quran .wallet-support,\nhtml.premium-theme-emerald-quran .home-widget,\nhtml.premium-theme-emerald-quran .dua-card,\nhtml.premium-theme-emerald-quran .ayah-card,\nhtml.premium-theme-emerald-quran .master-audio-wrap,\nhtml.premium-theme-emerald-quran .reader-side,\nhtml.premium-theme-emerald-quran .reader-main,\nhtml.premium-theme-emerald-quran .dua-side,\nhtml.premium-theme-emerald-quran .dua-main,\nhtml.premium-theme-emerald-quran .ai-side,\nhtml.premium-theme-emerald-quran .ai-main,\nhtml.premium-theme-emerald-quran .player-panel,\nhtml.premium-theme-emerald-quran .preview-panel,\nhtml.premium-theme-emerald-quran .app-menu-btn,\nhtml.premium-theme-emerald-quran .today-action,\nhtml.premium-theme-emerald-quran .premium-resource-card,\nhtml.premium-theme-emerald-quran .bottom-app-nav,\nhtml.premium-theme-emerald-quran .bottom-app-nav-inner,\nhtml.premium-theme-violet-noor body,\nhtml.premium-theme-violet-noor .container,\nhtml.premium-theme-violet-noor .hero,\nhtml.premium-theme-violet-noor .brand-prayer-hero,\nhtml.premium-theme-violet-noor .today-hub,\nhtml.premium-theme-violet-noor .about-project-card,\nhtml.premium-theme-violet-noor .barakaway-pro-final,\nhtml.premium-theme-violet-noor .block,\nhtml.premium-theme-violet-noor .card,\nhtml.premium-theme-violet-noor .box,\nhtml.premium-theme-violet-noor .panel,\nhtml.premium-theme-violet-noor .quote,\nhtml.premium-theme-violet-noor .empty,\nhtml.premium-theme-violet-noor .article,\nhtml.premium-theme-violet-noor .category-panel,\nhtml.premium-theme-violet-noor .surah-card,\nhtml.premium-theme-violet-noor .prayer-card,\nhtml.premium-theme-violet-noor .toggle-row,\nhtml.premium-theme-violet-noor .meta-item,\nhtml.premium-theme-violet-noor .note-box,\nhtml.premium-theme-violet-noor .jumuah-box,\nhtml.premium-theme-violet-noor .month-day,\nhtml.premium-theme-violet-noor .month-head,\nhtml.premium-theme-violet-noor .wallet-support,\nhtml.premium-theme-violet-noor .home-widget,\nhtml.premium-theme-violet-noor .dua-card,\nhtml.premium-theme-violet-noor .ayah-card,\nhtml.premium-theme-violet-noor .master-audio-wrap,\nhtml.premium-theme-violet-noor .reader-side,\nhtml.premium-theme-violet-noor .reader-main,\nhtml.premium-theme-violet-noor .dua-side,\nhtml.premium-theme-violet-noor .dua-main,\nhtml.premium-theme-violet-noor .ai-side,\nhtml.premium-theme-violet-noor .ai-main,\nhtml.premium-theme-violet-noor .player-panel,\nhtml.premium-theme-violet-noor .preview-panel,\nhtml.premium-theme-violet-noor .app-menu-btn,\nhtml.premium-theme-violet-noor .today-action,\nhtml.premium-theme-violet-noor .premium-resource-card,\nhtml.premium-theme-violet-noor .bottom-app-nav,\nhtml.premium-theme-violet-noor .bottom-app-nav-inner,\nhtml.premium-theme-rose-soft body,\nhtml.premium-theme-rose-soft .container,\nhtml.premium-theme-rose-soft .hero,\nhtml.premium-theme-rose-soft .brand-prayer-hero,\nhtml.premium-theme-rose-soft .today-hub,\nhtml.premium-theme-rose-soft .about-project-card,\nhtml.premium-theme-rose-soft .barakaway-pro-final,\nhtml.premium-theme-rose-soft .block,\nhtml.premium-theme-rose-soft .card,\nhtml.premium-theme-rose-soft .box,\nhtml.premium-theme-rose-soft .panel,\nhtml.premium-theme-rose-soft .quote,\nhtml.premium-theme-rose-soft .empty,\nhtml.premium-theme-rose-soft .article,\nhtml.premium-theme-rose-soft .category-panel,\nhtml.premium-theme-rose-soft .surah-card,\nhtml.premium-theme-rose-soft .prayer-card,\nhtml.premium-theme-rose-soft .toggle-row,\nhtml.premium-theme-rose-soft .meta-item,\nhtml.premium-theme-rose-soft .note-box,\nhtml.premium-theme-rose-soft .jumuah-box,\nhtml.premium-theme-rose-soft .month-day,\nhtml.premium-theme-rose-soft .month-head,\nhtml.premium-theme-rose-soft .wallet-support,\nhtml.premium-theme-rose-soft .home-widget,\nhtml.premium-theme-rose-soft .dua-card,\nhtml.premium-theme-rose-soft .ayah-card,\nhtml.premium-theme-rose-soft .master-audio-wrap,\nhtml.premium-theme-rose-soft .reader-side,\nhtml.premium-theme-rose-soft .reader-main,\nhtml.premium-theme-rose-soft .dua-side,\nhtml.premium-theme-rose-soft .dua-main,\nhtml.premium-theme-rose-soft .ai-side,\nhtml.premium-theme-rose-soft .ai-main,\nhtml.premium-theme-rose-soft .player-panel,\nhtml.premium-theme-rose-soft .preview-panel,\nhtml.premium-theme-rose-soft .app-menu-btn,\nhtml.premium-theme-rose-soft .today-action,\nhtml.premium-theme-rose-soft .premium-resource-card,\nhtml.premium-theme-rose-soft .bottom-app-nav,\nhtml.premium-theme-rose-soft .bottom-app-nav-inner,\nhtml.premium-theme-children-soft body,\nhtml.premium-theme-children-soft .container,\nhtml.premium-theme-children-soft .hero,\nhtml.premium-theme-children-soft .brand-prayer-hero,\nhtml.premium-theme-children-soft .today-hub,\nhtml.premium-theme-children-soft .about-project-card,\nhtml.premium-theme-children-soft .barakaway-pro-final,\nhtml.premium-theme-children-soft .block,\nhtml.premium-theme-children-soft .card,\nhtml.premium-theme-children-soft .box,\nhtml.premium-theme-children-soft .panel,\nhtml.premium-theme-children-soft .quote,\nhtml.premium-theme-children-soft .empty,\nhtml.premium-theme-children-soft .article,\nhtml.premium-theme-children-soft .category-panel,\nhtml.premium-theme-children-soft .surah-card,\nhtml.premium-theme-children-soft .prayer-card,\nhtml.premium-theme-children-soft .toggle-row,\nhtml.premium-theme-children-soft .meta-item,\nhtml.premium-theme-children-soft .note-box,\nhtml.premium-theme-children-soft .jumuah-box,\nhtml.premium-theme-children-soft .month-day,\nhtml.premium-theme-children-soft .month-head,\nhtml.premium-theme-children-soft .wallet-support,\nhtml.premium-theme-children-soft .home-widget,\nhtml.premium-theme-children-soft .dua-card,\nhtml.premium-theme-children-soft .ayah-card,\nhtml.premium-theme-children-soft .master-audio-wrap,\nhtml.premium-theme-children-soft .reader-side,\nhtml.premium-theme-children-soft .reader-main,\nhtml.premium-theme-children-soft .dua-side,\nhtml.premium-theme-children-soft .dua-main,\nhtml.premium-theme-children-soft .ai-side,\nhtml.premium-theme-children-soft .ai-main,\nhtml.premium-theme-children-soft .player-panel,\nhtml.premium-theme-children-soft .preview-panel,\nhtml.premium-theme-children-soft .app-menu-btn,\nhtml.premium-theme-children-soft .today-action,\nhtml.premium-theme-children-soft .premium-resource-card,\nhtml.premium-theme-children-soft .bottom-app-nav,\nhtml.premium-theme-children-soft .bottom-app-nav-inner,\nhtml.premium-theme-night-mosque body,\nhtml.premium-theme-night-mosque .container,\nhtml.premium-theme-night-mosque .hero,\nhtml.premium-theme-night-mosque .brand-prayer-hero,\nhtml.premium-theme-night-mosque .today-hub,\nhtml.premium-theme-night-mosque .about-project-card,\nhtml.premium-theme-night-mosque .barakaway-pro-final,\nhtml.premium-theme-night-mosque .block,\nhtml.premium-theme-night-mosque .card,\nhtml.premium-theme-night-mosque .box,\nhtml.premium-theme-night-mosque .panel,\nhtml.premium-theme-night-mosque .quote,\nhtml.premium-theme-night-mosque .empty,\nhtml.premium-theme-night-mosque .article,\nhtml.premium-theme-night-mosque .category-panel,\nhtml.premium-theme-night-mosque .surah-card,\nhtml.premium-theme-night-mosque .prayer-card,\nhtml.premium-theme-night-mosque .toggle-row,\nhtml.premium-theme-night-mosque .meta-item,\nhtml.premium-theme-night-mosque .note-box,\nhtml.premium-theme-night-mosque .jumuah-box,\nhtml.premium-theme-night-mosque .month-day,\nhtml.premium-theme-night-mosque .month-head,\nhtml.premium-theme-night-mosque .wallet-support,\nhtml.premium-theme-night-mosque .home-widget,\nhtml.premium-theme-night-mosque .dua-card,\nhtml.premium-theme-night-mosque .ayah-card,\nhtml.premium-theme-night-mosque .master-audio-wrap,\nhtml.premium-theme-night-mosque .reader-side,\nhtml.premium-theme-night-mosque .reader-main,\nhtml.premium-theme-night-mosque .dua-side,\nhtml.premium-theme-night-mosque .dua-main,\nhtml.premium-theme-night-mosque .ai-side,\nhtml.premium-theme-night-mosque .ai-main,\nhtml.premium-theme-night-mosque .player-panel,\nhtml.premium-theme-night-mosque .preview-panel,\nhtml.premium-theme-night-mosque .app-menu-btn,\nhtml.premium-theme-night-mosque .today-action,\nhtml.premium-theme-night-mosque .premium-resource-card,\nhtml.premium-theme-night-mosque .bottom-app-nav,\nhtml.premium-theme-night-mosque .bottom-app-nav-inner,\nhtml.premium-theme-desert-sand body,\nhtml.premium-theme-desert-sand .container,\nhtml.premium-theme-desert-sand .hero,\nhtml.premium-theme-desert-sand .brand-prayer-hero,\nhtml.premium-theme-desert-sand .today-hub,\nhtml.premium-theme-desert-sand .about-project-card,\nhtml.premium-theme-desert-sand .barakaway-pro-final,\nhtml.premium-theme-desert-sand .block,\nhtml.premium-theme-desert-sand .card,\nhtml.premium-theme-desert-sand .box,\nhtml.premium-theme-desert-sand .panel,\nhtml.premium-theme-desert-sand .quote,\nhtml.premium-theme-desert-sand .empty,\nhtml.premium-theme-desert-sand .article,\nhtml.premium-theme-desert-sand .category-panel,\nhtml.premium-theme-desert-sand .surah-card,\nhtml.premium-theme-desert-sand .prayer-card,\nhtml.premium-theme-desert-sand .toggle-row,\nhtml.premium-theme-desert-sand .meta-item,\nhtml.premium-theme-desert-sand .note-box,\nhtml.premium-theme-desert-sand .jumuah-box,\nhtml.premium-theme-desert-sand .month-day,\nhtml.premium-theme-desert-sand .month-head,\nhtml.premium-theme-desert-sand .wallet-support,\nhtml.premium-theme-desert-sand .home-widget,\nhtml.premium-theme-desert-sand .dua-card,\nhtml.premium-theme-desert-sand .ayah-card,\nhtml.premium-theme-desert-sand .master-audio-wrap,\nhtml.premium-theme-desert-sand .reader-side,\nhtml.premium-theme-desert-sand .reader-main,\nhtml.premium-theme-desert-sand .dua-side,\nhtml.premium-theme-desert-sand .dua-main,\nhtml.premium-theme-desert-sand .ai-side,\nhtml.premium-theme-desert-sand .ai-main,\nhtml.premium-theme-desert-sand .player-panel,\nhtml.premium-theme-desert-sand .preview-panel,\nhtml.premium-theme-desert-sand .app-menu-btn,\nhtml.premium-theme-desert-sand .today-action,\nhtml.premium-theme-desert-sand .premium-resource-card,\nhtml.premium-theme-desert-sand .bottom-app-nav,\nhtml.premium-theme-desert-sand .bottom-app-nav-inner{\n  background-color:var(--surface) !important;\n  background-image:var(--bw-final-card) !important;\n  background-size:var(--bw-final-card-size) !important;\n  background-position:var(--bw-final-card-position) !important;\n  background-repeat:var(--bw-final-card-repeat) !important;\n  border-color:var(--border) !important;\n  color:var(--text) !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.38),0 0 0 1px rgba(255,255,255,.05),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -22px 34px rgba(0,0,0,.22) !important;\n}\n\nbody .theme-grid .theme-card.theme-gold,\nbody .theme-grid .theme-card[data-theme=\"royal-gold\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-gold,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"royal-gold\"]{background-color:#291805 !important;background-image:radial-gradient(circle at 88% 12%,rgba(255,249,227,.30),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.16),rgba(255,255,255,0) 28%,rgba(255,218,120,.24) 48%,rgba(255,255,255,.10) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#2b1905 0%,#9f6d23 58%,#f2cf7a 100%) !important;background-size:100% 100%,100% 100%,100% 100% !important;background-position:center,center,center !important;background-repeat:no-repeat,no-repeat,no-repeat !important;border-color:rgba(255,226,155,.52) !important;}\nbody .theme-grid .theme-card.theme-emerald,\nbody .theme-grid .theme-card[data-theme=\"emerald-quran\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-emerald,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"emerald-quran\"]{background-color:#061a0e !important;background-image:radial-gradient(circle at 88% 12%,rgba(205,255,225,.24),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.10),rgba(255,255,255,0) 28%,rgba(90,230,145,.18) 48%,rgba(255,255,255,.08) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#06170c 0%,#126334 58%,#47bd70 100%) !important;background-size:100% 100%,100% 100%,100% 100% !important;background-position:center,center,center !important;background-repeat:no-repeat,no-repeat,no-repeat !important;border-color:rgba(126,235,166,.48) !important;}\nbody .theme-grid .theme-card.theme-violet,\nbody .theme-grid .theme-card[data-theme=\"violet-noor\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-violet,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"violet-noor\"]{background-color:#1b0f2d !important;background-image:radial-gradient(circle at 88% 12%,rgba(245,236,255,.28),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.12),rgba(255,255,255,0) 28%,rgba(198,165,255,.20) 48%,rgba(255,255,255,.08) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#13091f 0%,#4d2a86 58%,#a77dff 100%) !important;background-size:100% 100%,100% 100%,100% 100% !important;background-position:center,center,center !important;background-repeat:no-repeat,no-repeat,no-repeat !important;border-color:rgba(217,195,255,.48) !important;}\nbody .theme-grid .theme-card.theme-rose,\nbody .theme-grid .theme-card[data-theme=\"rose-soft\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-rose,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"rose-soft\"]{background-color:#28101e !important;background-image:radial-gradient(circle at 88% 12%,rgba(255,241,247,.28),transparent 26%),linear-gradient(112deg,rgba(255,255,255,.12),rgba(255,255,255,0) 28%,rgba(255,189,221,.19) 48%,rgba(255,255,255,.08) 68%,rgba(0,0,0,0)),linear-gradient(135deg,#1d0b16 0%,#7a3c5b 58%,#f1a7ca 100%) !important;background-size:100% 100%,100% 100%,100% 100% !important;background-position:center,center,center !important;background-repeat:no-repeat,no-repeat,no-repeat !important;border-color:rgba(255,205,226,.48) !important;}\nbody .theme-grid .theme-card.theme-child,\nbody .theme-grid .theme-card[data-theme=\"children-soft\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-child,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"children-soft\"]{background-color:#143d65 !important;background-image:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,226,241,.05)),url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%0A  %3Cg opacity='.34'%3E%0A    %3Cg transform='translate(18 20)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(90 10) scale(.82)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(150 62) scale(.78)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A    %3Cg transform='translate(54 78) scale(.70)'%3E%0A      %3Ccircle cx='26' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='44' cy='16' r='8' fill='%23fff7d7'/%3E%3Ccircle cx='35' cy='31' r='21' fill='%23fff7d7'/%3E%3Ccircle cx='28' cy='28' r='2.4' fill='%237b5633'/%3E%3Ccircle cx='42' cy='28' r='2.4' fill='%237b5633'/%3E%3Cellipse cx='35' cy='36' rx='5' ry='4' fill='%23efb0c6'/%3E%3Cpath d='M29 43 Q35 49 41 43' fill='none' stroke='%237b5633' stroke-width='2.4' stroke-linecap='round'/%3E%3Crect x='22' y='52' width='26' height='20' rx='11' fill='%23fff7d7'/%3E%0A    %3C/g%3E%0A  %3C/g%3E%0A%3C/svg%3E\"),linear-gradient(135deg,#12375c 0%,#5ba7dc 58%,#94d0ff 100%) !important;background-size:100% 100%,220px 140px,100% 100% !important;background-position:center,0 0,center !important;background-repeat:no-repeat,repeat,no-repeat !important;border-color:rgba(222,242,255,.50) !important;}\nbody .theme-grid .theme-card.theme-night,\nbody .theme-grid .theme-card[data-theme=\"night-mosque\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-night,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"night-mosque\"]{background-color:#06142b !important;background-image:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,0) 30%),url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='140' viewBox='0 0 220 140'%3E%0A  %3Cg fill='%23ffffff' fill-opacity='.72'%3E%0A    %3Cpath d='M22 20l2.1 5.8 5.9 2-5.9 2-2.1 5.8-2.1-5.8-5.9-2 5.9-2z'/%3E%0A    %3Cpath d='M65 34l1.5 4.1 4.2 1.4-4.2 1.4-1.5 4.1-1.5-4.1-4.2-1.4 4.2-1.4z'/%3E%0A    %3Cpath d='M118 18l1.8 5 5.1 1.7-5.1 1.7-1.8 5-1.8-5-5.1-1.7 5.1-1.7z'/%3E%0A    %3Cpath d='M179 32l1.6 4.4 4.5 1.5-4.5 1.5-1.6 4.4-1.6-4.4-4.5-1.5 4.5-1.5z'/%3E%0A    %3Cpath d='M40 86l1.9 5.3 5.4 1.8-5.4 1.8-1.9 5.3-1.9-5.3-5.4-1.8 5.4-1.8z'/%3E%0A    %3Cpath d='M92 104l1.4 3.9 4 1.3-4 1.3-1.4 3.9-1.4-3.9-4-1.3 4-1.3z'/%3E%0A    %3Cpath d='M147 83l2.2 6 6.1 2-6.1 2-2.2 6-2.2-6-6.1-2 6.1-2z'/%3E%0A    %3Cpath d='M200 96l1.5 4.2 4.3 1.4-4.3 1.4-1.5 4.2-1.5-4.2-4.3-1.4 4.3-1.4z'/%3E%0A  %3C/g%3E%0A  %3Cpath d='M160 22c-8 13-2 29 13 33-15 3-31-7-34-23-3-15 7-29 21-34-4 7-4 16 0 24z' fill='%23f3d77a' fill-opacity='.58'/%3E%0A%3C/svg%3E\"),linear-gradient(135deg,#041022 0%,#12366b 58%,#1b4f91 100%) !important;background-size:100% 100%,220px 140px,100% 100% !important;background-position:center,0 0,center !important;background-repeat:no-repeat,repeat,no-repeat !important;border-color:rgba(190,215,255,.40) !important;}\nbody .theme-grid .theme-card.theme-sand,\nbody .theme-grid .theme-card[data-theme=\"desert-sand\"],\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card.theme-sand,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card[data-theme=\"desert-sand\"]{background-color:#7b501e !important;background-image:radial-gradient(ellipse at 82% 12%,rgba(255,246,217,.22),transparent 32%),linear-gradient(165deg,rgba(255,238,190,.20),rgba(255,238,190,0) 38%,rgba(111,67,20,.18) 72%,rgba(255,255,255,.08)),linear-gradient(150deg,#75501f 0%,#c58f46 58%,#efd29a 100%) !important;background-size:100% 100%,100% 100%,100% 100% !important;background-position:center,center,center !important;background-repeat:no-repeat,no-repeat,no-repeat !important;border-color:rgba(255,236,190,.48) !important;}\n\nbody .theme-grid .theme-card:not(.theme-carbon)::before,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card:not(.theme-carbon)::before{background:linear-gradient(118deg,transparent 0%,rgba(255,255,255,.16) 25%,transparent 44%,transparent 100%) !important;opacity:.45 !important;}\nbody .theme-grid .theme-card:not(.theme-carbon)::after,\nhtml[class*=\"premium-theme-\"] .theme-grid .theme-card:not(.theme-carbon)::after{background:none !important;}\nbody .theme-grid .theme-card h3,body .theme-grid .theme-card p,body .theme-grid .theme-card strong{text-shadow:0 2px 14px rgba(0,0,0,.54) !important;}\nbody .theme-grid .theme-card .preview-pill{background:rgba(255,255,255,.42) !important;}\nhtml.premium-theme-royal-gold button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-emerald-quran button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-violet-noor button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-rose-soft button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-children-soft button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-night-mosque button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-desert-sand button:not(.icon-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item),html.premium-theme-royal-gold .btn,html.premium-theme-emerald-quran .btn,html.premium-theme-violet-noor .btn,html.premium-theme-rose-soft .btn,html.premium-theme-children-soft .btn,html.premium-theme-night-mosque .btn,html.premium-theme-desert-sand .btn{background:var(--bw-final-button) !important;color:var(--bw-final-button-text) !important;border-color:var(--border-2) !important;box-shadow:0 16px 34px rgba(0,0,0,.30),inset 0 1px 0 rgba(255,255,255,.18) !important;}\nhtml.premium-theme-royal-gold .bw-logo-transparent-lock,html.premium-theme-emerald-quran .bw-logo-transparent-lock,html.premium-theme-violet-noor .bw-logo-transparent-lock,html.premium-theme-rose-soft .bw-logo-transparent-lock,html.premium-theme-children-soft .bw-logo-transparent-lock,html.premium-theme-night-mosque .bw-logo-transparent-lock,html.premium-theme-desert-sand .bw-logo-transparent-lock,html.premium-theme-royal-gold [data-barakaway-logo-lock],html.premium-theme-emerald-quran [data-barakaway-logo-lock],html.premium-theme-violet-noor [data-barakaway-logo-lock],html.premium-theme-rose-soft [data-barakaway-logo-lock],html.premium-theme-children-soft [data-barakaway-logo-lock],html.premium-theme-night-mosque [data-barakaway-logo-lock],html.premium-theme-desert-sand [data-barakaway-logo-lock]{background:transparent !important;background-color:transparent !important;background-image:none !important;box-shadow:none !important;border-color:transparent !important;}\n/* ===== END BARAKAWAY NO-SQUARE PREMIUM THEMES FINAL OVERRIDE ===== */\n";
  function injectFinalPremiumMaterials(){
    const old = document.getElementById(STYLE_ID);
    if(old) old.remove();
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', injectFinalPremiumMaterials, {once:true});
  }else{
    injectFinalPremiumMaterials();
  }
  window.addEventListener('barakaway:premium-theme-change', injectFinalPremiumMaterials);
})();
/* ===== END BARAKAWAY NO-SQUARE PREMIUM THEMES FINAL INJECTOR ===== */
