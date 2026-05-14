(function(){
  const GLOW_KEY = 'barakawayGlowOff';

  function safeGet(key){ try{ return localStorage.getItem(key); }catch(e){ return null; } }
  function safeSet(key, value){ try{ localStorage.setItem(key, value); }catch(e){} }

  function getSwitches(){
    return document.querySelectorAll('.theme-switch');
  }

  function getLabels(){
    return document.querySelectorAll('.theme-toggle-label');
  }

  function hasPremiumTheme(){
    try{
      if(window.BarakaWayTheme && typeof window.BarakaWayTheme.currentPremiumTheme === 'function'){
        if(window.BarakaWayTheme.currentPremiumTheme()) return true;
      }
      if(safeGet('barakaway_premium_theme')) return true;
    }catch(e){}
    return document.documentElement.className.indexOf('premium-theme-') !== -1 ||
           (document.body && document.body.className.indexOf('premium-theme-') !== -1);
  }

  function forcePremiumDarkBase(){
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.add('dark-mode');
    if(document.body){
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
    safeSet('siteTheme','dark');
  }

  function setGlowOff(off){
    document.documentElement.classList.toggle('bw-glow-off', off);
    if(document.body) document.body.classList.toggle('bw-glow-off', off);
    safeSet(GLOW_KEY, off ? '1' : '0');

    getSwitches().forEach(function(switchEl){
      switchEl.checked = !off;
      switchEl.setAttribute('aria-checked', off ? 'false' : 'true');
      switchEl.setAttribute('aria-label', off ? 'Glow Off' : 'Glow On');
    });

    getLabels().forEach(function(label){
      label.textContent = off ? 'Glow Off' : 'Glow On';
    });
  }

  function applyTheme(theme){
    const selected = theme === 'light' ? 'light' : 'dark';

    document.documentElement.classList.remove('light-mode','dark-mode');
    document.documentElement.classList.add(selected + '-mode');

    if(document.body){
      document.body.classList.remove('light-mode','dark-mode');
      document.body.classList.add(selected + '-mode');
    }

    safeSet('siteTheme', selected);

    getSwitches().forEach(function(switchEl){
      switchEl.checked = selected === 'light';
      switchEl.setAttribute('aria-checked', selected === 'light' ? 'true' : 'false');
    });

    getLabels().forEach(function(label){
      label.textContent = selected === 'dark' ? 'Light mode' : 'Dark mode';
    });

    if(window.BarakaWayTheme && typeof window.BarakaWayTheme.refresh === 'function'){
      window.BarakaWayTheme.refresh();
    }
  }

  function bindSwitches(){
    getSwitches().forEach(function(switchEl){
      if(switchEl.dataset.bwGlowBound === '1') return;
      switchEl.dataset.bwGlowBound = '1';

      switchEl.addEventListener('change', function(){
        if(hasPremiumTheme()){
          forcePremiumDarkBase();
          setGlowOff(!this.checked);
        }else{
          applyTheme(this.checked ? 'light' : 'dark');
        }
      });
    });
  }

  function syncState(){
    if(hasPremiumTheme()){
      forcePremiumDarkBase();
      setGlowOff(safeGet(GLOW_KEY) === '1');
    }else{
      applyTheme(safeGet('siteTheme') || 'dark');
    }
  }

  function init(){
    syncState();
    bindSwitches();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }

  window.addEventListener('barakaway:premium-theme-change', init);
  window.addEventListener('storage', function(event){
    if(!event.key || event.key === GLOW_KEY || event.key === 'barakaway_premium_theme' || event.key === 'siteTheme'){
      init();
    }
  });
})();
