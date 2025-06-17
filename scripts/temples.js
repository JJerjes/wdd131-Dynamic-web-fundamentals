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