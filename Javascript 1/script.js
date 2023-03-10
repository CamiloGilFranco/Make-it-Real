/* Escriba una función que tome un objeto (a) y un string (b) como argumento. Devuelva true si el objeto tiene una propiedad con la clave 'b'. Devuelva false de lo contrario.

function myFunction(a, b) {

  return
}

Test Case	Expected
myFunction({a:1,b:2,c:3},'b')	true
myFunction({x:'a',y:'b',z:'c'},'a')	false
myFunction({x:'a',y:'b',z:undefined},'z')	false */

function myFunction(a, b) {
  if (a.hasOwnProperty(b) && a.b !== undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));
