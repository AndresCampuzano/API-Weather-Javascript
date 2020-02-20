const cityTyped = prompt('Search city')
const city = 'medellin';
const API_KEY = 'c982d29f34b457c7256dfdf78eff3288';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityTyped}&appid=${API_KEY}`)
.then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (data) {

      //Converting kelvin to celsius
      let x1 = data.main.temp - 273.15;
      let temperatureCelsius = x1.toFixed(0);

      // Rendering weather using JS.
      var render = function (template, node) {
        node.innerHTML = template;
      };
      var template = `
      <h1>The weather in ${data.name}, 
      ${data.sys.country}, 
      is ${temperatureCelsius} celsius, 
      ${data.weather[0].description}
      </h1>
      `;
      render(template, document.getElementById('main'));

  })
  .catch(function () {
    console.log("algo falló");

    var renderError = function (template, node) {
      node.innerHTML = template;
    };
  
    var template = '<h1>City not found, try Medellin!</h1>';
    renderError(template, document.getElementById('main'));
  });