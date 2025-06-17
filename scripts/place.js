const title = document.querySelector('#title');
title.innerHTML = `<h1>Perú</h1>`;
title.style.background = 'red';

const footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.textAlign = 'center';


const lastModified = document.querySelector('#lastmodified');

const year = new Date().getFullYear();
document.getElementById('fullName').innerHTML = `&copy${year} | Jerjes Mariluz C. | Perú`;

const currently = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

const formadDate = currently.toLocaleString('en-US', options).replace(',', '');

document.getElementById('lastModified').textContent = `Last Modification: ${formadDate}`


const temperatute = 5;
const windSpeed = 10;
const conditions = 'Partly cloudy';
const windDirection = 'NW';

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

const weatherListItems = document.querySelectorAll('.weather-inf ul li');

weatherListItems[0].textContent = `Temperature: ${temperatute} °C`;
weatherListItems[1].textContent = `Conditions: ${conditions}`;
weatherListItems[2].textContent = `Wind: ${windSpeed} Km/h ${windDirection}`;

if (temperatute <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperatute, windSpeed);
    weatherListItems[3].textContent = `Wind Chill: ${windChill.toFixed(1)} °C`;
} else {
    weatherListItems[3].textContent = `Wind Chill: N/A`;
}

const dataListItems = document.querySelectorAll('.data-inf ul li');

dataListItems[0].innerHTML = `Area: 1,285,216 km&sup2;`;
dataListItems[1].textContent = `Population: 33 millon`;
dataListItems[2].textContent = `Capital: Lima`;
dataListItems[3].textContent = `Languages: Spanish`;
dataListItems[4].textContent = `Currency: Sol (PEN)`;
dataListItems[5].textContent = `Time Zone: GMT-5`;
dataListItems[6].textContent = `Calling Code: +51`;
dataListItems[7].textContent = `Internet TLD: .pe`;