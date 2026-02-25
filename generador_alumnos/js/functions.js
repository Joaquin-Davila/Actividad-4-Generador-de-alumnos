var contenidoGenerado = "";

const apellidosPaternos = [
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

const apellidosMaternos = [
    "NULL", "Müller", "Schmidt", "Schneider", "Fischer", "Weber",
    "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Schäfer",
    "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann",
    "Braun", "Werner", "Heinrich", "Krause", "Maier", "Hahn", "Schubert",
    "Vogel", "Friedrich", "Keller", "Günther", "Frank", "Berger", "Roth",
    "Beck", "Lorenz", "Baumann", "Franke", "Albrecht", "Schuster",
    "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Krämer",
    "Stein", "Jäger", "Otto", "Sommer", "Groß"
];

const nombresPrimarios = [
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

const nombresSecundarios = [
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
    var opcionSeleccionada = document.getElementById("opcion").value;

    switch (opcionSeleccionada) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}

function generarSQL() {
    contenidoGenerado = "INSERT INTO alumnos VALUES ";
    var numeroMatricula = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = 0;
    cantidadRegistros = document.getElementById('registros').value;
    var nombreSecundario = "";

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);

        let segundoApellido;
        if (apellidoMaterno === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellidoMaterno}')`;
        }

        nombreCompleto = "";
        nombreSecundario = "";
        if (tieneSegundoNombre == 0) {
            nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
        } else {
            nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
            nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        contenidoGenerado += `(${numeroMatricula + i},UPPER('${apellidoPaterno}'), ${segundoApellido}, '${nombreCompleto}','a${numeroMatricula + i}@unison.mx'),\n\n`;
    }

    contenidoGenerado = contenidoGenerado.slice(0, -4) + ";";
    document.getElementById("salida").innerHTML = contenidoGenerado;
}

function generarSQLpostgresql() {

}

function generarSQLCSV() {
    contenidoGenerado = "matricula, apellido1, apellido2, nombre, correo\n";
    var numeroMatricula = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = 0;
    cantidadRegistros = document.getElementById('registros').value;
    var nombreSecundario = "";

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);

        let segundoApellido;
        if (apellidoMaterno === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoMaterno}`;
        }

        nombreCompleto = "";
        nombreSecundario = "";
        if (tieneSegundoNombre == 0) {
            nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
        } else {
            nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
            nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        contenidoGenerado += `${numeroMatricula + i},${apellidoPaterno},${segundoApellido},${nombreCompleto},a${numeroMatricula + i}@unison.mx\n`;
    }

    document.getElementById("salida").innerHTML = contenidoGenerado;
}

function generarJSON() {
    contenidoGenerado = "[\n";
    var numeroMatricula = 224250000;
    var cantidadRegistros = document.getElementById('registros').value;

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let nombrePrimario = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];

        let nombreCompleto = nombrePrimario;
        if (Math.random() < 0.5) {
            let nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        contenidoGenerado += `  {\n`;
        contenidoGenerado += `    "matricula": ${numeroMatricula + i},\n`;
        contenidoGenerado += `    "apellido1": "${apellidoPaterno}",\n`;
        contenidoGenerado += `    "apellido2": "${apellidoMaterno}",\n`;
        contenidoGenerado += `    "nombre": "${nombreCompleto}",\n`;
        contenidoGenerado += `    "correojson": "a${numeroMatricula + i}@unison.mx"\n`;

        contenidoGenerado += (i < cantidadRegistros - 1) ? `  },\n` : `  }\n`;
    }

    contenidoGenerado += "]";

    document.getElementById('salida').innerHTML = contenidoGenerado.replace(/\n/g, "<br>");

    return contenidoGenerado;
}

function guardarArchivo() {
    let contenidoLimpio = contenidoGenerado.split('<br>').join('\n');

    var archivoBlob = new Blob([contenidoLimpio], { type: "text/plain;charset=utf-8" });
    var urlArchivo = URL.createObjectURL(archivoBlob);

    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", urlArchivo);

    var opcionSeleccionada = document.getElementById("opcion").value;

    switch (opcionSeleccionada) {
        case "1":
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo SQL");
            break;
        case "2":
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo Postgres");
            break;
        case "3":
            enlaceDescarga.setAttribute("download", "sistema_escolar.csv");
            alert("Generando archivo CSV");
            break;
        case "4":
            enlaceDescarga.setAttribute("download", "sistema_escolar.json");
            alert("Generando archivo JSON");
            break;
    }

    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
    setTimeout(() => URL.revokeObjectURL(urlArchivo), 100);
}
