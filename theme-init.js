(function(){
  "use strict";

  const SITE_THEME_KEY = "siteTheme";
  const PREMIUM_THEME_KEY = "barakaway_premium_theme";
  const STYLE_ID = "barakaway-final-premium-global-themes-v31";

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

  const FINAL_PREMIUM_CSS = "/* ===== BARAKAWAY FINAL PREMIUM GLOBAL THEMES V31 ===== */\n/* Global app theming. Theme selector cards are protected and stay individually colored. */\nhtml[class*=\"premium-theme-\"]{\n  --bw-final-gold:#d8b35f;\n  --bw-final-gold-soft:#f4dfad;\n  --bw-final-gold-dark:#4d3410;\n  --bw-final-radius:26px;\n  --bw-final-shadow:0 22px 58px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.20), inset 0 -20px 36px rgba(0,0,0,.12);\n  --bw-final-border:rgba(216,179,95,.48);\n  --bw-final-border-strong:rgba(244,223,173,.72);\n  --bw-final-text:#f8ecd0;\n  --bw-final-text-soft:#ead6aa;\n  --bw-final-muted:#c7af79;\n  --bw-final-page:\n    radial-gradient(circle at 16% 0%, rgba(216,179,95,.18), transparent 30%),\n    radial-gradient(circle at 86% 8%, rgba(255,255,255,.08), transparent 28%),\n    linear-gradient(180deg,#0c0f13 0%,#151a20 52%,#0a0d10 100%);\n  --bw-final-surface:\n    radial-gradient(circle at 88% 8%, rgba(244,223,173,.14), transparent 30%),\n    linear-gradient(145deg,#111820 0%,#1a222b 52%,#0d1118 100%);\n  --bw-final-surface-2:\n    radial-gradient(circle at 88% 8%, rgba(244,223,173,.10), transparent 30%),\n    linear-gradient(145deg,#121a22 0%,#1f2a33 52%,#0d1118 100%);\n  --bw-final-button:\n    linear-gradient(180deg,rgba(244,223,173,.95) 0%,rgba(156,112,43,.95) 100%);\n  --bw-final-button-text:#1f1404;\n}\n\nhtml.premium-theme-royal-gold{\n  --bw-final-text:#241707;\n  --bw-final-text-soft:#402a0d;\n  --bw-final-muted:#624316;\n  --bw-final-border:rgba(106,76,24,.38);\n  --bw-final-border-strong:rgba(83,56,16,.58);\n  --bw-final-page:\n    radial-gradient(circle at 18% 0%, rgba(255,239,180,.38), transparent 30%),\n    radial-gradient(circle at 82% 10%, rgba(255,255,255,.22), transparent 28%),\n    linear-gradient(180deg,#b57c2e 0%,#e2bd70 50%,#a86e27 100%);\n  --bw-final-surface:\n    radial-gradient(circle at 82% 12%, rgba(255,248,211,.52), transparent 32%),\n    linear-gradient(145deg,#a36b25 0%,#d7a24b 52%,#ffe28c 100%);\n  --bw-final-surface-2:\n    radial-gradient(circle at 82% 12%, rgba(255,248,211,.34), transparent 32%),\n    linear-gradient(145deg,#b77b2f 0%,#e0b464 52%,#f6d98b 100%);\n  --bw-final-button:linear-gradient(180deg,#4d3410 0%,#1f1404 100%);\n  --bw-final-button-text:#fff0bd;\n}\n\nhtml.premium-theme-emerald-quran{\n  --bw-final-text:#fff0bd;\n  --bw-final-text-soft:#f1d99a;\n  --bw-final-muted:#c6ae75;\n  --bw-final-border:rgba(244,223,173,.44);\n  --bw-final-border-strong:rgba(255,236,188,.70);\n  --bw-final-page:\n    radial-gradient(circle at 16% 0%, rgba(116,242,168,.20), transparent 30%),\n    radial-gradient(circle at 84% 8%, rgba(244,223,173,.12), transparent 30%),\n    linear-gradient(180deg,#002515 0%,#005a35 50%,#001b12 100%);\n  --bw-final-surface:\n    linear-gradient(135deg, rgba(0,20,13,.40), rgba(255,255,255,.05) 34%, rgba(150,255,203,.10) 68%, rgba(0,0,0,.20)),\n    linear-gradient(145deg,#002918 0%,#00683d 54%,#12a965 100%);\n  --bw-final-surface-2:\n    linear-gradient(135deg, rgba(0,20,13,.36), rgba(255,255,255,.04) 34%, rgba(150,255,203,.08) 68%, rgba(0,0,0,.18)),\n    linear-gradient(145deg,#00331f 0%,#007346 54%,#1ebd72 100%);\n}\n\nhtml.premium-theme-violet-noor{\n  --bw-final-text:#fff0bd;\n  --bw-final-text-soft:#ead6aa;\n  --bw-final-muted:#c7af79;\n  --bw-final-border:rgba(244,223,173,.44);\n  --bw-final-border-strong:rgba(255,236,188,.70);\n  --bw-final-page:\n    radial-gradient(ellipse at 18% 0%, rgba(217,170,255,.22), transparent 32%),\n    radial-gradient(ellipse at 86% 8%, rgba(244,223,173,.12), transparent 28%),\n    linear-gradient(180deg,#150821 0%,#4c2381 50%,#12071d 100%);\n  --bw-final-surface:\n    radial-gradient(ellipse at 18% 16%, rgba(255,218,255,.20), transparent 34%),\n    radial-gradient(ellipse at 84% 28%, rgba(83,70,209,.32), transparent 38%),\n    linear-gradient(145deg,#1b0b2a 0%,#57298a 52%,#8f52cf 100%);\n  --bw-final-surface-2:\n    radial-gradient(ellipse at 18% 16%, rgba(255,218,255,.16), transparent 34%),\n    radial-gradient(ellipse at 84% 28%, rgba(83,70,209,.28), transparent 38%),\n    linear-gradient(145deg,#241034 0%,#63319a 52%,#9a61d6 100%);\n}\n\nhtml.premium-theme-rose-soft{\n  --bw-final-text:#4a1d31;\n  --bw-final-text-soft:#6a2b47;\n  --bw-final-muted:#7e3c58;\n  --bw-final-border:rgba(112,68,24,.35);\n  --bw-final-border-strong:rgba(84,52,20,.52);\n  --bw-final-page:\n    radial-gradient(ellipse at 18% 0%, rgba(255,242,248,.34), transparent 32%),\n    radial-gradient(ellipse at 86% 10%, rgba(216,179,95,.16), transparent 28%),\n    linear-gradient(180deg,#c86d9b 0%,#f2a9cb 50%,#b65385 100%);\n  --bw-final-surface:\n    radial-gradient(ellipse at 18% 16%, rgba(255,242,248,.38), transparent 32%),\n    radial-gradient(ellipse at 82% 20%, rgba(255,155,204,.30), transparent 40%),\n    linear-gradient(145deg,#c56092 0%,#ee9dc3 56%,#ffd1e4 100%);\n  --bw-final-surface-2:\n    radial-gradient(ellipse at 18% 16%, rgba(255,242,248,.32), transparent 32%),\n    linear-gradient(145deg,#d374a4 0%,#f3add0 56%,#ffdceb 100%);\n  --bw-final-button:linear-gradient(180deg,#5d2f11 0%,#2a1608 100%);\n  --bw-final-button-text:#fff0bd;\n}\n\nhtml.premium-theme-carbon-elite{\n  --bw-final-text:#f4dfad;\n  --bw-final-text-soft:#d8c38f;\n  --bw-final-muted:#aa986d;\n  --bw-final-border:rgba(244,223,173,.36);\n  --bw-final-border-strong:rgba(244,223,173,.58);\n  --bw-final-page:\n    radial-gradient(circle at 16% 0%, rgba(255,255,255,.08), transparent 28%),\n    linear-gradient(180deg,#030405 0%,#11171d 52%,#030405 100%);\n  --bw-final-surface:\n    linear-gradient(135deg, rgba(255,255,255,.07), rgba(0,0,0,.0) 34%, rgba(255,255,255,.04) 68%, rgba(0,0,0,.28)),\n    repeating-linear-gradient(45deg, rgba(255,255,255,.08) 0 5px, rgba(0,0,0,.16) 5px 10px),\n    repeating-linear-gradient(-45deg, rgba(255,255,255,.055) 0 5px, rgba(0,0,0,.18) 5px 10px),\n    linear-gradient(145deg,#050607 0%,#1c232a 52%,#48545e 100%);\n  --bw-final-surface-2:var(--bw-final-surface);\n}\n\nhtml.premium-theme-children-soft{\n  --bw-final-text:#16364d;\n  --bw-final-text-soft:#274c66;\n  --bw-final-muted:#45677e;\n  --bw-final-border:rgba(130,91,38,.30);\n  --bw-final-border-strong:rgba(98,68,28,.46);\n  --bw-final-page:\n    radial-gradient(circle at 18% 0%, rgba(255,255,255,.30), transparent 30%),\n    radial-gradient(circle at 84% 10%, rgba(255,227,241,.20), transparent 28%),\n    linear-gradient(180deg,#9bd2f2 0%,#d8eefc 50%,#8bc6ea 100%);\n  --bw-final-surface:\n    linear-gradient(135deg, rgba(255,255,255,.24), rgba(255,231,241,.12)),\n    linear-gradient(145deg,#bfe9ff 0%,#8ed0f3 56%,#fff0f6 100%);\n  --bw-final-surface-2:\n    linear-gradient(135deg, rgba(255,255,255,.22), rgba(255,231,241,.12)),\n    linear-gradient(145deg,#c9eeff 0%,#a0daf5 56%,#fff4f8 100%);\n  --bw-final-button:linear-gradient(180deg,#5e3b13 0%,#2c1a07 100%);\n  --bw-final-button-text:#fff0bd;\n}\n\nhtml.premium-theme-night-mosque{\n  --bw-final-text:#f4dfad;\n  --bw-final-text-soft:#d8c38f;\n  --bw-final-muted:#aa986d;\n  --bw-final-border:rgba(244,223,173,.36);\n  --bw-final-border-strong:rgba(244,223,173,.58);\n  --bw-final-page:\n    radial-gradient(circle at 16% 0%, rgba(124,167,255,.14), transparent 28%),\n    radial-gradient(circle at 86% 10%, rgba(244,223,173,.10), transparent 30%),\n    linear-gradient(180deg,#050719 0%,#101d43 52%,#050719 100%);\n  --bw-final-surface:\n    radial-gradient(circle at 86% 16%, rgba(255,255,255,.16), transparent 24%),\n    radial-gradient(circle at 28% 58%, rgba(255,255,255,.12), transparent 4px),\n    radial-gradient(circle at 62% 34%, rgba(255,255,255,.18), transparent 3px),\n    linear-gradient(145deg,#07091f 0%,#121b4f 56%,#203b80 100%);\n  --bw-final-surface-2:\n    radial-gradient(circle at 86% 16%, rgba(255,255,255,.12), transparent 24%),\n    linear-gradient(145deg,#090c24 0%,#17245c 56%,#274890 100%);\n}\n\nhtml.premium-theme-desert-sand{\n  --bw-final-text:#3a260d;\n  --bw-final-text-soft:#583a13;\n  --bw-final-muted:#735325;\n  --bw-final-border:rgba(93,61,18,.34);\n  --bw-final-border-strong:rgba(78,50,15,.50);\n  --bw-final-page:\n    radial-gradient(circle at 18% 0%, rgba(255,247,214,.28), transparent 30%),\n    radial-gradient(circle at 86% 10%, rgba(255,255,255,.16), transparent 28%),\n    linear-gradient(180deg,#bd8742 0%,#edd39a 50%,#ad7332 100%);\n  --bw-final-surface:\n    radial-gradient(circle at 90% 12%, rgba(255,247,214,.24), transparent 30%),\n    linear-gradient(145deg,#b98542 0%,#d8a862 55%,#f6dca6 100%);\n  --bw-final-surface-2:\n    radial-gradient(circle at 90% 12%, rgba(255,247,214,.20), transparent 30%),\n    linear-gradient(145deg,#c79756 0%,#e0b875 55%,#f8e0ac 100%);\n  --bw-final-button:linear-gradient(180deg,#56380f 0%,#251707 100%);\n  --bw-final-button-text:#fff0bd;\n}\n\nhtml[class*=\"premium-theme-\"] body{\n  background:var(--bw-final-page) !important;\n  color:var(--bw-final-text) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(.container,.content,.page,main,.hero,.brand-prayer-hero,.today-hub,.about-project-card,.barakaway-pro-final,.block,.card,.box,.panel,.quote,.empty,.article,.category-panel,.surah-card,.prayer-card,.toggle-row,.meta-item,.note-box,.jumuah-box,.month-day,.month-head,.wallet-support,.home-widget,.dua-card,.ayah-card,.master-audio-wrap,.reader-side,.reader-main,.dua-side,.dua-main,.ai-side,.ai-main,.player-panel,.preview-panel,.app-menu-btn,.today-action,.premium-resource-card,.dropdown-block,.dropdown-content,.mobile-dropdown,.mobile-dropdown-title,.mobile-dropdown-content,.donation-dropdown,.donation-dropdown-content,.transactions,.verification,.intro,.help-category,.help-card,.aid-card,.support-card,.qibla-panel,.qibla-card,.qibla-box,.modal,.toast,.bottom-app-nav,.bottom-nav,.bottom-app-nav-inner){\n  background:var(--bw-final-surface) !important;\n  border-color:var(--bw-final-border) !important;\n  color:var(--bw-final-text) !important;\n  box-shadow:var(--bw-final-shadow) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(.card .card,.box .box,.panel .panel,.block .block,.hero-stat,.feature-card,.theme-tile,.pro-feature-chip,.pro-final-card,.reciter-card,.pack-card,.dua-content,.quran-reader,.practice-box,.preview-stage,.name-chip,.quick-btn,.wallet-badge,.badge,.chip,.sec-box){\n  background:var(--bw-final-surface-2) !important;\n  border-color:var(--bw-final-border-strong) !important;\n  color:var(--bw-final-text) !important;\n  box-shadow:0 14px 34px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.18) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(h1,h2,h3,h4,h5,h6,.title,.category-title,.section-title,.surah-name,.dua-title,.ayah-arabic,.meta-value,.prayer-name,.prayer-time,.big-location,.next-name,.item-title,.access-title){\n  color:var(--bw-final-text) !important;\n  text-shadow:0 1px 0 rgba(255,255,255,.12), 0 2px 12px rgba(0,0,0,.16) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(p,span,li,label,small,.small,.subtitle,.note,.muted,.category-intro,.ref,.translit,.meaning,.when,.surah-meta,.article p,.dua-translit,.ayah-translit,.ayah-meaning,.prayer-meta,.countdown-note,.wallet-note,.manual-note,.status,.tagline,.source,.item-ref,.dua-ref,.dua-source,.field-label,.meta-label){\n  color:var(--bw-final-text-soft) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(a,strong,.surah-number,.accent,.help-option-arrow){\n  color:var(--bw-final-gold-soft) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(button,.btn,.quick-btn,.install-btn,.copy-wallet-btn,.support-project-btn,.share-btn,.share-wallet-btn,input[type=\"button\"],input[type=\"submit\"]):not(.icon-btn):not(.home-prayer-share-btn):not(.share-close):not(.install-help-close):not(.bottom-app-nav-item){\n  background:var(--bw-final-button) !important;\n  color:var(--bw-final-button-text) !important;\n  border:1px solid var(--bw-final-border-strong) !important;\n  box-shadow:0 16px 34px rgba(0,0,0,.24), inset 0 1px 0 rgba(255,255,255,.26) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(input,textarea,select,.input,.select,.number,.search-input,.search-box input,.wallet-address){\n  background:rgba(255,255,255,.15) !important;\n  color:var(--bw-final-text) !important;\n  border:1px solid var(--bw-final-border-strong) !important;\n  box-shadow:inset 0 1px 0 rgba(255,255,255,.16), 0 8px 18px rgba(0,0,0,.10) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(input,textarea,.search-input)::placeholder{\n  color:var(--bw-final-muted) !important;\n  opacity:1 !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(.bottom-app-nav-item,.bottom-nav a,.bottom-nav button){\n  color:var(--bw-final-text-soft) !important;\n}\n\nhtml[class*=\"premium-theme-\"] body:not(.page-themes-pro) :is(.bottom-app-nav-item.active,.bottom-app-nav-item.is-active,.bottom-nav a.active,.bottom-nav button.active){\n  background:var(--bw-final-button) !important;\n  color:var(--bw-final-button-text) !important;\n  border:1px solid var(--bw-final-border-strong) !important;\n}\n\n/* Themes page: the selector cards must stay as individual samples, regardless of the selected active theme. */\nbody.page-themes-pro .theme-grid .theme-card,\nbody.page-themes-pro .theme-grid .theme-card[data-theme],\nhtml[class*=\"premium-theme-\"] body.page-themes-pro .theme-grid .theme-card,\nhtml[class*=\"premium-theme-\"] body.page-themes-pro .theme-grid .theme-card[data-theme]{\n  isolation:isolate !important;\n  overflow:hidden !important;\n  box-shadow:0 24px 58px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.14) !important;\n}\n\nbody.page-themes-pro .theme-grid .theme-card:not(.restore-original-theme-card) h3,\nbody.page-themes-pro .theme-grid .theme-card:not(.restore-original-theme-card) p,\nhtml[class*=\"premium-theme-\"] body.page-themes-pro .theme-grid .theme-card:not(.restore-original-theme-card) h3,\nhtml[class*=\"premium-theme-\"] body.page-themes-pro .theme-grid .theme-card:not(.restore-original-theme-card) p{\n  color:#fff !important;\n  text-shadow:0 2px 14px rgba(0,0,0,.58) !important;\n}\n\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"royal-gold\"] h3,\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"royal-gold\"] p,\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"children-soft\"] h3,\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"children-soft\"] p,\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"desert-sand\"] h3,\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"desert-sand\"] p{\n  color:#2a1a06 !important;\n  text-shadow:0 1px 0 rgba(255,255,255,.28),0 2px 12px rgba(255,255,255,.22) !important;\n}\n\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"royal-gold\"]{\n  background:radial-gradient(circle at 86% 18%, rgba(255,246,201,.66), transparent 28%), radial-gradient(circle at 12% 90%, rgba(164,103,32,.30), transparent 34%), linear-gradient(103deg, rgba(255,255,255,.26) 0%, rgba(255,255,255,.04) 17%, rgba(255,224,132,.36) 39%, rgba(166,99,29,.18) 63%, rgba(255,255,255,.18) 100%), linear-gradient(145deg,#9a5f21 0%,#d6a04a 44%,#ffe07a 72%,#b97826 100%) !important;\n  border-color:rgba(255,229,153,.58) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"emerald-quran\"]{\n  background:linear-gradient(135deg, rgba(0,15,10,.38), rgba(0,0,0,0) 34%, rgba(150,255,203,.12) 68%, rgba(0,0,0,.22)), linear-gradient(145deg,#001b12 0%,#006a3c 52%,#48f29d 100%) !important;\n  border-color:rgba(98,244,165,.50) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"violet-noor\"]{\n  background:radial-gradient(ellipse at 18% 16%, rgba(255,218,255,.22), transparent 34%), radial-gradient(ellipse at 84% 28%, rgba(83,70,209,.38), transparent 38%), linear-gradient(145deg,#16091f 0%,#4b1d76 48%,#9b55d8 100%) !important;\n  border-color:rgba(217,170,255,.48) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"rose-soft\"]{\n  background:radial-gradient(ellipse at 18% 16%, rgba(255,242,248,.42), transparent 32%), radial-gradient(ellipse at 82% 20%, rgba(255,155,204,.38), transparent 40%), linear-gradient(145deg,#7f2854 0%,#d46d9d 52%,#ffb8d6 100%) !important;\n  border-color:rgba(255,204,226,.50) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"carbon-elite\"]{\n  background:linear-gradient(135deg, rgba(255,255,255,.08), rgba(0,0,0,0) 36%, rgba(255,255,255,.05) 70%, rgba(0,0,0,.28)), repeating-linear-gradient(45deg, rgba(255,255,255,.08) 0 5px, rgba(0,0,0,.18) 5px 10px), repeating-linear-gradient(-45deg, rgba(255,255,255,.055) 0 5px, rgba(0,0,0,.20) 5px 10px), linear-gradient(145deg,#050607 0%,#1c232a 52%,#48545e 100%) !important;\n  border-color:rgba(230,238,246,.24) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"children-soft\"]{\n  background:linear-gradient(135deg, rgba(255,255,255,.24), rgba(255,231,241,.12)), linear-gradient(145deg,#bfe9ff 0%,#79bdeb 55%,#fff0f6 100%) !important;\n  border-color:rgba(228,246,255,.66) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"night-mosque\"]{\n  background:radial-gradient(circle at 86% 16%, rgba(255,255,255,.18), transparent 24%), radial-gradient(circle at 28% 58%, rgba(255,255,255,.82), transparent 2px), radial-gradient(circle at 62% 34%, rgba(255,255,255,.82), transparent 2px), linear-gradient(145deg,#07091f 0%,#10184a 55%,#1e3471 100%) !important;\n  border-color:rgba(189,205,255,.34) !important;\n}\nbody.page-themes-pro .theme-grid .theme-card[data-theme=\"desert-sand\"]{\n  background:radial-gradient(circle at 90% 12%, rgba(255,247,214,.24), transparent 30%), linear-gradient(145deg,#b98542 0%,#d8a862 55%,#f6dca6 100%) !important;\n  border-color:rgba(255,232,184,.50) !important;\n}\n\nbody.page-themes-pro .restore-original-theme-card{\n  background:linear-gradient(135deg,rgba(15,20,28,.96) 0%,rgba(22,29,39,.96) 100%) !important;\n  border-color:rgba(255,255,255,.12) !important;\n}\nbody.page-themes-pro .restore-original-theme-card h3,\nbody.page-themes-pro .restore-original-theme-card p{\n  color:#fff !important;\n}\n\n/* ===== END BARAKAWAY FINAL PREMIUM GLOBAL THEMES V31 ===== */";

  function safeGet(key){
    try{ return localStorage.getItem(key); }catch(e){ return null; }
  }

  function safeSet(key, value){
    try{ localStorage.setItem(key, value); }catch(e){}
  }

  function safeRemove(key){
    try{ localStorage.removeItem(key); }catch(e){}
  }

  function injectFinalPremiumThemes(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement("style");
      style.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = FINAL_PREMIUM_CSS;
  }

  function normalizeSiteTheme(theme){
    return theme === "light" ? "light" : "dark";
  }

  function normalizePremiumTheme(theme){
    return PREMIUM_THEMES.indexOf(theme) !== -1 ? theme : "";
  }

  function removePremiumThemeClasses(node){
    if(!node || !node.classList) return;
    Array.from(node.classList).forEach(function(cls){
      if(
        cls.indexOf("premium-theme-") === 0 ||
        cls.indexOf("bw-theme-") === 0 ||
        (cls.indexOf("theme-") === 0 && cls !== "theme-toggle" && cls !== "theme-toggle-label")
      ){
        node.classList.remove(cls);
      }
    });
  }

  function applySiteTheme(theme){
    const selected = normalizeSiteTheme(theme);
    document.documentElement.classList.remove("light-mode", "dark-mode");
    document.documentElement.classList.add(selected + "-mode");

    if(document.body){
      document.body.classList.remove("light-mode", "dark-mode");
      document.body.classList.add(selected + "-mode");
    }

    safeSet(SITE_THEME_KEY, selected);
  }

  function applyPremiumTheme(theme){
    injectFinalPremiumThemes();
    const selected = normalizePremiumTheme(theme);

    removePremiumThemeClasses(document.documentElement);
    if(document.body) removePremiumThemeClasses(document.body);

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
  }

  function refresh(){
    injectFinalPremiumThemes();
    applySiteTheme(safeGet(SITE_THEME_KEY) || "dark");
    applyPremiumTheme(safeGet(PREMIUM_THEME_KEY) || "");
  }

  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),
    applySiteTheme: function(theme){
      const selected = normalizeSiteTheme(theme);
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
    document.addEventListener("DOMContentLoaded", refresh, { once: true });
  }else{
    refresh();
  }

  window.addEventListener("storage", function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY) refresh();
  });
})();
