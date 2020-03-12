
import data from './data/pokemon/pokemon.js';

const pokemones=data.pokemon;
const inputSearchElem=document.getElementById("inputSearch");
const searchIconElem=document.getElementById("searchIcon");

const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');




searchIconElem.addEventListener('click',()=>{
    screen1Elem.style.display="none";
    screen2Elem.style.display="block"
   
    screen2Elem.innerHTML=` Hay ${pokemones.length} pokemones
    ${pokemones.map(showNum).join('')}
`

});
    
const showNum=(poke)=>{
    const inputSValue=inputSearchElem.value;
    if(inputSValue===poke.name){
    return `
        <section id="s2img">
            <span>${poke.num}</span>
            <img src="${poke.img}" alt="pokemonImage">
            <span id="namePok"> ${poke.name}</span>
        </section>
    `
    }
    else{
        console.log("error");
    }
}
