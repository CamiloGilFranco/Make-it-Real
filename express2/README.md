# EXPRESS 2

Esta es una solución al proyecto **EXPRESS 2** del curso Make It Real.

## Tabla de contenido

- [EXPRESS 2](#express-2)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Resumen](#resumen)
    - [El reto](#el-reto)
  - [Autor](#autor)

## Resumen

El reto consiste en generar 3 end points, cada uno con diferente información.

- `http://localhost:8080/api/products`: devuelve una lista de productos
- `http://localhost:8080/info`: devuelve la cantidad de productos y la fecha y hora actual
- `http://localhost:8080/about`:devulve un objeto con información personal

### El reto

Para resolver el reto se siguieron los siguientes pasos:

- iniciar el proyecto de Node con `npm init`
- instalar las dependencias de Express y Nodemon con `npm install express` y `npm install -D nodemon` respectivamente
- crear los scripts `start` y `dev` dentro del fichero `package.json`
- crear dos archivos `.json`, uno que almacena la lista de productos y otro que almacena la información personal
- dentro del archivo `index.js`, se importa la librería de Express, se importan los archivos `.json` con la información, se genera la información del endpoint `/info`, se crean los 3 endpoints
- se abre el puerto 8080 que escucha las peticiones

## Autor

- Adrian Camilo Gil
- Diego Galeano
