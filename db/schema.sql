DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger VARCHAR(255),
    devoured BOOLEAN DEFAULT "false",
    PRIMARY KEY(id)  
)

