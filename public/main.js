// put search box on the page === done
// put button on page === done
// make sure button clicks === done
// click button and checks input (city) === done
// click button and fetch data for weather === done
// return information about weather temp === done
// create li element === done
// append child ul element to add info to the DOM === done
// repeat steps for more information
// get more information including current conditions
// put on the DOM
// const resetTheCity = () => {
//   let topList = document.querySelector('.reset')
//   let listItem = document.querySelector('.reset-item')
//   let remove = () => {
//     topList.removeChild(listItem)
//   }
//   remove()
// }

const goForWeather = () => {
  let mainContainer = document.querySelector('ul.reset')
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
  let searchInput = document.querySelector('.city-input')
  let citySearch = searchInput.value

  if (citySearch === Number.NaN) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=ab775780f3f23d518c06143e1db7c763`)
      .then(response => {
        return response.json()
      })
      .then(weatherAttributes => {
        let weatherOnPage = document.querySelector('.weather-info')

        let weatherLiName = document.createElement('li')
        weatherLiName.textContent = weatherAttributes.name
        weatherOnPage.appendChild(weatherLiName)

        let weatherLiTemp = document.createElement('li')
        weatherLiTemp.textContent = `${weatherAttributes.main.temp} Fahrenheit`
        weatherOnPage.appendChild(weatherLiTemp)

        weatherAttributes.weather.forEach(weatherCondition => {
          let weatherLiCondition = document.createElement('li')
          weatherLiCondition.textContent = weatherCondition.main
          weatherOnPage.appendChild(weatherLiCondition)
        })
      }
      )
  }

  if (citySearch !== Number.NaN) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${citySearch}&units=imperial&appid=ab775780f3f23d518c06143e1db7c763`)
      .then(response => {
        return response.json()
      })
      .then(weatherAttributes => {
        let weatherOnPage = document.querySelector('.weather-info')

        let weatherLiName = document.createElement('li')
        weatherLiName.textContent = weatherAttributes.name
        weatherOnPage.appendChild(weatherLiName)

        let weatherLiTemp = document.createElement('li')
        weatherLiTemp.textContent = `${weatherAttributes.main.temp} Fahrenheit`
        weatherOnPage.appendChild(weatherLiTemp)

        weatherAttributes.weather.forEach(weatherCondition => {
          let weatherLiCondition = document.createElement('li')
          weatherLiCondition.textContent = weatherCondition.main
          weatherOnPage.appendChild(weatherLiCondition)
        })
      }
      )
  }
}

const main = () => {

  document.querySelector('.go-button').addEventListener('click', goForWeather)

}

document.addEventListener('DOMContentLoaded', main)


