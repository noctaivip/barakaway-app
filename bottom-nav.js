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
    {key:'today', label:L[0], href:file('home')},
    {key:'prayer', label:L[1], href:'/prayer-times-' + lang + '.html'},
    {key:'quran', label:L[2], href:file('quran')},
    {key:'adhkar', label:L[3], href:file('adhkar')},
    {key:'sadaqa', label:L[4], href:file('hidden-sadaqa')}
  ];

  function initBottomNav() {
    document.querySelectorAll('.bottom-app-nav').forEach(function (n) { n.remove(); });
    var nav = document.createElement('nav');
    nav.className = 'bottom-app-nav';
    var inner = document.createElement('div');
    items.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      inner.appendChild(a);
    });
    nav.appendChild(inner);
    document.body.appendChild(nav);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBottomNav);
  else initBottomNav();
})();