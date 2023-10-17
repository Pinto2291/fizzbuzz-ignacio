/* Reto FizzBuzz */

/* Este proyecto consiste en crear un programa que muestre por consola con un print, los numeros del 1 al 100 (ambos incluidos y con un salto de linea entre cada impresion), sustituyendo los siguientes:

- Multiplos de 3 por la palabra 'fizz'
- Multiplos de 5 por la palabra 'Buzz'
- Multiplos de 3 y de 5 a la vez por la palabra 'FizzBuzz'
*/

let main = document.getElementById('main');
let button_fizzbuzz = document.getElementById('fizzbuzz');
let button_reset = document.getElementById('reset');

// Funciona generadora de FizzBuzz

function fizzBuzzGenerator() {

    let i = 1;
    
    const interval = setInterval(() => {
        let text = document.createElement('p');
        text.classList.add('text-style');
    if (i % 15 === 0) {
        console.log(`El numero: ${i} fizzbuzz es multiplo de 3 y 5`);
        text.innerText = `fizzbuzz`;
    } else if (i % 3 === 0) {
        console.log(`El numero: ${i} fizz es multiplo de 3`);
        text.innerText = `fizz`;
    } else if (i % 5 === 0) {
        console.log(`El numero ${i} buzz es multiplo de 5`);
        text.innerText = `buzz`;
    } else {
        console.log(i);
        text.innerText = `${i}`;
    }
        i++;
        main.appendChild(text);

    if (i > 100) {
        clearInterval(interval);
        }
    }, 50);
}

function newFizzbuzz() {

        for(let i = 1; i <= 100; i++){

            let text = document.createElement('p');
            text.classList.add('text-style');

            if(i % 3 == 0 && i % 5 == 0){
                console.log('fizzbuzz nuevo');
                text.innerText = `fizzbuzz`;
            } else if(i % 3 == 0){
                console.log('fizz');
                text.innerText = `fizz`;
            } else if(i % 5 == 0){
                console.log('buzz');
                text.innerText = `buzz`;
            } else {
                console.log(i);
                text.innerText = `${i}`;
            }
            main.appendChild(text);
        } 
}

button_fizzbuzz.addEventListener('click', () => {
    //fizzBuzzGenerator();
    newFizzbuzz();
});

// Funcion para remover todos los childs

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

button_reset.addEventListener('click', () => {
    removeAllChildNodes(main)
});