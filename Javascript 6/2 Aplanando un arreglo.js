/* Estoy tratando de escribir una función para aplanar una matriz de sub arreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

En otras palabras, quiero transformar esto: [[1, 2], [3, 4]] en [1, 2, 3, 4]. */

console.log("---------S O L U C I O N   S I N   F L A T---------");
function flatten(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      result.push(arr[i][k]);
    }
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

console.log("---------S O L U C I O N   C O N   F L A T---------");
function flatten(arr) {
  const result = arr.flat();
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
