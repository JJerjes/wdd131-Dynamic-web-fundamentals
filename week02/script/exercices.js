const article = document.querySelector('#title');

article.innerHTML = `<h2>Junior</h2>`;
article.style.textAlign = 'center';
article.classList.add('title-main');
article.setAttribute('title-main', 't-main');



const piePage = document.querySelector('footer');
const textPara = document.createElement('p');

const textNode = document.createTextNode('Jerjes Mariluz');
textPara.appendChild(textNode);
piePage.appendChild(textPara);

piePage.style.display = 'flex';
piePage.style.justifyContent = 'center';
piePage.style.alignItems = 'center';
piePage.style.fontWeight = 'bold';

// piePage.removeChild(textPara);
// piePage.remove();


