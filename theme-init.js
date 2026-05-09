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
  const STYLE_ID = "barakaway-premium-theme-precision-patch";
  const CSS = '\n/* ===== BARAKAWAY PRO THEMES PRECISION PATCH ===== */\n\n/* Theme chooser cards must keep their own identity colors */\nhtml[class*="premium-theme-"] .theme-card[data-theme],\nhtml[class*="premium-theme-"] .theme-card[data-theme] *{\n  transition:background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease !important;\n}\n\nhtml[class*="premium-theme-"] .theme-card[data-theme]{\n  color:#ffffff !important;\n}\n\n/* Royal Gold card always stays gold */\nhtml[class*="premium-theme-"] .theme-card[data-theme="royal-gold"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,244,190,.38),transparent 30%),\n    linear-gradient(135deg,#171208 0%,#5b4218 48%,#d7c07a 100%) !important;\n  border-color:rgba(244,220,148,.58) !important;\n}\n\n/* Emerald Quran card always stays emerald */\nhtml[class*="premium-theme-"] .theme-card[data-theme="emerald-quran"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(102,198,128,.38),transparent 30%),\n    linear-gradient(135deg,#061109 0%,#12301d 52%,#4caf6a 100%) !important;\n  border-color:rgba(102,198,128,.58) !important;\n}\n\n/* Violet card always stays violet */\nhtml[class*="premium-theme-"] .theme-card[data-theme="violet-noor"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(161,118,255,.40),transparent 30%),\n    linear-gradient(135deg,#0d0a15 0%,#241a42 52%,#a176ff 100%) !important;\n  border-color:rgba(161,118,255,.58) !important;\n}\n\n/* Rose card always stays rose */\nhtml[class*="premium-theme-"] .theme-card[data-theme="rose-soft"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,158,199,.40),transparent 30%),\n    linear-gradient(135deg,#160a12 0%,#401b31 52%,#ff9ec7 100%) !important;\n  border-color:rgba(255,158,199,.58) !important;\n}\n\n/* Carbon card always stays carbon */\nhtml[class*="premium-theme-"] .theme-card[data-theme="carbon-elite"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(202,213,224,.24),transparent 30%),\n    linear-gradient(135deg,#050607 0%,#1a222c 52%,#59616c 100%) !important;\n  border-color:rgba(202,213,224,.44) !important;\n}\n\n/* Children card always stays soft/kids */\nhtml[class*="premium-theme-"] .theme-card[data-theme="children-soft"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,227,241,.40),transparent 30%),\n    linear-gradient(135deg,#0c1f32 0%,#234d75 52%,#87cbff 100%) !important;\n  border-color:rgba(135,203,255,.58) !important;\n}\n\n/* Night mosque card always stays night-blue */\nhtml[class*="premium-theme-"] .theme-card[data-theme="night-mosque"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(215,192,122,.22),transparent 30%),\n    linear-gradient(135deg,#050b13 0%,#10213d 52%,#355d9a 100%) !important;\n  border-color:rgba(118,154,215,.46) !important;\n}\n\n/* Desert card always stays sand */\nhtml[class*="premium-theme-"] .theme-card[data-theme="desert-sand"]{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,237,190,.32),transparent 30%),\n    linear-gradient(135deg,#130c05 0%,#3e2b13 52%,#dbae61 100%) !important;\n  border-color:rgba(255,237,190,.50) !important;\n}\n\n/* Restore-original card stays neutral */\nhtml[class*="premium-theme-"] .theme-card[data-theme-clear],\nhtml[class*="premium-theme-"] .restore-original-theme-card{\n  background:\n    linear-gradient(135deg,rgba(15,20,28,.96) 0%,rgba(22,29,39,.96) 100%) !important;\n  border-color:rgba(255,255,255,.12) !important;\n}\n\n/* Make theme-card typography readable but not recolored by active premium theme */\nhtml[class*="premium-theme-"] .theme-card[data-theme] h3,\nhtml[class*="premium-theme-"] .theme-card[data-theme] p,\nhtml[class*="premium-theme-"] .theme-card[data-theme] strong{\n  color:#ffffff !important;\n}\n\nhtml[class*="premium-theme-"] .theme-card[data-theme] p{\n  color:rgba(255,255,255,.84) !important;\n}\n\nhtml[class*="premium-theme-"] .theme-card[data-theme] .theme-chip{\n  background:rgba(0,0,0,.22) !important;\n  color:#ffffff !important;\n  border-color:rgba(255,255,255,.18) !important;\n}\n\n/* Hide Light/Dark switch in premium themes */\nhtml[class*="premium-theme-"] .theme-toggle-label,\nhtml[class*="premium-theme-"] .theme-toggle,\nhtml[class*="premium-theme-"] #themeSwitch,\nhtml[class*="premium-theme-"] label[for="themeSwitch"],\nhtml[class*="premium-theme-"] .switch,\nhtml[class*="premium-theme-"] .mode-toggle,\nhtml[class*="premium-theme-"] .theme-switch{\n  display:none !important;\n}\n\n/* Do not recolor brand logo itself too aggressively */\nhtml[class*="premium-theme-"] .brand,\nhtml[class*="premium-theme-"] .brand-logo,\nhtml[class*="premium-theme-"] .logo,\nhtml[class*="premium-theme-"] .app-logo{\n  background:transparent !important;\n  box-shadow:none !important;\n}\n\n/* Emerald Quran: deeper premium look */\nhtml.premium-theme-emerald-quran{\n  --bg:#031008;\n  --surface:#06160d;\n  --surface-2:#0a2114;\n  --surface-3:#0f3521;\n  --border:rgba(91,210,126,.34);\n  --border-2:rgba(149,242,174,.42);\n  --text:#f0fff4;\n  --text-soft:#c7f3d2;\n  --text-muted:#8cdca3;\n  --green:#74df8f;\n  --green-strong:#1f7a43;\n  --green-soft:#d4ffe0;\n  --bw-accent:#74df8f;\n  --bw-accent-2:#b8ffd0;\n}\n\nhtml.premium-theme-emerald-quran body{\n  background:\n    radial-gradient(circle at 18% 0%,rgba(116,223,143,.18),transparent 28%),\n    radial-gradient(circle at 86% 8%,rgba(215,192,122,.10),transparent 32%),\n    linear-gradient(180deg,#020b06 0%,#061b10 48%,#020b06 100%) !important;\n}\n\nhtml.premium-theme-emerald-quran .container,\nhtml.premium-theme-emerald-quran .hero,\nhtml.premium-theme-emerald-quran .brand-prayer-hero,\nhtml.premium-theme-emerald-quran .today-hub,\nhtml.premium-theme-emerald-quran .card,\nhtml.premium-theme-emerald-quran .panel,\nhtml.premium-theme-emerald-quran .box{\n  background:\n    radial-gradient(circle at 92% 0%,rgba(116,223,143,.13),transparent 30%),\n    linear-gradient(135deg,#07160d 0%,#0a2114 54%,#06120b 100%) !important;\n  border-color:rgba(116,223,143,.28) !important;\n}\n\n/* ===== END BARAKAWAY PRO THEMES PRECISION PATCH ===== */\n';

  function injectPrecisionPatch(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  injectPrecisionPatch();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", injectPrecisionPatch);
  }

  window.addEventListener("storage", injectPrecisionPatch);
})();


(function(){
  const STYLE_ID = "barakaway-logo-theme-cards-immunity";
  const CSS = '\n/* ===== BARAKAWAY LOGO AND THEME CARDS IMMUNITY PATCH ===== */\n\n/* 1) BarakaWay logo / brand area must stay original and not receive PRO theme background */\nhtml[class*="premium-theme-"] .brand,\nhtml[class*="premium-theme-"] .brand-logo,\nhtml[class*="premium-theme-"] .logo,\nhtml[class*="premium-theme-"] .app-logo,\nhtml[class*="premium-theme-"] .barakaway-logo,\nhtml[class*="premium-theme-"] .brand-title,\nhtml[class*="premium-theme-"] .brand-mark,\nhtml[class*="premium-theme-"] [class*="logo"],\nhtml[class*="premium-theme-"] [class*="brand"]{\n  background:initial !important;\n  background-color:transparent !important;\n  border-color:initial !important;\n  box-shadow:initial !important;\n  filter:none !important;\n}\n\n/* If the logo text is inside a separate visual pill/card, keep it readable without theme repaint */\nhtml[class*="premium-theme-"] .brand *,\nhtml[class*="premium-theme-"] .brand-logo *,\nhtml[class*="premium-theme-"] .logo *,\nhtml[class*="premium-theme-"] .app-logo *,\nhtml[class*="premium-theme-"] .barakaway-logo *,\nhtml[class*="premium-theme-"] [class*="logo"] *,\nhtml[class*="premium-theme-"] [class*="brand"] *{\n  background:inherit !important;\n  box-shadow:inherit !important;\n}\n\n/* 2) Theme selector cards are product samples; they must not be recolored by active theme */\nhtml[class*="premium-theme-"] .theme-card[data-theme],\nhtml[class*="premium-theme-"] .theme-card[data-theme] *,\nhtml[class*="premium-theme-"] [data-theme].theme-card,\nhtml[class*="premium-theme-"] [data-theme].theme-card *{\n  color:#ffffff !important;\n}\n\n/* Royal Gold sample remains gold */\nhtml[class*="premium-theme-"] .theme-card[data-theme="royal-gold"],\nhtml[class*="premium-theme-"] [data-theme="royal-gold"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,244,190,.42),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(215,192,122,.20),transparent 34%),\n    linear-gradient(135deg,#171208 0%,#5b4218 48%,#d7c07a 100%) !important;\n  border-color:rgba(244,220,148,.62) !important;\n  box-shadow:0 22px 56px rgba(157,116,36,.24), inset 0 1px 0 rgba(255,255,255,.12) !important;\n}\n\n/* Emerald Quran sample remains emerald */\nhtml[class*="premium-theme-"] .theme-card[data-theme="emerald-quran"],\nhtml[class*="premium-theme-"] [data-theme="emerald-quran"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(102,198,128,.42),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(40,122,70,.24),transparent 34%),\n    linear-gradient(135deg,#061109 0%,#12301d 52%,#4caf6a 100%) !important;\n  border-color:rgba(102,198,128,.62) !important;\n  box-shadow:0 22px 56px rgba(45,122,70,.24), inset 0 1px 0 rgba(255,255,255,.12) !important;\n}\n\n/* Violet Noor sample remains violet */\nhtml[class*="premium-theme-"] .theme-card[data-theme="violet-noor"],\nhtml[class*="premium-theme-"] [data-theme="violet-noor"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(161,118,255,.44),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(64,42,120,.28),transparent 34%),\n    linear-gradient(135deg,#0d0a15 0%,#241a42 52%,#a176ff 100%) !important;\n  border-color:rgba(161,118,255,.62) !important;\n  box-shadow:0 22px 56px rgba(111,77,204,.24), inset 0 1px 0 rgba(255,255,255,.12) !important;\n}\n\n/* Rose sample remains rose */\nhtml[class*="premium-theme-"] .theme-card[data-theme="rose-soft"],\nhtml[class*="premium-theme-"] [data-theme="rose-soft"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,158,199,.44),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(182,77,120,.28),transparent 34%),\n    linear-gradient(135deg,#160a12 0%,#401b31 52%,#ff9ec7 100%) !important;\n  border-color:rgba(255,158,199,.62) !important;\n  box-shadow:0 22px 56px rgba(182,77,120,.24), inset 0 1px 0 rgba(255,255,255,.12) !important;\n}\n\n/* Carbon sample remains carbon */\nhtml[class*="premium-theme-"] .theme-card[data-theme="carbon-elite"],\nhtml[class*="premium-theme-"] [data-theme="carbon-elite"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(202,213,224,.28),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(89,97,108,.24),transparent 34%),\n    linear-gradient(135deg,#050607 0%,#1a222c 52%,#59616c 100%) !important;\n  border-color:rgba(202,213,224,.48) !important;\n  box-shadow:0 22px 56px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.10) !important;\n}\n\n/* Children sample remains playful */\nhtml[class*="premium-theme-"] .theme-card[data-theme="children-soft"],\nhtml[class*="premium-theme-"] [data-theme="children-soft"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,227,241,.44),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(135,203,255,.34),transparent 34%),\n    linear-gradient(135deg,#0c1f32 0%,#234d75 52%,#87cbff 100%) !important;\n  border-color:rgba(135,203,255,.62) !important;\n  box-shadow:0 22px 56px rgba(61,139,199,.22), inset 0 1px 0 rgba(255,255,255,.12) !important;\n}\n\n/* Night mosque sample remains night-blue */\nhtml[class*="premium-theme-"] .theme-card[data-theme="night-mosque"],\nhtml[class*="premium-theme-"] [data-theme="night-mosque"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(215,192,122,.26),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(118,154,215,.28),transparent 34%),\n    linear-gradient(135deg,#050b13 0%,#10213d 52%,#355d9a 100%) !important;\n  border-color:rgba(118,154,215,.52) !important;\n  box-shadow:0 22px 56px rgba(53,93,154,.22), inset 0 1px 0 rgba(255,255,255,.10) !important;\n}\n\n/* Desert sample remains sand */\nhtml[class*="premium-theme-"] .theme-card[data-theme="desert-sand"],\nhtml[class*="premium-theme-"] [data-theme="desert-sand"].theme-card{\n  background:\n    radial-gradient(circle at 90% 10%,rgba(255,237,190,.38),transparent 31%),\n    radial-gradient(circle at 12% 100%,rgba(219,174,97,.26),transparent 34%),\n    linear-gradient(135deg,#130c05 0%,#3e2b13 52%,#dbae61 100%) !important;\n  border-color:rgba(255,237,190,.54) !important;\n  box-shadow:0 22px 56px rgba(154,109,45,.22), inset 0 1px 0 rgba(255,255,255,.10) !important;\n}\n\n/* Typography inside sample cards */\nhtml[class*="premium-theme-"] .theme-card[data-theme] h3,\nhtml[class*="premium-theme-"] .theme-card[data-theme] p,\nhtml[class*="premium-theme-"] .theme-card[data-theme] strong,\nhtml[class*="premium-theme-"] .theme-card[data-theme] .theme-title{\n  color:#ffffff !important;\n}\n\nhtml[class*="premium-theme-"] .theme-card[data-theme] p,\nhtml[class*="premium-theme-"] .theme-card[data-theme] .theme-description{\n  color:rgba(255,255,255,.84) !important;\n}\n\nhtml[class*="premium-theme-"] .theme-card[data-theme] .theme-chip{\n  background:rgba(0,0,0,.24) !important;\n  color:#ffffff !important;\n  border-color:rgba(255,255,255,.20) !important;\n}\n\n/* The small palette bars inside cards also must keep their own tint */\nhtml[class*="premium-theme-"] .theme-card[data-theme] .swatch,\nhtml[class*="premium-theme-"] .theme-card[data-theme] .theme-swatch,\nhtml[class*="premium-theme-"] .theme-card[data-theme] .preview-bar{\n  filter:none !important;\n}\n\n/* ===== END BARAKAWAY LOGO AND THEME CARDS IMMUNITY PATCH ===== */\n';

  function injectImmunityPatch(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  injectImmunityPatch();

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", injectImmunityPatch);
  }

  window.addEventListener("storage", injectImmunityPatch);
})();

