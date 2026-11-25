import { ventas } from "./datos.js";
import {
    totalVendido,
    ventaMayor,
    ventasPorCiudad,
    unidadesVendidas,
    ticketPromedio,
    totalVendidoM,
    ventasPorCiudadM,
    unidadesVendidasM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
} from "./analitica.js";

const mismaSalida = (valorCiclo, valorMetodos) =>
    JSON.stringify(valorCiclo) === JSON.stringify(valorMetodos);

const mostrarComparacion = (indicador, valorCiclo, valorMetodos) => {
    const estado = mismaSalida(valorCiclo, valorMetodos) ? "OK" : "DIFERENTE";
    console.log(`${indicador}: ${estado}`);
};

mostrarComparacion(
    "totalVendido",
    totalVendido(ventas),
    totalVendidoM(ventas),
);
mostrarComparacion(
    "unidadesVendidas",
    unidadesVendidas(ventas),
    unidadesVendidasM(ventas),
);
mostrarComparacion(
    "ventasPorCiudad Medellín",
    ventasPorCiudad(ventas, "medellín"),
    ventasPorCiudadM(ventas, "medellín"),
);

console.log("\nResultados del archivo reporte.js:");
console.log("ventaMayor:", ventaMayor(ventas));
console.log("ticketPromedio:", ticketPromedio(ventas));

console.log("\nResultados adicionales del archivo analitica.js:");
console.log("totalPorCiudad:", totalPorCiudad(ventas));
console.log("unidadesPorProducto:", unidadesPorProducto(ventas));
console.log("topProductosPorValor:", topProductosPorValor(ventas, 3));