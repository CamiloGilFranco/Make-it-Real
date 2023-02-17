# EXPRESS 2

Esta es una solución al proyecto **EXPRESS 2** del curso Make It Real.

## Tabla de contenido

- [EXPRESS 2](#express-2)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Resumen](#resumen)
    - [El reto](#el-reto)
  - [Autor](#autor)
- [EXPRESS 3](#express-3)
  - [Tabla de contenido](#tabla-de-contenido-1)
  - [Resumen](#resumen-1)
    - [El reto](#el-reto-1)
  - [Autor](#autor-1)

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

# EXPRESS 3

Esta es una solución al proyecto **EXPRESS 3** del curso Make It Real.

## Tabla de contenido

- [EXPRESS 2](#express-2)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Resumen](#resumen)
    - [El reto](#el-reto)
  - [Autor](#autor)
- [EXPRESS 3](#express-3)
  - [Tabla de contenido](#tabla-de-contenido-1)
  - [Resumen](#resumen-1)
    - [El reto](#el-reto-1)
  - [Autor](#autor-1)

## Resumen

El reto consiste en:

- generar un endpoint que devuelva un solo producto de la tienda según su ID
- implementar una funcionalidad que permita eliminar un producto de la tienda mediante una petición DELETE
- crean una nueva funcionalidad que permita agregar productos a la tienda

### El reto

Para resolver el reto se siguieron los siguientes pasos:

- Crear un endpoint de tipo POST para retornar un producto de forma individual usando los params de la url
- Generar una sentencia `if` que verifique la existencia del elemento solicitado
- Crear un endpoint de tipo DELETE para la eliminación de productos
- Generar una sentencia `if` para verificar la existencia del elemento solicitado
- Retornar el elemento eliminado

- Crear un endpoint de tipo POST para agregar un nuevo producto
- Generar una sentencia condicional que verifique que el elemento ingresado no exista en la base de datos
- Verificar que el elemento ingresado no tenga un titulo existente, mediante el método `map` y una sentencia condicional
- se crea la función `findIndex()` para agregar el ID al nuevo elemento con el numero mas bajo disponible
- se agrega el nuevo elemento a la base de datos y también se retorna a manera de confirmación

## Autor

- Adrian Camilo Gil
- Diego Galeano
