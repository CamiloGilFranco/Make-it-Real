// 3. Fix Error: Valor vs. Referencia de Tipos
// Cree una función que devuelva true si dos arreglos contienen valores idénticos y false en caso contrario.

// Para resolver esta pregunta, tu amigo escribe el siguiente código:

function checkEquals(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      newArr.push(false);
    } else {
      newArr.push(true);
    }
  }

  return !newArr.includes(false);
}

console.log("********* ejercicio 3 *********");

console.log(checkEquals([1, 2], [1, 3])); //false
console.log(checkEquals([1, 2], [1, 2])); // true
console.log(checkEquals([4, 5, 6], [4, 5, 6])); //true
console.log(checkEquals([4, 7, 6], [4, 5, 6])); // false
console.log(checkEquals([4, 7, 6], [4, 6, 7])); // false
