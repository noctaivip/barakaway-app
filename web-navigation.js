(function(){
  "use strict";
  var NAV={"ru": {"links": [["home-ru.html", "Главная"], ["quran-ru.html", "Коран"], ["adhkar-ru.html", "Азкары"], ["names-ru.html", "99 имён"], ["articles-ru.html", "Статьи"], ["life-situations-ru.html", "Жизнь"], ["prophets-duas-ru.html", "Крепость"], ["pro-ru.html", "Pro"]], "aria": "Навигация сайта"}, "en": {"links": [["home-en.html", "Home"], ["quran-en.html", "Quran"], ["adhkar-en.html", "Adhkar"], ["names-en.html", "99 Names"], ["articles-en.html", "Articles"], ["life-situations-en.html", "Life"], ["prophets-duas-en.html", "Fortress"], ["pro-en.html", "Pro"]], "aria": "Site navigation"}, "ar": {"links": [["home-ar.html", "الرئيسية"], ["quran-ar.html", "القرآن"], ["adhkar-ar.html", "الأذكار"], ["names-ar.html", "99 اسماً"], ["articles-ar.html", "المقالات"], ["life-situations-ar.html", "الحياة"], ["prophets-duas-ar.html", "الحصن"], ["pro-ar.html", "Pro"]], "aria": "تنقل الموقع"}, "tr": {"links": [["home-tr.html", "Ana sayfa"], ["quran-tr.html", "Kur’an"], ["adhkar-tr.html", "Zikirler"], ["names-tr.html", "99 İsim"], ["articles-tr.html", "Makaleler"], ["life-situations-tr.html", "Hayat"], ["prophets-duas-tr.html", "Kale"], ["pro-tr.html", "Pro"]], "aria": "Site navigasyonu"}, "uz": {"links": [["home-uz.html", "Bosh sahifa"], ["quran-uz.html", "Qurʼon"], ["adhkar-uz.html", "Zikrlar"], ["names-uz.html", "99 ism"], ["articles-uz.html", "Maqolalar"], ["life-situations-uz.html", "Hayot"], ["prophets-duas-uz.html", "Qal’a"], ["pro-uz.html", "Pro"]], "aria": "Sayt navigatsiyasi"}, "kz": {"links": [["home-kz.html", "Басты бет"], ["quran-kz.html", "Құран"], ["adhkar-kz.html", "Зікірлер"], ["names-kz.html", "99 есім"], ["articles-kz.html", "Мақалалар"], ["life-situations-kz.html", "Өмір"], ["prophets-duas-kz.html", "Қорған"], ["pro-kz.html", "Pro"]], "aria": "Сайт навигациясы"}, "id": {"links": [["home-id.html", "Beranda"], ["quran-id.html", "Quran"], ["adhkar-id.html", "Dzikir"], ["names-id.html", "99 Nama"], ["articles-id.html", "Artikel"], ["life-situations-id.html", "Hidup"], ["prophets-duas-id.html", "Benteng"], ["pro-id.html", "Pro"]], "aria": "Navigasi situs"}, "hi": {"links": [["home-hi.html", "मुख्य"], ["quran-hi.html", "कुरआन"], ["adhkar-hi.html", "अज़कार"], ["names-hi.html", "99 नाम"], ["articles-hi.html", "लेख"], ["life-situations-hi.html", "जीवन"], ["prophets-duas-hi.html", "क़िला"], ["pro-hi.html", "Pro"]], "aria": "साइट नेविगेशन"}, "bn": {"links": [["home-bn.html", "হোম"], ["quran-bn.html", "কুরআন"], ["adhkar-bn.html", "আযকার"], ["names-bn.html", "99 নাম"], ["articles-bn.html", "প্রবন্ধ"], ["life-situations-bn.html", "জীবন"], ["prophets-duas-bn.html", "দুর্গ"], ["pro-bn.html", "Pro"]], "aria": "সাইট নেভিগেশন"}, "ur": {"links": [["home-ur.html", "ہوم"], ["quran-ur.html", "قرآن"], ["adhkar-ur.html", "اذکار"], ["names-ur.html", "99 نام"], ["articles-ur.html", "مضامین"], ["life-situations-ur.html", "زندگی"], ["prophets-duas-ur.html", "قلعہ"], ["pro-ur.html", "Pro"]], "aria": "سائٹ نیویگیشن"}};
  var FOOTER={"ru": [[["support-project-ru.html", "Поддержать проект"], ["terms-ru.html", "Условия использования"], ["privacy-policy-ru.html", "Политика конфиденциальности"], ["about-ru.html", "О проекте"], ["private-chat-ru.html", "Чат"]], "Установить приложение", "Все права защищены.", "Ссылки футера"], "en": [[["support-project-en.html", "Support project"], ["terms-en.html", "Terms of Use"], ["privacy-policy-en.html", "Privacy Policy"], ["about-en.html", "About"], ["private-chat-en.html", "Chat"]], "Install App", "All rights reserved.", "Footer links"], "ar": [[["support-project-ar.html", "دعم المشروع"], ["terms-ar.html", "شروط الاستخدام"], ["privacy-policy-ar.html", "سياسة الخصوصية"], ["about-ar.html", "عن المشروع"], ["private-chat-ar.html", "الدردشة"]], "تثبيت التطبيق", "جميع الحقوق محفوظة.", "روابط التذييل"], "tr": [[["support-project-tr.html", "Projeyi destekle"], ["terms-tr.html", "Kullanım şartları"], ["privacy-policy-tr.html", "Gizlilik politikası"], ["about-tr.html", "Hakkında"], ["private-chat-tr.html", "Sohbet"]], "Uygulamayı yükle", "Tüm hakları saklıdır.", "Footer links"], "uz": [[["support-project-uz.html", "Loyihani qo‘llab-quvvatlash"], ["terms-uz.html", "Foydalanish shartlari"], ["privacy-policy-uz.html", "Maxfiylik siyosati"], ["about-uz.html", "Loyiha haqida"], ["private-chat-uz.html", "Chat"]], "Ilovani o‘rnatish", "Barcha huquqlar himoyalangan.", "Footer links"], "kz": [[["support-project-kz.html", "Жобаны қолдау"], ["terms-kz.html", "Пайдалану шарттары"], ["privacy-policy-kz.html", "Құпиялылық саясаты"], ["about-kz.html", "Жоба туралы"], ["private-chat-kz.html", "Чат"]], "Қолданбаны орнату", "Барлық құқықтар қорғалған.", "Footer links"], "id": [[["support-project-id.html", "Dukung proyek"], ["terms-id.html", "Ketentuan Penggunaan"], ["privacy-policy-id.html", "Kebijakan Privasi"], ["about-id.html", "Tentang"], ["private-chat-id.html", "Chat"]], "Instal Aplikasi", "Hak cipta dilindungi.", "Footer links"], "hi": [[["support-project-hi.html", "प्रोजेक्ट का समर्थन"], ["terms-hi.html", "उपयोग की शर्तें"], ["privacy-policy-hi.html", "गोपनीयता नीति"], ["about-hi.html", "परियोजना के बारे में"], ["private-chat-hi.html", "चैट"]], "ऐप इंस्टॉल करें", "सभी अधिकार सुरक्षित.", "Footer links"], "bn": [[["support-project-bn.html", "প্রকল্প সমর্থন"], ["terms-bn.html", "ব্যবহারের শর্তাবলী"], ["privacy-policy-bn.html", "গোপনীয়তা নীতি"], ["about-bn.html", "প্রকল্প সম্পর্কে"], ["private-chat-bn.html", "চ্যাট"]], "অ্যাপ ইনস্টল করুন", "সর্বস্বত্ব সংরক্ষিত.", "Footer links"], "ur": [[["support-project-ur.html", "پروجیکٹ کی حمایت"], ["terms-ur.html", "استعمال کی شرائط"], ["privacy-policy-ur.html", "پرائیویسی پالیسی"], ["about-ur.html", "منصوبے کے بارے میں"], ["private-chat-ur.html", "چیٹ"]], "ایپ انسٹال کریں", "تمام حقوق محفوظ ہیں.", "Footer links"]};

  function detectLang(){
    var file=(location.pathname.split('/').pop()||'home-ru.html').toLowerCase();
    var m=file.match(/-([a-z]{2})\.html$/);
    if(m && NAV[m[1]]) return m[1];
    var htmlLang=(document.documentElement.lang||'ru').toLowerCase().slice(0,2);
    return NAV[htmlLang] ? htmlLang : 'ru';
  }

  function rootPath(){
    var p=location.pathname;
    if(/\/(Quran|Quran-[a-z]{2}|islamic_articles|islamic_articles-[a-z]{2})\//i.test(p)) return '../';
    return '';
  }

  function setActiveLinks(scope){
    var current=(location.pathname.split('/').pop()||'').toLowerCase();
    scope.querySelectorAll('a[href]').forEach(function(a){
      var href=(a.getAttribute('href')||'').split('/').pop().toLowerCase();
      if(href && href===current) a.setAttribute('aria-current','page');
    });
  }

  function buildHeader(lang, root){
    var cfg=NAV[lang]||NAV.ru;
    var header=document.createElement('header');
    header.className='bw-web-topnav';
    header.setAttribute('data-bw-component','header');
    header.innerHTML='<div class="bw-web-topnav__inner"><a class="bw-web-brand" href="'+root+'home-'+lang+'.html"><img src="'+root+'Logo.png" alt="BarakaWay"><span>BarakaWay</span></a><nav class="bw-web-links" aria-label="'+cfg.aria+'">'+cfg.links.map(function(l){return '<a href="'+root+l[0]+'">'+l[1]+'</a>';}).join('')+'</nav></div>';
    setActiveLinks(header);
    return header;
  }

  function buildFooter(lang, root){
    var cfg=FOOTER[lang]||FOOTER.ru;
    var links=cfg[0]||[];
    var install=cfg[1]||'Install App';
    var rights=cfg[2]||'All rights reserved.';
    var aria=cfg[3]||'Footer links';
    var footer=document.createElement('footer');
    footer.className='bw-site-footer';
    footer.setAttribute('aria-label','BarakaWay footer');
    footer.setAttribute('data-bw-component','footer');
    footer.innerHTML='<div class="bw-footer-line"><div class="bw-footer-brand"><span class="bw-footer-dot" aria-hidden="true"></span><span>BarakaWay</span></div><nav class="bw-footer-links" aria-label="'+aria+'">'+links.map(function(l){return '<a href="'+root+l[0]+'">'+l[1]+'</a>';}).join('')+'</nav><a class="bw-footer-install" href="'+root+'install-app-'+lang+'.html">'+install+'</a></div><div class="bw-footer-bottom">© 2026 BarakaWay. '+rights+'</div>';
    setActiveLinks(footer);
    return footer;
  }

  function init(){
    var file=(location.pathname.split('/').pop()||'').toLowerCase();
    if(file==='index.html') return;
    var lang=detectLang();
    var root=rootPath();

    document.querySelectorAll('.bw-web-topnav').forEach(function(el){ el.remove(); });
    document.body.insertBefore(buildHeader(lang, root), document.body.firstChild);

    var placeholder=document.querySelector('[data-bw-component-slot="footer"]');
    if(placeholder) placeholder.replaceWith(buildFooter(lang, root));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
