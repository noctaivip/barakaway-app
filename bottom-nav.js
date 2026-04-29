(function () {
  var FAVORITES_KEY = 'barakaway_favorites_v1';

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

  function file(base) {
    return '/' + base + '-' + lang + '.html';
  }

  var favoritesPage = file('favorites');

  var icons = {
    today: '<svg viewBox="0 0 24 24"><path d="M4 7.5h16"/><path d="M8 3.5v4"/><path d="M16 3.5v4"/><rect x="4" y="5.5" width="16" height="15" rx="3"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M8 16h.01"/><path d="M12 16h.01"/></svg>',
    favorites: '<svg class="bottom-favorites-icon" viewBox="0 0 24 24"><path d="M12 20.5s-7.2-4.4-7.2-10.4A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 7.2 3c0 6-7.2 10.4-7.2 10.4Z"/></svg>',
    quran: '<svg viewBox="0 0 24 24"><path d="M5.5 4.5h5.2c1.1 0 1.8.7 1.8 1.8v13.2c0-1-.8-1.7-1.8-1.7H5.5A1.5 1.5 0 0 1 4 16.3V6a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M18.5 4.5h-5.2c-1.1 0-1.8.7-1.8 1.8v13.2c0-1 .8-1.7 1.8-1.7h5.2A1.5 1.5 0 0 0 20 16.3V6a1.5 1.5 0 0 0-1.5-1.5Z"/><path d="M8 8.5h2"/><path d="M14 8.5h2"/></svg>',
    holidays: '<svg viewBox="0 0 24 24"><path d="M12 3.5c-1.9 1.4-3.1 3.5-3.1 5.9 0 4 3.3 7.3 7.3 7.3 1.4 0 2.7-.4 3.8-1.1A8.6 8.6 0 1 1 12 3.5Z"/><path d="M17.5 4.2l.6 1.6 1.7.1-1.3 1.1.4 1.6-1.4-.9-1.4.9.4-1.6-1.3-1.1 1.7-.1.6-1.6Z"/></svg>',
    learning: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M10 9l5 3-5 3V9Z"/><path d="M7 20h10"/></svg>'
  };

  var items = [
    { key: 'today', label: L[0], href: file('home'), icon: icons.today },
    { key: 'favorites', label: L[1], href: favoritesPage, icon: icons.favorites },
    { key: 'quran', label: L[2], href: file('quran'), icon: icons.quran },
    { key: 'holidays', label: L[3], href: file('holidays'), icon: icons.holidays },
    { key: 'learning', label: L[4], href: file('learning'), icon: icons.learning }
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

  function readFavorites() {
    var raw;
    try {
      raw = localStorage.getItem(FAVORITES_KEY);
      if (!raw) return [];
      var list = JSON.parse(raw);
      return Array.isArray(list) ? list : [];
    } catch (e) { return []; }
  }

  function saveFavorites(list) {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.isArray(list) ? list : []));
      updateFavoritesIndicator();
    } catch (e) {}
  }

  function normalizeFavorite(data) {
    data = data || {};
    var url = data.url || data.href || window.location.pathname;
    var title = data.title || data.name || document.title || 'Избранное';
    var text = data.text || data.description || data.meta || '';
    var type = data.type || data.category || '';
    return {
      id: data.id || (url + '::' + title),
      title: title,
      type: type,
      text: text,
      url: url,
      href: data.href || url,
      name: data.name || title,
      number: data.number || '',
      arabic: data.arabic || '',
      ayahs: data.ayahs || '',
      meta: data.meta || text,
      addedAt: data.addedAt || new Date().toISOString()
    };
  }

  function favoriteId(data) {
    return normalizeFavorite(data).id;
  }

  function hasFavorites() {
    return readFavorites().length > 0;
  }

  function updateFavoritesIndicator() {
    var active = hasFavorites();
    document.querySelectorAll('.bottom-app-nav-item[data-nav-key="favorites"]').forEach(function (item) {
      item.classList.toggle('has-favorites', active);
      item.setAttribute('data-has-favorites', active ? 'true' : 'false');
    });
  }

  window.BarakaWayFavorites = {
    key: FAVORITES_KEY,
    page: favoritesPage,
    list: readFavorites,
    save: saveFavorites,
    normalize: normalizeFavorite,
    isActive: function (idOrData) {
      var id = typeof idOrData === 'string' ? idOrData : favoriteId(idOrData);
      return readFavorites().some(function (x) { return String(x.id) === String(id); });
    },
    add: function (data) {
      var item = normalizeFavorite(data);
      var list = readFavorites().filter(function (x) { return String(x.id) !== String(item.id); });
      list.unshift(item);
      saveFavorites(list);
      return item;
    },
    remove: function (idOrData) {
      var id = typeof idOrData === 'string' ? idOrData : favoriteId(idOrData);
      var list = readFavorites().filter(function (x) { return String(x.id) !== String(id); });
      saveFavorites(list);
      return list;
    },
    toggle: function (data) {
      var item = normalizeFavorite(data);
      if (this.isActive(item.id)) {
        this.remove(item.id);
        return { active: false, item: item };
      }
      this.add(item);
      return { active: true, item: item };
    },
    refreshNav: updateFavoritesIndicator,
    openPage: function () {
      window.location.href = favoritesPage;
    }
  };

  function extractGenericFavorite(btn) {
    if (btn.dataset.surahName) {
      return {
        id: (btn.dataset.surahHref || window.location.pathname) + '::' + (btn.dataset.surahName || 'Сура'),
        title: btn.dataset.surahName || 'Сура',
        name: btn.dataset.surahName || 'Сура',
        url: btn.dataset.surahHref || window.location.pathname,
        href: btn.dataset.surahHref || window.location.pathname,
        text: btn.dataset.surahMeta || btn.dataset.surahAyahs || '',
        type: 'Сура',
        number: btn.dataset.surahNumber || '',
        arabic: btn.dataset.surahArabic || '',
        ayahs: btn.dataset.surahAyahs || '',
        meta: btn.dataset.surahMeta || ''
      };
    }

    return {
      id: btn.getAttribute('data-favorite-id') || btn.getAttribute('data-id') || ((btn.getAttribute('data-favorite-url') || btn.getAttribute('data-url') || window.location.pathname) + '::' + (btn.getAttribute('data-favorite-title') || btn.getAttribute('data-title') || document.title)),
      title: btn.getAttribute('data-favorite-title') || btn.getAttribute('data-title') || btn.getAttribute('aria-label') || document.title,
      url: btn.getAttribute('data-favorite-url') || btn.getAttribute('data-url') || window.location.pathname,
      type: btn.getAttribute('data-favorite-type') || btn.getAttribute('data-type') || '',
      text: btn.getAttribute('data-favorite-text') || btn.getAttribute('data-text') || ''
    };
  }

  function setButtonState(btn, active) {
    btn.classList.toggle('is-active', !!active);
    btn.classList.toggle('is-favorite', !!active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  }

  function initFavoriteClickSupport() {
    document.querySelectorAll('[data-favorite], .favorite-btn, .favorite-star, .save-favorite, .fav-btn').forEach(function (btn) {
      var item = extractGenericFavorite(btn);
      setButtonState(btn, window.BarakaWayFavorites.isActive(item));
    });

    document.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-favorite], .favorite-btn, .favorite-star, .save-favorite, .fav-btn');
      if (!btn) return;

      event.preventDefault();
      event.stopPropagation();

      var item = extractGenericFavorite(btn);
      var result = window.BarakaWayFavorites.toggle(item);
      setButtonState(btn, result.active);

      if (!btn.hasAttribute('data-favorite-no-redirect')) {
        window.location.href = favoritesPage;
      }
    }, true);
  }

  function injectStyle() {
    if (document.getElementById('barakaway-bottom-nav-favorites-style')) return;
    var style = document.createElement('style');
    style.id = 'barakaway-bottom-nav-favorites-style';
    style.textContent = [
      '.bottom-app-nav-item[data-nav-key="favorites"] svg{fill:none;}',
      '.bottom-app-nav-item[data-nav-key="favorites"].has-favorites svg{fill:currentColor;}',
      '.bottom-app-nav-item[data-nav-key="favorites"].has-favorites:not(.active) svg{color:#f0d891;}',
      '.bottom-app-nav-item[data-nav-key="favorites"].has-favorites:not(.active) span{color:#f0d891;}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function initBottomNav() {
    injectStyle();
    document.querySelectorAll('.bottom-app-nav').forEach(function (nav) { nav.remove(); });

    var nav = document.createElement('nav');
    nav.className = 'bottom-app-nav';
    nav.setAttribute('aria-label', 'BarakaWay navigation');

    var inner = document.createElement('div');
    inner.className = 'bottom-app-nav-inner';

    var active = activeKey();
    items.forEach(function (item) {
      var a = document.createElement('a');
      a.className = 'bottom-app-nav-item' + (item.key === active ? ' active' : '');
      a.href = item.href;
      a.setAttribute('aria-label', item.label);
      a.setAttribute('data-nav-key', item.key);
      a.innerHTML = item.icon + '<span>' + item.label + '</span>';
      inner.appendChild(a);
    });

    nav.appendChild(inner);
    document.body.appendChild(nav);

    updateFavoritesIndicator();
    initFavoriteClickSupport();
  }

  window.addEventListener('storage', function (event) {
    if (event.key === FAVORITES_KEY) updateFavoritesIndicator();
  });
  window.addEventListener('barakaway:favorites-updated', updateFavoritesIndicator);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBottomNav);
  } else {
    initBottomNav();
  }

  setInterval(updateFavoritesIndicator, 1000);
})();
