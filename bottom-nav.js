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
    ru: ['Сегодня', 'Намаз', 'Коран', 'Аскары', 'Садака'],
    en: ['Today', 'Prayer', 'Quran', 'Adhkar', 'Sadaqa'],
    kz: ['Бүгін', 'Намаз', 'Құран', 'Зікір', 'Садақа'],
    uz: ['Bugun', 'Namoz', 'Qurʼon', 'Zikrlar', 'Sadaqa'],
    tr: ['Bugün', 'Namaz', 'Kur’an', 'Zikirler', 'Sadaka'],
    ur: ['آج', 'نماز', 'قرآن', 'اذکار', 'صدقہ'],
    ar: ['اليوم', 'الصلاة', 'القرآن', 'الأذكار', 'الصدقة'],
    id: ['Hari ini', 'Salat', 'Quran', 'Dzikir', 'Sedekah'],
    bn: ['আজ', 'নামাজ', 'কুরআন', 'যিকির', 'সাদাকা'],
    hi: ['आज', 'नमाज़', 'क़ुरआन', 'अज़कार', 'सदक़ा']
  };
  var L = labels[lang] || labels.ru;
  function file(base) { return '/' + base + '-' + lang + '.html'; }

  var items = [
    {key:'today', label:L[0], href:file('home'), icon:'<svg viewBox="0 0 24 24"><path d="M4 7.5h16"/><path d="M8 3.5v4"/><path d="M16 3.5v4"/><rect x="4" y="5.5" width="16" height="15" rx="3"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M8 16h.01"/><path d="M12 16h.01"/></svg>'},
    {key:'prayer', label:L[1], href:file('prayer'), icon:'<svg viewBox="0 0 24 24"><path d="M12 3.5c2.8 2.1 4.8 5.4 4.8 9.2 0 3.4-1.8 6.2-4.8 7.8-3-1.6-4.8-4.4-4.8-7.8 0-3.8 2-7.1 4.8-9.2Z"/><path d="M12 8.5v5"/><path d="M9.5 13.5h5"/></svg>'},
    {key:'quran', label:L[2], href:file('quran'), icon:'<svg viewBox="0 0 24 24"><path d="M5.5 4.5h5.2c1.1 0 1.8.7 1.8 1.8v13.2c0-1-.8-1.7-1.8-1.7H5.5A1.5 1.5 0 0 1 4 16.3V6a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M18.5 4.5h-5.2c-1.1 0-1.8.7-1.8 1.8v13.2c0-1 .8-1.7 1.8-1.7h5.2A1.5 1.5 0 0 0 20 16.3V6a1.5 1.5 0 0 0-1.5-1.5Z"/><path d="M8 8.5h2"/><path d="M14 8.5h2"/></svg>'},
    {key:'adhkar', label:L[3], href:file('adhkar'), icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3"/><path d="M12 18.2v3"/><path d="M4.8 4.8l2.1 2.1"/><path d="M17.1 17.1l2.1 2.1"/><path d="M2.8 12h3"/><path d="M18.2 12h3"/><path d="M4.8 19.2l2.1-2.1"/><path d="M17.1 6.9l2.1-2.1"/></svg>'},
    {key:'sadaqa', label:L[4], href:file('hidden-sadaqa'), icon:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.2-7-10.2A4.1 4.1 0 0 1 12 7a4.1 4.1 0 0 1 7 2.8C19 15.8 12 20 12 20Z"/><path d="M12 7v13"/><path d="M8.5 11.5c1.5.2 2.7-.2 3.5-1.3.8 1.1 2 1.5 3.5 1.3"/></svg>'}
  ];

  function activeKey() {
    var p = window.location.pathname.toLowerCase();
    if (p.indexOf('prayer') !== -1) return 'prayer';
    if (p.indexOf('quran') !== -1) return 'quran';
    if (p.indexOf('adhkar') !== -1) return 'adhkar';
    if (p.indexOf('sadaqa') !== -1 || p.indexOf('support') !== -1) return 'sadaqa';
    if (p.indexOf('home') !== -1 || p.indexOf('index') !== -1 || p === '/') return 'today';
    return '';
  }

  function initBottomNav() {
    document.querySelectorAll('.bottom-app-nav').forEach(function (n) { n.remove(); });
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
      a.innerHTML = item.icon + '<span>' + item.label + '</span>';
      inner.appendChild(a);
    });
    nav.appendChild(inner);
    document.body.appendChild(nav);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBottomNav);
  else initBottomNav();
})();
