//DOM
//{} cuando solo llamas a una funcion determinada no a toda la hoja
import data from './data/pokemon/pokemon.js';
import {showInfo, showAllData, orderAZ} from './data.js';
export const inputSearchElem=document.getElementById("inputSearch");
const pokemones=data.pokemon;
const searchIconElem=document.getElementById("searchIcon");
const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');
const screen3Elem=document.getElementById('screen3');
const select1Elem=document.getElementById('selectOrder');
const select2Elem=document.getElementById('selectType');
const s3defaultElem=document.getElementById('s3default');
const s3orderAZElem=document.getElementById('s3orderAZ');
const s3orderZAElem=document.getElementById('s3orderZA');
const s3typeElem=document.getElementById('s3type');
// document.getElementsByTagName(select[]);
const mHome= document.getElementById('home');
const mPokedex=document.getElementById('pokedex');
const mcompare=document.getElementById('compare');
//Segunda Pantalla -Buscador

/* const order=(poke)=>{
    let ordered=[];
    for(let i=0;i<poke.length;i++){
        ordered[i]+=poke[i].name;
    }
    console.log(ordered);
}
orden(pokemones);
 */

const showScreen2=()=>{
    screen1Elem.style.display="none";
    screen2Elem.style.display="block";
    screen2Elem.innerHTML=`${showInfo(pokemones)}`
}
searchIconElem.addEventListener('click',showScreen2); 
//Menu boton Home
mHome.addEventListener('click',()=>{
    screen1Elem.style.display='block'
    screen2Elem.style.display='none'
    s3defaultElem.style.display='none'
    inputSearchElem.value='';
})
//Muestra por default Pok
const shows3default=()=>{
    screen1Elem.style.display='none';
    screen2Elem.style.display='none';
    screen3Elem.style.display='block';
    s3defaultElem.style.display='block';
    s3defaultElem.innerHTML=`${pokemones.map(showAllData).join('')}`
}
mPokedex.addEventListener('click',shows3default);

/* //OrderAZ
mcompare.addEventListener('click',()=>{
    screen1Elem.style.display='none';
    s3defaultElem.style.display='none';
    screen3Elem.style.display='block';
    s3orderAZElem.style.display='block';
    s3orderAZElem.innerHTML=`holi ${orderAZ(pokemones)}`
}) */



// OrderAZDEVERDAD
// const orderA=()=>{
//     let selct1Value=select1Elem.value;
//     s3orderAZElem.style.display='block';
//     console.log(hhhhhhhhhhhha+selct1Value);
//     s3orderAZElem.innerHTML=`Estas en orderA seleccion${selct1Value}`
// }
select1Elem.addEventListener('click',()=>{
    screen3Elem.style.display='block';
    s3defaultElem.style.display='none'
    s3orderAZElem.style.display='block'
    // console.log('soyelselect1');
    let selct1Value=select1Elem.value;
    s3orderAZElem.style.display='block';
    // console.log(`estas en ${selct1Value}`);
    switch(selct1Value){
        case 'AZ': 
            console.log('soyAZ');
            s3orderAZElem.innerHTML=`Estas en orderA1 seleccion${selct1Value}`
        break;
        case 'ZA': 
            console.log('soyZA');
            s3orderAZElem.innerHTML=`Estas en orderA2 seleccion${selct1Value}`
        break;
        case 'numUp': 
            console.log('soyNum');
            s3orderAZElem.innerHTML=`Estas en orderA3 seleccion${selct1Value}`
    }
    
    // s3orderAZElem.innerHTML=`Estas en orderA seleccion${selct1Value}`
})

const showfil=(poke)=>{
    /* screen3Elem.style.display='block';
    s3defaultElem.style.display='none'
    s3orderAZElem.style.display='block' */
    let arr=[];
    for(i=0;i<poke.length;i++){
        if(poke.type){

        }
        arr[i]=
    }

}


//Order
/* mcompare.addEventListener('click',()=>{
    screen1Elem.style.display='none';
    s3defaultElem.style.display='none';
    screen3Elem.style.display='block';
    s3orderAZElem.style.display='block';
    s3orderAZElem.innerHTML=`holi ${pokemones.map(orderAZ).join('')}`
}) */