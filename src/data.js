/* eslint-disable no-plusplus */
import data from './data/pokemon/pokemon.js';

export const dinamicSearchPokemon = (wordIntroduced) => {
  const pokemon = [];
  let word;
  for (let i = 0; i < data.pokemon.length; i += 1) {
    word = data.pokemon[i].name.substring(0, wordIntroduced.length);
    if (wordIntroduced.length <= data.pokemon[i].name.length && wordIntroduced.length !== 0) {
      if (wordIntroduced.toLowerCase() === word.toLowerCase()) {
        pokemon.push(data.pokemon[i]);
      }
    }
  }
  return pokemon;
};

export const filterPokemon = (whichFilter, pokemonType) => {
  let result = [];
  switch (whichFilter) {
    case 'type':
      result = data.pokemon.filter(pk => pk.type.includes(pokemonType));
      break;
    case 'resistant':
      result = data.pokemon.filter(pokemon => pokemon.resistant.includes(pokemonType));
      break;
    case 'weaknesses':
      result = data.pokemon.filter(pokemon => pokemon.weaknesses.includes(pokemonType));
      break;
    default:
      // do nothing
  }
  // console.log(result);
  return result;
};

export const orderBy = (dataPokemon, whichOrder) => {
  let pokemonOrdened = [];
  switch (whichOrder) {
    case 'max-cp':
      pokemonOrdened = dataPokemon.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
      break;
    case 'max-hp':
      pokemonOrdened = dataPokemon.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
      break;
    case 'a-z':
      pokemonOrdened = dataPokemon.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    default:
      // do nothing
  }
  return pokemonOrdened;
};

export const changeOrder = dataPokemon => dataPokemon.reverse();


export const calculateBetterCombinations = (whichPokemon) => {
  const timeFixed = 30;
  let result = [];

  for (let i = 0; i < whichPokemon['quick-move'].length; i++) {
    for (let j = 0; j < whichPokemon['special-attack'].length; j++) {
      // eslint-disable-next-line eqeqeq
      const igualTypeQM = element => element == whichPokemon['quick-move'][i].type;
      const quickMoveEPSduration = Number(whichPokemon['quick-move'][i]['move-duration-seg']);
      let quickMoveDPS = whichPokemon['quick-move'][i]['base-damage'] / quickMoveEPSduration;
      if (whichPokemon.type.some(igualTypeQM)) {
        quickMoveDPS = (Number(whichPokemon['quick-move'][i]['base-damage']) + whichPokemon['quick-move'][i]['base-damage'] * 0.2) / whichPokemon['quick-move'][i]['move-duration-seg'];
      }
      const quickMoveEPS = Number(whichPokemon['quick-move'][i].energy) / quickMoveEPSduration;

      // eslint-disable-next-line eqeqeq
      const igualTypeSA = element => element == whichPokemon['special-attack'][j].type;
      let specialAttackDB = whichPokemon['special-attack'][j]['base-damage'];
      if (whichPokemon.type.some(igualTypeSA)) {
        specialAttackDB = (Number(whichPokemon['special-attack'][j]['base-damage']) + whichPokemon['special-attack'][j]['base-damage'] * 0.2);
      }
      const specialAttackDuration = Number(whichPokemon['special-attack'][j]['move-duration-seg']);
      const specialAttackE = Number(whichPokemon['special-attack'][j].energy);

      const timeToChargeEnergy = -specialAttackE / quickMoveEPS;

      const timeToDamageByAttack = timeToChargeEnergy + specialAttackDuration;
      const damageByAttack = (quickMoveDPS * timeToChargeEnergy) + specialAttackDB;

      const timeAttackAmountNotUsed = timeFixed % timeToDamageByAttack;
      const attackAmountUsed = (timeFixed - timeAttackAmountNotUsed) / timeToDamageByAttack;
      const damageOnlyByAttackUsed = damageByAttack * attackAmountUsed;
      const timeChargeAmountNotUsed = timeAttackAmountNotUsed % timeToChargeEnergy;
      // eslint-disable-next-line max-len
      const chargeAmountInTimeNoUsed = (timeAttackAmountNotUsed - timeChargeAmountNotUsed) / timeToChargeEnergy;
      // eslint-disable-next-line max-len
      const damageOnlyInTimeToCharge = chargeAmountInTimeNoUsed * (quickMoveDPS * timeToChargeEnergy);
      // eslint-disable-next-line max-len
      const damageInTimeChargeNotUsed = (timeChargeAmountNotUsed / specialAttackDuration) * specialAttackDB;
      // eslint-disable-next-line max-len
      let totalDamage = damageOnlyByAttackUsed + damageOnlyInTimeToCharge + damageInTimeChargeNotUsed;
      totalDamage = parseFloat(Math.round(totalDamage * 100) / 100).toFixed(2);

      result.push([whichPokemon['quick-move'][i].name, whichPokemon['special-attack'][j].name, totalDamage]);
    }
  }
  result = result.sort((a, b) => b[2] - a[2]);
  if (result.length > 5) {
    result = result.slice(0, 5);
  }
  return result;
};
