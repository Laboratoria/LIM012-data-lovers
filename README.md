# Data Lovers


## Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, se diseñe y construya una interfaz web donde se pueda
visualizar y manipular data.


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


### Definición del producto

<!-- Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario. -->

El proyecto "POKEMON" fue diseñado para que pueda ser utilizado por usuarios expertos en batalla del juego "PokemonGo" cuyo objetivo sea encontrar información relevante para batallar y potenciar las habilidades de sus pokemons.
El diseño presentado resuelve el inconveniente de no tener una información precisa de
un pokemon en especifico al momento de escoger uno para el combate. Presentamos una ficha técnica con datos escenciales que ayudaran a nuestros usuarios a encontrar esta información.
Además de tener un buscador para que el acceso a la data sea mucho más rapido. También brindamos el filtrado por tipo para que pueda seleccionar uno en especifico y el ordenar por letra de forma ascendente y descendente para que sea más sencillo encontrar por nombre el pokemon a consultar.

### Historias de usuario

#### H.U 1:
Como usuario experto en combate quiero poder filtrar los pokemon por tipo para saber cuál escoger en una batalla y donde encontrarlos.
1. Criterios de aceptación:
    * El usuario puede filtrar por tipo de pokemon
    * Se muestran los pokemones que cumplen con lo seleccionado por el usuario
    * El usuario puede elegir uno de ellos y ver toda su información
2. Definición de terminado:
    * Se muestran todos los pokemones que cumplen con el tipo elegido
    * Al prototipo se le realizó el test de usabilidad y fue aprobado por el usuario
    * Se ejecuto el "Unit test" sin errores
    * El HTML es semantico
    * El CSS es responsive
    * Se actualizo el repositorio en GitHub
    * Es visible en gh-pages

#### H.U 2:
Como usuario experto en combate quiero ordenar los pokemon de la A-Z y viceversa
para facilitar la búsqueda por nombre.
1. Criterios de aceptación:
    * El usuario desplega la barra ´´ordenar´´
    * Elige el orden que desea
    * Se muestran los pokemones de acuerdo al orden elegido
    * El usuario puede elegir uno de ellos y ver toda su información
2. Definición de terminado:
    * Se muestran todos los pokemones en el orden elegido
    * Al prototipo se le realizó el test de usabilidad y fue aprobado por el usuario
    * Se ejecuto el "Unit test" sin errores
    * El HTML es semantico
    * El CSS es responsive
    * Se actualizo el repositorio en GitHub
    * Es visible en gh-pages

#### H.U 3:
Como usuario experto en combate quiero poder buscar por nombre a los pokemones
para encontrarlos mas facilmente.
1. Criterios de aceptación:
    * El buscador es visible para el usuario
    * El resultado se muestra rápidamente
    * Cuando el usuario acepta entonces se le redirige a la página de resultados del texto introducido
    * Se mostraran los resultados al hacer click en la lupa
2. Definición de terminado:
    * El buscador es visible para el usuario
    * El resultado se muestra rápidamente
    * Cuando el usuario acepta entonces se le redirige a la página de resultados del texto     introducido
    * Se mostraran los resultados al hacer click en la lupa

#### H.U 4:
Como usuario experto en combate quiero ver la informacion del pokemon para poder escoger cual deseo usar en determinadas situaciones. _(name,num,about,img,size,type,resistance,weakness,special attack y evolution)_
1. Criterios de aceptación:
    * El usuario elige de la manera que desea al pokemon
    * Se muestra toda la informacion del pokemon elegido
2. Definición de terminado:
    * Se muestra la informacion del pokemon elegido
    * Al prototipo se le realizó el test de usabilidad y fue aprobado por el usuario
    * Se ejecuto el "Unit test" sin errores
    * El HTML es semantico
    * El CSS es responsive
    * Se actualizo el repositorio en GitHub
    * Es visible en gh-pages

#### H.U 5:
Como usuario experto en combate quiero saber cuántos caramelos me faltan para poder hacer evolucionar a mis pokemons.
1. Criterios de aceptación:
    * El usuario ingresa el número de camarelos que tiene
    * Se muestra el número de caramelos que le falta
2. Definición de terminado:
    * Al prototipo se le realizó el test de usabilidad y fue aprobado por el usuario
    * Se ejecuto el "Unit test" sin errores
    * El HTML es semantico
    * El CSS es responsive
    * Se actualizo el repositorio en GitHub
    * Es visible en gh-pages


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
1. Opción de búsqueda avanzada.

![PBF-1](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-bajaFidelidad/PBF1.jpg)

2. Opciones para filtrar y ordenar // Ficha técnica de pokemon.

![PBF-2](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-bajaFidelidad/PBF2.jpg)

3. Detalle de la opción por filtrado y resistencia.

![PBF-3](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-bajaFidelidad/PBF3.jpg)

4. Detalle de la opción de filtrado por tipo.

![PBF-4](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-bajaFidelidad/PBF4.jpg)

5. Detalles de la opción del Menu // Comparador de pokemons.

![PBF-5](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-bajaFidelidad/PBF5.jpg)

6. Formulario para ponerse en contacto

![PBF-6](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-bajaFidelidad/PBF6.jpg)


##### SKETCH MEJORADO
<!-- imagen que tenemos en el cel -->
<!-- Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`. -->

#### Prototipo de alta fidelidad
#### Desktop & Mobile
1. Buscador-Pantalla de inicio

![PAF-1](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/1D.jpg)
![PAF-1](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/1M.jpg)

2. Ordenar de forma ascendente y descendente y filtrar por tipo

![PAF-2](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/2D.jpg)
![PAF-2](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/2M.jpg)

3. Ficha técnica de cada pokemon

![PAF-3](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/3D.jpg)
![PAF-3](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/3M.jpg)

4. Primera pantalla del comparador
![PAF-4](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/4D.jpg)
![PAF-4](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/4M.jpg)

5. Segunda pantalla del comparador (cuando ya escogen a los pokemones a comparar)

![PAF-5](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/5D.jpg)
![PAF-5](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/5M.jpg)

6. Calculadora de caramelos

![PAF-6](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/6D.jpg)
![PAF-6](https://github.com/katherinChi/LIM012-data-lovers/blob/dataloversKC/prototipo-altaFidelidad/6M.jpg)

<!-- Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la
[identidad gráfica](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE)
correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_. -->

#### Testeos de usabilidad

Se realizó el test de usabilidad en 4 usuarios y el resultado mostró lo siguiente:
##### Usuario 1:
Mostró demora al localizar los botones necesarios para realizar cada tarea encomendada.
El tener tanta información conglomerada lo confundía. Para solucionarlo decidimos dejar de lado la opción de búsqueda avanzada y colocar la información que contenía como parte del menu.

##### Usuario 2:
Reflejo su duda al no saber cuál buscador utilizar, se le dió la tarea de buscar a un pokemon en específico. Sin embargo comentó que lo confundía que el ícono este situado en el menu superior y que también se encuentre en la barra de búsqueda avanzada. Consideró que uno estaba demás. Así que se tomo la decisión de eliminar el ícono de búsqueda de la barra de menú y poner solo una barra de búsqueda en el medio de la pantalla principal.

##### Usuario 3:
Se noto una mejora considerable respecto al tiempo que le tomaba realizar las tareas brindadas. Sin embargo, lo que esperaba encontrar en el boton candy era totalmente distinto a lo que se imaginaba. Así que fue reemplazado por Candy calc, siendo esta palabra más relacionada al cálculo.

##### Usuario 4:
El usuario indicó que en la segunda pantalla no sabía si tenía que escoger una opción o las dos para que se puedan filtrar los datos. Por lo que en la parte superior de los filtros hay una indicación respecto a eso (Choose one or both!).

##### Usuario 5:
Al realizar todas las modificaciones anteriores, el quinto usuario al que se aplico el test de usabilidad, afirmo que consideraba que teniamos un diseño amigable y entendía perfectamente para que era cada boton que mostrabamos. Lo cual fue respaldado con el tiempo de respuesta al realizar las tareas encomendadas.

<!-- Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final. -->

<!-- ### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
No tienes tiempo ilimitado para trabajar, así es que deberás priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
   <!--filtrar y ordenar la data.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones que tenga tu código.
<!--encargadas de  _procesar_, _filtrar_ y _ordenar_ la data, así
como _calcular_ estadísticas.-->

<!--Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs). -->
<!--
## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── atletas
|  |     ├── atletas.js
|  |     └── atletas.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/pokemon/pokemon.js';
```

La línea quedaría así:

```js
import data from './data/pokemon/pokemon.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te reomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:
 -->
<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

<!-- ***

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atomicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***
 -->
## 9. Checklist

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
