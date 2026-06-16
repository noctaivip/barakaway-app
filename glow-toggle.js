/* BarakaWay PRO Glow Toggle вЂ” separate switch, no Light/Dark */
(function(){
  const STORAGE_KEY = "barakawayProGlowOff";

  function isPremium(){
    return document.documentElement.className.indexOf("premium-theme-") !== -1;
  }

  function isProThemesPage(){
    return document.body && document.body.classList.contains("page-themes-pro");
  }

  function getSavedOff(){
    try { return localStorage.getItem(STORAGE_KEY) === "1"; }
    catch(e){ return false; }
  }

  function saveOff(off){
    try { localStorage.setItem(STORAGE_KEY, off ? "1" : "0"); }
    catch(e){}
  }

  function setGlow(off){
    document.documentElement.classList.toggle("bw-glow-off", off);
    if(document.body) document.body.classList.toggle("bw-glow-off", off);

    const btn = document.querySelector(".bw-pro-glow-toggle");
    if(btn){
      btn.setAttribute("aria-checked", off ? "false" : "true");
      const label = btn.querySelector(".bw-pro-glow-toggle__label");
      if(label) label.textContent = off ? "Glow Off" : "Glow On";
    }

    saveOff(off);
  }

  function findAnchor(){
    return document.querySelector(
      ".desktop-theme-toggle, .mobile-theme-toggle, .theme-toggle, .theme-mode-toggle, .mode-toggle"
    );
  }

  function createToggle(){
    if(document.querySelector(".bw-pro-glow-toggle")) return;

    const old = findAnchor();
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "bw-pro-glow-toggle";
    btn.setAttribute("aria-label", "Glow toggle");
    btn.setAttribute("role", "switch");

    btn.innerHTML = '<span class="bw-pro-glow-toggle__label">Glow On</span><span class="bw-pro-glow-toggle__switch" aria-hidden="true"></span>';

    btn.addEventListener("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      const off = !document.documentElement.classList.contains("bw-glow-off");
      setGlow(off);
    }, true);

    if(old && old.parentNode){
      old.parentNode.insertBefore(btn, old);
    }else{
      const header = document.querySelector("header, .header, .topbar, .top-bar, .app-header, .nav, .navbar");
      if(header) header.appendChild(btn);
      else document.body.insertBefore(btn, document.body.firstChild);
    }
  }

  function disableOldSwitch(){
    document.querySelectorAll(".desktop-theme-toggle, .mobile-theme-toggle, .theme-toggle, .theme-mode-toggle, .mode-toggle").forEach(function(el){
      if(el.classList.contains("bw-pro-glow-toggle")) return;
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("tabindex", "-1");
    });
  }

  function init(){
    if(!document.body || !isPremium() || isProThemesPage()) return;

    createToggle();
    disableOldSwitch();
    setGlow(getSavedOff());
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();


