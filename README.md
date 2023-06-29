# 0+X Test Assignment: Weather App

<https://dmorenogogoleva.github.io/weather-app>

[![performance metrics](https://i.gyazo.com/a93f1c7575b0e5fb2d5821523aec6ebb.png)](https://gyazo.com/a93f1c7575b0e5fb2d5821523aec6ebb)

I've improved developer experience by updating architecture, setting up Typescript, handle errors via ErrorBoundary, and adding unit-tests that run before every commit.

I've improved user experience by using semantic html-tags, updating UI for tablets and desktop, and storing weather data in local storage that reduces loading time. Also I've made the app installable and work offline via servise worker.

## Implemented features

- replaced the dummy data with the real data, using [Weatherbit](https://api.weatherbit.io/v2.0) API
- added update of background, depending on user's local time
- created "Loading" screen with a spinner
- improve the current location detection, showing current city name

##  Fixed bugs

- The Hourly Forecast card is scrollable now
- Columns in “10-Day Forecast” form a straight line
- Each row of the “10-Day Forecast” contains a temperature range with a gradient based on the lowest and highest temperature for the 10-day period. Current temperature is placed on that range

### start

```bash
npm install

npm start
```

the app should be accessible over http on port 3000 at:

```bash
http://localhost:3000

```

### test

```bash
npm run test
```

### build

```bash
npm run build
```
