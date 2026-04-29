(function () {

  function detectLang() {
    var htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    var path = window.location.pathname.toLowerCase();
    var match = path.match(/(?:^|[-_\/])(ru|en|kz|kk|uz|tr|ur|ar|id|bn|hi)(?=\.|-|_|\/|$)/);
    if (match) return match[1] === 'kk' ? 'kz' : match[1];
    return htmlLang || 'ru';
  }

  var lang = detectLang();

  function file(base) {
    return '/' + base + '-' + lang + '.html';
  }

  var favoritesPage = file('favorites');

  function readFavorites() {
    try {
      return JSON.parse(localStorage.getItem('barakaway_favorites_v1') || '[]');
    } catch (e) { return []; }
  }

  function saveFavorites(list) {
    localStorage.setItem('barakaway_favorites_v1', JSON.stringify(list));
  }

  function buildId(data) {
    return (data.url || '') + '::' + (data.title || '');
  }

  window.BarakaWayFavorites = {

    list: readFavorites,

    isActive: function(id){
      return readFavorites().some(x => String(x.id) === String(id));
    },

    toggle: function(data){
      var id = buildId(data);
      var list = readFavorites();

      var exists = list.some(x => String(x.id) === String(id));

      if(exists){
        list = list.filter(x => String(x.id) !== String(id));
        saveFavorites(list);
        return false;
      } else {
        var item = {
          id: id,
          title: data.title,
          url: data.url,
          text: data.text,
          type: data.type,
          addedAt: new Date().toISOString()
        };
        list.unshift(item);
        saveFavorites(list);
        return true;
      }
    },

    open: function(){
      window.location.href = favoritesPage;
    }
  };

  function extractData(btn){

    if(btn.dataset.surahName){
      return {
        title: btn.dataset.surahName,
        url: btn.dataset.surahHref,
        text: btn.dataset.surahMeta,
        type: 'Сура'
      };
    }

    return {
      title: btn.dataset.title || document.title,
      url: btn.dataset.url || window.location.pathname,
      text: btn.dataset.text || '',
      type: ''
    };
  }

  function updateButton(btn, active){
    if(active){
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  function initFavorites(){

    document.querySelectorAll('[data-surah-action="favorite"], [data-surah-action="save"]').forEach(function(btn){

      var data = extractData(btn);
      var id = (data.url + '::' + data.title);

      // initial state
      updateButton(btn, window.BarakaWayFavorites.isActive(id));

      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        var result = window.BarakaWayFavorites.toggle(data);

        updateButton(btn, result);

        // переход только для избранного
        if(btn.dataset.surahAction === 'favorite'){
          window.BarakaWayFavorites.open();
        }
      });

    });

  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initFavorites);
  } else {
    initFavorites();
  }

})();