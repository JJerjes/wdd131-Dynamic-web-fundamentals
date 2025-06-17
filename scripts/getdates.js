const fullName = document.querySelector('#fullname');
fullName.textContent = 'Jerjes Job Mariluz';

const year = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `&copy${year} | Jerjes Job Mariluz | Perú`;

const currently = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}

let formattedDate = currently.toLocaleString('en-US', options);
formattedDate = formattedDate.replace(',', '');
document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`