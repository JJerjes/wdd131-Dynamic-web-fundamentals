// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');

// button.addEventListener('click', () => {
//     if ( input.value.trim() !== '' ) {
//         const li = document.createElement('li');
//         const deleteBtn = document.createElement('button');
//         deleteBtn.style.border = 'none';
//         deleteBtn.style.borderRadius = '8px';

//         li.textContent = input.value;
//         deleteBtn.textContent = '❌';
//         li.append(deleteBtn);
//         list.append(li);

//         deleteBtn.addEventListener('click', () => {
//             list.removeChild(li);
//         });

//         input.value = '';
//         input.focus();
//     } else {
//         alert('Ingrese Capitulo !!')
//     }
// })



const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Paso 1: Obtener los datos del localStorage o empezar con un array vacío
let chaptersArray = getChapterList() || [];

// Paso 2: Mostrar todos los capítulos guardados al cargar la página
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Paso 3: Evento al hacer clic en el botón
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);                   // Mostrar en pantalla
        chaptersArray.push(input.value);            // Guardar en el array
        setChapterList();                           // Guardar en localStorage
        input.value = '';                           // Limpiar campo
        input.focus();                              // Volver a enfocar
    }
});


// ✅ FUNCIONES (van afuera del eventListener)

// Mostrar un capítulo en la lista
function displayList(item) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '✖️';
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    list.append(li);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item);        // Usamos directamente el texto original
        input.focus();
    });
}

// Guardar el array completo en localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Recuperar el array del localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Eliminar un capítulo del array y actualizar localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



























