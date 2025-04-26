const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src="${country.flags.svg}" alt="flag of ${country.name.common}" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");


fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json(); 
  })
  .then(function (countries) {
    
    countries.slice(0, 150).forEach(function (country) {
      const countryHTML = cardTemplate(country);
      countriesNode.innerHTML += countryHTML;
    });
  })
  .catch(function (error) {
    console.error("Error al obtener países:", error);
  });
