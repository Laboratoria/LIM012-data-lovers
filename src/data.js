// estas funciones son de ejemplo

export const newArray = atletas.map((atletas) => {

    return {
      nombre : atletas.nombre,
      deporte: atletas.deporte,
      equipo: atletas.noc
    }
    
  })
  console.log(newArray)
  document.getElementById("contenedor").innerHTML = newArray;

export const anotherExample = () => 'OMG';
