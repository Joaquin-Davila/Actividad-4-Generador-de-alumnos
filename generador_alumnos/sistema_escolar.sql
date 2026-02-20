DROP TABLE alumnos;

CREATE TABLE IF NOT EXISTS alumnos (
    expediente BIGINT NOT NULL UNIQUE CHECK (LENGTH(expediente)=9 AND expediente > 0),
    app1 VARCHAR(255) NOT NULL CHECK(LENGTH (TRIM(app1))>0),
    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2))>0),
    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres))>0),
    correo VARCHAR(255) NOT NULL UNIQUE,
    CONSTRAINT chk_correo_formato CHECK(correo=CONCAT("a",expediente,"@unison.mx"))
);

-- el siguiente trigger elimina los espacios en blanco en la primera columna antes de hacer el insert
DELIMITER $$

CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos
FOR EACH ROW
BEGIN
    SET NEW.app1 = TRIM(NEW.app1);
END$$

DELIMITER ;
--224202572

--Pruebas de Integridad
--Expediente no puede ser NULL
INSERT INTO alumnos VALUES(NULL, 'Abril', 'Garcia', 'Jose Humberto', 'jose.abril@unison.mx');

--Expediente no debe ser 0
INSERT INTO alumnos VALUES(0, 'Abril', 'Garcia', 'Jose Humberto', 'jose.abril@unison.mx');

--Expediente negativo, inconsistente
INSERT INTO alumnos VALUES(-22421569, 'Abril', 'Garcia', 'Jose Humberto', 'jose.abril1@unison.mx');

INSERT INTO alumnos VALUES(224215697, 'Abril', 'Garcia', 'Jose Humberto', 'jose.abril@unison.mx');
INSERT INTO alumnos VALUES(224215698, '', 'Garcia', 'Jose Humberto', 'jose.abril1@unison.mx');
INSERT INTO alumnos VALUES(224215699, '       ', 'Garcia', 'Jose Humberto', 'jose.abril2@unison.mx');
INSERT INTO alumnos VALUES (224215705, 'b     ', 'Garcia', 'Jose Humberto', 'jose.abril7@unison.mx'),
(224215706, '     c     ', 'Garcia', 'Jose Humberto', 'jose.abril8@unison.mx');

INSERT INTO alumnos VALUES(22421569, 'Abril', 'Garcia', 'Jose Humberto', 'jose.abril1@unison.mx');
INSERT INTO alumnos VALUES(2242156961, 'Abril', 'Garcia', 'Jose Humberto', 'jose.abril1@unison.mx');
INSERT INTO alumnos VALUES(123456789, 'Abril', '      ', 'Jose Humberto', 'jose.abril1@unison.mx');
INSERT INTO alumnos VALUES(123456783, 'Abril',                       , 'Jose Humberto', 'jose.abrilq@unison.mx');

INSERT INTO alumnos VALUES(123456789, 'Abril',NULL, 'Jose Humberto', 'jose.abril1@unison.mx');
INSERT INTO alumnos VALUES(224215692, 'Abril',"     ","hola", 'jose.abril2@unison.mx');
INSERT INTO alumnos VALUES(123456786, 'Abril',NULL,"   O    ", 'jose.abril31@unison.mx');
INSERT INTO alumnos VALUES(224215697, 'Abril', 'Garcia', 'Jose Humberto', 'a224215697@unison.mx');

INSERT INTO alumnos VALUES(224215697, 'Abril', 'Garcia', 'Jose Humberto', 'a224215697@unison.mx');
INSERT INTO alumnos VALUES(224215699, 'Abril', 'Garcia', 'Jose Humberto', 'a224215699@unison.mx');
