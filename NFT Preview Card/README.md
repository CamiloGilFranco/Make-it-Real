# NFT Preview Card Component

Esta es una solución al proyecto **NFT Preview Card Component** del curso Make It Real.

## Tabla de contenido

- [NFT Preview Card Component](#nft-preview-card-component)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Resumen](#resumen)
    - [El reto](#el-reto)
    - [Captura de pantalla](#captura-de-pantalla)
  - [Mi proceso](#mi-proceso)
    - [Construido con](#construido-con)
    - [Lo que aprendí](#lo-que-aprendí)
    - [Desarrollo continuo](#desarrollo-continuo)
    - [Recursos útiles](#recursos-útiles)
  - [Autor](#autor)

## Resumen

El reto consiste en generar, mediante HTML y CSS, una pagina que muestre una tarjeta con una imagen que representa un NFT, su nombre, información relevante y su creador.

### El reto

Los usuarios deben ser capaces de:

- visualizar el componente anteriormente descrito, este componente debe ser responsivo, generando una visualización móvil para dispositivos cuyo ancho sea inferior a 375 pixeles y otra visualización para dispositivos con pantallas mas grandes.
- en dispositivos móviles se debe evidenciar un cambio de color al presionar el nombre del creador y el titulo del NFT asi como un filtro sobre la imagen
- en dispositivos desktop se debe evidenciar los mismos cambios de estilo anteriormente mencionados al pasar el cursor sobre los elementos

### Captura de pantalla

Dispositivo móvil

![](./src/Captura%20de%20pantalla%20movil.png)

Dispositivo de escritorio

![](./src/Captura%20de%20pantalla%20desktop.png)

## Mi proceso

- Identificar los diferentes contenedores de elementos HTML
- generar la estructura de la pagina con HTML haciendo énfasis en el contenido que debe tener cada contenedor
- crear la hoja de estilos CSS y usando la herramienta FlexBox generar los estilos correspondientes para dispositivos de hasta 375 pixeles de ancho
- crear las pseudoclases para el estado active
- crear una MediaQuery que modifique los estilos creados anteriormente para generar el contenido de un dispositivo de escritorio
- crear las pseudoclases para el estado hover

### Construido con

- Marcado HTML5
- Propiedades personalizadas de CSS
- FlexBox
- Flujo de trabajo móvil primero

### Lo que aprendí

- posicionamiento absoluto y relativo
- pseudoclases de estado
- notación de colores rgba

### Desarrollo continuo

Es de gran importancia seguir profundizando en el atributo `position` y sus valores asi como en las demás pseudoclases existentes y que no fueron abordadas en este proyecto

### Recursos útiles

- [ CSS-TRICKS ](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): Este recurso nos mostró como utilizar de forma correcta las propiedades de FlexBox vistas anteriormente.
- [Mozilla Developer Network](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes): Este recurso muestra las pseudoclases existentes y su función

## Autor

- Adrian Camilo Gil
- Sebastian Alvarez Henao
