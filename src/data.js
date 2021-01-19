export const cleanData = (data) => data.map(elem => ({
    name: elem.name.split(' ').slice(0, 2).toString().replace(',', ' '),
    gender: elem.gender,
    height: elem.height,
    weight: elem.weight,
    sport: elem.sport,
    team: elem.team,
    noc: elem.noc.toLowerCase(),
    age: elem.age,
    event: elem.event,
    medal: elem.medal,
  })
);

export const dataArr2D = (athletes) => { 
  const arr = [];
  for (let x = 0; x <= athletes.length; x = x + 25) {
    const newArr = [];
    for (let i = 0; i < 25; i++) {
      newArr.push(athletes[i + x]);
    }
    arr.push(newArr);
  }
  return arr;
};

export const arrNumPaginate = (total, quantity) => { 
  const arr = [];
  for (let x = 0; x <= total; x = x + quantity) {
    const newArr = [];
    for (let i = 1; i <= quantity; i++) {
      newArr.push(i + x);
    }
    arr.push(newArr);
  }
  return arr;
};

export const addPaginate = () => 'OMG';

export const minPaginate = () => 'OMG';