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
let list = document.createElement("ul");

let elementList = document.createElement("li");
    apps.forEach((element) => {
        let elementList = document.createElement("li");
        elementList.textContent = apps;
        console.log(elementList)
    });

//TODO

/* 2.7 */

let remove = document.querySelectorAll(".fn-remove-me");
console.log(remove)