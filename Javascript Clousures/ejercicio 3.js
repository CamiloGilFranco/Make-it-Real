/* Escribir una función createGame que retorne una nueva función que reciba un número y permita adivinar un número secreto del 1 al 100. Si el número es mayor al número secreto la función retorna la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”. Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”

const guess = createGame() // numero secreto: 5
guess(8) // "Muy alto!"
guess(4) // "Muy bajo!"
guess(5) // "Lo adivinaste, felicitaciones!" */

const createGame = () => {
  let numeroSecreto = 5;

  const validacion = (num) => {
    if (num > numeroSecreto) {
      return "Muy alto!";
    } else if (num < numeroSecreto) {
      return "muy bajo!";
    } else {
      return "Lo adivinaste, felicitaciones!";
    }
  };

  return validacion;
};

const guess = createGame(); // numero secreto: 5
console.log(guess(8)); // "Muy alto!"
console.log(guess(4)); // "Muy bajo!"
console.log(guess(5)); // "Lo adivinaste, felicitaciones!"
