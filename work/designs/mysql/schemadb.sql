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
 
 INSERT INTO users(username, age, phoneNumber) 
 VALUES
 ('Jimmyplox', 19, '(704)298-2360'),
 ('Sillyooo', 24, '(704)567-3480'),
 ('ItsJustWalter', 19, '(704)123-2150'),
 ('Leafyleef', 24, '(704)986-2732'),
 ('Chilangopwn', 25, '(704)123-8660');

 
 INSERT INTO products(product_name, class1, class2, product_description, colors, dataprice, category)
 VALUES 
 ('Tottenham 2019/20', 'premier col-md-4 bg-light',
 'prod-totten prod', 'Men''s Soccer Jersey',
 '1 Color','$90','premier'),
 ('Barcelona 2019/20', 'laliga col-md-4 bg-light',
 'prod-barca prod', 'Men''s Soccer Jersey',
 '1 Color','$165','laliga'),
  ('Brazil 2019/20', 'national col-md-4 bg-light',
 'prod-brazil prod', 'Men''s Soccer Jersey',
 '1 Color','$66','national'),
  ('Barca Away 2019/20',  'national col-md-4 bg-light',
 'prod-barca-away prod', 'Men''s Soccer Jersey',
 '1 Color','$165','laliga'),
 ('Juventus 2019/20', 'seriea col-md-4 bg-light',
 'prod-juve prod', 'Men''s Soccer Jersey',
 '1 Color','$79','seriea'),
 ('England 2019/20', 'national col-md-4 bg-light',
 'prod-eng prod', 'Men''s Soccer Jersey',
 '1 Color','$79','national'),
  ('Manchester 2019/20', 'premier col-md-4 bg-light',
 'prod-man prod', 'Men''s Soccer Jersey',
 '1 Color','$130','premier'),
  ('Mexico 2019/20', 'national col-md-4 bg-light',
 'prod-mex prod', 'Men''s Soccer Jersey',
 '1 Color','$130','national'),
  ('Chelsea 2019/20', 'premier col-md-4 bg-light',
 'prod-chelsea prod', 'Men''s Soccer Jersey',
 '1 Color','$90','premier'),
  ('US 2019/20', 'national col-md-4 bg-light',
 'prod-us prod', 'Men''s Soccer Jersey',
 '1 Color','$90','national');
 
 INSERT INTO price
 (prices, currency, product_id) 
 VALUES
 (90, 'USD', 1),
 (165, 'USD', 2),
 (66, 'USD', 3),
 (165, 'USD', 4),
 (79, 'USD', 5),
 (79, 'USD', 6),
 (130, 'USD', 7),
 (130, 'USD', 8),
 (90, 'USD', 9),
 (90, 'USD', 10); 
 
 SELECT * FROM users;
 SELECT * FROM price;
 SELECT * FROM products;
 SELECT pro.*, pri.prices 
FROM products pro
LEFT JOIN price pri ON pro.id_products = pri.product_id;