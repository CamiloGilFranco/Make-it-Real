/* Crea una función constructora llamada Auto que no reciba ningún argumento pero inicializa una propiedad llamada velocidad en 0.

Agrega dos métodos al prototipo de la función constructora:

acelerar: recibe un número como argumento e incrementa la propiedad velocidad de acuerdo al número.
frenar: recibe un número como argumento y decrementa la propiedad velocidad de acuerdo al número. Sin embargo, si la velocidad terminara siendo negativa debe quedar en 0.
Un ejemplo de cómo utilizaríamos esta función constructora:

const a1 = new Auto();
a1.velocidad; // 0

a1.acelerar(1);
a1.acelerar(2);
a1.velocidad; // 3

a1.frenar(2);
a1.velocidad; // 1

a1.frenar(3);
// la velocidad quedaría en -1, así que se deja en 0
a1.velocidad; // 0 */

function Auto() {
  this.velocidad = 0;
}

Auto.prototype = {
  acelerar(num) {
    this.velocidad += num;
  },
  frenar(num) {
    this.velocidad -= num;
    this.velocidad <= 0 ? (this.velocidad = 0) : this.velocidad;
  },
};

const a1 = new Auto();
console.log(a1.velocidad); // 0

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad); // 3

a1.frenar(2);
console.log(a1.velocidad); // 1

a1.frenar(3);
// la velocidad quedaría en -1, así que se deja en 0
console.log(a1.velocidad); // 0
