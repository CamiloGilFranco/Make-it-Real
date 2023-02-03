// 1. Devolver propiedad de objeto anidado
// Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
// Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve undefined.

const searchingValueObj = (obj) => {
  if (obj.a && obj.a.b) {
    return obj.a.b;
  }

  let arr = Object.values(obj);

  while (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "object") {
        arr.splice(i, 1);
      } else if (arr[i]["a"] && arr[i]["a"]["b"]) {
        return arr[i]["a"]["b"];
      } else {
        let newArr = Object.values(arr[i]);
        arr.splice(i, 1);
        arr = arr.concat(newArr);
      }
    }
  }
};

console.log(searchingValueObj({ a: 1 })); // undefined
console.log(searchingValueObj({ a: { b: { c: 3 } } })); // 	{c:3}
console.log(searchingValueObj({ b: { a: 1 } })); // undefined
console.log(searchingValueObj({ a: { b: 2 } })); // 2
