//Funcionalidad en data
import { inputSearchElem } from './main.js';

//muestro la info
export const showInfo=(pokes)=>{
  const inputValue=inputSearchElem.value;
  let info='';
  console.log(`Lei input ${inputValue}`)
      pokes.forEach((poke)=>{
          if(inputValue==poke.name){
              info= `
              <section id="s2img">
                  <span>${poke.num}</span>
                  <img src="${poke.img}" alt="pokemonImage">
                  <span id="namePok"> ${poke.name}</span>
              </section> 
              <section id="s2about">
                  <p>About:<span>${poke.about}</p>
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
      });
      if(info){
          return info;
      }
      else{
          return 'El nombre ingresado no es correcto';
      }   
}

export const showAllData=(data)=>{
    return `
    <section class="s3">
          <span class="circle">${data.num}</span>
          <img class="imgPok" src="${data.img}" alt="pokemonImage">
          <span class="namePok"> ${data.name}</span>
    </section>
    `
}
