# Weather App

A real-time weather application that fetches current weather data using the OpenWeatherMap API. Features include city search, search history, and theme switching.

## Features

- **Real-time Weather Data**: Get current weather information for any city
- **Search History**: Recent searches are saved and displayed as clickable buttons
- **Theme Toggle**: Switch between light and dark themes
- **Detailed Information**: Temperature, feels like, humidity, wind speed, and weather description
- **Weather Icons**: Dynamic weather icons based on conditions
- **Error Handling**: User-friendly error messages for invalid cities or network issues

## What I Learned

### API Integration

- Using `fetch()` to make HTTP requests
- Working with OpenWeatherMap API
- Understanding API keys and endpoints
- Handling API responses and data structure

### Asynchronous JavaScript

- `async/await` syntax
- Understanding Promises
- Error handling with `try/catch` blocks
- Managing asynchronous data flow

### LocalStorage API

- Saving data to browser storage
- Retrieving and parsing stored data
- Managing persistent state
- Clearing and updating storage

### DOM Manipulation

- Dynamic content generation
- Creating and appending elements
- Event handling (click, form submit)
- Conditional rendering based on state

### Error Handling

- Validating user input
- Catching network errors
- Displaying meaningful error messages
- Handling different error scenarios

### UI/UX Patterns

- Theme switching implementation
- Loading states
- Search history interaction
- Responsive design principles

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- OpenWeatherMap API

## Code Highlights

### Async/Await Pattern

```javascript
async function getWeather(city) {
  try {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
}
```

### LocalStorage Management

```javascript
function saveToHistory(city) {
  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  if (!history.includes(city)) {
    history.unshift(city);
    history = history.slice(0, 5); // Keep last 5 searches
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }
}
```

### Theme Switching

```javascript
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
```

## How to Use

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace `YOUR_API_KEY` in the JavaScript file with your actual API key
3. Open `index.html` in your browser
4. Enter a city name and click "Search" or press Enter
5. Click on search history buttons to quickly view previous searches
6. Toggle theme using the theme button

## Future Improvements

- 5-day weather forecast
- Geolocation support
- Weather alerts and notifications
- Multiple location management
- Weather charts and graphs
- Imperial/Metric unit toggle

## Challenges Overcome

1. **API Key Security**: Learned about the importance of not exposing API keys in production
2. **Error Handling**: Implemented comprehensive error handling for various failure scenarios
3. **State Management**: Managing multiple states (weather data, history, theme) without a framework
4. **Async Timing**: Understanding when data is available and updating UI accordingly
5. **LocalStorage Limits**: Working with storage constraints and data serialization

## Key Takeaways

- API integration requires careful error handling and validation
- Async/await makes asynchronous code more readable than callbacks
- LocalStorage is powerful but has limitations (storage size, string-only)
- User experience improves with loading states and error messages
- Theme switching enhances accessibility and user preference

## Resources Used

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info - Async/await](https://javascript.info/async-await)
- [MDN - LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

[Previous: Color Generator](../05-color-generator) | [Back to Main Repository](../README.md)

**Project Status**: Completed

This project marks a significant milestone in understanding asynchronous JavaScript and working with external APIs.
