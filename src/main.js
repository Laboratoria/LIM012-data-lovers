//DOM
import { example } from './data.js'; //{} cuando solo llamas a una funcion determinada no a toda la hoja

import data from './data/pokemon/pokemon.js';


console.log(example());

const pokemones=data.pokemon;


const inputSearchElem=document.getElementById("inputSearch");
const searchIconElem=document.getElementById("searchIcon");
const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');






//muestro la info
const showInfo=(poke)=>{
    const inputValue=inputSearchElem.value;
    if(inputValue==poke.name){
        return `
        <section id="s2img">
            <span>${poke.num}</span>
            <img src="${poke.img}" alt="pokemonImage">
            <span id="namePok"> ${poke.name}</span>
        </section>
        <section id="s2about">
        <p>About:<span>${poke.about}
        </p>
        </section>
      
        <section id="s2info">
        <p>Type: <span>${poke.type}</span></p>
        <p>Height: <span>${poke.size.height}</span></p>
        <p>Weight: <span>${poke.size.weight}</span></p>      
        </section>
        
        <section id="weakRes">
        <p>Weakness: <span>${poke.weaknesses}</span></p>
        <p>Resistance: <span>${poke.resistant}</span></p>
        
        </section>
        `
    }
}

//<p>Special Attack: <span>${poke.special-attack}</span></p> 

/* 
let namePok=[];
const elfor=(arr)=>{ 
    for(let i=0;i<arr.length;i++){
        namePok[i]=arr[i].name
        showInfo(arr[i]);
    }
    
    return showInfo(arr[i]);
} */


const showScreen2=()=>{
    screen1Elem.style.display="none";
    screen2Elem.style.display="block";

    screen2Elem.innerHTML=` Hay ${pokemones.length} pokemones
        ${
            pokemones.map(showInfo)
        }
        `
}

searchIconElem.addEventListener('click',showScreen2); 

//pokemones.map(showInfo)
//elfor(pokemones)
// pokemones.forEach(showInfo)