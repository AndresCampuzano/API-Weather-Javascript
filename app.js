// const $input = document.getElementById("input");
// const $addCityButton = document.getElementById("button");

// $addCityButton.addEventListener('submit', add);
// function add() {
//     return cityTyped = $input.value;
// }

const cityTyped = prompt('Search city')
const city = 'medellin';
const API_KEY = 'c982d29f34b457c7256dfdf78eff3288';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityTyped}&appid=${API_KEY}`)
.then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
      console.log("The weather in", data.name, "is", data.main.temp, "celsius,", data.weather[0].description);

      const $name = document.getElementById("name");
      $name.innerHTML = data.name;
      const $country = document.getElementById("country");
      $country.innerHTML = data.sys.country;
      const $temp = document.getElementById("temp");
      $temp.innerHTML = data.main.temp;
      const $description = document.getElementById("description");
      $description.innerHTML = data.weather[0].description;

  })
  .catch(function () {
    console.log("algo falló");
  });