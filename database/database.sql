CREATE DATABASE users_login; 
USE users_login; 
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    user VARCHAR(100) NOT NULL,
    pass VARCHAR(200) NOT NULL
);

SELECT * FROM users;