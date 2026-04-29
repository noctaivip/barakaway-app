(function () {
  function detectLang() {
    var htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    var path = window.location.pathname.toLowerCase();
    var match = path.match(/(?:^|[-_\/])(ru|en|kz|kk|uz|tr|ur|ar|id|bn|hi)(?=\.|-|_|\/|$)/);
    if (match) return match[1] === 'kk' ? 'kz' : match[1];
    if (htmlLang.indexOf('kk') === 0) return 'kz';
    if (htmlLang.indexOf('ru') === 0) return 'ru';
    if (htmlLang.indexOf('en') === 0) return 'en';
    if (htmlLang.indexOf('uz') === 0) return 'uz';
    if (htmlLang.indexOf('tr') === 0) return 'tr';
    if (htmlLang.indexOf('ur') === 0) return 'ur';
    if (htmlLang.indexOf('ar') === 0) return 'ar';
    if (htmlLang.indexOf('id') === 0) return 'id';
    if (htmlLang.indexOf('bn') === 0) return 'bn';
    if (htmlLang.indexOf('hi') === 0) return 'hi';
    return 'ru';
  }

  var lang = detectLang();
  var labels = {
    ru: ['Сегодня', 'Избранное', 'Коран', 'Праздники', 'Обучение'],
    en: ['Today', 'Favorites', 'Quran', 'Holidays', 'Learning'],
    kz: ['Бүгін', 'Таңдаулы', 'Құран', 'Мерекелер', 'Оқу'],
    uz: ['Bugun', 'Saralangan', 'Qurʼon', 'Bayramlar', 'Taʼlim'],
    tr: ['Bugün', 'Favoriler', 'Kur’an', 'Bayramlar', 'Eğitim'],
    ur: ['آج', 'پسندیدہ', 'قرآن', 'تہوار', 'تعلیم'],
    ar: ['اليوم', 'المفضلة', 'القرآن', 'المناسبات', 'التعلم'],
    id: ['Hari ini', 'Favorit', 'Quran', 'Hari Raya', 'Belajar'],
    bn: ['আজ', 'প্রিয়', 'কুরআন', 'উৎসব', 'শিক্ষা'],
    hi: ['आज', 'पसंदीदा', 'क़ुरआन', 'त्योहार', 'सीखें']
  };
  var L = labels[lang] || labels.ru;
  function file(base) { return '/' + base + '-' + lang + '.html'; }

  var items = [
    {key:'today', label:L[0], href:file('home'), icon:'<svg viewBox="0 0 24 24"><path d="M4 7.5h16"/><path d="M8 3.5v4"/><path d="M16 3.5v4"/><rect x="4" y="5.5" width="16" height="15" rx="3"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M8 16h.01"/><path d="M12 16h.01"/></svg>'},
    {key:'favorites', label:L[1], href:file('favorites'), icon:'<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.2-4.4-7.2-10.4A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 7.2 3c0 6-7.2 10.4-7.2 10.4Z"/><path d="M12 7.1v13.4"/></svg>'},
    {key:'quran', label:L[2], href:file('quran'), icon:'<svg viewBox="0 0 24 24"><path d="M5.5 4.5h5.2c1.1 0 1.8.7 1.8 1.8v13.2c0-1-.8-1.7-1.8-1.7H5.5A1.5 1.5 0 0 1 4 16.3V6a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M18.5 4.5h-5.2c-1.1 0-1.8.7-1.8 1.8v13.2c0-1 .8-1.7 1.8-1.7h5.2A1.5 1.5 0 0 0 20 16.3V6a1.5 1.5 0 0 0-1.5-1.5Z"/><path d="M8 8.5h2"/><path d="M14 8.5h2"/></svg>'},
    {key:'holidays', label:L[3], href:file('holidays'), icon:'<svg viewBox="0 0 24 24"><path d="M12 3.5c-1.9 1.4-3.1 3.5-3.1 5.9 0 4 3.3 7.3 7.3 7.3 1.4 0 2.7-.4 3.8-1.1A8.6 8.6 0 1 1 12 3.5Z"/><path d="M17.5 4.2l.6 1.6 1.7.1-1.3 1.1.4 1.6-1.4-.9-1.4.9.4-1.6-1.3-1.1 1.7-.1.6-1.6Z"/></svg>'},
    {key:'learning', label:L[4], href:file('learning'), icon:'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M10 9l5 3-5 3V9Z"/><path d="M7 20h10"/></svg>'}
  ];

  function activeKey() {
    var p = window.location.pathname.toLowerCase();
    if (p.indexOf('favorites') !== -1 || p.indexOf('favorite') !== -1) return 'favorites';
    if (p.indexOf('quran') !== -1) return 'quran';
    if (p.indexOf('holidays') !== -1 || p.indexOf('holiday') !== -1 || p.indexOf('eid') !== -1) return 'holidays';
    if (p.indexOf('learning') !== -1 || p.indexOf('learn') !== -1 || p.indexOf('video') !== -1) return 'learning';
    if (p.indexOf('home') !== -1 || p.indexOf('index') !== -1 || p === '/') return 'today';
    return '';
  }

  function readFavorites(){
    var keys = ['barakaway_favorites_v1','barakawayFavorites','favorites','favoriteItems'];
    for(var i=0;i<keys.length;i++){
      try{ var raw = localStorage.getItem(keys[i]); if(raw){ var parsed = JSON.parse(raw); if(Array.isArray(parsed)) return parsed; } }catch(e){}
    }
    return [];
  }
  function saveFavorites(items){ try{ localStorage.setItem('barakaway_favorites_v1', JSON.stringify(items || [])); }catch(e){} }
  function normalizeFavorite(data){
    data = data || {}; var url = data.url || data.href || window.location.pathname; var title = data.title || data.name || document.title || 'Избранное';
    return { id: data.id || url + '::' + title, title: title, type: data.type || data.category || '', text: data.text || data.description || '', url: url, addedAt: data.addedAt || new Date().toISOString() };
  }
  window.BarakaWayFavorites = {
    list: readFavorites,
    add: function(data){ var item = normalizeFavorite(data); var list = readFavorites().filter(function(x){return String(x.id) !== String(item.id);}); list.unshift(item); saveFavorites(list); return item; },
    remove: function(id){ var list = readFavorites().filter(function(x){return String(x.id) !== String(id);}); saveFavorites(list); return list; },
    toggle: function(data){ var item = normalizeFavorite(data); var list = readFavorites(); var exists = list.some(function(x){return String(x.id) === String(item.id);}); if(exists){ this.remove(item.id); return {active:false,item:item}; } this.add(item); return {active:true,item:item}; }
  };
  function initFavoriteClickSupport(){
    document.addEventListener('click', function(e){
      var btn = e.target.closest('[data-favorite], .favorite-btn, .favorite-star, .save-favorite, .fav-btn'); if(!btn) return;
      var title = btn.getAttribute('data-favorite-title') || btn.getAttribute('data-title') || btn.getAttribute('aria-label') || document.title;
      var url = btn.getAttribute('data-favorite-url') || btn.getAttribute('data-url') || window.location.pathname;
      var type = btn.getAttribute('data-favorite-type') || btn.getAttribute('data-type') || ''; var text = btn.getAttribute('data-favorite-text') || btn.getAttribute('data-text') || '';
      var id = btn.getAttribute('data-favorite-id') || btn.getAttribute('data-id') || (url + '::' + title);
      var result = window.BarakaWayFavorites.toggle({id:id,title:title,url:url,type:type,text:text}); btn.classList.toggle('is-favorite', result.active); btn.setAttribute('aria-pressed', result.active ? 'true' : 'false');
    }, true);
  }

  function initBottomNav() {
    document.querySelectorAll('.bottom-app-nav').forEach(function (n) { n.remove(); });
    var nav = document.createElement('nav'); nav.className = 'bottom-app-nav'; nav.setAttribute('aria-label', 'BarakaWay navigation');
    var inner = document.createElement('div'); inner.className = 'bottom-app-nav-inner'; var active = activeKey();
    items.forEach(function (item) { var a = document.createElement('a'); a.className = 'bottom-app-nav-item' + (item.key === active ? ' active' : ''); a.href = item.href; a.setAttribute('aria-label', item.label); a.innerHTML = item.icon + '<span>' + item.label + '</span>'; inner.appendChild(a); });
    nav.appendChild(inner); document.body.appendChild(nav); initFavoriteClickSupport();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBottomNav); else initBottomNav();
})();
