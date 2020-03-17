import lol from './data/lol/lol.js';
//console.log(lol.data); 
//import {seeAllChampions} from './data.js';
const allchampionList = lol.data;
    console.log(allchampionList);
 let list = document.querySelector("#root");
    console.log(root);
     //objects
 Object.values(allchampionList).forEach(champion => {
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

    let role = lol.data;
    // console.log(role)
    
    let newArray = Object.entries(role)
    console.log(newArray);
    
    const champioF = newArray.filter((tags => tags === "Fighter"));
      console.log(champioF);
    

   /*for(let i = 0; i< championList.length; i++){git
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
  
