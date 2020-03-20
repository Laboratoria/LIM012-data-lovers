# League of Legends (LoL)

League of Legends es un juego de estrategia que se juega en línea y que es
multijugador. Tiene millones de jugadores en todo el mundo y, por ahora es uno
de los _esports_ de referencia y que más público atraen.
Durante el juego, los equipos trabajan juntos para lograr una
condición de victoria que sucede al destruir la estructura central en la base
del equipo enemigo.

En todos los modos de juego, los jugadores controlan
personajes llamados **campeones**, que son elegidos o asignados en cada partida,
y que tienen un conjunto de habilidades únicas. Es con esos campeones con los
que se juega toda la partida. Para entender un poco más del juego puedes entrar
a este [link](https://www.redbull.com/es-es/5-consejos-empezar-jugar-league-of-legends#targetText=Lo%20primero%20que%20tienes%20que,donde%20lucha%20cinco%20contra%20cinco).

## Algunos datos de cómo se juega:

- Para jugar tienes que elegir a **campeones** que son los personajes que
estarán en tu equipo y que lucharán contra el enemigo.
- Los campeones tienen distintos tipos de habilidades, algunas inherentes
  (básicas/principales) a ellos y otras (pasivas/secundarias) que pueden ser
  adquiridas. En ambos casos, estas habilidades pueden ir desarrollándose hasta
  alcanzar su máximo nivel.
- Los campeones tienen distintos roles en los que se desempeñan:
   Luchador: Especializado en combate cercano. Combinan objetos de daño con
    objetos de aguante. También se los conoce como _offtanks_.
   - Tirador: Especializado en ataque a distancia. Popularmente conocido como
    _AD Carry_ del inglés _attack damage carry_ o carreador de daño de ataque.
   - Mago o Hechicero: Especializado en habilidades y daño mágico. Popularmente
    conocido como _AP Carry_ del inglés _ability power carry_ o carreador de
    poder de habilidad.
   - Asesino: Especializado en emboscar al enemigo, atacando por sorpresa y
    retirándose rápidamente. Su misión es eliminar al jugador más importante del
    equipo enemigo (generalmente el tirador) aunque ello suponga morir él
    también.
   - Tanque: Especializado en resistencia. Su misión es absorber la mayor
    cantidad de daño posible e iniciar las peleas.
   - Apoyo o Soporte: Especializado en apoyar a su equipo y aportar visión en el
    mapa mediante guardianes de visión (_wards_).

## Hallazgos

- Para poder elegir a los campeones que van a combatir en una partida, es
  importante para el jugador de LoL poder saber cuál es el rol de cada campeón.
- Adicionalmente al rol, cada campeón tiene distintos niveles de ataque, por
  ejemplo dentro de los _tanques_ hay campeones con distintos niveles de ataque,
  defensa, velocidad o poder. Es importante para el jugador de LoL poder saber
  quiénes son los más poderosos o lo más defensivos, para poder elegir al mejor
  grupo de campeones para una partida.estarán
  en tu equipo y que lucharán contra el enemigo.
- Los campeones tienen distintos tipos de habilidades, algunas inherentes
  (básicas/principales) a ellos y otras (pasivas/secundarias) que pueden ser
  adquiridas. En ambos casos, estas habilidades pueden ir desarrollándose hasta
  alcanzar su máximo nivel.
- Los campeones tienen distintos roles en los que se desempeñan:
   - Luchador: Especializado en combate cercano. Combinan objetos de daño con
    objetos de aguante. También se los conoce como _offtanks_.
   - Tirador: Especializado en ataque a distancia. Popularmente conocido como
    _AD Carry_ del inglés _attack damage carry_ o carreador de daño de ataque.
   - Mago o Hechicero: Especializado en habilidades y daño mágico. Popularmente
    conocido como _AP Carry_ del inglés _ability power carry_ o carreador de
    poder de habilidad.
   - Asesino: Especializado en emboscar al enemigo, atacando por sorpresa y
    retirándose rápidamente. Su misión es eliminar al jugador más importante del
    equipo enemigo (generalmente el tirador) aunque ello suponga morir él
    también.
   - Tanque: Especializado en resistencia. Su misión es absorber la mayor
    cantidad de daño posible e iniciar las peleas.
   - Apoyo o Soporte: Especializado en apoyar a su equipo y aportar visión en el
    mapa mediante guardianes de visión (_wards_).

## Detalles de la data

### Estructura de la data

La data es un objeto que contiene una propiedad llamada data, dicha
propiedad es un objeto, donde cada propiedad de este objeto es un campeón.

Detalle de cada propiedad, por ejemplo:

```json
"Aatrox": {
  "version": "6.24.1",
  "id": "Aatrox",
  "key": "266",
  "name": "Aatrox",
  "title": "the Darkin Blade",
  "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
  "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  "info": {
    "attack": 8,
    "defense": 4,
    "magic": 3,
    "difficulty": 4
  },
  "image": {
    "full": "Aatrox.png",
    "sprite": "champion0.png",
    "group": "champion",
    "x": 0,
    "y": 0,
    "w": 48,
    "h": 48
  },
  "tags": [
    "Fighter",
    "Tank"
  ],
  "partype": "BloodWell",
  "stats": {
    "hp": 537.8,
    "hpperlevel": 85,
    "mp": 105.6,
    "mpperlevel": 45,
    "movespeed": 345,
    "armor": 24.384,
    "armorperlevel": 3.8,
    "spellblock": 32.1,
    "spellblockperlevel": 1.25,
    "attackrange": 150,
    "hpregen": 6.59,
    "hpregenperlevel": 0.5,
    "mpregen": 0,
    "mpregenperlevel": 0,
    "crit": 0,
    "critperlevel": 0,
    "attackdamage": 60.376,
    "attackdamageperlevel": 3.2,
    "attackspeedoffset": -0.04,
    "attackspeedperlevel": 3
  }
},


```