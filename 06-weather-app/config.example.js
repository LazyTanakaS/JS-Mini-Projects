// Конфигурационный файл (ПРИМЕР)
// Скопируйте этот файл в config.js и добавьте свой API ключ

const CONFIG = {
  WEATHER_API_KEY: "your_api_key_here",
};

// Экспортируем для использования в других файлах
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
