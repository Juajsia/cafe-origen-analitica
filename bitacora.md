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
