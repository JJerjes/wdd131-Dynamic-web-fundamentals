const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');
})

const year = new Date().getFullYear();
document.getElementById('dates').innerHTML = `&copy; ${year} | Jerjes Mariluz C. | Perú`;

const currently = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};

const formatedDate = currently.toLocaleString('en-US', options);
document.getElementById('lastModified').textContent = `Last Modification: ${formatedDate}`


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  }
];

const container = document.querySelector('.photos');
const titleMain = document.querySelector('#title');

function displayTemples (templeList) {
  container.innerHTML = '';

  templeList.forEach( temple => {
    const card = document.createElement('div');
    card.classList.add('temple-photos');
    
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img 
        src="${temple.imageUrl}"
        alt="Image of ${temple.templeName} temple"
        loading="lazy"
      />
    `

    container.appendChild(card);
  })
}

showAll();

function displayTitle (title) {
  titleMain.innerHTML = title;
}

function showAll () {
  displayTemples(temples);
  displayTitle('Home');
}

function showOld () {
  const result = temples.filter( t => new Date( t.dedicated).getFullYear() < 1900);
  displayTemples(result);
  displayTitle('Old');
}

function showNew () {
  const result = temples.filter (t => new Date (t.dedicated).getFullYear() > 2000);
  displayTemples(result);
  displayTitle('New');
}

function showLarge () {
  const result = temples.filter( t => t.area < 90000);
  displayTemples(result);
  displayTitle('Large');
}

function showSmall () {
  const result = temples.filter( t => t.area > 10000);
  displayTemples(result);
  displayTitle('Small');
}

document.getElementById('home').addEventListener('click', showAll);
document.getElementById('old').addEventListener('click', showOld);
document.getElementById('new').addEventListener('click', showNew);
document.getElementById('large').addEventListener('click', showLarge);
document.getElementById('small').addEventListener('click', showSmall);






























// const container = document.querySelector('.photos');

// function displayTemples(templesList) {
//   container.innerHTML = ""; 

//   templesList.forEach(temple => {
//     const card = document.createElement('div');
//     card.classList.add('temple-photo');

//     card.innerHTML = `
//       <h3>${temple.templeName}</h3>
//       <p><strong>Location:</strong> ${temple.location}</p>
//       <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
//       <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
//       <img 
//           src="${temple.imageUrl}"
//           alt="Image of ${temple.templeName} temple"
//           loading="lazy"
//       />
//     `;

//     container.appendChild(card);
//   });
// }


// const titleH2 = document.querySelector('#title')
// function changeTitle (title) {
//    titleH2.textContent = title;
// }


// showAll();

// function showAll() {
//   displayTemples(temples);
//   changeTitle('Home')
// }

// function showOld() {
//   const result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
//   displayTemples(result);
//   changeTitle("Old");
// }

// function showNew() {
//   const result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
//   displayTemples(result);
//   changeTitle("New");
// }

// function showLarge() {
//   const result = temples.filter(t => t.area > 90000);
//   displayTemples(result);
//   changeTitle("Large");
// }

// function showSmall() {
//   const result = temples.filter(t => t.area < 10000);
//   displayTemples(result);
//   changeTitle("Small");
// }

// document.getElementById("home").addEventListener("click", showAll);
// document.getElementById("old").addEventListener("click", showOld);
// document.getElementById("new").addEventListener("click", showNew);
// document.getElementById("large").addEventListener("click", showLarge);
// document.getElementById("small").addEventListener("click", showSmall);


















































/**  
 
* SE MUESTRA LAS FOTOS CON LOS DATOS 
 
const container = document.querySelector('.photos');

function displayTemples (temple) {
    const card = document.createElement('div');
    card.classList.add('temple-photo');

    card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img 
            src = "${temple.imageUrl}"
            alt = "Image of ${temple.templeName} temple"
            loading = "lazy"
        /> 
    `;

    container.appendChild(card)
}

temples.forEach(displayTemples)
*/