DROP DATABASE IF EXISTS jerseyx;

CREATE DATABASE jerseyx;

USE jerseyx;

CREATE TABLE users(
 id_users INT AUTO_INCREMENT NOT NULL,
 username VARCHAR(45),
 age INT,
 phoneNumber VARCHAR(15),
 PRIMARY KEY(id_users)
 );
 
CREATE TABLE price(
 id_price INT AUTO_INCREMENT NOT NULL,
 prices INT,
 currency CHAR(3),
 product_id INT,
 PRIMARY KEY(id_price)
);

CREATE TABLE products(
 id_products INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(200),
 class1 VARCHAR(100), class2 VARCHAR(100),
 product_description VARCHAR(256),
 colors VARCHAR(100),
 dataprice VARCHAR(10),
 category VARCHAR(256),
 PRIMARY KEY(id_products)
 );

 SELECT * FROM users;
 SELECT * FROM price;
 SELECT * FROM products;