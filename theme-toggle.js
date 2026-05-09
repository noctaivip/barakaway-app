(function(){
  const switchEl = document.getElementById("themeSwitch");
  const label = document.querySelector(".theme-toggle-label");

  function applyTheme(theme){
    const selected = theme === 'light' ? 'light' : 'dark';

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
  try{ savedTheme = localStorage.getItem('siteTheme') || 'dark'; }catch(e){}
  applyTheme(savedTheme);

  if(!switchEl || !label) return;

  switchEl.addEventListener('change', function(){
    applyTheme(this.checked ? 'light' : 'dark');
  });
})();
