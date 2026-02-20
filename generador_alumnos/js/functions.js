const apellidosMexico = [
    "Villanueva", "Valenzuela", "Paz", "Escobedo", "Figueroa", "Pizarro",
    "Cota", "Félix", "Gastélum", "Encinas", "Beltrán", "Leyva", "Arce",
    "Obregón", "Tapia", "Montoya", "Escalante", "Quintero", "Murillo",
    "Rivas", "Armenta", "Salgado", "Varela", "Zepeda", "Fonseca", "Mejía",
    "Ceballos", "Osorio", "Macías", "Vélez", "Uribe", "Lozada", "Valles",
    "Arellano", "Becerra", "Carmona", "Dávila", "Fajardo", "Gamboa",
    "Huerta", "Jaramillo", "Lira", "Mota", "Nájera", "Ontiveros",
    "Pantoja", "Quiróz", "Roldán", "Solís", "Tovar", "Ugalde", "Vergara",
    "Yáñez", "Zárate", "Aranda", "Barajas", "Corona", "Delgadillo",
    "Elizondo", "Fabela", "Godínez", "Hinojosa", "Jaimes", "Ledesma"
];

const apellidosAlemanes = [
    "NULL", "Müller", "Schmidt", "Schneider", "Fischer", "Weber",
    "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Schäfer",
    "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann",
    "Braun", "Werner", "Heinrich", "Krause", "Maier", "Hahn", "Schubert",
    "Vogel", "Friedrich", "Keller", "Günther", "Frank", "Berger", "Roth",
    "Beck", "Lorenz", "Baumann", "Franke", "Albrecht", "Schuster",
    "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Krämer",
    "Stein", "Jäger", "Otto", "Sommer", "Groß"
];

const nombresMexicanos = [
    "Joaquín", "Mateo", "Vicente", "Alonso", "Tadeo", "Patricio",
    "Renato", "Simón", "Elio", "Maximiliano", "Leonel", "Felipe",
    "Darío", "Isaías", "Yael", "Luciano", "Jerónimo", "Bernardo",
    "Octavio", "Efraín", "Gerardo", "Ramiro", "Armando", "Braulio",
    "Ciro", "Domingo", "Fidel", "Genaro", "Humberto", "Jacinto",
    "Lázaro", "Modesto", "Néstor", "Orlando", "Plutarco", "Quirino",
    "Rufino", "Silvano", "Teófilo", "Ubaldo", "Valente", "Wenceslao",
    "Yamil", "Zacarías", "Baltazar", "Clemente", "Dámaso", "Fausto",
    "Gaspar", "Hernán", "Isidro", "Justo", "Leandro", "Macario"
];

const nombresEtiopes = [
    "Abebe", "Bekele", "Tewodros", "Yohannes", "Haile", "Menelik",
    "Dawit", "Kaleb", "Ephrem", "Yared", "Abiy", "Girma", "Lemma",
    "Tilahun", "Almaz", "Aster", "Desta", "Genet", "Hiwot", "Mulu",
    "Nigist", "Selam", "Tsehay", "Zewditu", "Alemayehu", "Amare",
    "Assefa", "Berhane", "Bogale", "Chala", "Desalegn", "Fikre",
    "Getachew", "Habtamu", "Kebede", "Mekonnen", "Mulugeta", "Sisay",
    "Tadesse", "Tesfaye", "Worku", "Yonas", "Zeleke", "Abdi", "Binyam",
    "Dereje", "Eshetu", "Fasil", "Kassahun", "Legesse"
];

function generar() {
    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}

function generarSQL() {
    var salida = "INSERT INTO alumnos VALUES ", matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreEtiope = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoAleman === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellidoAleman}')`;
        }
        nombre = "";
        nombreEtiope = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreEtiope = nombresEtiopes[Math.floor(Math.random() * nombresEtiopes.length)];
            nombre += ` ${nombreEtiope}`;
        }
        salida += `(${matricula + i},
                UPPER('${apellidoMex}'),
                ${segundoApellido},
                '${nombre}',
                'a${matricula + i}@unison.mx'),<br>
`;
    }
    salida = salida.slice(0, -6) + ";";
    document.getElementById("salida").innerHTML = salida;
}
function generarSQLpostgresql() {

}
function generarSQLCSV() {
    var salida = "matricula, apellido1, apellido2, nombre, correo <br>", matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreEtiope = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoAleman === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoAleman}`;
        }
        nombre = "";
        nombreEtiope = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreEtiope = nombresEtiopes[Math.floor(Math.random() * nombresEtiopes.length)];
            nombre += ` ${nombreEtiope}`;
        }
        salida += `${matricula + i},
                ${apellidoMex},
                ${segundoApellido},
                ${nombre},
                a${matricula + i}@unison.mx<br>
`;
    }
    //salida = salida.slice(0, 0) + "";
    document.getElementById("salida").innerHTML = salida;
}

function generarJSON() {
    var salida = "json [<br>{<br>", matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreEtiope = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoAleman === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoAleman}`;
        }
        nombre = "";
        nombreEtiope = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreEtiope = nombresEtiopes[Math.floor(Math.random() * nombresEtiopes.length)];
            nombre += ` ${nombreEtiope}`;
        }
        salida += `
                "matricula": ${matricula + i},<br>
                "apellido1": "${apellidoMex}",<br>
                "apellido2": "${segundoApellido}",<br>
                "nombre": "${nombre}",<br>
                "correojson": "a${matricula + i}@unison.mx"<br>
                },<br>`;

    }
    // salida = salida.slice(0, 0);
    salida += `]`;
    document.getElementById("salida").innerHTML = salida;
}