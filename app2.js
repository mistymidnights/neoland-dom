/* 2.1 */
const div = document.createElement("div");
console.log(div)


/* 2.2 */
const divP = document.createElement("div");
let p = document.createElement("p");
divP.appendChild(p);
console.log(divP);



/* 2.3 */
for (let index = 0; index < 6; index++) {
    let parrafo = document.createElement("p");
        div.appendChild(parrafo);
}

let body = document.querySelector("body");
body.appendChild(div);


/* 2.4 */
let dynamic = document.createElement("p");
dynamic.textContent = 'Soy dinámico!';
console.log(dynamic);



/* 2.5 */
let wubba = document.createElement("h2")
wubba.className = ".fn-insert-here";
wubba.textContent = 'Wubba Lubba dub dub';
console.log(wubba)


/* 2.6 */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulCreate = document.createElement('ul');

apps.forEach((element) => {
  const liCreate = document.createElement('li');
  let textNode = document.createTextNode(element);
  liCreate.appendChild(textNode);
  ulCreate.appendChild(liCreate);
});
console.log(ulCreate)

//TODO

/* 2.7 */
let toRemove = document.querySelectorAll(".fn-remove-me");
toRemove.forEach((container) => {
    container.remove();
});


/* 2.8 */
let allDivs = document.querySelectorAll(".fn-insert-here");

allDivs.forEach((container) => {
    let createText = document.createElement("p");
    createText.textContent = 'Voy en medio!';
    container.appendChild(createText)
    console.log(createText)
});

