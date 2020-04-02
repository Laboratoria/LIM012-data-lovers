# Data Lovers
## Índice
* [1. Descripción del proyecto](#descripción-general-del-proyecto)
* [2. Objetivo de la página](#objetivo-de-la-página)
* [3. Historias de usuario](#historias-de-usuario)
* [4. Diseño de la Interfaz de Usuario](#diseño-interfaz-usuario)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Checklist](#6-check-list)

***

## 1. Descripción del proyecto

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y ha sido nombrada "el mejor juego para móviles" por Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch (tomado de Google Play).
¿Tú también quieres unirte a esta experiencia pero sabes muy poco o nada acerca de pokemón? ¿Llevas poco tiempo jugando con esta aplicación y te sientes perdido(a)?

[Pokedex]() es una página web dirigida principalmente a jugadores de Pokemon GO principiantes que quieren saber más información de cada pokemon y de esta manera estar mejor preparado para una batalla, aunque igual resulta útil para jugadores de cualquier nivel.

## 2. Objetivo de la página

Mediante la página web, podrás acceder a la información de cada uno de los pokémones (dónde se detalla su nombre, una breve descripción, sus debilidades, resistencias, etc.), no necesitas saber su nombre exacto, simplemente bastará saber su inicial o las primeras letras de los pokemones que deseas conocer y nuesro buscador dinámico hará su trabajo.
También podrás clasificarlos según el tipo de pókemon donde podrás visualizar cuantos pokemones de ese tipo hay y que pokemones son resistentes o debiles a este mismo tipo , ordenarlos de manera ascendente o descendente según salud, resistencia o simplemente alfabéticamente e incluso podrás obtener las 5 mejores combinaciones de ataque de cada uno de ellos, lo cual será particularmente útil cuando se quiere incurrir a una batalla.

## 3. Historias de usuario
Las historias de usuario se trabajaron con la herramienta trello en el siguiente [link](https://trello.com/b/yXJ562wy/data-lovers-pokem%C3%B3n-l) donde se puede visualizar 6 historias de usuario que donde cada una consiste con criterios de aceptación, definición de terminado y pequeñas tareas en las cuales fueron subdivididas.


## 4. Diseño de la Interfaz de Usuario

### Prototipo de baja fidelidad
Diseñamos bosquejos (para desktop, móvil t tablet) que constaba de dos pantallas.
#### Prototipo Móvil
![](/src/images/movil1.jfif)
![](/src/images/movil2.jfif)
![](/src/images/movil3.jfif)
#### Prototipo Tablet
![](/src/images/tablet1.jfif)
![](/src/images/tablet2.jfif)
![](/src/images/tablet3.jfif)
#### Prototipo Desktop
![](/src/images/desktop1.jfif)
![](/src/images/desktop2.jfif)
![](/src/images/desktop3.jfif)

### Prototipo de alta fidelidad
Diseñamos prototipos en FIGMA (para desktop y móvil) que constaba de dos pantallas.
#### Prototipo para Móvil y tablet
![](/src/images/figma-movil.PNG)
#### Prototipo para Desktop
![](/src/images/desktop-figma-1.PNG)
![](/src/images/desktop-figma-2.PNG)
![](/src/images/desktop-figma-3.PNG)


## 5. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.

Revisa la lista y reflexiona sobre los objetivos que conseguiste en el
proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual
y de equipo.

### UX

- [ ] Diseñar la aplicación pensando y entendiendo al usuario.
- [ ] Crear prototipos para obtener _feedback_ e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [ ] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [ ] Entender y reconocer por qué es importante el HTML semántico.
- [ ] Identificar y entender tipos de selectores en CSS.
- [ ] Entender como funciona `flexbox` en CSS.
- [ ] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [ ] Entender y reconocer los selectores del DOM (`querySelector` | `querySelectorAll`).
- [ ] Manejar eventos del DOM. (`addEventListener`)
- [ ] Manipular dinámicamente el DOM. (`createElement`, `appendchild`, `innerHTML`, `value`)

### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (`parámetros` | `argumentos` | `valor de retorno`).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [ ] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [ ] Utilizar los repositorios de GitHub (`clone` | `fork` | `gh-pages`).
- [ ] Colaborar en Github (`pull requests`).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Utilizar linter para seguir buenas prácticas (ESLINT).

## 6. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
