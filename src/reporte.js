import { ventas } from "./datos.js";

const valorVenta = (venta) => venta.cantidad * venta.precio;
const normalizar = (texto) => texto.trim().toLowerCase();

function totalVendido(ventas) {
  let total = 0;
  for (const v of ventas) total += valorVenta(v);
  return total;
}

function ventaMayor(ventas) {
  if (ventas.length === 0) return null;
  let mayor = ventas[0];
  for (const v of ventas) {
    if (valorVenta(v) > valorVenta(mayor)) mayor = v;
  }
  return mayor;
}

function ventasPorCiudad(ventas, ciudad) {
  let total = 0;
  for (const v of ventas) {
    if (normalizar(v.ciudad) === normalizar(ciudad)) total += valorVenta(v);
  }
  return total;
}

function unidadesVendidas(ventas) {
  let total = 0;
  for (const v of ventas) {
    total += v.cantidad;
  }
  return total;
}

function ticketPromedio(ventas) {
  const total = totalVendido(ventas);
  let ventasValidas = 0;
  for (const v of ventas) {
    if (v.cantidad > 0) ventasValidas++;
  }
  return total / ventasValidas;
}

console.log(totalVendido(ventas));
console.log(ventaMayor(ventas));
console.log(unidadesVendidas(ventas));
console.log(ventasPorCiudad(ventas, "medellín"));
console.log(ticketPromedio(ventas));
