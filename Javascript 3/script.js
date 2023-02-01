/* Escribir una función que tome dos fechas como argumentos. Devuelve true si las fechas caen exactamente en el mismo día, false si no. */

function myFunction(dateX, dateY) {
  let fecha1 = Date.parse(dateX);
  let fecha2 = Date.parse(dateY);

  if (fecha1 === fecha2) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunction(new Date(2019, 0, 1), new Date(2019, 0, 1)));
console.log(myFunction(new Date("2020/01/01"), new Date("2020/01/02")));
console.log(myFunction(new Date(2019, 0, 1), new Date(2019, 1, 1)));
console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01")));

console.log(myFunction(new Date("2000/01/01"), new Date(2000, 01, 01)));
