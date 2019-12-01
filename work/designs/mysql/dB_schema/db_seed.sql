USE jerseyx;

INSERT INTO users(username, age, phoneNumber) 
 VALUES
 ('Jimmyplox', 19, '(704)298-2360'),
 ('Sillyooo', 24, '(704)567-3480'),
 ('ItsJustWalter', 19, '(704)123-2150'),
 ('Leafyleef', 24, '(704)986-2732'),
 ('Chilangopwn', 25, '(704)123-8660');

 
 INSERT INTO products(product_name, class1, class2, product_description, colors, dataprice, category)
 VALUES 
 ('Tottenham 2019/20', 'premier product-content bg-light',
 'prod-totten prod', 'Men''s Soccer Jersey',
 '1 Color','$90','premier'),
 ('Barcelona 2019/20', 'laliga product-content bg-light',
 'prod-barca prod', 'Men''s Soccer Jersey',
 '1 Color','$165','laliga'),
  ('Brazil 2019/20', 'national  product-content bg-light',
 'prod-brazil prod', 'Men''s Soccer Jersey',
 '1 Color','$66','national'),
  ('Barca Away 2019/20',  'national product-content bg-light',
 'prod-barca-away prod', 'Men''s Soccer Jersey',
 '1 Color','$165','laliga'),
 ('Juventus 2019/20', 'seriea product-content bg-light',
 'prod-juve prod', 'Men''s Soccer Jersey',
 '1 Color','$79','seriea'),
 ('England 2019/20', 'national product-content bg-light',
 'prod-eng prod', 'Men''s Soccer Jersey',
 '1 Color','$79','national'),
  ('Manchester 2019/20', 'premier product-content bg-light',
 'prod-man prod', 'Men''s Soccer Jersey',
 '1 Color','$130','premier'),
  ('Mexico 2019/20', 'national product-content bg-light',
 'prod-mex prod', 'Men''s Soccer Jersey',
 '1 Color','$130','national'),
  ('Chelsea 2019/20', 'premier product-content bg-light',
 'prod-chelsea prod', 'Men''s Soccer Jersey',
 '1 Color','$90','premier'),
  ('US 2019/20', 'national product-content bg-light',
 'prod-us prod', 'Men''s Soccer Jersey',
 '1 Color','$90','national'),
 ('US Away 2019/20', 'national product-content bg-light',
'prod-us-away prod','Women''s Soccer Jersey',
'1 Color', '$90', 'national'),
('BVB 2019/20', 'bundesliga product-content bg-light',
'prod-bor prod','Men''s Soccer Jersey',
'1 Color', '$39', 'bundesliga'),
('Pumas 2019/20', 'ligamx product-content bg-light',
'prod-unam prod','Men''s Soccer Jersey',
'1 Color', '$90', 'ligamx'),
('Milan 2019/20', 'seriea product-content bg-light',
'prod-milan prod','Men''s Soccer Jersey',
'1 Color', '$90', 'seriea'),
('Pumas Away 2019/20', 'ligamx product-content bg-light',
'prod-unam-away prod','Men''s Soccer Jersey',
'1 Color', '$90', 'ligamx'),
('Bayern 2019/20', 'bundesliga product-content bg-light',
'prod-bayern prod','Men''s Soccer Jersey',
'1 Color', '$90', 'bundesliga'),
('Chivas 2019/20', 'ligamx product-content bg-light',
'prod-chivas prod','Men''s Soccer Jersey',
'1 Color', '$44', 'ligamx'),
('Inter 2019/20', 'seriea product-content bg-light',
'prod-inter prod','Women''s Soccer Jersey',
'1 Color', '$44', 'seriea'),
('Madrid 2019/20', 'laliga product-content bg-light',
'prod-madrid prod','Men''s Soccer Jersey',
'1 Color', '$90', 'laliga')
;
 
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
 (90, 'USD', 10),
 (90, 'USD', 11),
(39, 'USD',12),
(90, 'USD', 13),
(90, 'USD',14),
(90, 'USD',15),
(90, 'USD',16),
(44, 'USD',17),
(44, 'USD',18),
(90, 'USD',19); 
 
 SELECT * FROM users;
 SELECT * FROM price;
 SELECT * FROM products;
 SELECT pro.*, pri.prices 
FROM products pro
LEFT JOIN price pri ON pro.id_products = pri.product_id;