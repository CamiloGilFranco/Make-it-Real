/* Agregar un método palindrome a los strings de JavaScript que retorne true si el string es un palíndrome, o false de lo contrario.

El método se va a utilizar de la siguiente forma:

"anita lava la tina".palindrome() // true
"prueba".palindrome() // false
El ejercicio se resuelve en equipos, en un repositorio. La entrega la hacen todos los integrantes, la entrega es unicamente el link del repositorio */

String.prototype.palindrome = function () {
  let string = this.toLowerCase();
  const expReg = /[^a-z]/g;
  string = string.replace(expReg, "");

  let stringInverted = [...string];
  stringInverted.reverse();
  stringInverted = stringInverted.join("");

  return string === stringInverted ? true : false;
};

console.log("Anita lava la tina".palindrome()); // true
console.log("prueba".palindrome()); // false
