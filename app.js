// const cityTyped = prompt("Search city");
// const justForDevelopmentCity= 'Copacabana'
const API_KEY = "c982d29f34b457c7256dfdf78eff3288";
const temperatureUnit = "metric";


// Getting user input value to use in Search Bar
function makeItWorks(){
  var inputVal = document.getElementById("userInput").value;
  // Selecting the input element and get its value 
fetch(`https://api.openweathermap.org/data/2.5/
weather?q=${inputVal}
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
    <div class="card__item" id="card__item">
    <div class="sectionOne">
        <h2 class="card__item--title">${data.name}</h2>
        <p class="card__item--country"> ${data.sys.country}</p>
    </div>
    <div class="sectionTwo">
        <p class="card__item--number">${temperatureFixed}</p>
        <p class="card__item--unit">°C</p>
    </div>
    <div class="sectionTree">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg" alt="${data.weather[0].description} image">
        <p class="card__item--description">${data.weather[0].description}</p>
    </div>
</div>
      `;
    render(template, "card");
  })
  .catch(function() {
    console.log("algo falló");

    var renderError = function(template, idHTML) {
      var node = document.getElementById(idHTML);
      node.innerHTML = template;
    };

    var template = "<h1>City not found ⛅, try Medellin</h1>";
    renderError(template, "card");
  });

  // return inputVal;
}
