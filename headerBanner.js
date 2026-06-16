(function(){
  "use strict";

  var fallbackLang = "ru";

  var messages = {
    ru: [
      "Мухаррам — месяц нового начала: усили благодарность, держи пост Ашура и начни год с покаяния и зикра.",
      "Сафар — сохраняй сердце спокойным: убери суеверия, укрепи таваккуль и держись ежедневных дуа и зикра.",
      "Раби аль-авваль — вспоминай Сунну Пророка ﷺ: больше салавата, мягкости, добрых слов и пользы для людей.",
      "Раби ас-сани — укрепляй постоянство: маленькие добрые дела каждый день ближе к Аллаху, чем редкий большой порыв.",
      "Джумада аль-уля — месяц внутренней дисциплины: сократи лишнее, береги язык и добавь больше искреннего зикра.",
      "Джумада ас-сания — обнови намерение: очисти дела от показухи, помоги близким и укрепи связь с Кораном.",
      "Раджаб — один из запретных месяцев: береги себя от грехов, усили таубу, садака и подготовку к Рамадану.",
      "Ша‘бан — подготовка к Рамадану: больше поста, Корана, салавата и порядка в сердце до прихода великого месяца.",
      "Рамадан — месяц Корана и милости: держи пост, усили дуа, таравих, садака и береги каждую ночь от пустого.",
      "Шавваль — не останавливайся после Рамадана: постись шесть дней и сохрани привычку к Корану, дуа и добру.",
      "Зуль-Ка‘да — сохрани свои действия: сократи лишнее и усили зикр, это подготовка к самым важным дням впереди.",
      "Зуль-Хиджа — первые десять дней бесценны: больше такбира, садака, дуа и поста в день Арафа, если можешь."
    ],
    en: [
      "Muharram is a month of renewal: increase gratitude, fast Ashura if you can, and begin the year with repentance and dhikr.",
      "Safar is for calm reliance: leave superstition, strengthen tawakkul, and keep steady daily dua and remembrance of Allah.",
      "Rabi al-Awwal reminds you of the Sunnah: send more salawat, speak gently, act with mercy, and benefit people.",
      "Rabi al-Thani is for consistency: small sincere deeds every day are better than rare bursts that quickly disappear.",
      "Jumada al-Ula is for inner discipline: reduce distractions, protect your tongue, and add more sincere dhikr.",
      "Jumada al-Thani renews intention: purify your deeds from showing off, help family, and reconnect with the Quran.",
      "Rajab is a sacred month: protect yourself from sins, increase tawbah, charity, and preparation for Ramadan.",
      "Sha‘ban prepares the heart for Ramadan: increase fasting, Quran, salawat, and order before the blessed month arrives.",
      "Ramadan is the month of Quran and mercy: fast, make dua, pray tarawih, give charity, and guard every night.",
      "Shawwal keeps Ramadan alive: fast six days if you can and protect your habits of Quran, dua, and good deeds.",
      "Dhul-Qa‘dah is a time to preserve your deeds: reduce distractions and increase dhikr before the most important days ahead.",
      "Dhul-Hijjah begins with priceless days: increase takbir, charity, dua, and fast on Arafah if you are able."
    ],
    ar: [
      "محرّم شهر بداية جديدة: زد الشكر، وصم عاشوراء إن استطعت، وابدأ عامك بتوبة وذكر صادق.",
      "صفر شهر التوكّل والطمأنينة: اترك التشاؤم، وثبّت قلبك بالدعاء والذكر وحسن الظن بالله.",
      "ربيع الأول يذكّرك بسنة النبي ﷺ: أكثر من الصلاة عليه، واللين، والكلمة الطيبة، ونفع الناس.",
      "ربيع الآخر شهر الثبات: العمل القليل الدائم مع الإخلاص أحب من اندفاع كبير ينقطع سريعاً.",
      "جمادى الأولى فرصة للانضباط: قلّل الملهيات، واحفظ لسانك، واجعل لك ورداً ثابتاً من الذكر.",
      "جمادى الآخرة شهر تجديد النية: طهّر عملك من الرياء، وأحسن لأهلك، وقوّ صلتك بالقرآن.",
      "رجب من الأشهر الحرم: عظّم حرمته، وابتعد عن الذنوب، وأكثر من التوبة والصدقة والاستعداد لرمضان.",
      "شعبان تهيئة لرمضان: أكثر من الصيام والقرآن والصلاة على النبي ﷺ ورتّب قلبك قبل الشهر العظيم.",
      "رمضان شهر القرآن والرحمة: صم، وأكثر الدعاء والتراويح والصدقة، واحفظ لياليك من الغفلة.",
      "شوال يحفظ أثر رمضان: صم ستة أيام إن استطعت، واثبت على القرآن والدعاء والعمل الصالح.",
      "ذو القعدة وقت حفظ الأعمال: قلّل الزوائد، وأكثر الذكر، واستعد لأعظم الأيام القادمة.",
      "ذو الحجة أيامه الأولى عظيمة: أكثر من التكبير والصدقة والدعاء وصم يوم عرفة إن استطعت."
    ],
    tr: [
      "Muharrem yeni bir başlangıçtır: şükrü artır, Aşure orucunu tutabilirsen tut, yılı tevbe ve zikirle başlat.",
      "Safer ayında kalbini sakin tut: batıl korkuları bırak, tevekkülü güçlendir, günlük dua ve zikre sarıl.",
      "Rebiülevvel Sünnet’i hatırlatır: daha çok salavat getir, yumuşak konuş, merhametli ol ve insanlara fayda ver.",
      "Rebiülahir istikrar ayıdır: her gün yapılan küçük samimi ameller, çabuk sönen büyük heyecandan daha değerlidir.",
      "Cemaziyelevvel iç disiplin ayıdır: gereksizi azalt, dilini koru ve samimi zikri çoğalt.",
      "Cemaziyelahir niyeti yenileme vaktidir: amelleri riyadan temizle, ailene iyilik et ve Kur’an bağını güçlendir.",
      "Recep haram aylardandır: günahlardan sakın, tevbe ve sadakayı artır, Ramazan için hazırlığa başla.",
      "Şaban Ramazan’a hazırlıktır: orucu, Kur’an’ı, salavatı ve kalp düzenini mübarek ay gelmeden artır.",
      "Ramazan Kur’an ve rahmet ayıdır: oruç, dua, teravih, sadaka ve her geceyi boş şeylerden koruma vaktidir.",
      "Şevval Ramazan izini korur: altı gün oruç tutabilirsen tut, Kur’an, dua ve hayır alışkanlığını sürdür.",
      "Zilkade amelleri koruma zamanıdır: gereksizi azalt, zikri çoğalt ve önündeki en değerli günlere hazırlan.",
      "Zilhicce’nin ilk on günü çok kıymetlidir: tekbir, sadaka, dua ve gücün yeterse Arefe orucunu artır."
    ],
    kz: [
      "Мұхаррам — жаңа бастау айы: шүкірді көбейт, Ашура оразасын ұстай алсаң ұста, жылды тәубе мен зікірмен баста.",
      "Сафар — жүректі тыныш ұстау айы: ырымнан алыста, тәуекелді күшейт, күнделікті дұға мен зікірді үзбе.",
      "Рабиғ әл-әууәл — Сүннетті еске салатын ай: салауатты көбейт, жұмсақ сөйле, мейірім таныт және адамдарға пайда бер.",
      "Рабиғ әс-сани — тұрақтылық айы: күн сайынғы аз да болса ықыласты амал сирек үлкен әрекеттен артық.",
      "Жұмада әл-ула — ішкі тәртіп айы: артық нәрсені қысқарт, тіліңді сақта және шынайы зікірді көбейт.",
      "Жұмада әс-сания — ниетті жаңарту уақыты: амалды риядан тазарт, жақындарыңа жақсылық жаса, Құранмен байланысты күшейт.",
      "Рәжәб — қасиетті айлардың бірі: күнәдан сақтан, тәубені, садақаны көбейт және Рамазанға дайындал.",
      "Шағбан — Рамазанға дайындық: ораза, Құран, салауат және жүрек тәртібін ұлы ай келмей тұрып күшейт.",
      "Рамазан — Құран мен рақым айы: ораза ұста, дұға, тарауих, садақа және әр түнді бос нәрседен сақта.",
      "Шәууәл — Рамазан әсерін сақтау айы: алты күн ораза ұстауға тырыс және Құран, дұға, жақсылықты жалғастыр.",
      "Зүлқағда — амалдарыңды сақтау уақыты: артықты азайт, зікірді күшейт, алдағы ең маңызды күндерге дайындал.",
      "Зүлхижжа — алғашқы он күн өте қымбат: тәкбір, садақа, дұға және шамасы келсе Арафа оразасын көбейт."
    ],
    uz: [
      "Muharram yangi boshlanish oyidir: shukrni ko‘paytir, Ashuro ro‘zasini tuta olsang tut, yilni tavba va zikr bilan boshla.",
      "Safar qalbni tinch tutish oyidir: xurofotdan uzoq bo‘l, tavakkulni kuchaytir, har kungi duo va zikrni tark etma.",
      "Rabiul avval Sunnatni eslatadi: ko‘proq salovat ayt, muloyim bo‘l, yaxshi so‘z va odamlarga foyda yetkaz.",
      "Rabius soniy bardavomlik oyidir: har kuni qilingan kichik ixlosli amal, tez so‘nadigan katta harakatdan yaxshiroq.",
      "Jumodul avval ichki tartib oyidir: ortiqcha narsani kamaytir, tilingni asra va samimiy zikrni ko‘paytir.",
      "Jumodul soniy niyatni yangilash vaqti: amallarni riyodan tozala, yaqinlarga yaxshilik qil, Qur’on bilan bog‘lan.",
      "Rajab hurmatli oylardandir: gunohdan saqlan, tavba va sadaqani ko‘paytir, Ramazonga tayyorgarlikni boshlagin.",
      "Sha’bon Ramazonga tayyorgarlikdir: ro‘za, Qur’on, salovat va qalb tartibini ulug‘ oy kelmasidan kuchaytir.",
      "Ramazon Qur’on va rahmat oyidir: ro‘za tut, duo, taroveh, sadaqa va har kechani behuda narsadan asra.",
      "Shavvol Ramazon izini saqlaydi: olti kun ro‘za tutishga harakat qil, Qur’on, duo va yaxshilikni davom ettir.",
      "Zulqa’da amallarni saqlash vaqtidir: ortiqchani kamaytir, zikrni kuchaytir, oldindagi eng muhim kunlarga tayyorlan.",
      "Zulhijja ilk o‘n kuni juda qimmatli: takbir, sadaqa, duo va imkon bo‘lsa Arafa ro‘zasini ko‘paytir."
    ],
    id: [
      "Muharram adalah bulan awal baru: perbanyak syukur, puasa Asyura jika mampu, dan mulai tahun dengan taubat serta dzikir.",
      "Safar adalah waktu menenangkan hati: tinggalkan takhayul, kuatkan tawakkal, dan jaga doa serta dzikir harian.",
      "Rabiul Awal mengingatkan Sunnah Nabi ﷺ: perbanyak shalawat, lembutkan ucapan, berbuat rahmat, dan beri manfaat.",
      "Rabiul Akhir adalah bulan istiqamah: amal kecil yang ikhlas setiap hari lebih baik daripada semangat besar yang cepat hilang.",
      "Jumadil Awal untuk disiplin batin: kurangi yang sia-sia, jaga lisan, dan tambah dzikir dengan hati yang ikhlas.",
      "Jumadil Akhir waktunya memperbarui niat: bersihkan amal dari riya, bantu keluarga, dan kuatkan hubungan dengan Quran.",
      "Rajab termasuk bulan haram: jaga diri dari dosa, perbanyak taubat, sedekah, dan persiapan menuju Ramadan.",
      "Sya‘ban adalah persiapan Ramadan: tambah puasa, Quran, shalawat, dan rapikan hati sebelum bulan mulia datang.",
      "Ramadan bulan Quran dan rahmat: berpuasa, banyak berdoa, tarawih, sedekah, dan jaga malam dari kesia-siaan.",
      "Syawwal menjaga bekas Ramadan: puasa enam hari jika mampu dan lanjutkan kebiasaan Quran, doa, serta amal baik.",
      "Dzulqa’dah waktu menjaga amal: kurangi yang tidak perlu, perbanyak dzikir, dan bersiap untuk hari-hari besar di depan.",
      "Dzulhijjah memiliki sepuluh hari awal yang mahal: perbanyak takbir, sedekah, doa, dan puasa Arafah jika mampu."
    ],
    hi: [
      "मुहर्रम नई शुरुआत का महीना है: शुक्र बढ़ाएँ, आशूरा का रोज़ा रख सकें तो रखें, और साल तौबा व ज़िक्र से शुरू करें।",
      "सफ़र दिल को शांत रखने का समय है: अंधविश्वास छोड़ें, तवक्कुल मज़बूत करें, और रोज़ाना दुआ व ज़िक्र जारी रखें।",
      "रबीउल अव्वल सुन्नत की याद दिलाता है: ज़्यादा सलावत पढ़ें, नरमी अपनाएँ, अच्छी बात करें और लोगों को लाभ दें।",
      "रबीउस सानी निरंतरता का महीना है: रोज़ का छोटा इख़लास वाला अमल, जल्दी खत्म होने वाले बड़े जोश से बेहतर है।",
      "जुमादा अल ऊला अंदरूनी अनुशासन का समय है: फ़ालतू चीज़ें कम करें, ज़बान बचाएँ और सच्चा ज़िक्र बढ़ाएँ।",
      "जुमादा अस सानिया नीयत सुधारने का समय है: अमल को दिखावे से बचाएँ, परिवार की मदद करें और कुरआन से रिश्ता मज़बूत करें।",
      "रजब पवित्र महीनों में से है: गुनाहों से बचें, तौबा, सदक़ा और रमज़ान की तैयारी को बढ़ाएँ।",
      "शाबान रमज़ान की तैयारी है: रोज़े, कुरआन, सलावत और दिल की सफाई को मुबारक महीने से पहले बढ़ाएँ।",
      "रमज़ान कुरआन और रहमत का महीना है: रोज़ा, दुआ, तरावीह, सदक़ा और हर रात को फ़ालतू चीज़ों से बचाएँ।",
      "शव्वाल रमज़ान की आदत बचाने का महीना है: छह रोज़े रख सकें तो रखें और कुरआन, दुआ, नेकी जारी रखें।",
      "ज़ुल क़ादा अमल बचाने का समय है: फ़ालतू चीज़ें कम करें, ज़िक्र बढ़ाएँ और आगे आने वाले अहम दिनों की तैयारी करें।",
      "ज़ुल हिज्जा के पहले दस दिन क़ीमती हैं: तकबीर, सदक़ा, दुआ और ताक़त हो तो अरफा का रोज़ा बढ़ाएँ।"
    ],
    ur: [
      "محرم نئی شروعات کا مہینہ ہے: شکر بڑھائیں، عاشورا کا روزہ رکھ سکیں تو رکھیں، اور سال توبہ و ذکر سے شروع کریں۔",
      "صفر دل کو مطمئن رکھنے کا وقت ہے: بدشگونی چھوڑیں، توکل مضبوط کریں، اور روزانہ دعا و ذکر کو قائم رکھیں۔",
      "ربیع الاول سنت کی یاد دلاتا ہے: درود زیادہ پڑھیں، نرمی اختیار کریں، اچھی بات کریں اور لوگوں کو فائدہ دیں۔",
      "ربیع الآخر استقامت کا مہینہ ہے: روز کا چھوٹا مخلص عمل، جلد ختم ہونے والے بڑے جوش سے بہتر ہے۔",
      "جمادی الاولیٰ اندرونی نظم کا وقت ہے: فضول چیزیں کم کریں، زبان کی حفاظت کریں اور سچا ذکر بڑھائیں۔",
      "جمادی الآخرہ نیت تازہ کرنے کا وقت ہے: عمل کو دکھاوے سے پاک کریں، گھر والوں کی مدد کریں اور قرآن سے تعلق مضبوط کریں۔",
      "رجب حرمت والے مہینوں میں سے ہے: گناہوں سے بچیں، توبہ، صدقہ اور رمضان کی تیاری کو بڑھائیں۔",
      "شعبان رمضان کی تیاری ہے: روزے، قرآن، درود اور دل کی صفائی کو مبارک مہینے سے پہلے بڑھائیں۔",
      "رمضان قرآن اور رحمت کا مہینہ ہے: روزہ، دعا، تراویح، صدقہ اور ہر رات کو فضول چیزوں سے بچائیں۔",
      "شوال رمضان کی عادت بچانے کا مہینہ ہے: چھ روزے رکھ سکیں تو رکھیں، قرآن، دعا اور نیکی جاری رکھیں۔",
      "ذوالقعدہ اعمال کو محفوظ رکھنے کا وقت ہے: فضول کم کریں، ذکر بڑھائیں اور آنے والے اہم دنوں کی تیاری کریں۔",
      "ذوالحجہ کے پہلے دس دن قیمتی ہیں: تکبیر، صدقہ، دعا اور طاقت ہو تو عرفہ کا روزہ بڑھائیں۔"
    ],
    bn: [
      "মুহাররম নতুন শুরুর মাস: শোকর বাড়ান, সামর্থ্য হলে আশুরার রোজা রাখুন, তওবা ও যিকির দিয়ে বছর শুরু করুন।",
      "সফর হৃদয় শান্ত রাখার সময়: কুসংস্কার ছাড়ুন, তাওয়াক্কুল মজবুত করুন, প্রতিদিন দোয়া ও যিকির ধরে রাখুন।",
      "রবিউল আউয়াল সুন্নাহ স্মরণ করায়: বেশি দরুদ পড়ুন, কোমল কথা বলুন, দয়া করুন এবং মানুষের উপকার করুন।",
      "রবিউস সানি ধারাবাহিকতার মাস: প্রতিদিনের ছোট ইখলাসপূর্ণ আমল, দ্রুত শেষ হওয়া বড় উদ্যমের চেয়ে উত্তম।",
      "জুমাদাল উলা অন্তরের শৃঙ্খলার সময়: অপ্রয়োজনীয় কমান, জিহ্বা রক্ষা করুন এবং আন্তরিক যিকির বাড়ান।",
      "জুমাদাল আখিরা নিয়ত নবায়নের সময়: আমলকে রিয়া থেকে বাঁচান, পরিবারকে সাহায্য করুন, কুরআনের সাথে সম্পর্ক বাড়ান।",
      "রজব সম্মানিত মাসগুলোর একটি: গুনাহ থেকে বাঁচুন, তওবা ও সদকা বাড়ান, রমজানের প্রস্তুতি শুরু করুন।",
      "শাবান রমজানের প্রস্তুতি: রোজা, কুরআন, দরুদ এবং অন্তরের শৃঙ্খলা পবিত্র মাস আসার আগে বাড়ান।",
      "রমজান কুরআন ও রহমতের মাস: রোজা, দোয়া, তারাবি, সদকা এবং প্রতিটি রাতকে অপ্রয়োজনীয় থেকে বাঁচান।",
      "শাওয়াল রমজানের অভ্যাস ধরে রাখে: সামর্থ্য হলে ছয় রোজা রাখুন, কুরআন, দোয়া ও নেক কাজ চালিয়ে যান।",
      "জুলকাদা আমল সংরক্ষণের সময়: অপ্রয়োজনীয় কমান, যিকির বাড়ান এবং সামনে আসা গুরুত্বপূর্ণ দিনের প্রস্তুতি নিন।",
      "জুলহিজ্জার প্রথম দশ দিন অমূল্য: তাকবির, সদকা, দোয়া এবং সামর্থ্য হলে আরাফার রোজা বাড়ান।"
    ]
  };

  function getLang(){
    var htmlLang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
    var path = (location.pathname || "").toLowerCase();
    var match = path.match(/(?:^|[-_\/])(ru|en|ar|tr|ur|uz|kz|kk|id|bn|hi)(?=\.|-|_|\/|$)/);
    if(match) return match[1] === "kk" ? "kz" : match[1];
    if(htmlLang.indexOf("kk") === 0) return "kz";
    if(htmlLang.indexOf("kz") === 0) return "kz";
    if(htmlLang.indexOf("ar") === 0) return "ar";
    if(htmlLang.indexOf("tr") === 0) return "tr";
    if(htmlLang.indexOf("ur") === 0) return "ur";
    if(htmlLang.indexOf("uz") === 0) return "uz";
    if(htmlLang.indexOf("id") === 0) return "id";
    if(htmlLang.indexOf("bn") === 0) return "bn";
    if(htmlLang.indexOf("hi") === 0) return "hi";
    if(htmlLang.indexOf("en") === 0) return "en";
    return fallbackLang;
  }

  var monthNames = {
    ru: ["Мухаррам", "Сафар", "Раби аль-авваль", "Раби ас-сани", "Джумада аль-уля", "Джумада ас-сания", "Раджаб", "Ша‘бан", "Рамадан", "Шавваль", "Зуль-Ка‘да", "Зуль-Хиджа"],
    en: ["Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Ula", "Jumada al-Thani", "Rajab", "Sha‘ban", "Ramadan", "Shawwal", "Dhul-Qa‘dah", "Dhul-Hijjah"],
    ar: ["محرّم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
    tr: ["Muharrem", "Safer", "Rebiülevvel", "Rebiülahir", "Cemaziyelevvel", "Cemaziyelahir", "Recep", "Şaban", "Ramazan", "Şevval", "Zilkade", "Zilhicce"],
    kz: ["Мұхаррам", "Сафар", "Рабиғ әл-әууәл", "Рабиғ әс-сани", "Жұмада әл-ула", "Жұмада әс-сания", "Рәжәб", "Шағбан", "Рамазан", "Шәууәл", "Зүлқағда", "Зүлхижжа"],
    uz: ["Muharram", "Safar", "Rabiul avval", "Rabius soniy", "Jumodul avval", "Jumodul soniy", "Rajab", "Sha’bon", "Ramazon", "Shavvol", "Zulqa’da", "Zulhijja"],
    id: ["Muharram", "Safar", "Rabiul Awal", "Rabiul Akhir", "Jumadil Awal", "Jumadil Akhir", "Rajab", "Sya‘ban", "Ramadan", "Syawwal", "Dzulqa’dah", "Dzulhijjah"],
    hi: ["मुहर्रम", "सफ़र", "रबीउल अव्वल", "रबीउस सानी", "जुमादा अल ऊला", "जुमादा अस सानिया", "रजब", "शाबान", "रमज़ान", "शव्वाल", "ज़ुल क़ादा", "ज़ुल हिज्जा"],
    ur: ["محرم", "صفر", "ربیع الاول", "ربیع الآخر", "جمادی الاولیٰ", "جمادی الآخرہ", "رجب", "شعبان", "رمضان", "شوال", "ذوالقعدہ", "ذوالحجہ"],
    bn: ["মুহাররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জুমাদাল উলা", "জুমাদাল আখিরা", "রজব", "শাবান", "রমজান", "শাওয়াল", "জুলকাদা", "জুলহিজ্জা"]
  };

  function getHijriDate(){
    var now = new Date();

    try{
      var parts = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {day:"numeric", month:"numeric"}).formatToParts(now);
      var day = 1;
      var month = 11;
      for(var i=0;i<parts.length;i++){
        if(parts[i].type === "day") day = parseInt(parts[i].value, 10);
        if(parts[i].type === "month") month = parseInt(parts[i].value, 10);
      }
      if(day >= 1 && day <= 30 && month >= 1 && month <= 12) return {day:day, month:month};
    }catch(e){}

    try{
      var fallbackParts = new Intl.DateTimeFormat("en-u-ca-islamic", {day:"numeric", month:"numeric"}).formatToParts(now);
      var fallbackDay = 1;
      var fallbackMonth = 11;
      for(var j=0;j<fallbackParts.length;j++){
        if(fallbackParts[j].type === "day") fallbackDay = parseInt(fallbackParts[j].value, 10);
        if(fallbackParts[j].type === "month") fallbackMonth = parseInt(fallbackParts[j].value, 10);
      }
      if(fallbackDay >= 1 && fallbackDay <= 30 && fallbackMonth >= 1 && fallbackMonth <= 12) return {day:fallbackDay, month:fallbackMonth};
    }catch(e){}

    return {day:1, month:11};
  }

  function makeDayPrefix(lang, day, monthName){
    if(lang === "en") return "Day " + day + " of " + monthName + " — ";
    if(lang === "ar") return "اليوم " + day + " من شهر " + monthName + " — ";
    if(lang === "tr") return monthName + " ayının " + day + ". günü — ";
    if(lang === "kz") return monthName + " айының " + day + "-күні — ";
    if(lang === "uz") return monthName + " oyining " + day + "-kuni — ";
    if(lang === "id") return "Hari ke-" + day + " bulan " + monthName + " — ";
    if(lang === "hi") return monthName + " महीने का " + day + "वाँ दिन — ";
    if(lang === "ur") return monthName + " کا " + day + "واں دن — ";
    if(lang === "bn") return monthName + " মাসের " + day + "তম দিন — ";
    return day + "-й день месяца " + monthName + " — ";
  }

  function applyHeaderBanner(){
    var el = document.querySelector(".ramadan-text");
    if(!el) return;
    var lang = getLang();
    var list = messages[lang] || messages[fallbackLang];
    var hijriDate = getHijriDate();
    var month = hijriDate.month;
    var day = hijriDate.day;
    var names = monthNames[lang] || monthNames[fallbackLang];
    var monthName = names[month - 1] || names[10] || "";
    var message = list[month - 1] || list[10] || "";
    el.textContent = makeDayPrefix(lang, day, monthName) + message;
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", applyHeaderBanner);
  }else{
    applyHeaderBanner();
  }

  setInterval(applyHeaderBanner, 60 * 60 * 1000);
})();


