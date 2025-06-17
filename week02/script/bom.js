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

button.addEventListener('click', () => {
    if ( input.value.trim() !== '' ) {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.style.borderRadius = '5px';
        deleteBtn.style.background = 'white'


        li.textContent = input.value;
        deleteBtn.textContent = '✖️'
        li.append(deleteBtn);
        list.append(li);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        input.value = '';
        input.focus();

    } else {
        alert('Ingrese escritura !!')
    }
});






























