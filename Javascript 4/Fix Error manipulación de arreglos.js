// 2. Fix Error: manipulación de arreglos
// ¡Ayuda a corregir todos los errores en la función incrementItems! ¡Está destinado a agregar 1 a cada elemento en el arreglo!

function incrementItems(arr) {
  let arrIncrement = [];
  for (let i = 0; i < arr.length; i++) {
    arrIncrement.push(arr[i] + 1);
  }
  return arrIncrement;
}

console.log("********* ejercicio 2 *********");

console.log(incrementItems([0, 1, 2, 3])); //[1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])); // [0, -1, -2, -3]
