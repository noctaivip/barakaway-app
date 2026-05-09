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

      localStorage.setItem('siteTheme', selected);
    }

    if(switchEl){
      switchEl.checked = selected === 'light';
    }

    if(label){
      label.textContent = selected === 'dark' ? 'Light mode' : 'Dark mode';
    }
  }

  const savedTheme = localStorage.getItem('siteTheme') || 'dark';
  applyTheme(savedTheme);

  if(!switchEl || !label) return;

  switchEl.addEventListener('change', function(){
    applyTheme(this.checked ? 'light' : 'dark');
  });
})();