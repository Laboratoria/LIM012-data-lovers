import data from "./data/lol/lol.js";

/*Mostrar en interfaz dos mas saludo y letra capital*/
const primeraInterfaz = document.getElementById("primeraInterfaz");
const segundaInterfaz = document.getElementById("segundaInterfaz");
primeraInterfaz.style.display = "block";
segundaInterfaz.style.display = "none";

document.getElementById("buttonEnter").addEventListener("click", () => {
<<<<<<< HEAD
  const name = document.getElementById("inputName").value;
  const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
  const parrafo = document.getElementById("nombreIngresado");
  parrafo.innerHTML = `\n Welcome ${newStr}\n !`;
  segundaInterfaz.style.display = "block";
  primeraInterfaz.style.display = "none";
});

/*Muestra de la lista de campeones*/
=======
    const name = document.getElementById("inputName").value;
    const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
    const parrafo = document.getElementById("nombreIngresado");
    parrafo.innerHTML = `!\n Welcome ${newStr}\n !`;
    segundaInterfaz.style.display = "block";
    primeraInterfaz.style.display = "none";
});

/*Muestra de la lista de campeones*/

>>>>>>> 2566cf231760aab0fe87be22bf42d4ef2138bc50
const championList = data.data;
console.log(championList);

let list = document.querySelector("#list");

<<<<<<< HEAD
//object values le saca los valores de key en forma de arreglo
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
=======
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

    const filterByAssasin = championList.filter(champion => champion === "Assassin");
    console.log(filterByAssasin);


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

>>>>>>> 2566cf231760aab0fe87be22bf42d4ef2138bc50
});
//busqueda por nombre
//probando la subida
let input = document.querySelector("#searchInputs");
let filteredList = document.querySelector("#filteredList");

<<<<<<< HEAD
//target : lo que sea a lo que se le aplique add event listener
if (typeof input.addEventListener != "undefined") {
  input.addEventListener("keyup", (evt) => {
      let term = evt.target.value.toLowerCase();
      let filteredChampions = Object.values(championList).filter(champion => {
        //indexof da -1 si no encuentra resultados
        if (champion.name.toLowerCase().indexOf(term) != -1) {
          return champion;
        }
      });
      //mensaje de error en la busqueda por nombre
      if (term.length != 0) {
        list.classList.add("hidden");
        filteredList.classList.remove("hidden");
      } else {
        list.classList.remove("hidden");
        filteredList.classList.add("hidden");
      }
      let errorMessage = document.querySelector("#error");
      if (filteredChampions.length === 0) {
        errorMessage.classList.remove("hidden");
      } else {
        errorMessage.classList.add("hidden");
      }

      //vaciar arreglo para que no se duplique
      filteredList.innerHTML = "";
      Object.values(filteredChampions).map(champion => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        p.className = "championName";
        img.className = "championSplash";
        img.src = `${champion.splash}`;
        p.innerHTML = `${champion.name}`;
        div.appendChild(img);
        div.appendChild(p);
        filteredList.appendChild(div);
      });
    },
    false
  );
}
=======




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
>>>>>>> 2566cf231760aab0fe87be22bf42d4ef2138bc50
