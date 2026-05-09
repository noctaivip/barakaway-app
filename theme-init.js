(function(){
  const SITE_THEME_KEY = 'siteTheme';
  const PREMIUM_THEME_KEY = 'barakaway_premium_theme';

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

  function safeGet(key){
    try{
      return localStorage.getItem(key);
    }catch(e){
      return null;
    }
  }

  function safeSet(key, value){
    try{
      localStorage.setItem(key, value);
    }catch(e){}
  }

  function removePremiumThemeClasses(){
    PREMIUM_THEMES.forEach(function(theme){
      document.documentElement.classList.remove('premium-theme-' + theme);
      document.body && document.body.classList.remove('premium-theme-' + theme);
    });

    Array.prototype.slice.call(document.documentElement.classList).forEach(function(cls){
      if(cls.indexOf('bw-theme-') === 0 || cls.indexOf('theme-') === 0){
        document.documentElement.classList.remove(cls);
      }
    });

    if(document.body){
      Array.prototype.slice.call(document.body.classList).forEach(function(cls){
        if(cls.indexOf('bw-theme-') === 0 || cls.indexOf('theme-') === 0){
          document.body.classList.remove(cls);
        }
      });
    }
  }

  function normalizePremiumTheme(value){
    return PREMIUM_THEMES.indexOf(value) !== -1 ? value : '';
  }

  function applySiteTheme(theme){
    const selected = theme === 'light' ? 'light' : 'dark';

    document.documentElement.classList.remove('light-mode','dark-mode');
    document.documentElement.classList.add(selected + '-mode');

    if(document.body){
      document.body.classList.remove('light-mode','dark-mode');
      document.body.classList.add(selected + '-mode');
    }

    safeSet(SITE_THEME_KEY, selected);
  }

  function applyPremiumTheme(theme){
    const selected = normalizePremiumTheme(theme);

    removePremiumThemeClasses();

    if(selected){
      document.documentElement.classList.add('premium-theme-' + selected);
      document.documentElement.classList.add('theme-' + selected);

      if(document.body){
        document.body.classList.add('premium-theme-' + selected);
        document.body.classList.add('bw-theme-' + selected);
        document.body.classList.add('theme-' + selected);
      }

      document.documentElement.setAttribute('data-premium-theme', selected);
      if(document.body){
        document.body.setAttribute('data-premium-theme', selected);
      }
    }else{
      document.documentElement.removeAttribute('data-premium-theme');
      if(document.body){
        document.body.removeAttribute('data-premium-theme');
      }
    }
  }

  function boot(){
    let savedTheme = safeGet(SITE_THEME_KEY);

    if(!savedTheme){
      savedTheme = 'dark';
      safeSet(SITE_THEME_KEY, savedTheme);
    }

    applySiteTheme(savedTheme);
    applyPremiumTheme(safeGet(PREMIUM_THEME_KEY));
  }

  window.BarakaWayTheme = {
    siteKey: SITE_THEME_KEY,
    premiumKey: PREMIUM_THEME_KEY,
    premiumThemes: PREMIUM_THEMES.slice(),

    applySiteTheme: function(theme){
      applySiteTheme(theme);
      window.dispatchEvent(new CustomEvent('barakaway:site-theme-change', {
        detail:{ theme: theme === 'light' ? 'light' : 'dark' }
      }));
    },

    applyPremiumTheme: function(theme){
      const selected = normalizePremiumTheme(theme);

      if(selected){
        safeSet(PREMIUM_THEME_KEY, selected);
      }else{
        try{ localStorage.removeItem(PREMIUM_THEME_KEY); }catch(e){}
      }

      applyPremiumTheme(selected);

      window.dispatchEvent(new CustomEvent('barakaway:premium-theme-change', {
        detail:{ theme:selected }
      }));
    },

    refresh: function(){
      applySiteTheme(safeGet(SITE_THEME_KEY) || 'dark');
      applyPremiumTheme(safeGet(PREMIUM_THEME_KEY));
    },

    currentPremiumTheme: function(){
      return normalizePremiumTheme(safeGet(PREMIUM_THEME_KEY));
    }
  };

  boot();

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      applyPremiumTheme(safeGet(PREMIUM_THEME_KEY));
    });
  }

  window.addEventListener('storage', function(event){
    if(!event.key || event.key === SITE_THEME_KEY || event.key === PREMIUM_THEME_KEY){
      boot();
    }
  });
})();