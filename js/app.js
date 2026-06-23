'use strict';

const API_BASE = localStorage.getItem('TASKSLOCAL_API_BASE') || window.TASKSLOCAL_API_BASE || '';
const SERVICE_CATALOG = [
  { id: 'home', icon: '🧹', title: 'Дом и быт', items: ['Уборка жилья', 'Чистка ковров и мебели', 'Мойка окон', 'Прачечная и химчистка', 'Домработница', 'Газоны и ландшафт', 'Уборка снега', 'Обслуживание бассейнов'] },
  { id: 'repair', icon: '🔧', title: 'Ремонт и техника', items: ['Электрика', 'Сантехника', '', 'Ремонт бытовой техники', 'Мастер на все руки', 'Крыша и водостоки', 'Покраска и гипсокартон'] },
  { id: 'auto', icon: '🚗', title: 'Авто и транспорт', items: ['Автомеханик', 'Замена масла и настройка', 'Шиномонтаж', 'Автомойка и детейлинг', 'Помощь на дороге', 'Аренда авто'] },
  { id: 'care', icon: '🤝', title: 'Уход и помощь', items: ['Няня', 'Уход за пожилыми', 'Выгул и груминг животных', 'Репетиторство', 'Персональный тренер', 'Массаж и wellness'] },
  { id: 'delivery', icon: '📦', title: 'Доставка и логистика', items: ['Доставка еды', 'Доставка продуктов', 'Курьерская доставка', 'Переезды', 'Вывоз мусора'] },
  { id: 'improvement', icon: '🏗', title: 'Обустройство дома', items: ['Дизайн интерьера', 'Ремонт и реновация', 'Укладка пола', 'Шкафы и столешницы', 'Столярные работы'] },
  { id: 'finance', icon: '⚖', title: 'Финансы и юр.', items: ['Налоговая отчётность', 'Бухгалтерия', 'Нотариус', 'Юридические услуги'] },
  { id: 'it', icon: '💻', title: 'IT и технологии', items: ['Ремонт компьютеров и устройств', 'Wi‑Fi и smart home', 'Техническая поддержка', 'Веб‑дизайн и разработка ПО'] },
  { id: 'education', icon: '📚', title: 'Образование', items: ['Языковые репетиторы', 'Музыкальные уроки', 'Профессиональный коучинг', 'Карьерная консультация'] },
  { id: 'business', icon: '💼', title: 'Бизнес', items: ['Финансовый консультант', 'Страховой брокер', 'Риелтор', 'Управление недвижимостью', 'Маркетинг и брендинг'] }
];
const DEFAULT_SERVICE = 'Сантехника';
const DEFAULT_CATEGORY = 'repair';
let deferredPrompt = null;
let geoPosition = null;
let taskslocalMap = null;
let taskslocalRadiusCircle = null;
let taskslocalUserMarker = null;
let taskslocalProviderLayer = null;
let taskslocalCurrentLatLng = null;
let requestId = Number(localStorage.getItem('TASKSLOCAL_LAST_REQUEST_ID') || '1000');

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const state = {
  requests: JSON.parse(localStorage.getItem('TASKSLOCAL_REQUESTS') || '[]'),
  offers: JSON.parse(localStorage.getItem('TASKSLOCAL_OFFERS') || '[]')
};

function saveState() {
  localStorage.setItem('TASKSLOCAL_REQUESTS', JSON.stringify(state.requests));
  localStorage.setItem('TASKSLOCAL_OFFERS', JSON.stringify(state.offers));
  localStorage.setItem('TASKSLOCAL_LAST_REQUEST_ID', String(requestId));
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

function hideSplash() {
  setTimeout(() => $('#splash')?.classList.add('hide'), 750);
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  try {
    await navigator.serviceWorker.register('./service-worker.js');
  } catch (error) {
    console.warn('Service worker registration failed:', error);
  }
}

function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    $('#installBtn')?.classList.add('ready');
  });

  $('#installBtn')?.addEventListener('click', async () => {
    if (!deferredPrompt) {
      toast('Откройте меню браузера и выберите «Установить приложение».');
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  });
}

function setupTabs() {
  $$('.tab').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      $$('.tab').forEach((tab) => tab.classList.toggle('active', tab === button));
      $$('.screen').forEach((screen) => screen.classList.toggle('active', screen.dataset.screen === target));
      renderLists();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function setupQuickActions() {
  $$('.quick-actions button').forEach((button) => {
    button.addEventListener('click', () => {
      $('#description').value = button.dataset.desc;
      setSelectedService(button.dataset.service);
      renderMapProviders();
      toast('Сценарий заполнен. Проверьте данные и отправьте заявку.');
    });
  });
}


function findCategoryByService(service) {
  return SERVICE_CATALOG.find((category) => category.items.includes(service)) || SERVICE_CATALOG.find((category) => category.id === DEFAULT_CATEGORY) || SERVICE_CATALOG[0];
}

function populateCategorySelect(selectedCategoryId = DEFAULT_CATEGORY) {
  const categorySelect = $('#serviceCategorySelect');
  if (!categorySelect) return;
  categorySelect.innerHTML = SERVICE_CATALOG.map((category) => `<option value="${escapeHtml(category.id)}"${category.id === selectedCategoryId ? ' selected' : ''}>${escapeHtml(category.title)}</option>`).join('');
}

function populateSubserviceSelect(categoryId = DEFAULT_CATEGORY, selectedService = DEFAULT_SERVICE) {
  const select = $('#serviceType');
  if (!select) return;
  const category = SERVICE_CATALOG.find((item) => item.id === categoryId) || findCategoryByService(selectedService);
  const service = category.items.includes(selectedService) ? selectedService : category.items[0];
  select.innerHTML = category.items.map((item) => `<option value="${escapeHtml(item)}"${item === service ? ' selected' : ''}>${escapeHtml(item)}</option>`).join('');
  select.value = service;
}

function openCategory(categoryId) {
  $$('.service-category').forEach((node) => {
    const isTarget = node.dataset.category === categoryId;
    node.classList.toggle('open', isTarget);
    node.querySelector('.service-category-head')?.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
  });
}

function markSelectedSubservice(service) {
  $$('.service-subitem').forEach((node) => node.classList.toggle('selected', node.dataset.service === service));
}

function setSelectedService(service) {
  const category = findCategoryByService(service);
  const targetService = category.items.includes(service) ? service : category.items[0];
  populateCategorySelect(category.id);
  populateSubserviceSelect(category.id, targetService);
  markSelectedSubservice(targetService);
}

function setupServiceCatalog() {
  const defaultCategory = findCategoryByService(DEFAULT_SERVICE);
  populateCategorySelect(defaultCategory.id);
  populateSubserviceSelect(defaultCategory.id, DEFAULT_SERVICE);

  const catalog = $('#serviceCatalog');
  if (!catalog) return;
  catalog.innerHTML = SERVICE_CATALOG.map((category) => `
    <div class="service-category" data-category="${escapeHtml(category.id)}">
      <button class="service-category-head" type="button" aria-expanded="false">
        <span class="service-category-icon">${category.icon}</span>
        <strong>${escapeHtml(category.title)}</strong>
        <small>${category.items.length} услуг</small>
        <i>⌄</i>
      </button>
      <div class="service-sublist">
        ${category.items.map((item) => `<button class="service-subitem" type="button" data-service="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join('')}
      </div>
    </div>
  `).join('');

  catalog.addEventListener('click', (event) => {
    const head = event.target.closest('.service-category-head');
    const item = event.target.closest('.service-subitem');

    if (head) {
      const category = head.closest('.service-category');
      const isOpen = category.classList.contains('open');
      if (isOpen) {
        category.classList.remove('open');
        head.setAttribute('aria-expanded', 'false');
      } else {
        openCategory(category.dataset.category);
        const categorySelect = $('#serviceCategorySelect');
        if (categorySelect) categorySelect.value = category.dataset.category;
        populateSubserviceSelect(category.dataset.category);
      }
      return;
    }

    if (item) {
      const service = item.dataset.service;
      setSelectedService(service);
      renderMapProviders();
      toast(`Выбрано: ${service}`);
    }
  });

  setSelectedService(DEFAULT_SERVICE);
}

function setupGeolocation() {
  $('#locationBtn')?.addEventListener('click', () => {
    locateUser(true);
  });

  $('#radius')?.addEventListener('change', () => {
    updateMapRadius();
  });

  $('#serviceCategorySelect')?.addEventListener('change', (event) => {
    const categoryId = event.target.value;
    const category = SERVICE_CATALOG.find((item) => item.id === categoryId) || SERVICE_CATALOG[0];
    populateSubserviceSelect(category.id, category.items[0]);
    openCategory(category.id);
    markSelectedSubservice(category.items[0]);
    renderMapProviders();
  });

  $('#serviceType')?.addEventListener('change', (event) => {
    setSelectedService(event.target.value);
    renderMapProviders();
  });
}

function locateUser(showMessages = false) {
  if (!navigator.geolocation) {
    if (showMessages) toast('Геолокация не поддерживается этим устройством.');
    return;
  }

  $('#geoStatus').textContent = 'Получаем GPS…';
  navigator.geolocation.getCurrentPosition(
    (position) => {
      geoPosition = position;
      const { latitude, longitude } = position.coords;
      $('#geoStatus').textContent = 'GPS включён';
      $('#mapCanvas').dataset.lat = latitude.toFixed(5);
      $('#mapCanvas').dataset.lng = longitude.toFixed(5);
      updateMapLocation(latitude, longitude, true);
      addTimeline('ok', 'Геолокация подключена', `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
      if (showMessages) toast('Геолокация подключена. Карта и радиус поиска обновлены.');
    },
    () => {
      $('#geoStatus').textContent = 'GPS недоступен';
      initMapFallback();
      if (showMessages) toast('Разрешите доступ к геолокации в настройках браузера.');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}


function setupMap() {
  const el = $('#mapCanvas');
  if (!el) return;

  if (!window.L) {
    el.innerHTML = '<div class="tl-map-error"><div><b>Карта недоступна</b><span>Проверьте интернет. Статичная зона поиска останется активной.</span></div></div>';
    $('#geoStatus').textContent = 'Карта офлайн';
    return;
  }

  const tashkent = [41.31108, 69.24056];
  el.innerHTML = '';
  taskslocalMap = L.map(el, {
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true,
    tap: true
  }).setView(tashkent, 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(taskslocalMap);

  taskslocalProviderLayer = L.layerGroup().addTo(taskslocalMap);
  updateMapLocation(tashkent[0], tashkent[1], false);
  $('#geoStatus').textContent = 'Ташкент';
  setupMapLocateButton();

  setTimeout(() => taskslocalMap.invalidateSize(), 250);
}

function initMapFallback() {
  if (!taskslocalMap) setupMap();
}

function selectedRadiusMeters() {
  const value = ($('#radius')?.value || '10 км').match(/\d+/);
  return (value ? Number(value[0]) : 10) * 1000;
}

function updateMapRadius() {
  if (!taskslocalMap || !taskslocalRadiusCircle) return;
  taskslocalRadiusCircle.setRadius(selectedRadiusMeters());
  const center = taskslocalRadiusCircle.getLatLng();
  taskslocalMap.fitBounds(taskslocalRadiusCircle.getBounds(), { padding: [24, 24] });
  renderMapProviders(center.lat, center.lng);
}

function updateMapLocation(latitude, longitude, fit = true) {
  if (!taskslocalMap || !window.L) return;

  const point = [latitude, longitude];
  taskslocalCurrentLatLng = { lat: latitude, lng: longitude };
  const radius = selectedRadiusMeters();

  const userIcon = L.divIcon({
    className: '',
    html: `<div class="tl-user-svg-marker" aria-label="Моё местоположение">
      <svg viewBox="0 0 64 64" role="img">
        <circle class="pulse" cx="32" cy="32" r="24"></circle>
        <circle class="ring" cx="32" cy="32" r="15"></circle>
        <circle class="dot" cx="32" cy="32" r="7"></circle>
      </svg>
    </div>`,
    iconSize: [46, 46],
    iconAnchor: [23, 23]
  });

  if (!taskslocalUserMarker) {
    taskslocalUserMarker = L.marker(point, { icon: userIcon, zIndexOffset: 1000 })
      .addTo(taskslocalMap)
      .bindPopup('<div class="tl-map-popup"><b>Вы здесь</b><span>Центр радиуса поиска</span></div>');
  } else {
    taskslocalUserMarker.setLatLng(point);
    taskslocalUserMarker.setIcon(userIcon);
  }

  if (!taskslocalRadiusCircle) {
    taskslocalRadiusCircle = L.circle(point, {
      radius,
      color: '#dba740',
      weight: 2,
      fillColor: '#dba740',
      fillOpacity: 0.08,
      opacity: 0.82
    }).addTo(taskslocalMap);
  } else {
    taskslocalRadiusCircle.setLatLng(point);
    taskslocalRadiusCircle.setRadius(radius);
  }

  renderMapProviders(latitude, longitude);
  if (fit) taskslocalMap.fitBounds(taskslocalRadiusCircle.getBounds(), { padding: [24, 24] });
}

function providerSeed(centerLat, centerLng) {
  const service = $('#serviceType')?.value || 'Сантехника';
  const icons = {
    'Сантехника': '🚰', 'Электрика': '⚡', '': '❄', 'Мастер на все руки': '🔨',
    'Уборка жилья': '🧹', 'Чистка ковров и мебели': '🧽', 'Мойка окон': '🪟', 'Прачечная и химчистка': '👕', 'Домработница': '🏠', 'Газоны и ландшафт': '🌿', 'Уборка снега': '☃', 'Обслуживание бассейнов': '🏊',
    'Ремонт бытовой техники': '🔧', 'Крыша и водостоки': '🏚', 'Покраска и гипсокартон': '🎨',
    'Автомеханик': '🚗', 'Замена масла и настройка': '🛢', 'Шиномонтаж': '🛞', 'Автомойка и детейлинг': '✨', 'Помощь на дороге': '🚨', 'Аренда авто': '🚘',
    'Няня': '★', 'Уход за пожилыми': '♡', 'Выгул и груминг животных': '🐾', 'Репетиторство': '📚', 'Персональный тренер': '💪', 'Массаж и wellness': '🧘',
    'Доставка еды': '🍱', 'Доставка продуктов': '🛒', 'Курьерская доставка': '📦', 'Переезды': '🚚', 'Вывоз мусора': '🗑',
    'Дизайн интерьера': '📐', 'Ремонт и реновация': '🏗', 'Укладка пола': '▰', 'Шкафы и столешницы': '🪚', 'Столярные работы': '🪵',
    'Налоговая отчётность': '🧾', 'Бухгалтерия': '📊', 'Нотариус': '✒', 'Юридические услуги': '⚖',
    'Ремонт компьютеров и устройств': '💻', 'Wi‑Fi и smart home': '📶', 'Техническая поддержка': '🛠', 'Веб‑дизайн и разработка ПО': '⌨',
    'Языковые репетиторы': '🌐', 'Музыкальные уроки': '🎵', 'Профессиональный коучинг': '🎯', 'Карьерная консультация': '💼',
    'Финансовый консультант': '💰', 'Страховой брокер': '🛡', 'Риелтор': '🏢', 'Управление недвижимостью': '🔑', 'Маркетинг и брендинг': '📣'
  };
  const base = [
    { name: 'Алексей М.', eta: 18, rating: 4.9, price: '150 000 сум', experience: '8 лет', completed: 1264, status: 'Онлайн' },
    { name: 'Руслан К.', eta: 24, rating: 4.8, price: '250 000 сум', experience: '6 лет', completed: 842, status: 'Онлайн' },
    { name: 'Давид С.', eta: 32, rating: 4.7, price: '400 000 сум', experience: '10 лет', completed: 1510, status: 'Занят, может принять' }
  ];
  const offsets = [[0.018, 0.014], [-0.016, 0.018], [0.012, -0.019]];
  return base.map((item, index) => ({
    ...item,
    service,
    icon: icons[service] || '🔧',
    lat: centerLat + offsets[index][0],
    lng: centerLng + offsets[index][1]
  }));
}

function distanceKm(lat1, lng1, lat2, lng2) {
  const toRad = (value) => value * Math.PI / 180;
  const earthRadius = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(km) {
  if (!Number.isFinite(km)) return '—';
  return km < 1 ? `${Math.round(km * 1000)} м` : `${km.toFixed(1)} км`;
}

function mapProviderPopup(provider, originLat, originLng) {
  const distance = distanceKm(originLat, originLng, provider.lat, provider.lng);
  return `<div class="tl-map-popup provider-popup">
    <b>${escapeHtml(provider.name)}</b>
    <span>${escapeHtml(provider.service)} · ★ ${provider.rating} · ${escapeHtml(provider.experience)}</span>
    <span>ETA ${provider.eta} мин · ${escapeHtml(provider.price)}</span>
    <span>Расстояние от вас: ${formatDistance(distance)}</span>
    <span>${provider.completed} заказов · ${escapeHtml(provider.status)}</span>
  </div>`;
}

function renderMapProviders(latitude, longitude) {
  if (!taskslocalMap || !taskslocalProviderLayer) return;
  const center = taskslocalRadiusCircle?.getLatLng();
  const lat = latitude || center?.lat || 41.31108;
  const lng = longitude || center?.lng || 69.24056;
  taskslocalProviderLayer.clearLayers();

  providerSeed(lat, lng).forEach((provider) => {
    L.marker([provider.lat, provider.lng], {
      icon: L.divIcon({ className: '', html: `<button class="tl-provider-marker" type="button">${provider.icon}</button>`, iconSize: [40, 40], iconAnchor: [20, 20] })
    }).addTo(taskslocalProviderLayer).bindPopup(mapProviderPopup(provider, lat, lng), { maxWidth: 280 });
  });
}

function setupMapLocateButton() {
  $('#mapLocateBtn')?.addEventListener('click', () => {
    if (!navigator.geolocation) {
      toast('Геолокация не поддерживается этим устройством.');
      return;
    }
    $('#geoStatus').textContent = 'GPS поиск';
    navigator.geolocation.getCurrentPosition(
      (position) => {
        geoPosition = position;
        updateMapLocation(position.coords.latitude, position.coords.longitude, true);
        $('#geoStatus').textContent = 'Вы здесь';
        toast('Карта центрирована на вашем местоположении.');
        taskslocalUserMarker?.openPopup();
      },
      () => {
        $('#geoStatus').textContent = 'Ташкент';
        toast('Не удалось получить геолокацию. Проверьте разрешения браузера.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });
}

function setupVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const buttons = [$('#voiceBtn'), $('#voiceHeaderBtn')].filter(Boolean);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!SpeechRecognition) {
        toast('Голосовой ввод не поддерживается этим браузером.');
        return;
      }
      const recognition = new SpeechRecognition();
      recognition.lang = 'ru-RU';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      $('#voiceBtn')?.classList.add('recording');
      toast('Говорите. Мы запишем описание проблемы.');
      recognition.start();
      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        $('#description').value = text;
        inferService(text);
        addTimeline('ok', 'Голосовой ввод принят', text);
      };
      recognition.onerror = () => toast('Голосовой ввод не сработал. Попробуйте ещё раз.');
      recognition.onend = () => $('#voiceBtn')?.classList.remove('recording');
    });
  });
}

function inferService(text) {
  const value = text.toLowerCase();
  if (value.includes('труб') || value.includes('вода') || value.includes('сантех')) setSelectedService('Сантехника');
  if (value.includes('свет') || value.includes('электр') || value.includes('розет')) setSelectedService('Электрика');
  if (value.includes('кондиционер') || value.includes('отопление') || value.includes('hvac')) setSelectedService('');
  if (value.includes('дорог') || value.includes('машин') || value.includes('эвакуатор')) setSelectedService('Помощь на дороге');
  if (value.includes('убор') || value.includes('клининг')) setSelectedService('Уборка жилья');
  if (value.includes('нян')) setSelectedService('Няня');
}

function addTimeline(type, title, detail) {
  const timeline = $('#timeline');
  if (!timeline) return;
  const item = document.createElement('div');
  item.className = `timeline-item ${type}`;
  item.innerHTML = `<i></i><div><b>${escapeHtml(title)}</b><span>${escapeHtml(detail || '')}</span></div>`;
  timeline.prepend(item);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function createMockOffers(service) {
  const profiles = [
    {
      name: 'Алексей М.',
      rating: '4.9',
      reviews: 247,
      eta: 18,
      price: '150 000 сум',
      experience: '8 лет',
      completed: 1264,
      verified: true,
      docs: true,
      lastOrder: '2 часа назад',
      completionRate: '98%',
      cancelRate: '1%',
      recentRating: '4.9',
      status: 'Лучший ETA',
      specialization: ['Аварийный выезд', 'Диагностика', 'Ремонт на месте', 'Замена деталей'],
      reviewsList: [
        ['Анна Р.', '5.0', 'Приехал быстро, всё объяснил и аккуратно сделал.'],
        ['Михаил С.', '4.9', 'Цена совпала с договорённостью, работа без задержек.'],
        ['Олег Т.', '5.0', 'Хороший специалист, буду обращаться снова.']
      ]
    },
    {
      name: 'Руслан К.',
      rating: '4.8',
      reviews: 189,
      eta: 24,
      price: '250 000 сум',
      experience: '6 лет',
      completed: 842,
      verified: true,
      docs: true,
      lastOrder: '5 часов назад',
      completionRate: '96%',
      cancelRate: '2%',
      recentRating: '4.8',
      status: 'Ожидает выбора',
      specialization: ['Плановый ремонт', 'Срочные заявки', 'Установка', 'Профилактика'],
      reviewsList: [
        ['Дилшод А.', '5.0', 'Быстро ответил и приехал вовремя.'],
        ['Елена К.', '4.8', 'Работа качественная, стоимость адекватная.'],
        ['Сергей П.', '4.7', 'Всё сделал, дал рекомендации.']
      ]
    },
    {
      name: 'Давид С.',
      rating: '4.7',
      reviews: 132,
      eta: 32,
      price: '400 000 сум',
      experience: '10 лет',
      completed: 1510,
      verified: true,
      docs: false,
      lastOrder: 'вчера',
      completionRate: '94%',
      cancelRate: '3%',
      recentRating: '4.7',
      status: 'Ожидает выбора',
      specialization: ['Сложные случаи', 'Осмотр объекта', 'Ремонт и замена', 'Консультация'],
      reviewsList: [
        ['Нодир Б.', '4.8', 'Опытный мастер, решил сложную проблему.'],
        ['Ирина М.', '4.7', 'Приехал позже ETA, но работу сделал хорошо.'],
        ['Артём Л.', '4.6', 'Цена выше средней, качество хорошее.']
      ]
    }
  ];

  return profiles.map((profile, index) => ({
    id: `${Date.now()}-${index}`,
    service,
    ...profile
  }));
}

async function postToBackend(payload) {
  if (!API_BASE) return null;

  const base = API_BASE.replace(/\/$/, '');
  const candidates = [
    `${base}/requests`,
    `${base}/api/v1/requests`
  ];

  let lastError = null;

  for (const url of candidates) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: payload.client_id || 1,
          description: payload.description,
          category: payload.category || $('#serviceCategorySelect')?.value || 'general',
          service_type: payload.service_type,
          urgency: payload.urgency,
          radius_km: Number(String(payload.radius || '10').match(/\d+/)?.[0] || 10),
          budget: payload.budget,
          latitude: payload.latitude,
          longitude: payload.longitude
        })
      });

      if (!response.ok) {
        lastError = new Error(`Backend error ${response.status}`);
        continue;
      }

      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Backend unavailable');
}

function setupBudgetInput() {
  const budget = $('#budget');
  const field = $('#customBudgetField');
  const input = $('#customBudget');
  if (!budget || !field || !input) return;

  const sync = () => {
    const isCustom = budget.value === 'Указать свою цену';
    field.hidden = !isCustom;
    if (isCustom) {
      input.focus({ preventScroll: true });
    } else {
      input.value = '';
    }
  };

  budget.addEventListener('change', sync);
  sync();
}

function getBudgetValue() {
  const budget = $('#budget')?.value || 'Не важно';
  const customBudget = $('#customBudget')?.value.trim() || '';
  if (budget !== 'Указать свою цену') return budget;
  return customBudget ? `До ${customBudget.replace(/\s*сум$/i, '')} сум` : 'Указать свою цену';
}

function setupDispatch() {
  $('#dispatchBtn')?.addEventListener('click', async () => {
    const description = $('#description').value.trim();
    if (!description) {
      toast('Опишите проблему перед отправкой заявки.');
      return;
    }
    if ($('#budget')?.value === 'Указать свою цену' && !$('#customBudget')?.value.trim()) {
      toast('Укажите свою цену до отправки заявки.');
      $('#customBudget')?.focus();
      return;
    }

    requestId += 1;
    const payload = {
      id: requestId,
      description,
      service_type: $('#serviceType').value,
      category: $('#serviceCategorySelect')?.value || 'general',
      urgency: $('#urgency').value,
      radius: $('#radius').value,
      budget: getBudgetValue(),
      latitude: geoPosition?.coords?.latitude || null,
      longitude: geoPosition?.coords?.longitude || null,
      status: 'searching',
      created_at: new Date().toISOString()
    };

    state.requests.unshift(payload);
    state.offers = createMockOffers(payload.service_type);
    saveState();
    renderLists();

    $('#activeRequest').innerHTML = `<b>#${payload.id} · ${escapeHtml(payload.service_type)}</b><br>${escapeHtml(payload.description)}<br><span>${escapeHtml(payload.urgency)} · ${escapeHtml(payload.radius)} · ${escapeHtml(payload.budget)}</span>`;
    $('#dispatchState').textContent = 'Поиск';
    addTimeline('ok', 'Заявка создана', `Запущена первая волна: ${payload.service_type}`);
    setTimeout(() => addTimeline('ok', 'Волна 1 отправлена', '3 специалиста получили запрос.'), 700);
    setTimeout(() => { $('#dispatchState').textContent = 'Есть отклики'; addTimeline('ok', 'Получены отклики', 'Проверьте вкладку «Отклики».'); }, 1500);

    try {
      const backendResult = await postToBackend(payload);
      if (backendResult?.request_id || backendResult?.id) {
        payload.backend_request_id = backendResult.request_id || backendResult.id;
        payload.status = backendResult.status || payload.status;
        state.requests[0] = payload;
      }
      if (Array.isArray(backendResult?.offers) && backendResult.offers.length) {
        state.offers = backendResult.offers;
      }
      saveState();
      renderLists();
      addTimeline('ok', 'Backend подключён', backendResult?.request_id ? `Заявка #${backendResult.request_id} создана на сервере.` : 'Сервер принял заявку.');
    } catch (error) {
      addTimeline('warn', 'Backend не подключён', 'Заявка сохранена локально в PWA.');
    }

    toast('Заявка отправлена в dispatch workflow.');
  });
}

function renderLists() {
  const requests = $('#requestsList');
  if (requests) {
    requests.innerHTML = state.requests.length ? state.requests.map((item) => `<div class="data-card"><b>#${item.id} · ${escapeHtml(item.service_type)}</b><span>${escapeHtml(item.description)}</span><span>${escapeHtml(item.urgency)} · ${escapeHtml(item.radius)} · ${new Date(item.created_at).toLocaleString('ru-RU')}</span></div>`).join('') : '<div class="data-card"><b>Заявок пока нет</b><span>Создайте первую заявку на главной странице.</span></div>';
  }

  const offers = $('#offersList');
  if (offers) {
    offers.innerHTML = state.offers.length ? state.offers.map((rawItem, index) => {
      const item = normalizeOffer(rawItem, index);
      return `<button class="data-card offer-card" type="button" data-offer-id="${escapeHtml(item.id)}"><b>${escapeHtml(item.name)} · ★ ${item.rating}</b><span>${escapeHtml(item.service)} · ${escapeHtml(item.experience)} · ETA ${item.eta} мин · ${escapeHtml(item.price)}</span><span>${escapeHtml(item.status)}</span></button>`;
    }).join('') : '<div class="data-card"><b>Откликов пока нет</b><span>После отправки заявки здесь появятся предложения специалистов.</span></div>';

    $$('.offer-card').forEach((card) => {
      card.addEventListener('click', () => openSpecialistProfile(card.dataset.offerId));
    });
  }
}



function normalizeOffer(rawItem, index = 0) {
  const service = rawItem.service || rawItem.service_type || $('#serviceType')?.value || 'Услуга';
  const defaults = [
    {
      experience: '8 лет',
      reviews: 247,
      completed: 1264,
      verified: true,
      docs: true,
      lastOrder: '2 часа назад',
      completionRate: '98%',
      cancelRate: '1%',
      recentRating: rawItem.rating || '4.9',
      specialization: ['Аварийный выезд', 'Диагностика', 'Ремонт на месте', 'Замена деталей'],
      reviewsList: [
        ['Анна Р.', '5.0', 'Приехал быстро, всё объяснил и аккуратно сделал.'],
        ['Михаил С.', '4.9', 'Цена совпала с договорённостью, работа без задержек.'],
        ['Олег Т.', '5.0', 'Хороший специалист, буду обращаться снова.']
      ]
    },
    {
      experience: '6 лет',
      reviews: 189,
      completed: 842,
      verified: true,
      docs: true,
      lastOrder: '5 часов назад',
      completionRate: '96%',
      cancelRate: '2%',
      recentRating: rawItem.rating || '4.8',
      specialization: ['Плановый ремонт', 'Срочные заявки', 'Установка', 'Профилактика'],
      reviewsList: [
        ['Дилшод А.', '5.0', 'Быстро ответил и приехал вовремя.'],
        ['Елена К.', '4.8', 'Работа качественная, стоимость адекватная.'],
        ['Сергей П.', '4.7', 'Всё сделал, дал рекомендации.']
      ]
    },
    {
      experience: '10 лет',
      reviews: 132,
      completed: 1510,
      verified: true,
      docs: false,
      lastOrder: 'вчера',
      completionRate: '94%',
      cancelRate: '3%',
      recentRating: rawItem.rating || '4.7',
      specialization: ['Сложные случаи', 'Осмотр объекта', 'Ремонт и замена', 'Консультация'],
      reviewsList: [
        ['Нодир Б.', '4.8', 'Опытный мастер, решил сложную проблему.'],
        ['Ирина М.', '4.7', 'Приехал позже ETA, но работу сделал хорошо.'],
        ['Артём Л.', '4.6', 'Цена выше средней, качество хорошее.']
      ]
    }
  ];

  return {
    id: rawItem.id || `legacy-${index}`,
    name: rawItem.name || `Специалист ${index + 1}`,
    service,
    rating: rawItem.rating || ['4.9', '4.8', '4.7'][index % 3],
    eta: rawItem.eta || [18, 24, 32][index % 3],
    price: rawItem.price || ['150 000 сум', '250 000 сум', '400 000 сум'][index % 3],
    status: rawItem.status || (index === 0 ? 'Лучший ETA' : 'Ожидает выбора'),
    ...defaults[index % defaults.length],
    ...rawItem
  };
}

function openSpecialistProfile(offerId) {
  const rawIndex = state.offers.findIndex((offer, index) => String(offer.id || `legacy-${index}`) === String(offerId));
  if (rawIndex < 0) return;
  const item = normalizeOffer(state.offers[rawIndex], rawIndex);
  const modal = $('#specialistModal');
  const content = $('#specialistModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="specialist-head">
      <div class="specialist-avatar">${escapeHtml(item.name.charAt(0))}</div>
      <div>
        <p class="eyebrow">Профиль специалиста</p>
        <h3 id="specialistModalTitle">${escapeHtml(item.name)}</h3>
        <div class="specialist-rating">★ ${item.rating} · ${item.reviews} оценок · ${escapeHtml(item.status)}</div>
      </div>
    </div>

    <div class="specialist-kpis">
      <div><b>${item.eta} мин</b><span>ETA</span></div>
      <div><b>${escapeHtml(item.price)}</b><span>Цена</span></div>
      <div><b>${escapeHtml(item.experience)}</b><span>Стаж</span></div>
      <div><b>${item.completed}</b><span>Заказов</span></div>
    </div>

    <div class="specialist-trust">
      <span>${item.verified ? '✓ Верифицирован' : 'Не верифицирован'}</span>
      <span>${item.docs ? '✓ Документы проверены' : 'Документы не подтверждены'}</span>
      <span>Последний заказ: ${escapeHtml(item.lastOrder)}</span>
    </div>

    <div class="specialist-grid">
      <div><b>${escapeHtml(item.completionRate)}</b><span>завершение</span></div>
      <div><b>${escapeHtml(item.cancelRate)}</b><span>отмены</span></div>
      <div><b>${escapeHtml(item.recentRating)}</b><span>за 30 дней</span></div>
    </div>

    <div class="specialist-section">
      <h4>Специализация</h4>
      <div class="specialist-tags">${item.specialization.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    </div>

    <div class="specialist-section">
      <h4>Последние оценки</h4>
      ${item.reviewsList.map((review) => `<div class="review-row"><b>${escapeHtml(review[0])} · ★ ${escapeHtml(review[1])}</b><span>${escapeHtml(review[2])}</span></div>`).join('')}
    </div>

    <div class="specialist-actions">
      <button class="navy-button" type="button">Написать</button>
      <button class="navy-button" type="button">Позвонить</button>
      <button class="gold-button" type="button" data-close-specialist>Выбрать специалиста</button>
    </div>
  `;

  modal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeSpecialistProfile() {
  const modal = $('#specialistModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

function setupSpecialistModal() {
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-specialist]')) closeSpecialistProfile();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSpecialistProfile();
  });
}


function setupPush() {
  $('#pushBtn')?.addEventListener('click', async () => {
    if (!('Notification' in window)) {
      toast('Push-уведомления не поддерживаются этим браузером.');
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      toast('Уведомления разрешены. Серверные push можно подключать через VAPID.');
      new Notification('TasksLocal', { body: 'Push-уведомления готовы к подключению.', icon: '/assets/icons/icon-192.png' });
    } else {
      toast('Уведомления не разрешены.');
    }
  });
}

window.addEventListener('load', () => {
  hideSplash();
  registerServiceWorker();
  setupInstallPrompt();
  setupTabs();
  setupServiceCatalog();
  setupQuickActions();
  setupMap();
  setupGeolocation();
  setupBudgetInput();
  setupVoiceInput();
  setupDispatch();
  setupSpecialistModal();
  setupPush();
  renderLists();
});
