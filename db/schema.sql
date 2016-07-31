### Schema

CREATE DATABASE Burger_db;
USE burger_db;

CREATE TABLE Burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


-- ### Schema

-- CREATE DATABASE cat_db;
-- USE cat_db;

-- CREATE TABLE cats
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	sleepy BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
