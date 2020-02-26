# Pokémon

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil
millones de descargas y ha sido nombrada "el mejor juego para móviles" por
Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch
(tomado de Google Play).

El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos
en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse
físicamente por las calles de la ciudad para progresar. La aplicación comporta
un elemento de interacción social, ya que promueve reuniones físicas de los
usuarios en distintas ubicaciones de sus poblaciones.

## Hallazgos

Para entender mejor qué necesidades específicas tienen los jugadores de Pokémon
Go, hicimos una rápida investigación (research) y estos son algunos de los
hallazgos.

Los entrenadores de Pokémon Go tienen como objetivo coleccionar diferentes tipos
de Pokémon para completar su Pokédex. Además, usan sus Pokémon para enfrentarse
a otros entrenadores u otros Pokémon mientras realizan incursiones y batallan
en gimnasios.

## Atrapar y coleccionar los Pokémon

Los Pokémon aparecen en estado salvaje (mientras caminan por la calle) donde
pueden ser capturados por los entrenadores. Hay Pokémon que aparecen con más
frecuencia que otros. Por ejemplo, es muy difícil encontrar alguna evolución de
un Pokémon. Algunos Pokémon pueden evolucionar a otra forma (ej. Pikachu a
Raichu), pero necesitan una cantidad determinada de caramelos para poder
evolucionar, los cuales se obtienen cada vez que captura a un Pokémon de su
misma especie. Por ejemplo, cada vez que se captura a un Pikachu el entrenador
obtiene 3 caramelos tipo Pikachu. Al final necesita 25 para poder evolucionarlo
a Raichu. La cantidad de caramelos necesaria para evolucionar un Pokémon varía
de una especie a otra.

### Datos que te ayudarán a atrapar y coleccionar pokémons

* Los Pokémon tienen características únicas que determinan las decisiones que
toma el usuario (tipo, tamaño, info, etc).
* encounter: % base de huida  y %  base de captura.
* spaw-chance: frecuencia de aparición de un pokémon.
* egg: en que tipo de huevos aparece el pokémon.
* buddy-distance-km: distancia en km que debe caminar el usuario con un pokémon
con buddy para obtener 1 caramelo de dicho pokémon.
* evolution: tipo de caramelo, siguiente evolución y anterior evolución, si
necesita algún ítem para evolucionar.

## Pelear para ganar gimnasios, incursiones y a otros entrenadores

Los Pokémon y sus ataques son de distintos tipos. Por ejemplo, Pikachu es de
tipo eléctrico y tiene ataques eléctricos y normales. Tener presente esta
característica es importante cuando un entrenador elige al Pokémon más adecuado
para su batalla. Por ejemplo, hay Pokémon que son débiles ante ataques de fuego
y otros que resisten más este tipo de ataques. Por eso un entrenador necesita
saber cuáles son los mejores ataques (por tipo) por cada Pokémon.

Además, en incursiones o peleas de gimnasios, un entrenador necesita armar un
equipo equilibrado de Pokémon con diferentes tipos para hacer el mayor daño
posible y ayudar a su equipo.

### Datos que te ayudarán para pelear

* stats: base de ataque,defensa y salud + max CP(max puntos de combate) y max
HP(max puntos de salud).
* resistant: a qué tipos de pokémon es resistente .
* weaknesses: contra qué tipos de pokémon es débil.
* quick-move: [Movimientos rápidos](http://www.pokego.org/quick-moves/).
* special-attack: [Ataques especiales](http://www.pokego.org/charge-moves/)

### Datos que puedo obtener de acá

* Qué pokémon tiene mayor puntos de combate y mayor puntos de salud.
* Algunas veces el usuario tiene que elegir a los que tienen menos cantidad de
debilidades y/o resistencia y saber de qué tipo son. Por ello, es importante
para un maestro Pokémon poder ordenarlos por estas 3 características.
* STAB: (Same Type Attack Bonus, traducido como Bonificación por Ataque del
Mismo Tipo). Se calcula así: si el Pokémon que usa el movimiento es del mismo
tipo que el movimiento, el daño aumenta en un 20%
* DPS (daño por segundo): Se calcula dividiendo el daño base del movimiento por
el STAB entre el tiempo que toma el movimiento.
* EPS (energía por movimiento): Se calcula dividiendo la energía entre el
tiempo que toma el movimiento.
* El mejor set de movimientos: calcula cuál es la mejor combinación de
quick-move con special-attack para ataque y defensa en gimnasios, acá te
dejamos este [video](https://www.youtube.com/watch?v=d7wl8pE0lHA) que te
explica como calcularlo (solo una diferencia, considera 20% para STAB, en lugar
de 25%).

Tanto quick move como special attack tienen información de cada movimiento:
nombre, tipo, base de daño, energía, duración del movimiento(seg).

## Detalles de la data

### Estructura de la data

La data es un objeto que contiene una propiedad llamada pokemon, dicha
propiedad es un array de objetos, donde cada objeto tiene los datos de
un pokémon.

Detalle de cada objeto, por ejemplo:

```json
{
  "num": "044",
  "name": "gloom",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Gloom releases a foul fragrance from the pistil of its
            flower. When faced with danger, the stench worsens. If
            this Pokémon is feeling calm and secure, it does not
            release its usual stinky aroma.",
  "img": "https://www.serebii.net/pokemongo/pokemon/044.png",
  "size": {
    "height": "0.79 m",
    "weight": "8.6 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  "encounter": {
    "base-flee-rate": "0.07",
    "base-capture-rate": "0.3"
  },
  "spawn-chance": "0.064",
  "stats": {
    "base-attack": "153",
    "base-defense": "136",
    "base-stamina": "155",
    "max-cp": "1681",
    "max-hp": "134"
  },
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
  "quick-move": [
    {
      "name": "razor leaf",
      "type": "grass",
      "base-damage": "13",
      "energy": "7",
      "move-duration-seg": "1"
    },
    {
      "name": "acid",
      "type": "poison",
      "base-damage": "9",
      "energy": "8",
      "move-duration-seg": "0.8"
    }
  ],
  "special-attack": [
    {
      "name": "petal blizzard",
      "type": "grass",
      "base-damage": "110",
      "energy": "-100",
      "move-duration-seg": "2.6"
    },
    {
      "name": "sludge bomb",
      "type": "poison",
      "base-damage": "80",
      "energy": "-50",
      "move-duration-seg": "2.3"
    },
    {
      "name": "moonblast",
      "type": "fairy",
      "base-damage": "130",
      "energy": "-100",
      "move-duration-seg": "3.9"
    }
  ],
  "egg": "not in eggs",
  "buddy-distance-km": "3",
  "evolution": {
    "candy": "oddish candy",
    "next-evolution": [{
        "num": "045",
        "name": "vileplume",
        "candy-cost": "100"
      },
      {
        "num": "182",
        "name": "bellossom",
        "candy-cost": "100",
        "evolution-item": {
          "name": "sun stone",
          "img": "link"
        }
      }
    ],
    "prev-evolution": [{
      "num": "043",
      "name": "oddish",
      "candy-cost": "25"
    }]
  }
},


```
