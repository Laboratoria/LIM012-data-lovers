//DOM
//{} cuando solo llamas a una funcion determinada no a toda la hoja
import data from './data/pokemon/pokemon.js';
import {showInfo, showAllData, orderBy} from './data.js';
export const inputSearchElem=document.getElementById("inputSearch");
const pokemones=data.pokemon;
const searchIconElem=document.getElementById("searchIcon");
const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');
const screen3Elem=document.getElementById('screen3');
const select1Elem=document.getElementById('selectOrder');
const select2Elem=document.getElementById('selectType');
const s3defaultElem=document.getElementById('s3default');
const s3orderElem=document.getElementById('s3order');
const s3typeElem=document.getElementById('s3type');
// document.getElementsByTagName(select[]);
const mHome= document.getElementById('home');
const mPokedex=document.getElementById('pokedex');
const mcompare=document.getElementById('compare');
//Segunda Pantalla -Buscador

const typeFilter=(poke,tipo)=>{
    let arr=[];
    for(let i in poke){
        for(let j in poke[i].type){
            if(tipo===poke[i].type[j]){
                arr.push(poke[i]);
            }  
        }
   /*  for(let i=0;i<poke.length;i++){
        for(let j=0;j<poke[i].type.length;j++){
            if(tipo===poke[i].type[j]){
                arr.push(poke[i]);
            }  
        }}
    */
    }
    console.log(arr);
}
typeFilter(pokemones,'flying');


const showScreen2=()=>{
    screen1Elem.style.display="none";
    screen2Elem.style.display="block";
    screen2Elem.innerHTML=`${showInfo(pokemones)}`
}
searchIconElem.addEventListener('click',showScreen2); 
//Menu boton Home
mHome.addEventListener('click',()=>{
    screen1Elem.style.display='flex'
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
//Boton Select OrderBy
select1Elem.addEventListener('change',()=>{
    s3defaultElem.style.display='none';
    s3orderElem.style.display='block';
    let select1Value=select1Elem.value;
    switch(select1Value){
        case 'asc': 
            console.log('soyAZ');
            s3orderElem.innerHTML=`${(orderBy(pokemones,'asc')).map(showAllData).join('')}  `
        break;
        case 'desc': 
            console.log('soyZA');
            s3orderElem.innerHTML=`${(orderBy(pokemones,'desc')).map(showAllData).join('')}  `
        break;
        case 'numUp': 
            console.log('soyNum');
            s3orderElem.innerHTML=`Estas en orderA3 seleccion${select1Value}`
    }
})


select2Elem.addEventListener('change',()=>{
    s3defaultElem.style.display='none';
    s3typeElem.style.display='block';
  
    let select2Value=select2Elem.value;
  
    switch(select1Value){
        case 'AZ': 
        }
})







const showfil=(poke)=>{
    /* screen3Elem.style.display='block';
    s3defaultElem.style.display='none'
    s3orderElem.style.display='block' */
    let arr=[];
    for(i=0;i<poke.length;i++){
        if(poke.type){

        }
        arr[i]
    }
}
