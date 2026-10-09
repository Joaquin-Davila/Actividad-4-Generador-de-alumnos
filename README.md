# Actividad 4 – Generador de Alumnos

Aplicación web que genera datos de alumnos ficticios (hasta 50,000 registros) en formato SQL, CSV o JSON, pensada para poblar la base de datos `sistema_escolar`. Proyecto de Bases de Datos II, Universidad de Sonora (UNISON).

## Creador

**Joaquín Dávila**

## ¿Cómo funciona?

La página `generador.html` pide dos datos: **cuántos registros** generar (de 1 a 50,000) y el **formato** de salida. Al pulsar **Generar**, `js/functions.js` arma cada alumno así:

- **Matrícula:** empieza en `224250000` y aumenta de uno en uno.
- **Apellido paterno:** se elige al azar de una lista de apellidos.
- **Apellido materno:** se elige al azar de otra lista. Si sale `NULL`, el alumno queda sin segundo apellido.
- **Nombre:** siempre lleva un nombre primario al azar, y con 50% de probabilidad se le agrega un segundo nombre.
- **Correo:** se construye con la matrícula, con el formato `a<matrícula>@unison.mx`.

Formatos disponibles:

| Opción | Salida |
|---|---|
| SQL – MySQL / MariaDB | Un solo `INSERT INTO alumnos VALUES (...), (...);` con los apellidos en `UPPER()` |
| SQL – PostgreSQL | Mismo `INSERT` que la opción anterior |
| CSV | Encabezado `matricula, apellido1, apellido2, nombre, correo` y un alumno por línea |
| JSON | Arreglo de objetos con `matricula`, `apellido1`, `apellido2`, `nombre` y `correojson` |

El resultado se muestra en pantalla y el botón **Guardar** lo descarga como `sistema_escolar.sql`, `sistema_escolar.csv` o `sistema_escolar.json`, según el formato elegido.

### Base de datos

El archivo `sistema_escolar.sql` crea la tabla `alumnos` donde se cargan los datos generados:

- `expediente`: BIGINT único, positivo y de exactamente 9 dígitos.
- `app1`: obligatorio, no puede ser vacío ni solo espacios.
- `app2`: opcional, pero si existe no puede ser vacío ni solo espacios.
- `nombres`: obligatorio, no puede ser vacío.
- `correo`: único y con el formato `a<expediente>@unison.mx`.
- Un trigger (`bi_alumnos_app1`) que elimina los espacios sobrantes de `app1` antes de cada `INSERT`.

Al final del archivo hay **pruebas de integridad**: `INSERT` que se escribieron a propósito para verificar que las restricciones rechazan datos inválidos, por lo que se espera que varios de ellos marquen error.

## Requisitos

- Un navegador web.
- MySQL o MariaDB, solo si quieres cargar los datos en la base de datos.
- Conexión a internet para cargar las fuentes de Google Fonts. La página funciona sin ellas, pero con otra tipografía.

No requiere instalar dependencias ni servidor.

## Cómo correrlo

1. Clona el repositorio:
```bash
   git clone https://github.com/Joaquin-Davila/Actividad-4-Generador-de-alumnos.git
   cd Actividad-4-Generador-de-alumnos
```
2. Abre `generador.html` en el navegador (doble clic sobre el archivo). Asegúrate de que `functions.js` esté dentro de la carpeta `js/`.
3. Escribe la cantidad de registros, elige el formato y pulsa **Generar**.
4. Pulsa **Guardar** para descargar el archivo.

### Cargar los datos en MySQL

1. Crea la tabla ejecutando `sistema_escolar.sql`:
```bash
   mysql -u <usuario> -p <base_de_datos> < sistema_escolar.sql
```
2. Ejecuta el `INSERT` descargado desde el generador.

## Capturas de pantalla

### Pantalla principal
imagenes/principal1.png
imagenes/principal2.png

### Tabla `alumnos` con los datos cargados
imagenes/tabla1.png
imagenes/tabla2.png

## Estructura del proyecto

```
Actividad-4-Generador-de-alumnos/
├── generador.html
├── js/
│   └── functions.js
├── sistema_escolar.sql
├── imagenes/
└── README.md
```
