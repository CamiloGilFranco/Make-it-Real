/* La sucesión Fibonacci es una secuencia infinita de números naturales. Los primeros son: 1 1 2 3 5 8 13 21 34 55 89 .... La secuencia comienza con 1 y 1. De ahí en adelante cada número se calcula con la suma de los dos anteriores. */

function fibonacci(n) {
  if (n <= 1) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(0)); //1
console.log(fibonacci(1)); //1
console.log(fibonacci(4)); //5
console.log(fibonacci(5)); //8
