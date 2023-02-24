/* Escribir una función crearContador que retorne una nueva función que incremente un número y lo retorne cada vez que es invocada:

const contar = createContador()
contar() // 1
contar() // 2
contar() // 3
Recuerda de hacer uso de closures para evitar el uso de variables globales. */

const crearContador = () => {
  let contador = 0;

  const sumar = () => {
    contador++;
    return contador;
  };

  return sumar;
};

const contar = crearContador();

console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3
