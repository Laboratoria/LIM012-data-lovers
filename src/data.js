<<<<<<< HEAD
//Funcionalidad en data
import { inputSearchElem } from './main.js';
//muestro la info




export const showInfo=(pokes)=>{
  const inputValue=inputSearchElem.value;
  let info='';
//   console.log(`Lei input ${inputValue}`)
      pokes.forEach((poke)=>{
         if(inputValue==poke.name){
             info= `
              <p class="namePok"> ${poke.name}</p>
              <section id="imgCont">
                  <span class="circle">${poke.num}</span>
                  <img src="${poke.img}" alt="pokemonImage">
              </section> 
              <section id="s2about">
                    <p id="about" class="infoCont"> <span>${poke.about}</span></p>
                    <div id="s2info" class="infoCont data">
                        <p>Type:<span>${poke.type}</span></p>
                        <p>Height:<span>${poke.size.height}</span></p>
                        <p>Weight:<span>${poke.size.weight}</span></p>      
                    </div>
                    <div id="weakRes" class="infoCont data">
                        <p>Weakness:<span>${poke.weaknesses}</span></p>
                        <p>Resistance:<span>${poke.resistant}</span></p>
                    </div>
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
        <div class="s3">
        <div id="imgCont" class="item">
            <span class="circle">${data.num}</span>
            <img src="${data.img}" alt="pokemonImage">
            <span> ${data.name}</span>
        </div> 
        <span class="lor">nel</span>
        <div class="lor">gel</div>
        </div>   
        `
}
/* export const orderAZ=(data)=>{
    return `
        <div class="s3">
            <div id="imgCont" class="item">
                <span class="circle">${data.num}</span>
                <img src="${data.img}" alt="pokemonImage">
                <span> ${data.name}</span>
            </div> 
        </div>
        `
        

}
 */

export const orderAZ=(poke)=>{
    let ordered=[];
    for(let i=0;i<poke.length;i++){
        ordered[i]+=poke[i].name;
    }
    console.log(ordered);
}
=======
// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
>>>>>>> 7c8a4025034b267d72e9c489da47513f349cef2f
