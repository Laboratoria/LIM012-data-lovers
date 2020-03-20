# Atletas Olímpicos

El máximo sueño de muchos atletas es poder representar a su país como deportistas en los Juegos Olímpicos. Para ello deben invertir miles de horas de entrenamiento para estar preparados física y técnicamente y con la mejor táctica de juego. Sin embargo la preparación de un atleta va mucho más allá, deben estudiar las estadísticas de Juegos Olímpicos pasados, conocer cuáles fueron los participantes más destacados y en qué disciplinas, para luego poder investigar sobre ellos y sus tácticas de juego a mayor profundidad.

## Hallazgos

Hicimos una rápida investigación sobre la información que podrían necesitar los atletas como parte de su preparación deportiva y encontramos que los datos de mayor interés para ellos son:

Información relevante sobre los atletas olímpicos, como nombre, altura, peso, país que representa y especialidad deportiva.
Participación del o la atleta en los Juegos Olímpicos: Años de las olimpiadas en las que participó y número de medallas ganadas.

Adicionalmente a esta información, para nuestros usuarios es importante poder ver el histórico por país participante, para tener una idea general del estado de su competencia.

## Detalles de la data

### Con este set de datos puedes obtener los siguientes datos de un atleta:

- nombre
- género
- altura
- peso
- deporte de especialidad
- años de las olimpiadas en las que participó
- fecha de nacimiento
- equipo (el país al que pertenece)
- NOC (abreviatura del país)

### Con este set de datos puedes obtener los siguientes datos de una disciplina:

- Tipos de disciplinas, por ejemplo: 'Alpine Skiing Men's Super G, Ski Jumping Men's Normal Hill, Individual, etc'.
- Los atletas pueden participar en una o más disciplinas, estas disciplinas para la temporada de "verano" o "invierno" son diferentes, ya que los deportes para estas son distintos, pero se repiten por temporada.
- La ciudad donde fue la olimpiada.
- Lista de atletas que participan en una disciplina y la medalla que ganaron.
- El año en el que fue la olimpiada.

### Estructura de la data

La data es un objeto que contiene una propiedad llamada atletas, dicha
propiedad es un array de objetos, donde cada objeto tiene datos de un atleta.

Detalle de cada objeto, por ejemplo:

```json
{
  "id": 11799,
  "name": "Matteo Bisiani",
  "gender": "M",
  "height": "184",
  "weight": "85",
  "date-birth": 1976,
  "sport": "Archery",
  "game": "2000 Summer",
  "team": "Italy",
  "noc": "ITA",
  "disciplinas": [
    {
      "disciplina": "Archery Men's Team",
      "temporada": "Summer",
      "año": 2000,
      "ciudad": "Sydney",
      "medalla": "Silver"
    }
  ]
}


```