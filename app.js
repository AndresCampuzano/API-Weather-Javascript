const cityTyped = prompt("Search city");
// const justForDevelopmentCity= 'Andorra'
const city = "medellin";
const API_KEY = "c982d29f34b457c7256dfdf78eff3288";
const temperatureUnit = "metric";

fetch(`https://api.openweathermap.org/data/2.5/
weather?q=${cityTyped}
&appid=${API_KEY}
&units=${temperatureUnit}`)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    //Converting temperature 0.73 → 0.7
    let temperatureFixed = data.main.temp.toFixed();

    // Rendering weather using JS.
    var render = function(template, idHTML) {
      var node = document.getElementById(idHTML);
      if (!node) return; // Checking that the node exists
      node.innerHTML = template;
    };
    var template = `
      <h1>The weather in ${data.name}, 
      ${data.sys.country}, 
      is ${temperatureFixed} °C, 
      ${data.weather[0].description}
      </h1>
      `;
    render(template, "main");
  })
  .catch(function() {
    console.log("algo falló");

    var renderError = function(template, idHTML) {
      var node = document.getElementById(idHTML);
      node.innerHTML = template;
    };

    var template = "<h1>City not found, try Medellin</h1>";
    renderError(template, "main");
  });
