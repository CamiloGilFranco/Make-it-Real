/* Ha habido un problema de datos maestros que afectó los precios de los productos. Compruebe si cada producto tiene un precio válido (entero o flotante, y mayor o igual a cero). Los productos con un precio de 0 son gratuitos y cuentan como un precio válido. */

/* function hasValidPrice(product) {
  return (product && product.price && product.price >= 0)
} */

function hasValidPrice(product) {
  return (
    typeof product === "object" &&
    typeof product.price === "number" &&
    product.price >= 0
  );
}

console.log(hasValidPrice({ product: "Milk", price: 1.5 }));
console.log(hasValidPrice({ product: "Cheese", price: -1 }));
console.log(hasValidPrice({ product: "Eggs", price: 0 }));
console.log(hasValidPrice({ product: "Cereals", price: "3.0" }));
console.log(hasValidPrice());

/* En el caso de los huevos se esta retornando 0 ya que en el ultimo operador lógico (product.price && product.price >= 0), en la parte izquierda no se esta comprobando la existencia del atributo "price" sino su visualViewport, al ser este "0" que es un valor con tendencia a falso, el operador retorna el valor del lado izquierdo, es decir el valor de "price" que es "0" */

/* En el ultimo caso se retorna "undefined" ya que, al no estar definido el objeto "product", el operador lógico retorna el valor del lado izquierdo de su operación el cual es "undefined" */
