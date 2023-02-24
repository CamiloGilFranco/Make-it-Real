/* Estás diseñando un sistema de facturación. Debes representar la lista de facturas, donde cada factura está compuesta de un número, el nombre del cliente, la fecha, y unos ítems. Cada ítem tiene un id de producto, un precio por unidad y una cantidad.

¿Cómo representarías esta lista utilizando arreglos y objetos? */

const facturas = [
  {
    numero: 1,
    cliente: "Pepito",
    fecha: "01/01/2023",
    items: [
      {
        id: 1,
        valorUnitario: 1000,
        cantidad: 10,
      },
    ],
  },
  {
    numero: 2,
    cliente: "Maria",
    fecha: "02/02/2023",
    items: [
      {
        id: 2,
        valorUnitario: 2000,
        cantidad: 20,
      },
    ],
  },
];
