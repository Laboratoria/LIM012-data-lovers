// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

import dataAtletas from './data/atletas/atletas.js';

console.log(dataAtletas);

const data = (dataAtletas.atletas);
console.log("todos los atletas =>",data);

document.getElementById('main').innerHTML = `
<h2 class='title' >TODOS LOS ATLETAS</h2>

<div class="container">
${data.map(dataPrincipal => `
<div class="cards">
<h2>${dataPrincipal.name}</h2>
<p><strong>Sport :</strong> ${dataPrincipal.sport} </p>
<p><strong>Weigth :</strong> ${dataPrincipal.weigth} </p>
<p><strong>Team:</strong> ${dataPrincipal.team} </p>
</div>
`).join('')}
</div>
`;

/* filtrar a los atletas por  */

const filtrardataHombres = data.filter(items =>{ return (items.gender === 'M')
});
console.log("atletas hombres =>", filtrardataHombres);

const filtrardataMujeres = data.filter( items =>{ return (items.gender === 'F')
});
console.log("atletas mujeres =>", filtrardataMujeres);

/* para las opciones de temporada y medallas debemos filtar el array disciplinas de array general Atletas */
const filtrardataInvierno = data.filter( items =>{ return (items.disciplinas.filter( item =>{ return (item.temporada === 'Summer')}))
});
console.log("temporada inviernop =>", filtrardataInvierno);

const filtrarmedallaOro = data.filter( items =>{ return (items.gender === 'F')
});
console.log("atletas mujeres =>", filtrarmedallaOro);