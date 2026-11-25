### Café Origen - Analítica

Proyecto de analítica de ventas construido con JavaScript y módulos ES.
Procesa los registros de [datos.js](src/datos.js) para calcular totales,
distribuir las ventas por ciudad y producto y resumir el comportamiento de
las ventas por fecha.

## Ejecutar el proyecto

Requiere Node.js instalado:

```bash
node src/reporte.js
node src/verificar.js
```

## Preguntas que responde

- ¿Cuánto se ha vendido y cuántas unidades se han vendido?
- ¿Cuál es el ticket promedio de las ventas?
- ¿Cuál fue la venta de mayor valor?
- ¿Cuánto se vende en cada ciudad?
- ¿Cuántas unidades se venden por producto?
- ¿Cuáles son los tres productos que generan mayor valor?
- ¿Qué ventas ocurrieron en una fecha determinada?
- ¿Cómo se comporta el reporte cuando no hay ventas en una fecha?