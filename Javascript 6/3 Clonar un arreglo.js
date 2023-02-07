/* El siguiente código intenta agregar un clon de una arreglo a sí mismo. No hay ningún mensaje de error, pero los resultados no son los esperados. ¿Puedes arreglar el código? */

function clone(arr) {
  let newArr = [...arr];
  arr.push(newArr);
  return arr;
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
console.log(clone([true, false, true]));
