CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id integer NOT NULL AUTO_INCREMENT,
  `text` varchar(32),
  user varchar(32),
  roomname varchar(32),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  username varchar(32) NOT NULL PRIMARY KEY
);

INSERT INTO messages (`text`, user, roomname) VALUES ('Hi', 'Easak', 'Main');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

