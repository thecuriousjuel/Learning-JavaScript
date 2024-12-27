'use strict';

// const XMLHttpRequest = require('xhr2');
// const request = new XMLHttpRequest();


// request.open('GET', `https://restcountries.com/v2/name/portugal`);
// request.send();

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data)
// });


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
       `;

  countriesContainer.insertAdjacentHTML('beforeend', html)
}


// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request)


// function getCountryData (country){
//     fetch('https://restcountries.com/v2/name/bharat')
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.log(error))
//     }

function getJSON(url, message = 'Some error occured') {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(message)
      }
      return response.json()
    })
}

function getCountryData(country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0])
      let neighbor = data[0].borders?.[0]
      return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`, 'Neighbor not found')
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.log(error)
    })
    .finally(() => countriesContainer.style.opacity = 1)
}

btn.addEventListener('click', (event) => getCountryData('australia'))
