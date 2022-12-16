CREATE DATABASE PARQUEADERO;
USE PARQUEADERO;


CREATE TABLE clientes(
	idCliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cedCliente VARCHAR(12) NOT NULL UNIQUE,
	nombre VARCHAR (30) NOT NULL,
	correo VARCHAR(30) NOT NULL,
	direccion VARCHAR(45) NOT NULL,
	celular VARCHAR(15) NOT NULL,
    createdAt DATE,
	updatedAt DATE  
);

CREATE TABLE ingresos(
	idIngreso INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
	placaMoto VARCHAR (8) NOT NULL,
	horaIngreso TIME NOT NULL,
	fechaIngreso DATE NOT NULL,
	horasTotales INT NOT NULL,
    createdAt DATE,
	updatedAt DATE
	
);

CREATE TABLE productos(
	idProducto INT AUTO_INCREMENT PRIMARY KEY,
	nombreProducto VARCHAR(30) NOT NULL,
	precio DOUBLE NOT NULL,
	descripcion VARCHAR(50) NOT NULL,
	inventario INT NOT NULL,
    createdAt DATE,
	updatedAt DATE

);


CREATE TABLE ventas(
	idVenta INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
	fechaVenta DATE NOT NULL,
	cantidad INT NOT NULL,
	idProducto INT NOT NULL,
	createdAt DATE,
	updatedAt DATE
);

/*datos clientes*/
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (1, '3759015458', 'Sayer', 'sbeedon0@tinyurl.com', '589 Commercial Park', '9775189549', '2022-02-14', '2022-11-09');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (2, '8937775535', 'Rey', 'rminot1@theglobeandmail.com', '5 Buena Vista Crossing', '1275222614', '2022-06-17', '2021-12-30');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (3, '3078755397', 'Inessa', 'igatchel2@umich.edu', '02 Sugar Point', '6306815631', '2021-12-06', '2022-10-10');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (4, '9752272563', 'Cristionna', 'csibbering3@1688.com', '3800 Norway Maple Place', '3296499492', '2022-01-03', '2022-01-18');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (5, '7266940362', 'Alaster', 'asprouls4@shutterfly.com', '4 Maywood Avenue', '1938083210', '2021-12-20', '2022-11-07');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (6, '7790012056', 'Wolf', 'wmalt5@newsvine.com', '0 Rusk Plaza', '5461299312', '2022-09-06', '2022-06-16');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (7, '8971763039', 'Napoleon', 'nlabbe6@china.com.cn', '51462 Old Shore Trail', '5208386636', '2022-08-30', '2022-01-04');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (8, '2211591474', 'Geno', 'gliggons7@google.fr', '4 Mesta Hill', '9723507802', '2022-04-19', '2022-01-22');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (9, '8612105114', 'Amata', 'areaney8@gravatar.com', '31 Kings Place', '9403237008', '2022-11-18', '2022-02-11');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (10, '6126925342', 'Kimmie', 'kgarey9@topsy.com', '979 Dunning Parkway', '3628141575', '2022-07-10', '2022-02-25');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (11, '7975247701', 'Tanitansy', 'tsaiza@senate.gov', '27595 Shopko Point', '7156277677', '2022-10-28', '2022-02-17');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (12, '1002855835', 'Nowell', 'nmcparlandb@admin.ch', '07 Southridge Avenue', '8165366242', '2022-07-23', '2021-12-06');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (13, '4837666595', 'Frazer', 'fboornec@nydailynews.com', '9391 Crest Line Point', '3891362847', '2022-01-11', '2022-01-21');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (14, '4525366872', 'Tiffani', 'tpontond@epa.gov', '1850 Scofield Lane', '8372245289', '2022-01-13', '2022-11-03');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (15, '1496779230', 'Kendra', 'kmerrgene@cafepress.com', '65386 Doe Crossing Street', '9894352755', '2022-09-28', '2022-03-16');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (16, '7562109796', 'Dene', 'dumplebyf@domainmarket.com', '72865 Anderson Plaza', '7468821142', '2022-01-13', '2022-04-21');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (17, '6602242797', 'Malynda', 'mkoppeg@theglobeandmail.com', '4873 Reindahl Hill', '8786251619', '2022-06-12', '2021-12-14');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (18, '9982926110', 'Kev', 'ktinkerh@bizjournals.com', '2 Troy Circle', '8576037599', '2022-06-06', '2022-07-30');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (19, '0085307850', 'Riobard', 'rpatronei@sbwire.com', '9253 Fairfield Junction', '4831458348', '2022-04-28', '2022-05-15');
insert into clientes (idCliente, cedCliente, nombre, correo, direccion, celular, createdAt, updatedAt) values (20, '4728111867', 'Dilly', 'dalldridgej@mit.edu', '173 Northfield Circle', '9104630941', '2022-11-04', '2022-03-12');

/*datos ingresos*/
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (1, 1, 'rsf09a', '14:28', '2022-10-27', 8, '2022-03-16', '2021-12-10');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (2, 2, 'izf39j', '0:12', '2022-11-12', 5, '2022-08-04', '2022-08-28');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (3, 3, 'yvi39m', '22:58', '2022-03-02', 2, '2022-07-13', '2022-11-10');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (4, 4, 'wbt12o', '11:03', '2022-06-02', 7, '2022-06-13', '2022-02-26');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (5, 5, 'xuf23y', '12:16', '2021-12-29', 4, '2022-02-15', '2022-08-14');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (6, 6, 'wnl71s', '7:45', '2021-12-14', 1, '2022-10-10', '2022-05-07');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (7, 7, 'pxq93a', '22:18', '2022-01-09', 6, '2022-01-09', '2021-12-17');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (8, 8, 'kgu85r', '17:50', '2022-08-07', 8, '2022-03-26', '2022-10-08');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (9, 9, 'fjy14z', '2:25', '2022-07-02', 4, '2022-07-04', '2022-09-08');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (10, 10, 'wmb19h', '17:38', '2022-06-26', 6, '2022-11-09', '2022-07-04');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (11, 11, 'pfb31p', '20:47', '2022-06-15', 8, '2022-04-08', '2022-05-03');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (12, 12, 'byu91a', '3:58', '2021-12-31', 6, '2022-07-10', '2022-05-13');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (13, 13, 'pcp83k', '15:25', '2022-07-22', 1, '2022-05-22', '2022-06-20');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (14, 14, 'pvn24m', '21:35', '2022-04-11', 4, '2022-08-24', '2022-11-28');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (15, 15, 'lvi95e', '13:50', '2022-03-12', 8, '2022-02-15', '2022-08-02');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (16, 16, 'ups27a', '12:47', '2022-08-31', 4, '2022-04-20', '2021-12-18');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (17, 17, 'mmg88e', '6:42', '2022-07-23', 3, '2021-12-31', '2022-11-10');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (18, 18, 'rhj97p', '11:16', '2022-07-19', 1, '2022-07-12', '2022-10-09');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (19, 19, 'xai89x', '15:04', '2022-06-23', 1, '2022-08-24', '2022-11-23');
insert into ingresos (idIngreso, idCliente, placaMoto, horaIngreso, fechaIngreso, horasTotales, createdAt, updatedAt) values (20, 20, 'ikt82v', '19:37', '2022-10-27', 5, '2022-10-14', '2022-08-16');

/*Productos*/

insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('frenos', 794825, 'condimentum', 8, '2022-10-14', '2022-10-21');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('bombillos', 790364, 'eget', 39, '2022-03-19', '2022-08-12');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('amortiguador', 208616, 'ullamcorper', 36, '2022-10-28', '2022-08-11');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('baterias', 676025, 'quam', 32, '2022-08-26', '2022-11-29');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('betún', 564887, 'quam', 54, '2022-02-03', '2022-01-27');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('guantes', 657301, 'sed', 23, '2022-08-19', '2022-03-19');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('cera', 383545, 'vivamus', 43, '2022-04-30', '2022-03-08');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('frenos', 546446, 'lorem', 11, '2022-02-10', '2022-03-15');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('asciento', 902676, 'amet', 29, '2022-10-10', '2022-01-14');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('casco', 538260, 'facilisi', 44, '2022-09-22', '2022-05-14');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('amortiguador', 214044, 'nullam', 50, '2022-09-18', '2022-05-15');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('amortiguador', 410801, 'id', 25, '2022-06-26', '2022-06-07');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('cera', 904527, 'dui', 20, '2022-09-15', '2022-06-05');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('baterias', 801625, 'eros', 25, '2022-01-23', '2022-11-30');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('bombillos', 715979, 'ut', 16, '2022-11-05', '2022-10-02');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('radio', 639342, 'elit', 49, '2022-09-06', '2022-07-28');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('amortiguador', 280695, 'aenean', 18, '2022-01-06', '2022-01-31');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('betún', 926389, 'amet', 9, '2022-02-24', '2022-02-21');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('bombillos', 454528, 'vel', 7, '2021-12-11', '2021-12-08');
insert into productos (nombreProducto, precio, descripcion, inventario, createdAt, updatedAt) values ('guantes', 647660, 'diam', 38, '2022-09-04', '2022-04-24');

/*ventas*/

insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (1, '2022-11-21', 3, 1, '2022-04-10', '2022-06-08');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (2, '2022-08-03', 5, 2, '2022-09-06', '2022-02-20');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (3, '2022-09-02', 6, 3, '2022-01-29', '2022-04-22');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (4, '2022-03-30', 4, 4, '2022-01-06', '2022-08-14');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (5, '2022-09-11', 7, 5, '2022-06-01', '2022-09-23');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (6, '2022-06-08', 7, 6, '2022-02-09', '2022-02-11');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (7, '2022-07-17', 6, 7, '2022-08-25', '2022-06-22');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (8, '2021-12-21', 3, 8, '2022-02-21', '2022-11-23');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (9, '2022-11-24', 3, 9, '2022-11-03', '2022-08-03');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (10, '2021-12-09', 5, 10, '2022-02-28', '2022-10-28');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (11, '2022-11-16', 2, 11, '2022-08-11', '2022-07-04');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (12, '2022-10-13', 2, 12, '2022-12-05', '2022-10-19');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (13, '2022-08-12', 4, 13, '2022-04-15', '2022-06-13');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (14, '2022-07-28', 1, 14, '2022-10-28', '2022-10-03');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (15, '2022-10-11', 8, 15, '2022-07-12', '2022-09-08');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (16, '2022-03-28', 2, 16, '2021-12-12', '2022-05-29');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (17, '2022-03-08', 6, 17, '2022-04-21', '2022-07-25');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (18, '2022-07-06', 3, 18, '2022-11-05', '2022-05-28');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (19, '2022-07-15', 5, 19, '2022-03-09', '2022-02-15');
insert into ventas (idCliente, fechaVenta, cantidad, idProducto, createdAt, updatedAt) values (20, '2022-09-29', 7, 20, '2022-04-03', '2022-04-04');