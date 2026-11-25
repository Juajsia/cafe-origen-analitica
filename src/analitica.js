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
    return ventasValidas === 0 ? 0 : total / ventasValidas;
}

function totalVendidoM(ventas) {
    return ventas.reduce((total, venta) => total + valorVenta(venta), 0);
}

function unidadesVendidasM(ventas) {
    return ventas.reduce((total, venta) => total + venta.cantidad, 0);
}

function ventasPorCiudadM(ventas, ciudad) {
    const ciudadNormalizada = normalizar(ciudad);

    return ventas
        .filter((venta) => normalizar(venta.ciudad) === ciudadNormalizada)
        .reduce((total, venta) => total + valorVenta(venta), 0);
}

function ventaMayorM(ventas) {
    if (ventas.length === 0) return null;

    return ventas.reduce((mayor, venta) =>
        valorVenta(venta) > valorVenta(mayor) ? venta : mayor
    );
}

function ticketPromedioM(ventas) {
    const total = totalVendidoM(ventas);
    const ventasValidas = ventas.filter((venta) => venta.cantidad > 0).length;
    return ventasValidas === 0 ? 0 : total / ventasValidas;
}

function totalPorCiudad(ventas) {
    return ventas.reduce((totales, venta) => {
        const ciudad = normalizar(venta.ciudad);
        totales[ciudad] = (totales[ciudad] ?? 0) + valorVenta(venta);
        return totales;
    }, {});
}

function unidadesPorProducto(ventas) {
    return ventas.reduce((totales, venta) => {
        totales[venta.producto] =
            (totales[venta.producto] ?? 0) + venta.cantidad;
        return totales;
    }, {});
}

function topProductosPorValor(ventas, k) {
    const totales = ventas.reduce((acumulado, venta) => {
        acumulado[venta.producto] =
            (acumulado[venta.producto] ?? 0) + valorVenta(venta);
        return acumulado;
    }, {});

    return Object.entries(totales)
        .map(([producto, total]) => ({ producto, total }))
        .sort((a, b) => b.total - a.total)
        .slice(0, k);
}

function ventasDelDia(ventas, fecha) {
    return ventas.filter((venta) => venta.fecha === fecha);
}

export {
    totalVendido,
    ventaMayor,
    ventasPorCiudad,
    unidadesVendidas,
    ticketPromedio,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    ventaMayorM,
    ticketPromedioM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
};