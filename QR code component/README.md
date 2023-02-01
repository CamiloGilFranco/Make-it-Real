# QR code component

Esta es una solución al proyecto **QR code component** del curso Make It Real.

## Tabla de contenido

- [QR code component](#qr-code-component)
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

El reto consiste en generar, mediante HTML y CSS, una pagina que muestre una tarjeta, la cual contiene un código QR y dos elementos de texto

### El reto

Los usuarios deben ser capaces de:

- visualizar la tarjeta con el código QR y el texto ademas de un marco claro en la version de escritorio
-

### Captura de pantalla

Dispositivo móvil

![](./src/Captura%20de%20pantalla%20movil.png)

Dispositivo de escritorio

![](./src/Captura%20de%20pantalla%20desktop.png)

## Mi proceso

- Identificar los diferentes contenedores de elementos HTML
- generar la estructura de la pagina con HTML haciendo énfasis en el contenido que debe tener cada contenedor
- crear la hoja de estilos CSS y usando la herramienta FlexBox generar los estilos correspondientes para dispositivos de hasta 375 pixeles de ancho
- crear una MediaQuery que modifique los estilos creados anteriormente para generar el contenido de un dispositivo de escritorio

### Construido con

- Marcado HTML5
- Propiedades personalizadas de CSS
- FlexBox
- Flujo de trabajo móvil primero

### Lo que aprendí

En este reto aprendimos a utilizar algunas de las propiedades de CSS para efectos visuales como los son la generación de sombras mediante el atributo `box-shadow: 10px 10px 10px gray` cuyo primer y segundo argumento son el desplazamiento horizontal y vertical de la sombra, el tercer argumento corresponde a la diseminación de la sombra y el ultimo argumento al color de la sombra

### Desarrollo continuo

Es de gran importancia seguir profundizando en en la herramienta FlexBox para posicionar los elementos de la forma deseada sin recurrir a propiedades como `margin` o `padding`

### Recursos útiles

- [ CSS-TRICKS ] (https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Este recurso nos mostró como utilizar de forma correcta las propiedades de FlexBox vistas anteriormente.

## Autor

- Adrian Camilo Gil
- Andrés Vélez
