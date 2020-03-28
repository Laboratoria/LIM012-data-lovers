// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

import dataAtletas from './data/atletas/atletas.js';

console.log(dataAtletas);

const data = (dataAtletas.atletas);

document.getElementById('main').innerHTML = `
<h2 class='titleh2' >TODOS LOS ATLETAS</h2>

<div class="container">
${data.map(dataPrincipal => `
<div class="cards">
<img src=${dataPrincipal.gender === 'F' ? './img/avatarMujer.jpg' : './img/avatarVaron.jpg'} class="imgAvatar" >
<h2>${dataPrincipal.name}</h2>
<p><strong class = "description">Sport :</strong> ${dataPrincipal.sport} </p>
<p><strong class = "description">Weigth :</strong> ${dataPrincipal.weight} </p>
<p><strong class = "description">Team:</strong> ${dataPrincipal.team} </p>
<img src="https://www.countryflags.io/${dataPrincipal.noc}/flat/64.png" class>
</div>
`).join('')}
</div>
`;
