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
    ru: { today:'Сегодня', favorites:'Избранное', quran:'Коран', holidays:'Праздники', learning:'Обучение' },
    en: { today:'Today', favorites:'Favorites', quran:'Quran', holidays:'Holidays', learning:'Learning' },
    kz: { today:'Бүгін', favorites:'Таңдаулы', quran:'Құран', holidays:'Мерекелер', learning:'Оқу' },
    uz: { today:'Bugun', favorites:'Sevimli', quran:'Qurʼon', holidays:'Bayramlar', learning:'O‘rganish' },
    tr: { today:'Bugün', favorites:'Favoriler', quran:'Kur’an', holidays:'Bayramlar', learning:'Öğrenme' },
    ar: { today:'اليوم', favorites:'المفضلة', quran:'القرآن', holidays:'الأعياد', learning:'التعلّم' },
    ur: { today:'آج', favorites:'پسندیدہ', quran:'قرآن', holidays:'اعیاد', learning:'تعلیم' },
    id: { today:'Hari ini', favorites:'Favorit', quran:'Quran', holidays:'Hari raya', learning:'Belajar' },
    bn: { today:'আজ', favorites:'প্রিয়', quran:'কুরআন', holidays:'উৎসব', learning:'শিক্ষা' },
    hi: { today:'आज', favorites:'पसंदीदा', quran:'क़ुरआन', holidays:'त्योहार', learning:'सीखना' }
  };

  var L = labels[lang] || labels.ru;

  function file(base) {
    return '/' + base + '-' + lang + '.html';
  }

  function readFavorites() {
    try {
      var raw = localStorage.getItem(FAVORITES_KEY);
      var list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list.filter(Boolean) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites(list) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.isArray(list) ? list : []));
    updateNavHeart();
  }

  function hasFavorites() {
    return readFavorites().length > 0;
  }

  function buildId(data) {
    return (data.url || '') + '::' + (data.title || '');
  }

  window.BarakaWayFavorites = {
    list: readFavorites,

    hasAny: hasFavorites,

    isActive: function (id) {
      return readFavorites().some(function (x) {
        return String(x.id) === String(id);
      });
    },

    toggle: function (data) {
      var id = buildId(data);
      var list = readFavorites();

      var exists = list.some(function (x) {
        return String(x.id) === String(id);
      });

      if (exists) {
        list = list.filter(function (x) {
          return String(x.id) !== String(id);
        });
        saveFavorites(list);
        return false;
      }

      list.unshift({
        id: id,
        title: data.title || document.title,
        url: data.url || window.location.pathname,
        text: data.text || '',
        type: data.type || '',
        addedAt: new Date().toISOString()
      });

      saveFavorites(list);
      return true;
    },

    open: function () {
      window.location.href = file('favorites');
    },

    refreshNav: function () {
      updateNavHeart();
    }
  };

  function iconToday() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h16"/><path d="M8 3.5v4"/><path d="M16 3.5v4"/><rect x="4" y="5.5" width="16" height="15" rx="3"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M8 16h.01"/><path d="M12 16h.01"/></svg>';
  }

  function iconHeart() {
    return '<svg class="bottom-nav-heart-svg" viewBox="0 0 24 24" aria-hidden="true"><path class="bottom-nav-heart-path" d="M12 20s-7-4.35-7-10.15A4.15 4.15 0 0 1 12 6.9a4.15 4.15 0 0 1 7 2.95C19 15.65 12 20 12 20Z"/></svg>';
  }

  function iconQuran() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 4.5h5.2c1.1 0 1.8.7 1.8 1.8v13.2c0-1-.8-1.7-1.8-1.7H5.5A1.5 1.5 0 0 1 4 16.3V6a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M18.5 4.5h-5.2c-1.1 0-1.8.7-1.8 1.8v13.2c0-1 .8-1.7 1.8-1.7h5.2A1.5 1.5 0 0 0 20 16.3V6a1.5 1.5 0 0 0-1.5-1.5Z"/><path d="M8 8.5h2"/><path d="M14 8.5h2"/></svg>';
  }

  function iconHolidays() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.15 4.35 4.8.7-3.48 3.38.82 4.78L12 14.45 7.71 16.71l.82-4.78L5.05 8.55l4.8-.7L12 3.5Z"/><path d="M4.5 20.5h15"/></svg>';
  }

  function iconLearning() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5v-11Z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h3"/></svg>';
  }

  var navItems = [
    { key:'today', label:L.today, href:file('home'), icon:iconToday },
    { key:'favorites', label:L.favorites, href:file('favorites'), icon:iconHeart },
    { key:'quran', label:L.quran, href:file('quran'), icon:iconQuran },
    { key:'holidays', label:L.holidays, href:file('holidays'), icon:iconHolidays },
    { key:'learning', label:L.learning, href:file('learning'), icon:iconLearning }
  ];

  function activeKey() {
    var p = window.location.pathname.toLowerCase();

    if (p.indexOf('favorites') !== -1 || p.indexOf('favorite') !== -1) return 'favorites';
    if (p.indexOf('quran') !== -1 || p.indexOf('surah') !== -1) return 'quran';
    if (p.indexOf('holiday') !== -1 || p.indexOf('holidays') !== -1 || p.indexOf('eid') !== -1 || p.indexOf('ramadan') !== -1 || p.indexOf('calendar') !== -1) return 'holidays';
    if (p.indexOf('learning') !== -1 || p.indexOf('learn') !== -1 || p.indexOf('education') !== -1 || p.indexOf('video') !== -1) return 'learning';
    if (p.indexOf('home') !== -1 || p.indexOf('index') !== -1 || p === '/' || p === '') return 'today';

    return '';
  }

  function injectNavStyle() {
    var old = document.getElementById('barakaway-bottom-nav-final-style');
    if (old) old.remove();

    var style = document.createElement('style');
    style.id = 'barakaway-bottom-nav-final-style';
    style.textContent =
      '.bottom-app-nav{' +
        'z-index:2100 !important;' +
      '}' +

      '.bottom-app-nav-inner{' +
        'display:grid !important;' +
        'grid-template-columns:repeat(5,minmax(0,1fr)) !important;' +
        'align-items:center !important;' +
        'justify-items:center !important;' +
      '}' +

      '.bottom-app-nav-item{' +
        'box-sizing:border-box !important;' +
        'display:flex !important;' +
        'flex-direction:column !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'text-align:center !important;' +
        'gap:5px !important;' +
        'padding:0 4px !important;' +
        'line-height:1.05 !important;' +
        'overflow:hidden !important;' +
      '}' +

      '.bottom-app-nav-icon{' +
        'box-sizing:border-box !important;' +
        'display:flex !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'margin:0 auto !important;' +
        'padding:0 !important;' +
        'flex:0 0 30px !important;' +
      '}' +

      '.bottom-app-nav-icon svg{' +
        'display:block !important;' +
        'margin:0 auto !important;' +
        'position:static !important;' +
        'transform:none !important;' +
        'fill:none !important;' +
        'stroke:currentColor !important;' +
      '}' +

      '.bottom-app-nav-item.active .bottom-app-nav-icon svg{' +
        'transform:none !important;' +
        'stroke-width:2.25 !important;' +
      '}' +

      '.bottom-app-nav-label{' +
        'display:block !important;' +
        'width:100% !important;' +
        'max-width:100% !important;' +
        'text-align:center !important;' +
        'margin:0 auto !important;' +
        'padding:0 !important;' +
        'line-height:1.05 !important;' +
        'white-space:nowrap !important;' +
        'overflow:hidden !important;' +
        'text-overflow:ellipsis !important;' +
      '}' +

      '.bottom-app-nav-item[data-nav="favorites"] .bottom-app-nav-icon svg,' +
      '.bottom-app-nav-item[data-nav="favorites"] .bottom-app-nav-icon svg path{' +
        'stroke:#d7c07a !important;' +
        'color:#d7c07a !important;' +
      '}' +

      '.bottom-app-nav-item[data-nav="favorites"] .bottom-app-nav-icon svg path{' +
        'fill:transparent !important;' +
      '}' +

      '.bottom-app-nav-item[data-nav="favorites"].has-favorites .bottom-app-nav-icon svg path{' +
        'fill:#d7c07a !important;' +
        'stroke:#d7c07a !important;' +
      '}' +

      '.bottom-app-nav-item[data-nav="favorites"] .bottom-app-nav-label{' +
        'color:inherit !important;' +
      '}';

    document.head.appendChild(style);
  }

  function updateNavHeart() {
    var item = document.querySelector('.bottom-app-nav-item[data-nav="favorites"]');
    if (!item) return;

    if (hasFavorites()) {
      item.classList.add('has-favorites');
      item.setAttribute('data-favorites-state', 'filled');
    } else {
      item.classList.remove('has-favorites');
      item.setAttribute('data-favorites-state', 'empty');
    }
  }

  function renderBottomNav() {
    injectNavStyle();

    document.querySelectorAll('.bottom-app-nav').forEach(function (nav) {
      nav.remove();
    });

    var active = activeKey();

    var nav = document.createElement('nav');
    nav.className = 'bottom-app-nav';
    nav.setAttribute('aria-label', 'BarakaWay navigation');

    var inner = document.createElement('div');
    inner.className = 'bottom-app-nav-inner';

    navItems.forEach(function (item) {
      var a = document.createElement('a');
      a.className = 'bottom-app-nav-item' + (item.key === active ? ' active' : '');
      a.href = item.href;
      a.dataset.nav = item.key;
      a.setAttribute('aria-label', item.label);

      if (item.key === active) {
        a.setAttribute('aria-current', 'page');
      }

      a.innerHTML =
        '<span class="bottom-app-nav-icon">' + item.icon() + '</span>' +
        '<span class="bottom-app-nav-label">' + item.label + '</span>';

      a.addEventListener('click', function () {
        document.querySelectorAll('.bottom-app-nav-item').forEach(function (el) {
          el.classList.remove('active');
          el.removeAttribute('aria-current');
        });

        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      });

      inner.appendChild(a);
    });

    nav.appendChild(inner);
    document.body.appendChild(nav);

    updateNavHeart();
  }

  function extractData(btn) {
    if (btn.dataset.surahName) {
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
      type: btn.dataset.type || ''
    };
  }

  function updateButton(btn, active) {
    if (active) {
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  function initFavoritesButtons() {
    document.querySelectorAll('[data-surah-action="favorite"], [data-surah-action="save"]').forEach(function (btn) {
      var data = extractData(btn);
      var id = buildId(data);

      updateButton(btn, window.BarakaWayFavorites.isActive(id));

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var result = window.BarakaWayFavorites.toggle(data);

        updateButton(btn, result);
        updateNavHeart();
      });
    });
  }

  function boot() {
    renderBottomNav();
    initFavoritesButtons();

    window.addEventListener('storage', updateNavHeart);
    document.addEventListener('barakaway:favorites:changed', updateNavHeart);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();