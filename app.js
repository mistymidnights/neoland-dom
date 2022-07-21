/* Iteración #1: Interacción con el DOM */

let show = document.querySelector(".showme");
console.log(show);

let pillados = document.querySelector("#pillado");
console.log(pillados);

let parrafos = document.querySelectorAll("p")
console.log(parrafos);

let pokemons = document.querySelectorAll(".pokemon")
console.log(pokemons);

let testMe = document.querySelector('[data-function="testMe"]')
console.log(testMe);


let atributes = document.querySelectorAll('[data-function="testMe"]');
atributes.forEach( ( element, index) => {
    console.log( index == 2 ? element : '' );
});


/* Iteración #2: Modificando el DOM */

