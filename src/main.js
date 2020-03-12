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
  parrafo.innerHTML = `\n Welcome ${newStr}\n !`;
  segundaInterfaz.style.display = "block";
  primeraInterfaz.style.display = "none";
});

/*Muestra de la lista de campeones*/
const championList = data.data;
let list = document.querySelector("#list");

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
});
//busqueda por nombre
let input = document.querySelector("#searchInputs");
let filteredList = document.querySelector("#filteredList");

//target : lo que sea a lo que se le aplique add event listener
if (typeof input.addEventListener != "undefined") {
  input.addEventListener(
    "keyup",
    evt => {
      let term = evt.target.value.toLowerCase();

      //let filteredChampions = Object.values(championList).filter(champion => champion.name.toLowerCase().indexOf(term) != -1);
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
      //filteredList ==  <div id="filteredList" ></div>
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
// [p.btn, p.btn, p.btn, p.btn, p.btn, p.btn, p.btn]
// p.btn == button == <p class="btn" data-value="ALL">ALL</p>
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    // term == Assassin
    let term = button.getAttribute("data-value");
    console.log(term)

    if (term === "ALL") {
      list.classList.remove("hidden");
      filteredList.classList.add("hidden");
    } else {
      list.classList.add("hidden");
      filteredList.classList.remove("hidden");
    }
    // filteredChampions == []
    let filteredChampions = Object.values(championList).filter(champion => {
      if (champion.tags.indexOf(term) != -1) {
        return champion;
      }
    })
    filteredList.innerHTML = "";
    //filteredList ==  <div id="filteredList" ></div>
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
  })



});
