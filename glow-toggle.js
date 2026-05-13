/* BarakaWay Glow Toggle — standalone state, no Light/Dark mode */
(function(){
  const STORAGE_KEY = "barakawayGlowOff";

  function isPremium(){
    return /\bpremium-theme-/.test(document.documentElement.className);
  }

  function syncGlowState(off){
    document.documentElement.classList.toggle("bw-glow-off", off);
    if(document.body){
      document.body.classList.toggle("bw-glow-off", off);
    }
    try{
      localStorage.setItem(STORAGE_KEY, off ? "1" : "0");
    }catch(e){}
  }

  function getSavedOff(){
    try{
      return localStorage.getItem(STORAGE_KEY) === "1";
    }catch(e){
      return false;
    }
  }

  function findGlowToggles(){
    return Array.from(document.querySelectorAll(
      ".desktop-theme-toggle, .mobile-theme-toggle, .theme-toggle, .theme-mode-toggle, .mode-toggle"
    )).filter(Boolean);
  }

  function removeOldModeSideEffects(){
    if(!isPremium()) return;

    /* The old switch may still try to toggle light/dark. In premium pages these classes must not drive the glow switch. */
    document.documentElement.classList.remove("light-mode");
    if(document.body){
      document.body.classList.remove("light-mode");
    }
    document.documentElement.classList.add("dark-mode");
    if(document.body){
      document.body.classList.add("dark-mode");
    }
  }

  function updateNativeInputs(off){
    findGlowToggles().forEach(toggle => {
      toggle.setAttribute("role", "switch");
      toggle.setAttribute("aria-label", off ? "Glow Off" : "Glow On");
      toggle.setAttribute("aria-checked", off ? "false" : "true");

      const inputs = toggle.querySelectorAll("input[type='checkbox'], input[type='radio']");
      inputs.forEach(input => {
        input.checked = !off;
        input.setAttribute("aria-checked", off ? "false" : "true");
      });
    });
  }

  function setGlow(off){
    removeOldModeSideEffects();
    syncGlowState(off);
    updateNativeInputs(off);
  }

  function toggleGlow(event){
    const toggle = event.target.closest(".desktop-theme-toggle, .mobile-theme-toggle, .theme-toggle, .theme-mode-toggle, .mode-toggle");
    if(!toggle || !isPremium()) return;

    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();

    const nextOff = !document.documentElement.classList.contains("bw-glow-off");
    setGlow(nextOff);
  }

  function init(){
    if(!isPremium()) return;

    setGlow(getSavedOff());

    findGlowToggles().forEach(toggle => {
      toggle.addEventListener("click", toggleGlow, true);
      toggle.addEventListener("change", toggleGlow, true);
      toggle.addEventListener("keydown", function(event){
        if(event.key === " " || event.key === "Enter"){
          toggleGlow(event);
        }
      }, true);
    });

    /* Protect against old theme script adding light-mode after click. */
    const observer = new MutationObserver(function(){
      if(!isPremium()) return;
      const off = document.documentElement.classList.contains("bw-glow-off");
      removeOldModeSideEffects();
      syncGlowState(off);
      updateNativeInputs(off);
    });

    observer.observe(document.documentElement, {attributes:true, attributeFilter:["class"]});
    if(document.body){
      observer.observe(document.body, {attributes:true, attributeFilter:["class"]});
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();
