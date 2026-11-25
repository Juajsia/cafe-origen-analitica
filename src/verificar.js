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
    ventaMayorM,
    ticketPromedioM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
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
mostrarComparacion(
    "ventaMayor",
    ventaMayor(ventas),
    ventaMayorM(ventas),
);
mostrarComparacion(
    "ticketPromedio",
    ticketPromedio(ventas),
    ticketPromedioM(ventas),
);
mostrarComparacion(
    "ticketPromedio sin ventas",
    ticketPromedio(ventasDelDia(ventas, "2026-09-10")),
    ticketPromedioM(ventasDelDia(ventas, "2026-09-10")),
);

const ciudadesVariantes = [
    { ciudad: "Bogotá", cantidad: 1, precio: 1000 },
    { ciudad: " bogotá ", cantidad: 1, precio: 2000 },
];
const agrupacionCiudades = totalPorCiudad(ciudadesVariantes);
console.log(
    `ciudadesNormalizadas: ${
        Object.keys(agrupacionCiudades).length === 1 ? "OK" : "DIFERENTE"
    }`,
);

console.log("\nResultados del archivo reporte.js:");
console.log("ventaMayor:", ventaMayor(ventas));
console.log("ticketPromedio:", ticketPromedio(ventas));

console.log("\nResultados adicionales del archivo analitica.js:");
console.log("totalPorCiudad:", totalPorCiudad(ventas));
console.log("unidadesPorProducto:", unidadesPorProducto(ventas));
console.log("topProductosPorValor:", topProductosPorValor(ventas, 3));