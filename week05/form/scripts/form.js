const year = new Date().getFullYear();
document.getElementById('yearName').innerHTML = `&copy;${year} | Jerjes Mariluz C. | Perú`;

const currently = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
}

const formDate = currently.toLocaleString('en-US', options);
document.getElementById('lastModified').innerHTML = `Last Modified: ${formDate}`;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

updateReviewCounter();
populateProductSelect();

function populateProductSelect() {
  const selectElement = document.getElementById('product');  // Seleccionamos el <select> del formulario

  // Recorremos el array 'products' y creamos una opción para cada producto
  products.forEach(product => {
    const option = document.createElement('option');  // Creamos un nuevo <option>
    option.value = product.id;  // El valor del <option> es el id del producto
    option.textContent = product.name;  // El texto visible es el nombre del producto
    selectElement.appendChild(option);  // Añadimos la opción al <select>
  });
}

// Llamamos a la función para llenar el <select> con las opciones


function updateReviewCounter () {
    let reviewCount = localStorage.getItem('reviewCount');

    if (!reviewCount) {
        reviewCount = 0;
    }

    reviewCount ++;

    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = `Number of Reviews: ${reviewCount}`
}


