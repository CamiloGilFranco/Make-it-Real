// 1. Devolver propiedad de objeto anidado
// Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
// Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve undefined.

console.log("********* ejercicio 1 *********");

const searchingValueObj = (obj) => {
  if (!obj.a) return undefined;
  if (!obj.a?.b) return undefined;

  return obj.a.b;
};

console.log(searchingValueObj({ a: 1 })); // undefined
console.log(searchingValueObj({ a: { b: { c: 3 } } })); // 	{c:3}
console.log(searchingValueObj({ b: { a: 1 } })); // undefined
console.log(searchingValueObj({ a: { b: 2 } })); // 2
