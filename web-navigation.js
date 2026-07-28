(function(){
  "use strict";
  var NAV={"ru": {"links": [["home-ru.html", "Главная"], ["quran-ru.html", "Коран"], ["adhkar-ru.html", "Азкары"], ["names-ru.html", "99 имён"], ["articles-ru.html", "Статьи"], ["life-situations-ru.html", "Жизнь"], ["prophets-duas-ru.html", "Крепость"]], "aria": "Навигация сайта"}, "en": {"links": [["home-en.html", "Home"], ["quran-en.html", "Quran"], ["adhkar-en.html", "Adhkar"], ["names-en.html", "99 Names"], ["articles-en.html", "Articles"], ["life-situations-en.html", "Life"], ["prophets-duas-en.html", "Fortress"]], "aria": "Site navigation"}, "ar": {"links": [["home-ar.html", "الرئيسية"], ["quran-ar.html", "القرآن"], ["adhkar-ar.html", "الأذكار"], ["names-ar.html", "99 اسماً"], ["articles-ar.html", "المقالات"], ["life-situations-ar.html", "الحياة"], ["prophets-duas-ar.html", "الحصن"]], "aria": "تنقل الموقع"}, "tr": {"links": [["home-tr.html", "Ana sayfa"], ["quran-tr.html", "Kur’an"], ["adhkar-tr.html", "Zikirler"], ["names-tr.html", "99 İsim"], ["articles-tr.html", "Makaleler"], ["life-situations-tr.html", "Hayat"], ["prophets-duas-tr.html", "Kale"]], "aria": "Site navigasyonu"}, "uz": {"links": [["home-uz.html", "Bosh sahifa"], ["quran-uz.html", "Qurʼon"], ["adhkar-uz.html", "Zikrlar"], ["names-uz.html", "99 ism"], ["articles-uz.html", "Maqolalar"], ["life-situations-uz.html", "Hayot"], ["prophets-duas-uz.html", "Qal’a"]], "aria": "Sayt navigatsiyasi"}, "kz": {"links": [["home-kz.html", "Басты бет"], ["quran-kz.html", "Құран"], ["adhkar-kz.html", "Зікірлер"], ["names-kz.html", "99 есім"], ["articles-kz.html", "Мақалалар"], ["life-situations-kz.html", "Өмір"], ["prophets-duas-kz.html", "Қорған"]], "aria": "Сайт навигациясы"}, "id": {"links": [["home-id.html", "Beranda"], ["quran-id.html", "Quran"], ["adhkar-id.html", "Dzikir"], ["names-id.html", "99 Nama"], ["articles-id.html", "Artikel"], ["life-situations-id.html", "Hidup"], ["prophets-duas-id.html", "Benteng"]], "aria": "Navigasi situs"}, "hi": {"links": [["home-hi.html", "मुख्य"], ["quran-hi.html", "कुरआन"], ["adhkar-hi.html", "अज़कार"], ["names-hi.html", "99 नाम"], ["articles-hi.html", "लेख"], ["life-situations-hi.html", "जीवन"], ["prophets-duas-hi.html", "क़िला"]], "aria": "साइट नेविगेशन"}, "bn": {"links": [["home-bn.html", "হোম"], ["quran-bn.html", "কুরআন"], ["adhkar-bn.html", "আযকার"], ["names-bn.html", "99 নাম"], ["articles-bn.html", "প্রবন্ধ"], ["life-situations-bn.html", "জীবন"], ["prophets-duas-bn.html", "দুর্গ"]], "aria": "সাইট নেভিগেশন"}, "ur": {"links": [["home-ur.html", "ہوم"], ["quran-ur.html", "قرآن"], ["adhkar-ur.html", "اذکار"], ["names-ur.html", "99 نام"], ["articles-ur.html", "مضامین"], ["life-situations-ur.html", "زندگی"], ["prophets-duas-ur.html", "قلعہ"]], "aria": "سائٹ نیویگیشن"}};
  var FOOTER={"ru": [[["support-project-ru.html", "Поддержать проект"], ["terms-ru.html", "Условия использования"], ["privacy-policy-ru.html", "Политика конфиденциальности"], ["about-ru.html", "О проекте"], ["private-chat-ru.html", "Чат"]], "Установить приложение", "Все права защищены.", "Ссылки футера"], "en": [[["support-project-en.html", "Support project"], ["terms-en.html", "Terms of Use"], ["privacy-policy-en.html", "Privacy Policy"], ["about-en.html", "About"], ["private-chat-en.html", "Chat"]], "Install App", "All rights reserved.", "Footer links"], "ar": [[["support-project-ar.html", "دعم المشروع"], ["terms-ar.html", "شروط الاستخدام"], ["privacy-policy-ar.html", "سياسة الخصوصية"], ["about-ar.html", "عن المشروع"], ["private-chat-ar.html", "الدردشة"]], "تثبيت التطبيق", "جميع الحقوق محفوظة.", "روابط التذييل"], "tr": [[["support-project-tr.html", "Projeyi destekle"], ["terms-tr.html", "Kullanım şartları"], ["privacy-policy-tr.html", "Gizlilik politikası"], ["about-tr.html", "Hakkında"], ["private-chat-tr.html", "Sohbet"]], "Uygulamayı yükle", "Tüm hakları saklıdır.", "Footer links"], "uz": [[["support-project-uz.html", "Loyihani qo‘llab-quvvatlash"], ["terms-uz.html", "Foydalanish shartlari"], ["privacy-policy-uz.html", "Maxfiylik siyosati"], ["about-uz.html", "Loyiha haqida"], ["private-chat-uz.html", "Chat"]], "Ilovani o‘rnatish", "Barcha huquqlar himoyalangan.", "Footer links"], "kz": [[["support-project-kz.html", "Жобаны қолдау"], ["terms-kz.html", "Пайдалану шарттары"], ["privacy-policy-kz.html", "Құпиялылық саясаты"], ["about-kz.html", "Жоба туралы"], ["private-chat-kz.html", "Чат"]], "Қолданбаны орнату", "Барлық құқықтар қорғалған.", "Footer links"], "id": [[["support-project-id.html", "Dukung proyek"], ["terms-id.html", "Ketentuan Penggunaan"], ["privacy-policy-id.html", "Kebijakan Privasi"], ["about-id.html", "Tentang"], ["private-chat-id.html", "Chat"]], "Instal Aplikasi", "Hak cipta dilindungi.", "Footer links"], "hi": [[["support-project-hi.html", "प्रोजेक्ट का समर्थन"], ["terms-hi.html", "उपयोग की शर्तें"], ["privacy-policy-hi.html", "गोपनीयता नीति"], ["about-hi.html", "परियोजना के बारे में"], ["private-chat-hi.html", "चैट"]], "ऐप इंस्टॉल करें", "सभी अधिकार सुरक्षित.", "Footer links"], "bn": [[["support-project-bn.html", "প্রকল্প সমর্থন"], ["terms-bn.html", "ব্যবহারের শর্তাবলী"], ["privacy-policy-bn.html", "গোপনীয়তা নীতি"], ["about-bn.html", "প্রকল্প সম্পর্কে"], ["private-chat-bn.html", "চ্যাট"]], "অ্যাপ ইনস্টল করুন", "সর্বস্বত্ব সংরক্ষিত.", "Footer links"], "ur": [[["support-project-ur.html", "پروجیکٹ کی حمایت"], ["terms-ur.html", "استعمال کی شرائط"], ["privacy-policy-ur.html", "پرائیویسی پالیسی"], ["about-ur.html", "منصوبے کے بارے میں"], ["private-chat-ur.html", "چیٹ"]], "ایپ انسٹال کریں", "تمام حقوق محفوظ ہیں.", "Footer links"]};

  var SOCIAL_TITLES={"ru":"Мы в социальных сетях","en":"Follow BarakaWay","ar":"تابع BarakaWay","tr":"BarakaWay’i takip edin","uz":"BarakaWay’ni kuzating","kz":"BarakaWay желілерде","id":"Ikuti BarakaWay","hi":"BarakaWay को फ़ॉलो करें","bn":"BarakaWay অনুসরণ করুন","ur":"BarakaWay کو فالو کریں"};
  var SOCIALS=[
    ["youtube","YouTube","https://www.youtube.com/@BarakaWay-app"],
    ["facebook","Facebook","https://www.facebook.com/BarakaWayApp"],
    ["instagram","Instagram","https://www.instagram.com/barakaway.app"],
    ["tiktok","TikTok","https://www.tiktok.com/@barakaway.app"],
    ["pinterest","Pinterest","https://nl.pinterest.com/barakaway"],
    ["x","X","https://x.com/barakawayapp"],
    ["telegram","Telegram","https://t.me/barakaway_app"],
    ["linkedin","LinkedIn","https://www.linkedin.com/in/bakhtiyor-akhmedov-noctai/"]
  ];

  function socialIcon(name){
    var common='viewBox="0 0 24 24" aria-hidden="true" focusable="false"';
    if(name==='youtube') return '<svg '+common+'><path d="M21.2 7.2a2.7 2.7 0 0 0-1.9-1.9C17.6 4.8 12 4.8 12 4.8s-5.6 0-7.3.5a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2.3 12a28 28 0 0 0 .5 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .5-4.8 28 28 0 0 0-.5-4.8Z"/><path class="bw-social-cut" d="m10 15.4 5.2-3.4L10 8.6v6.8Z"/></svg>';
    if(name==='instagram') return '<svg '+common+'><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle class="bw-social-cut" cx="12" cy="12" r="4.1"/><circle class="bw-social-cut" cx="17.4" cy="6.8" r="1.1"/></svg>';
    if(name==='telegram') return '<svg '+common+'><path d="M21.2 3.5 2.9 10.6c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.5c.2.7.1 1 .9 1 .6 0 .9-.3 1.2-.6l2.3-2.2 4.8 3.5c.9.5 1.5.3 1.8-.8l3.1-14.7c.4-1.4-.5-2.1-1.1-1.8Z"/><path class="bw-social-cut" d="m8 13.2 9.2-5.8-7.1 6.9-.3 3.8L8 13.2Z"/></svg>';
    if(name==='facebook') return '<svg '+common+'><path d="M14.2 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a23 23 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.8v8h3.4Z"/></svg>';
    if(name==='tiktok') return '<svg '+common+'><path d="M14.7 3c.3 2.3 1.6 3.7 3.8 3.9v3.2a8 8 0 0 1-3.8-1.1v6.1a5.9 5.9 0 1 1-5.1-5.8v3.3a2.7 2.7 0 1 0 1.7 2.5V3h3.4Z"/></svg>';
    if(name==='pinterest') return '<svg '+common+'><path d="M12 2.8a9.2 9.2 0 0 0-3.4 17.7c-.1-1.5 0-3.2.4-4.6l1.2-5s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.5 1.2.6 2.3 1.8 2.3 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.2 1 2.8.1.1.1.2.1.4l-.4 1.6c-.1.5-.5.6-.9.4-2-1-3.2-3.8-3.2-6.1 0-5 3.6-9.6 10.5-9.6 5.5 0 9.8 3.9 9.8 9.2 0 5.5-3.5 9.9-8.2 9.9-1.6 0-3.1-.8-3.6-1.8l-1 3.8c-.4 1.4-1.3 3.1-2 4.1.8.2 1.6.3 2.4.3A9.2 9.2 0 1 0 12 2.8Z"/></svg>';
    if(name==='linkedin') return '<svg '+common+'><path d="M5.4 8.2H2.3V21h3.1V8.2ZM3.9 3A1.8 1.8 0 1 0 4 6.6 1.8 1.8 0 0 0 3.9 3ZM21.7 13.7c0-3.9-2.1-5.7-4.9-5.7-2.2 0-3.2 1.2-3.8 2.1V8.2H9.9V21H13v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.1l1.1-7.3Z"/></svg>';
    return '<svg '+common+'><path d="M4 4h4.2l4.4 5.9L17.5 4H20l-6.2 7.8L20.5 20h-4.2l-4.9-6.5L6 20H3.5l6.7-8.4L4 4Zm3.1 2 10.1 12h1.2L8.3 6H7.1Z"/></svg>';
  }

  function socialMarkup(lang){
    var title=SOCIAL_TITLES[lang]||SOCIAL_TITLES.en;
    return '<section class="bw-footer-social" aria-label="'+title+'"><div class="bw-footer-social-title">'+title+'</div><div class="bw-footer-social-links">'+SOCIALS.map(function(item){return '<a class="bw-social-link bw-social-'+item[0]+'" href="'+item[2]+'" target="_blank" rel="noopener noreferrer" aria-label="'+item[1]+'" title="'+item[1]+'">'+socialIcon(item[0])+'<span class="bw-sr-only">'+item[1]+'</span></a>';}).join('')+'</div></section>';
  }

  function ensureSocialStyles(){
    if(document.getElementById('bw-social-critical-styles')) return;
    var style=document.createElement('style');
    style.id='bw-social-critical-styles';
    style.textContent='.bw-footer-social{display:flex!important;visibility:visible!important;opacity:1!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:12px!important;width:100%!important;max-width:100%!important;margin:0 auto 16px!important;padding:0 16px!important;text-align:center!important}.bw-footer-social-title{display:block!important;color:rgba(247,250,248,.76);font-size:13px!important;font-weight:900!important}.bw-footer-social-links{display:flex!important;visibility:visible!important;opacity:1!important;align-items:center!important;justify-content:center!important;gap:12px!important;flex-wrap:wrap!important;width:auto!important;max-width:100%!important}.bw-social-link{display:inline-flex!important;visibility:visible!important;opacity:1!important;flex:0 0 42px!important;width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;align-items:center!important;justify-content:center!important;border-radius:14px!important;border:1px solid rgba(215,192,122,.25)!important;background:linear-gradient(145deg,rgba(12,26,22,.92),rgba(9,18,20,.88))!important;color:#e7d28a!important;text-decoration:none!important}.bw-social-link svg{display:block!important;width:21px!important;height:21px!important;max-width:none!important}.bw-social-link span[aria-hidden=true]{display:block!important;line-height:1!important}@media(max-width:900px){.bw-footer-social{display:flex!important;width:100%!important;margin:0 auto 14px!important;padding:0 4px!important;gap:9px!important}.bw-footer-social-title{font-size:12px!important}.bw-footer-social-links{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:clamp(3px,1.4vw,7px)!important;justify-content:center!important;width:100%!important;max-width:360px!important}.bw-social-link{display:inline-flex!important;flex:0 0 clamp(28px,8.2vw,34px)!important;width:clamp(28px,8.2vw,34px)!important;height:clamp(28px,8.2vw,34px)!important;min-width:28px!important;min-height:28px!important;border-radius:10px!important}.bw-social-link svg{width:clamp(15px,4.4vw,18px)!important;height:clamp(15px,4.4vw,18px)!important}}';
    document.head.appendChild(style);
  }

  function addSocialStructuredData(){
    if(document.getElementById('bw-social-sameas')) return;
    var node=document.createElement('script');
    node.id='bw-social-sameas';
    node.type='application/ld+json';
    node.text=JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"BarakaWay","sameAs":SOCIALS.map(function(item){return item[2];})});
    document.head.appendChild(node);
  }

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
    footer.innerHTML=socialMarkup(lang)+'<div class="bw-footer-line"><div class="bw-footer-brand"><span class="bw-footer-dot" aria-hidden="true"></span><span>BarakaWay</span></div><nav class="bw-footer-links" aria-label="'+aria+'">'+links.map(function(l){return '<a href="'+root+l[0]+'">'+l[1]+'</a>';}).join('')+'</nav><a class="bw-footer-install" href="https://play.google.com/store/apps/details?id=app.barakaway.mobile">'+install+'</a></div><div class="bw-footer-bottom">© 2026 BarakaWay. '+rights+'</div>';
    setActiveLinks(footer);
    return footer;
  }


  function removeRequestedLandscapeNotice(){
    var needles=["BarakaWay "+"web-версия оптимизирована для " + "горизонтального браузера","web-версия оптимизирована для " + "горизонтального браузера"];
    document.querySelectorAll("body *").forEach(function(el){
      if(!el || el.children.length) return;
      var t=(el.textContent||"").replace(/\s+/g," ").trim();
      if(needles.some(function(n){return t.indexOf(n)!==-1;})){
        var target=el.closest("section,div,header,aside,p,span")||el;
        target.style.display="none";
        target.setAttribute("hidden","hidden");
      }
    });
  }
  function wireRequestedInstallLinks(){
    var url="https://play.google.com/store/apps/details?id=app.barakaway.mobile";
    document.querySelectorAll(".bw-footer-install,.bw-web-install-cta,a[href*='install-app-']").forEach(function(el){
      el.setAttribute("href",url);
    });
  }

  function init(){
    var file=(location.pathname.split('/').pop()||'').toLowerCase();
    if(file==='index.html') return;
    var lang=detectLang();
    var root=rootPath();
    addSocialStructuredData();
    ensureSocialStyles();

    document.querySelectorAll('.bw-web-topnav').forEach(function(el){ el.remove(); });
    document.body.insertBefore(buildHeader(lang, root), document.body.firstChild);

    var placeholder=document.querySelector('[data-bw-component-slot="footer"]');
    if(placeholder) placeholder.replaceWith(buildFooter(lang, root));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
