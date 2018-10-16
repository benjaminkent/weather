class WeatherAPI {
  constructor(weatherSelector) {
    this.mainWeather = document.querySelector(weatherSelector)
  }

  addWeather(information) {
    const weatherInfo = document.createElement('li')
    weatherInfo.textContent = information
    this.mainWeather.appendChild(weatherInfo)
  }

  weatherArray(weather) {
    weather.forEach(weatherCondition => {
      const weatherInfo = document.createElement('li')
      weatherInfo.textContent = 'Currently: ' + weatherCondition.main
      console.log(weatherCondition)
      this.mainWeather.appendChild(weatherInfo)
    })
  }
}

const goForWeather = () => {
  let mainContainer = document.querySelector('ul.reset')
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
  let searchInput = document.querySelector('.city-input')
  let citySearch = searchInput.value

  let url
  if (isNaN(parseInt(citySearch))) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=ab775780f3f23d518c06143e1db7c763`
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${citySearch}&units=imperial&appid=ab775780f3f23d518c06143e1db7c763`
  }
  // let notNumber = isNaN(parseInt(citySearch))
  // let url = `https://api.openweathermap.org/data/2.5/weather?${notNumber ? 'q' : 'zip'}=${citySearch}&units=imperial&appid=ab775780f3f23d518c06143e1db7c763`

  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(weatherAttributes => {
      const weatherList = new WeatherAPI('.weather-info')
      weatherList.addWeather('City: ' + weatherAttributes.name)
      weatherList.addWeather('Temp: ' + weatherAttributes.main.temp + ' ℉')
      weatherList.weatherArray(weatherAttributes.weather)
      weatherList.addWeather(
        'Humidity: ' + weatherAttributes.main.humidity + '%'
      )
      weatherList.addWeather('High: ' + weatherAttributes.main.temp_max + ' ℉')
      weatherList.addWeather('Low: ' + weatherAttributes.main.temp_min + ' ℉')
    })
}

const main = () => {
  document.querySelector('.city-input').addEventListener('change', goForWeather)
  document.querySelector('.go-button').addEventListener('click', goForWeather)
}

document.addEventListener('DOMContentLoaded', main)
