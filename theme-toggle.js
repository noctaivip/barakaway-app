(function(){
  const switchEl = document.getElementById("themeSwitch");
  const label = document.querySelector(".theme-toggle-label");

  function hasPremiumTheme(){
    try{
      if(window.BarakaWayTheme && typeof window.BarakaWayTheme.currentPremiumTheme === 'function'){
        if(window.BarakaWayTheme.currentPremiumTheme()) return true;
      }
      if(localStorage.getItem('barakaway_premium_theme')) return true;
    }catch(e){}

    return document.documentElement.className.indexOf('premium-theme-') !== -1;
  }

  function applyTheme(theme){
    const selected = hasPremiumTheme() ? 'dark' : (theme === 'light' ? 'light' : 'dark');

    if(window.BarakaWayTheme && typeof window.BarakaWayTheme.applySiteTheme === 'function'){
      window.BarakaWayTheme.applySiteTheme(selected);
    }else{
      document.documentElement.classList.remove('light-mode','dark-mode');
      document.documentElement.classList.add(selected + '-mode');

      if(document.body){
        document.body.classList.remove('light-mode','dark-mode');
        document.body.classList.add(selected + '-mode');
      }

      try{ localStorage.setItem('siteTheme', selected); }catch(e){}
    }

    if(switchEl){
      switchEl.checked = selected === 'light';
    }

    if(label){
      label.textContent = selected === 'dark' ? 'Light mode' : 'Dark mode';
    }

    if(window.BarakaWayTheme && typeof window.BarakaWayTheme.refresh === 'function'){
      window.BarakaWayTheme.refresh();
    }
  }

  let savedTheme = 'dark';
  try{ savedTheme = hasPremiumTheme() ? 'dark' : (localStorage.getItem('siteTheme') || 'dark'); }catch(e){}
  applyTheme(savedTheme);

  if(!switchEl || !label) return;

  switchEl.addEventListener('change', function(){
    applyTheme(this.checked ? 'light' : 'dark');
  });
})();
