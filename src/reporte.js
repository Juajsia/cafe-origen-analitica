import { ventas } from "./datos.js";
import {
    totalVendido,
    ventaMayor,
    unidadesVendidas,
    ticketPromedio,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
} from "./analitica.js";

const formatoPesos = (valor) =>
    valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
    });

const tituloSeccion = (titulo) =>
    console.log(`\n===== ${titulo} =====`);

tituloSeccion("RESUMEN GENERAL");
const mayor = ventaMayor(ventas);
console.log(`Total vendido       : ${formatoPesos(totalVendido(ventas))}`);
console.log(`Unidades vendidas   : ${unidadesVendidas(ventas)} unidades`);
console.log(`Ticket promedio     : ${formatoPesos(ticketPromedio(ventas))}`);
console.log(
    `Venta mayor         : ${mayor ? mayor.producto : "Sin ventas"} - ${
        mayor ? formatoPesos(mayor.cantidad * mayor.precio) : formatoPesos(0)
    }`,
);

tituloSeccion("VENTAS POR CIUDAD");
const ventasCiudad = totalPorCiudad(ventas);
for (const [ciudad, total] of Object.entries(ventasCiudad)) {
    console.log(`${ciudad.padEnd(12, " ")} : ${formatoPesos(total).padStart(18, " ")}`);
}

tituloSeccion("UNIDADES POR PRODUCTO");
const unidadesProducto = unidadesPorProducto(ventas);
for (const [producto, unidades] of Object.entries(unidadesProducto)) {
    console.log(`${producto.padEnd(28, " ")} : ${String(unidades).padStart(4, " ")} unidades`);
}

tituloSeccion("TOP 3 DE PRODUCTOS POR VALOR");
const topProductos = topProductosPorValor(ventas, 3);
topProductos.forEach((producto, indice) => {
    console.log(
        `${String(indice + 1).padStart(2, " ")}. ${
            producto.producto.padEnd(28, " ")
        } : ${formatoPesos(producto.total)}`,
    );
});

tituloSeccion("RESUMEN DE VENTAS POR DIA");
const fechasReporte = ["2026-09-05", "2026-09-10"];

for (const fecha of fechasReporte) {
    const ventasDia = ventasDelDia(ventas, fecha);
    console.log(`\nDía ${fecha}`);
    console.log(`  Registros con venta : ${ventasDia.length}`);
    console.log(`  Total vendido       : ${formatoPesos(totalVendido(ventasDia))}`);
    console.log(`  Unidades vendidas   : ${unidadesVendidas(ventasDia)} unidades`);
    console.log(`  Ticket promedio     : ${formatoPesos(ticketPromedio(ventasDia))}`);
}