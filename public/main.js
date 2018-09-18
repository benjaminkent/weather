// put search box on the page === done
// put button on page === done
// make sure button clicks === done
// click button and checks input (city) === done
// click button and fetch data for weather === done
// return information about weather temp === done
// create li element
// append child ul element to add info to the DOM
// repeat steps for more information
// get more information including current conditions
// put on the DOM

const goForWeather = () => {
  let searchInput = document.querySelector('.city-input')
  let citySearch = searchInput.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=ab775780f3f23d518c06143e1db7c763`)
    .then(response => {
      return response.json()
    })
    .then(weatherAttributes => {

      weatherAttributes.weather.forEach(weatherCondition => {
        console.log(weatherCondition.main)
      })
      console.log(weatherAttributes.main.temp)
      console.log(weatherAttributes.name)
    }
    )
}



const main = () => {



  document.querySelector('.go-button').addEventListener('click', goForWeather)

}

document.addEventListener('DOMContentLoaded', main)





