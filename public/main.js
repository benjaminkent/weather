class WeatherList {
  constructor(weatherSelector) {
    this.mainWeather = document.querySelector(weatherSelector)
  }

  addWeather(message) {
    const weatherInfo = document.createElement('li')
    weatherInfo.textContent = message
    this.mainWeather.appendChild(weatherInfo)
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
      const weatherList = new WeatherList('.weather-info')
      weatherList.addWeather(weatherAttributes.name)
      weatherList.addWeather(weatherAttributes.main.temp)

    }
    )
}

const main = () => {
  document.querySelector('.go-button').addEventListener('click', goForWeather)
}

document.addEventListener('DOMContentLoaded', main)

      //let weatherOnPage = document.querySelector('.weather-info')
//
      //// If there is no such city
      //if (weatherAttributes.cod === '404') {
      //  let error = document.createElement('li')
      //  error.textContent = 'Not a place. Batman laughs at you!'
      //  weatherOnPage.appendChild(error)
      //} else {
      //  let weatherLiName = document.createElement('li')
      //  weatherLiName.textContent = weatherAttributes.name
      //  weatherOnPage.appendChild(weatherLiName)
//
      //  let weatherLiTemp = document.createElement('li')
      //  weatherLiTemp.textContent = `${weatherAttributes.main.temp} Fahrenheit`
      //  weatherOnPage.appendChild(weatherLiTemp)
//
      //  weatherAttributes.weather.forEach(weatherCondition => {
      //    let weatherLiCondition = document.createElement('li')
      //    weatherLiCondition.textContent = weatherCondition.main
      //    weatherOnPage.appendChild(weatherLiCondition)
      //  })
      //}
