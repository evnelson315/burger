### Schema

CREATE DATABASE Burger_db;
USE Burger_db;

CREATE TABLE Burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
