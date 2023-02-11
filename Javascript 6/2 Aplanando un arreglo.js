/* Estoy tratando de escribir una función para aplanar una matriz de sub arreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

En otras palabras, quiero transformar esto: [[1, 2], [3, 4]] en [1, 2, 3, 4]. */

function flatten(arr) {
  const result = arr.flat();

  if (result.some((e) => Array.isArray(e))) {
    return flatten(result);
  }
  return result;
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
console.log(flatten([[1], [2], [3], [4]]));
console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
);
console.log(
  flatten([
    [true, false],
    [false, false],
  ])
);

console.log(flatten([[true, false], [false, false], [[true]]]));
