# Google Play readiness

## Готово в PWA

- Русский интерфейс.
- Manifest для установки.
- Service worker и offline cache.
- Splash-like загрузочный экран.
- Геолокация.
- Голосовой ввод через Web Speech API.
- Push permission UI и service worker push handler.
- Mobile safe-area для Android/iOS.
- Premium UI: deep navy + тонкий gold border + 3D bottom nav.

## Нужно перед публикацией в Google Play

1. HTTPS-домен, например `https://app.taskslocal.com`.
2. Настоящий backend API URL.
3. TWA или Capacitor wrapper.
4. `.aab` export.
5. Реальный `assetlinks.json` с package name и SHA256 fingerprint.
6. Privacy Policy URL.
7. Terms of Service URL.
8. Store listing screenshots.
9. Data Safety form.
10. Push server через Web Push / FCM.
