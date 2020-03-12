import data from "./data/lol/lol.js";

/*Mostrar en interfaz dos mas saludo y letra capital*/
const primeraInterfaz = document.getElementById("primeraInterfaz");
const segundaInterfaz = document.getElementById("segundaInterfaz");
primeraInterfaz.style.display = "block";
segundaInterfaz.style.display = "none";

document.getElementById("buttonEnter").addEventListener("click", () => {
    const name = document.getElementById("inputName").value;
    const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
    const parrafo = document.getElementById("nombreIngresado");
    parrafo.innerHTML = `!\n Welcome ${newStr}\n !`;
    segundaInterfaz.style.display = "block";
    primeraInterfaz.style.display = "none";
});

/*Muestra de la lista de campeones*/

const championList = data.data;
console.log(championList);

let list = document.querySelector("#list");

//object values
Object.values(championList).map(champion => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.className = "championName";
    img.className = "championSplash";
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
});
//funcion evaluar que tiene dos cadenas
//tengo que hacer un nuevo arreglo que tengan solo los campeones que cumplan con la condicion
// let newArray = Object.values(championList).filter(champion => {
//     champion.tags[1] = true;
// if (condicion que evalua lo que quieres con champion)
// return champion
// });

// const filterByClass = (tags, selectedClass) => {


// };


let pAssasin = document.querySelector("#assasin");
let filteredListAssasin = document.querySelector("#filteredList");


pAssasin.addEventListener('click', () => {



    const filterByAssasin = championClassAssasin.filter(championClassAssasin => championClassAssasin.tags[0] === "Assassin");


    filterByAssasin.innerHTML = "";
    Object.values(filteredListAssasin).map(champion => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        p.className = "championName";
        img.className = "championSplash";
        img.src = `${champion.splash}`;
        p.innerHTML = `${champion.name}`;
        div.appendChild(img);
        div.appendChild(p);
        filteredListAssasin.appendChild(div);
    });

});





/*Filtrado barra input LUPA de buscar*/
// let input = document.querySelector("#searchInputs");
// let filteredList = document.querySelector("#filteredList");

// if (typeof input.addEventListener != "undefined") {
//     input.addEventListener("keyup", (evt) => {
//             let term = evt.target.value.toLowerCase();
//             let filteredChampions = Object.values(championList).filter(champion => {
//                 if (champion.name.toLowerCase().indexOf(term) != -1) {
//                     return champion;
//                 }
//             });
//             if (term.length != 0) {
//                 list.classList.add("hidden");
//                 filteredList.classList.remove("hidden");

//             } else {
//                 list.classList.remove("hidden");
//                 filteredList.classList.add("hidden");

//             }

//             filteredList.innerHTML = "";
//             Object.values(filteredChampions).map(champion => {
//                 const div = document.createElement("div");
//                 const img = document.createElement("img");
//                 const p = document.createElement("p");
//                 p.className = "championName";
//                 img.className = "championSplash";
//                 img.src = `${champion.splash}`;
//                 p.innerHTML = `${champion.name}`;
//                 div.appendChild(img);
//                 div.appendChild(p);
//                 filteredList.appendChild(div);
//             });
//         },
//         false
//     );
// }