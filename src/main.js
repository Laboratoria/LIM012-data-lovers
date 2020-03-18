import lol from './data/lol/lol.js';
//console.log(lol.data); 
//import {seeAllChampions} from './data.js';
const allChampionList = lol.data;
    console.log(allChampionList);
 let list = document.querySelector("#root");
    console.log(root);
     //objects
 Object.values(allChampionList).forEach(champion => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
      p.className = "nameOfChampion";
      img.className = "imageOfChampion";
      p.innerHTML = `${champion.name}`;
      img.src = `${champion.splash}`;
      div.appendChild(img);
      div.appendChild(p);
      list.appendChild(div);
    });
    
    const filterChamp = Object.keys(allChampionList).filter((key){
      return allChampionList[key] <= Fighter;
    }).map((key)=> {
      return allChampionList[key]
    }) ; 
    console.log(filterChamp) 
    /*
  const fighterChampions = newArray.filter(function(fighter) {
      //fighter is equivalent of object
      return(fighter[1].tags["Assassin"]);
    });
    console.log(fighterChampions);
    

   for(let i = 0; i< championList.length; i++){git
        fighter.push(rolChampions[j]);
        console.log(fighter);
      }
    }
  }
   let filteredbyClass = Object.values(championList).filter(champion => {
      if (champion.tags.indexOf(term) != -1) {
        return champion;
      }
    });
    console.log(filteredbyClass)
 const allChampion = lol.data;
for (let i = 0; i < champion.length; i++){
  console.log(champion[i].tags)
}
 let filterFighters = document.querySelector("#filterFighters");
 console.log(filterFighters);
 Object.keys().filter(tags["Fighter"]).push(filterFighters);
 console.log(filterFighters);
  
  const fighterChampion = lol.data ;
  
  let filtersFigh = fighterChampion
  for (const filterFi in fighterChampion) {
      const filterFi = fighterChampion
     
    }
  console.log(filtersFigh);
  console.log(filterFighters);
  Object.values(fighterChampion).map( champion => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
      p.className = "tagOfChampion";
      img.className = "imageOfChampion";
      p.innerHTML = `${champion["tags"]}`;
      img.src = `${champion.splash}`;
      div.appendChild(img);
      div.appendChild(p);
      list.appendChild(div);
    });*/
  
