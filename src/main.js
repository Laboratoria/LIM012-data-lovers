// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

import dataAtletas from './data/atletas/atletas.js';

console.log(dataAtletas);

const data = (dataAtletas.atletas);

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
