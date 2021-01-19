import { cleanData, dataArr2D, arrNumPaginate } from './data.js';
import data from './data/athletes/athletes.js';
//import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

const root = document.getElementById('root');
const header = document.createElement('header');
const main = document.createElement('main');
header.innerHTML = `<h1>Athletes</h1>
<nav>
  <ul>
    <li>Athlestes</li>
    <li>Countries</li>
    <li>Disciplines</li>
    <li>Medal table</li>
  </ul>
  <input type="text">
</nav>`
root.appendChild(header)

const createCards = (athletes) => {
  let cards = '';
  athletes.forEach((elem) => {
    cards += `<div class="margin-05 flex-container card">
    ${elem.noc !== 'ioa' ? 
    `<img src="https://restcountries.eu/data/${elem.noc}.svg" alt="${elem.team}" class="margin-05">` : 
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Olympic_flag.svg/640px-Olympic_flag.svg.png" class="margin-05">'}
    <p class="margin-05">${elem.name}</p>
    </div>`
  });
  return cards;
};
const newData = dataArr2D(cleanData(data.athletes));
const containerCard = document.createElement('div');
containerCard.classList.add('flex-wrap');
containerCard.innerHTML = createCards(newData[0]);
main.appendChild(containerCard);

const showPaginate = (element, data, index) => {
  element.innerHTML = '';
  data[index].forEach((num, i) => {
    const linkElem = document.createElement('a');
    i === 0 ? linkElem.classList.add('active') : '';
    linkElem.setAttribute('href', '#'); 
    linkElem.textContent = num;
    linkElem.addEventListener('click', () => {
      containerCard.innerHTML = createCards(newData[num]);
      element.querySelector('a[class="active"]').classList.remove('active');
      linkElem.classList.add('active');
    })
    element.appendChild(linkElem);
  });
};

const paginate = (data) => {
  const divContainer = document.createElement('div');
  divContainer.classList.add('pagination', 'flex-center');
  divContainer.innerHTML = `
  <a href="#min">&laquo;</a>
  <div></div>
  <a href="#add">&raquo;</a>
  `;
  const addElem = divContainer.querySelector('a[href="#add"]');
  const minElem = divContainer.querySelector('a[href="#min"]');
  const containerNum = divContainer.querySelector('div');

  showPaginate(containerNum, data, 0);

  let acc = 0
  addElem.addEventListener('click', () => {
    acc += 1
    showPaginate(containerNum, data, acc);
  });
  minElem.addEventListener('click', () => {
    acc -= 1
    showPaginate(containerNum, data, acc);
  });

  return divContainer;
};

main.appendChild(paginate(arrNumPaginate(80, 7)));

root.appendChild(main)














/*var obj = data.data;

for (const prop in obj) {
  console.log(obj[prop]);
}*/


