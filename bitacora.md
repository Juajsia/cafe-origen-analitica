### Bitacora Cafe Origen algoritmia

## 1. Datos y Exploración

### Problemas Encontrados

| problema                                                     | Desición                          |
| ------------------------------------------------------------ | --------------------------------- |
| ventas con cantidad 0                                        | deben no tomarse ne cuenta        |
| nombres de ciudades con diferencias en mayusculas y espacios | normalizar al momento de comparar |
| clientes repetidos                                           | se toman como ventas válidas      |

### Diccionario de Datos

| Propiedad  | Tipo                                   | Significado                                                                                         |
| ---------- | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`       | Entero                                 | Identificador único del registro.                                                                   |
| `fecha`    | Cadena de texto (formato `AAAA-MM-DD`) | Fecha del registro o de la transacción.                                                             |
| `cliente`  | Cadena de texto                        | Código que identifica al cliente.                                                                   |
| `producto` | Cadena de texto                        | Nombre y presentación del producto.                                                                 |
| `ciudad`   | Cadena de texto                        | Ciudad asociada al registro o al cliente.                                                           |
| `cantidad` | Entero                                 | Número de unidades del producto.                                                                    |
| `precio`   | Número entero                          | Precio registrado, probablemente en pesos colombianos; la moneda no está especificada en el objeto. |

## 2. Prueba de escritorio

### Función `totalVendido`

| Paso | Iteración | Registro (`v`)                | Operación `valorVenta(v)` | Estado de `total` |
| ---: | :-------: | :---------------------------- | :------------------------ | ----------------: |
|    1 |  Inicio   | -                             | Inicializar `total = 0`   |                 0 |
|    2 |   id 1    | cantidad = 2, precio = 42000  | `2 * 42000 = 84000`       |             84000 |
|    3 |   id 2    | cantidad = 1, precio = 26000  | `1 * 26000 = 26000`       |            110000 |
|    4 |   id 3    | cantidad = 1, precio = 95000  | `1 * 95000 = 95000`       |            205000 |
|    5 |   id 4    | cantidad = 1, precio = 42000  | `1 * 42000 = 42000`       |            247000 |
|    6 |   id 5    | cantidad = 3, precio = 45000  | `3 * 45000 = 135000`      |            382000 |
|    7 |   id 6    | cantidad = 2, precio = 26000  | `2 * 26000 = 52000`       |            434000 |
|    8 |   id 7    | cantidad = 1, precio = 120000 | `1 * 120000 = 120000`     |            554000 |
|    9 |   id 8    | cantidad = 0, precio = 42000  | `0 * 42000 = 0`           |            554000 |
|   10 |   id 9    | cantidad = 2, precio = 45000  | `2 * 45000 = 90000`       |            644000 |
|   11 |   id 10   | cantidad = 4, precio = 42000  | `4 * 42000 = 168000`      |            812000 |
|   12 |   id 11   | cantidad = 1, precio = 95000  | `1 * 95000 = 95000`       |            907000 |
|   13 |   id 12   | cantidad = 3, precio = 26000  | `3 * 26000 = 78000`       |            985000 |
|   14 | Finalizar | Fin del arreglo               | Retornar `total`          |        **985000** |

### Función `ticketPromedio`

| Paso | Evaluación           | Operación              |    Resultado |
| ---: | :------------------- | :--------------------- | -----------: |
|    1 | Total vendido        | `totalVendido(ventas)` |       985000 |
|    2 | Inicializar contador | `ventasValidas = 0`    |            0 |
|    3 | Recorrer id 1        | `2 > 0` es verdadero   |            1 |
|    4 | Recorrer id 2        | `1 > 0` es verdadero   |            2 |
|    5 | Recorrer id 3        | `1 > 0` es verdadero   |            3 |
|    6 | Recorrer id 4        | `1 > 0` es verdadero   |            4 |
|    7 | Recorrer id 5        | `3 > 0` es verdadero   |            5 |
|    8 | Recorrer id 6        | `2 > 0` es verdadero   |            6 |
|    9 | Recorrer id 7        | `1 > 0` es verdadero   |            7 |
|   10 | Recorrer id 8        | `0 > 0` es falso       |            7 |
|   11 | Recorrer id 9        | `2 > 0` es verdadero   |            8 |
|   12 | Recorrer id 10       | `4 > 0` es verdadero   |            9 |
|   13 | Recorrer id 11       | `1 > 0` es verdadero   |           10 |
|   14 | Recorrer id 12       | `3 > 0` es verdadero   |           11 |
|   15 | Dividir              | `985000 / 11`          | **89545.45** |

## 3 Bitácora de funciones

### `totalVendidoM(ventas)`

- **¿Qué recorro?** Todas las ventas.
- **¿Qué filtro?** Nada; se consideran todas.
- **¿Qué transformo?** Cada venta se convierte en su valor total: `cantidad * precio`.
- **¿Qué acumulo?** El valor total de todas las ventas.
- **¿Cómo agrupo?** No agrupa; devuelve un único total.

### `unidadesVendidasM(ventas)`

- **¿Qué recorro?** Todas las ventas.
- **¿Qué filtro?** Nada; se consideran todas.
- **¿Qué transformo?** De cada venta se toma la cantidad de unidades.
- **¿Qué acumulo?** La suma de las unidades vendidas.
- **¿Cómo agrupo?** No agrupa; devuelve un único total de unidades.

### `ventasPorCiudadM(ventas, ciudad)`

- **¿Qué recorro?** Todas las ventas.
- **¿Qué filtro?** Las ventas cuya ciudad normalizada coincide con la ciudad indicada.
- **¿Qué transformo?** Cada venta que coincide se convierte en su valor total: `cantidad * precio`.
- **¿Qué acumulo?** El valor total vendido en esa ciudad.
- **¿Cómo agrupo?** No agrupa varias ciudades; calcula el total para una ciudad específica.

### `totalPorCiudad(ventas)`

- **¿Qué recorro?** Todas las ventas.
- **¿Qué filtro?** Nada; se consideran todas.
- **¿Qué transformo?** El nombre de cada ciudad se normaliza con `trim()` y `toLowerCase()`. También se calcula el valor de cada venta.
- **¿Qué acumulo?** El valor vendido en cada ciudad.
- **¿Cómo agrupo?** Usa el nombre normalizado de la ciudad como clave del objeto. Así, nombres con diferencias de espacios o mayúsculas se suman en el mismo grupo.

### `unidadesPorProducto(ventas)`

- **¿Qué recorro?** Todas las ventas.
- **¿Qué filtro?** Nada; se consideran todas.
- **¿Qué transformo?** De cada venta se toma el producto y su cantidad.
- **¿Qué acumulo?** La cantidad de unidades vendidas de cada producto.
- **¿Cómo agrupo?** Usa el nombre del producto como clave del objeto y suma las cantidades de las ventas del mismo producto.

### `topProductosPorValor(ventas, k)`

- **¿Qué recorro?** Todas las ventas.
- **¿Qué filtro?** No filtra ventas; al final selecciona los primeros `k` productos con mayor valor total.
- **¿Qué transformo?** Calcula el valor de cada venta y convierte los totales agrupados en objetos con `producto` y `total`.
- **¿Qué acumulo?** El valor total generado por cada producto.
- **¿Cómo agrupo?** Agrupa las ventas por producto, suma su valor y luego ordena los productos de mayor a menor. Usa un arreglo nuevo para ordenar, por lo que no modifica `ventas`.

## 4. Incidencias reportadas por la gerente

### Incidencia 1: Bogotá aparecía dos veces

- **Síntoma:** La misma ciudad aparecía como dos grupos o resultados separados cuando se escribía con mayúsculas, minúsculas o espacios.
- **Entrada que lo produce:** Ventas sintéticas con `ciudad: "Bogotá"` y `ciudad: " bogotá "` o datos agrupados sin normalizar previamente.
- **Hipótesis:** Las claves del objeto agrupador conservaban el texto original y JavaScript las trataba como claves distintas.
- **Prueba realizada:** Se ejecutó `totalPorCiudad` con las dos variantes sintéticas anteriores. La prueba comprobó si quedaba una sola clave.
- **Causa:** La agrupación no utilizaba una representación uniforme para el nombre de la ciudad.
- **Corrección:** `totalPorCiudad` aplica `trim().toLowerCase()` antes de usar la ciudad como clave del acumulador.
- **Demostración actual:** La prueba mostró `ciudadesNormalizadas: OK` y el conjunto sintético produjo una única clave normalizada con el total esperado de COP 3.000.

### Incidencia 2: El ticket promedio daba NaN en un día sin ventas

- **Síntoma:** Al calcular el ticket promedio de una fecha que no tenía registros, el resultado era `NaN`.
- **Entrada que lo produce:** `ventasDelDia(ventas, "2026-09-10")`, que devuelve un arreglo vacío.
- **Hipótesis:** El cálculo dividía el total vendido entre cero ventas válidas.
- **Prueba realizada:** Se ejecutó `ticketPromedio` y `ticketPromedioM` con el arreglo vacío. También se mostró el resumen de esa fecha en el reporte.
- **Causa:** Ambas funciones calculaban `total / ventasValidas` sin comprobar que `ventasValidas` fuera cero.
- **Corrección:** Ambas implementaciones devuelven `0` cuando no existen ventas válidas; de este modo no realizan una división entre cero.
- **Demostración actual:** Las dos pruebas de ticket promedio sin ventas mostraron `OK`, y el reporte presentó `COP 0` y no `NaN`.
