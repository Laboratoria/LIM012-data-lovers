/* eslint-disable no-plusplus */
// AQUI MANEJAMOS LAS FUNCIONES

// estas funciones son de ejemplo
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

export const crearTemplate = arr => {
  let stringTemplate = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      stringTemplate += `<div class = "class-div">     
<img class="class-img" src = ${arr[i][j].splash}>
<p class = "class-name">${arr[i][j].id}</p>
</div>`;
      // console.log(arr[0][0].id);
    }
    return stringTemplate;
  }
  return stringTemplate;
};
