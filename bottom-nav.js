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
    ru: { today:'Сегодня', favorites:'Избранное', names:'99 имён', chat:'Чат', learning:'Обучение' },
    en: { today:'Today', favorites:'Favorites', names:'99 Names', chat:'Chat', learning:'Learning' },
    kz: { today:'Бүгін', favorites:'Таңдаулы', names:'99 есім', chat:'Чат', learning:'Оқу' },
    uz: { today:'Bugun', favorites:'Sevimli', names:'99 ism', chat:'Chat', learning:'O‘rganish' },
    tr: { today:'Bugün', favorites:'Favoriler', names:'99 İsim', chat:'Sohbet', learning:'Öğrenme' },
    ar: { today:'اليوم', favorites:'المفضلة', names:'الأسماء 99', chat:'محادثة', learning:'التعلّم' },
    ur: { today:'آج', favorites:'پسندیدہ', names:'99 نام', chat:'چیٹ', learning:'تعلیم' },
    id: { today:'Hari ini', favorites:'Favorit', names:'99 Nama', chat:'Chat', learning:'Belajar' },
    bn: { today:'আজ', favorites:'প্রিয়', names:'৯৯ নাম', chat:'চ্যাট', learning:'শিক্ষা' },
    hi: { today:'आज', favorites:'पसंदीदा', names:'99 नाम', chat:'चैट', learning:'सीखना' }
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

  function iconNames() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8.7 15.6c1.1-2.9 2.2-5.8 3.3-8.7"/><path d="M15.3 15.6c-1.1-2.9-2.2-5.8-3.3-8.7"/><path d="M9.9 12.3h4.2"/></svg>';
  }

  function iconChat() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.8A3.3 3.3 0 0 1 8.3 3.5h7.4A3.3 3.3 0 0 1 19 6.8v5.7a3.3 3.3 0 0 1-3.3 3.3h-4.4L6.6 20v-4.2A3.3 3.3 0 0 1 5 13V6.8Z"/><path d="M8.8 8.8h6.4"/><path d="M8.8 12h4.4"/></svg>';
  }

  function iconLearning() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5v-11Z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h3"/></svg>';
  }

var learningLinks = {
  ru: 'https://youtu.be/NX5RSAzqXAQ?si=OH-DiY9KayBMZFQl',
  en: 'https://youtu.be/OKFAtmywDho?si=KHWQQFkIb888fXcu',
  ar: 'https://youtu.be/RVxq7pdWmco?si=unA0PfOE7vciFEcO',
  bn: 'https://www.youtube.com/live/BzH8sq9DA8g?si=iy8XCDtpVhDhZ5z8',
  hi: 'https://www.youtube.com/live/n8qimGxv-HE?si=jW_psqdkiWsSksj4',
  id: 'https://youtu.be/b5FMcGeLgVM?si=wSRbMlX2S4qNs0h-',
  kz: 'https://youtu.be/JkdZ5jIIbxE?si=vvZVFENODB49_b01',
  tr: 'https://youtu.be/qPz8djrlsnk?si=FCov8LUJEBRhv6Pf',
  ur: 'https://youtu.be/PUtmr6RPLOc?si=ZbI5pjXJpoj1fSJe',
  uz: 'https://youtu.be/qDGrYSKST0g?si=jKKc17g6LcUCUi7p'
};

var learningLink = learningLinks[lang] || learningLinks.ru;

  var navItems = [
    { key:'today', label:L.today, href:file('home'), icon:iconToday },
    { key:'favorites', label:L.favorites, href:file('favorites'), icon:iconHeart },
    { key:'names', label:L.names, href:file('names'), icon:iconNames },
    { key:'chat', label:L.chat, href:file('private-chat'), icon:iconChat },
    { key:'learning', label:L.learning, href:learningLink, icon:iconLearning }
  ];

function activeKey() {
  var p = decodeURIComponent(window.location.pathname || '').toLowerCase();
  var fileName = p.split('/').pop() || '';
  var title = (document.title || '').toLowerCase();
  var h1 = ((document.querySelector('h1') || {}).textContent || '').toLowerCase();
  var bodyClass = (document.body.className || '').toLowerCase();
  var pageText = p + ' ' + fileName + ' ' + title + ' ' + h1 + ' ' + bodyClass;

  if (
    fileName.indexOf('favorites-') === 0 ||
    fileName.indexOf('favorite-') === 0 ||
    pageText.indexOf('favorites') !== -1 ||
    pageText.indexOf('favorite') !== -1 ||
    pageText.indexOf('favourites') !== -1 ||
    pageText.indexOf('favourite') !== -1 ||
    pageText.indexOf('избран') !== -1
  ) return 'favorites';

  if (
    fileName.indexOf('names-') === 0 ||
    pageText.indexOf('99 names') !== -1 ||
    pageText.indexOf('99 им') !== -1 ||
    pageText.indexOf('асма') !== -1
  ) return 'names';

  if (
    fileName.indexOf('private-chat-') === 0 ||
    fileName.indexOf('chat-') === 0 ||
    pageText.indexOf('private chat') !== -1 ||
    pageText.indexOf('приватный чат') !== -1 ||
    pageText.indexOf('частный чат') !== -1
  ) return 'chat';

  if (
    fileName.indexOf('learning-') === 0 ||
    pageText.indexOf('learning') !== -1 ||
    pageText.indexOf('learn') !== -1 ||
    pageText.indexOf('education') !== -1 ||
    pageText.indexOf('video') !== -1 ||
    pageText.indexOf('обуч') !== -1
  ) return 'learning';

  if (
    fileName.indexOf('home-') === 0 ||
    fileName.indexOf('index') === 0 ||
    pageText.indexOf('home') !== -1 ||
    pageText.indexOf('сегодня') !== -1 ||
    p === '/' ||
    p === ''
  ) return 'today';

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
        'gap:4px !important;' +
        'height:60px !important;' +
        'min-width:0 !important;' +
        'width:100% !important;' +
        'max-width:108px !important;' +
        'padding:7px 3px 6px !important;' +
        'border-radius:24px !important;' +
        'line-height:1 !important;' +
        'overflow:visible !important;' +
      '}' +

      '.bottom-app-nav-item.active{' +
        'width:100% !important;' +
        'max-width:108px !important;' +
        'min-height:60px !important;' +
        'border-radius:24px !important;' +
        'padding:7px 5px 6px !important;' +
        'overflow:visible !important;' +
      '}' +

      '.bottom-app-nav-icon{' +
        'box-sizing:border-box !important;' +
        'display:flex !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'width:26px !important;' +
        'height:26px !important;' +
        'min-width:26px !important;' +
        'min-height:26px !important;' +
        'margin:0 auto !important;' +
        'padding:0 !important;' +
        'flex:0 0 26px !important;' +
        'position:static !important;' +
        'transform:none !important;' +
      '}' +

      '.bottom-app-nav-icon svg{' +
        'display:block !important;' +
        'width:22px !important;' +
        'height:22px !important;' +
        'margin:0 auto !important;' +
        'position:static !important;' +
        'transform:none !important;' +
        'fill:none !important;' +
        'stroke:currentColor !important;' +
        'stroke-width:2 !important;' +
      '}' +

      '.bottom-app-nav-item.active .bottom-app-nav-icon,' +
      '.bottom-app-nav-item.active .bottom-app-nav-icon svg{' +
        'position:static !important;' +
        'transform:none !important;' +
      '}' +

      '.bottom-app-nav-item.active .bottom-app-nav-icon svg{' +
        'stroke-width:2.15 !important;' +
      '}' +

      '.bottom-app-nav-label{' +
        'box-sizing:border-box !important;' +
        'display:block !important;' +
        'width:100% !important;' +
        'max-width:100% !important;' +
        'text-align:center !important;' +
        'margin:0 auto !important;' +
        'padding:0 !important;' +
        'font-size:11px !important;' +
        'line-height:1.05 !important;' +
        'white-space:nowrap !important;' +
        'overflow:visible !important;' +
        'text-overflow:clip !important;' +
      '}' +

      '@media(max-width:420px){' +
        '.bottom-app-nav-item{' +
          'max-width:96px !important;' +
          'height:58px !important;' +
          'min-height:58px !important;' +
          'gap:3px !important;' +
          'padding:7px 2px 6px !important;' +
        '}' +
        '.bottom-app-nav-item.active{' +
          'max-width:96px !important;' +
          'min-height:58px !important;' +
          'padding:7px 3px 6px !important;' +
        '}' +
        '.bottom-app-nav-label{' +
          'font-size:10.5px !important;' +
        '}' +
        '.bottom-app-nav-icon{' +
          'width:25px !important;' +
          'height:25px !important;' +
          'min-width:25px !important;' +
          'min-height:25px !important;' +
          'flex-basis:25px !important;' +
        '}' +
        '.bottom-app-nav-icon svg{' +
          'width:21px !important;' +
          'height:21px !important;' +
        '}' +
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

      '.bottom-app-nav-item[data-nav="favorites"].active,' +
'.bottom-app-nav-item[data-nav="favorites"].is-active{' +
  'background:linear-gradient(135deg,rgba(215,192,122,.20),rgba(58,130,82,.24)) !important;' +
  'border:1px solid rgba(215,192,122,.45) !important;' +
  'box-shadow:inset 0 0 0 1px rgba(255,255,255,.04),0 10px 24px rgba(0,0,0,.22) !important;' +
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
      a.className = 'bottom-app-nav-item' + (item.key === active ? ' active is-active' : '');
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
          el.classList.remove('active', 'is-active');
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


  function applyPremiumThemeFromStorage() {
    try {
      if (window.BarakaWayTheme && typeof window.BarakaWayTheme.refresh === 'function') {
        window.BarakaWayTheme.refresh();
        return;
      }

      var theme = localStorage.getItem('barakaway_premium_theme') || '';
      var classes = Array.prototype.slice.call(document.documentElement.classList);

      classes.forEach(function (cls) {
        if (cls.indexOf('premium-theme-') === 0 || cls.indexOf('theme-') === 0) {
          document.documentElement.classList.remove(cls);
        }
      });

      if (document.body) {
        Array.prototype.slice.call(document.body.classList).forEach(function (cls) {
          if (cls.indexOf('premium-theme-') === 0 || cls.indexOf('bw-theme-') === 0 || cls.indexOf('theme-') === 0) {
            document.body.classList.remove(cls);
          }
        });
      }

      if (theme) {
        document.documentElement.classList.add('premium-theme-' + theme);
        document.documentElement.classList.add('theme-' + theme);
        document.documentElement.setAttribute('data-premium-theme', theme);

        if (document.body) {
          document.body.classList.add('premium-theme-' + theme);
          document.body.classList.add('bw-theme-' + theme);
          document.body.classList.add('theme-' + theme);
          document.body.setAttribute('data-premium-theme', theme);
        }
      } else {
        document.documentElement.removeAttribute('data-premium-theme');
        if (document.body) document.body.removeAttribute('data-premium-theme');
      }
    } catch (e) {}
  }

  function boot() {
    applyPremiumThemeFromStorage();
    renderBottomNav();
    initFavoritesButtons();

    window.addEventListener('storage', function(){ updateNavHeart(); applyPremiumThemeFromStorage(); });
    document.addEventListener('barakaway:favorites:changed', updateNavHeart);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();