/* Replace with your SQL commands */
-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO products (name, price, category)
VALUES
    ('Lenovo G580', 1200.00, 'Laptops' ),
    ('Asus ROG', 2500.00, 'Laptops' ),
    ('Nokia 8.3', 2150.99, 'Phones' ),
    ('Samsung A70', 2450.45, 'Phones' ),
    ('Laptop Cooler Fan', 86.49, 'Accessories' ),
    ('Nokia Cover', 45.70, 'Accessories' ),
    ('Samsgun Screen Protector', 34.60, 'Accessories' );

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO users (first_name, last_name, email, password, admin)
VALUES
    ( 'Akr2dev', 'admin', 'akr2dev@admin.com', '$2b$10$Bn0s4Yl2MZHOfKzqdVsrYOmoFzVvy6lm7atUpn6noC/kQVwHxydhS', 't'),
    ('Hancock', 'user', 'hancock@user.com', '$2b$10$N1mIcnmg4cObmTDq8pawV.6Z/vIwBDjOZW.wPALxhjqEc4wGqufcS', 'f'),
    ( 'Martin', 'user', 'martin@user.com', '$2b$10$9sPZl7yMVMsZr/6V/xeXE.eNKXf5Ih5teCAyP3C4DVAWVttj/x3C2', 'f');

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO orders ( user_id, status)
VALUES ( 1, 'active'),
       ( 2, 'active'),
       ( 1, 'complete'),
       ( 2, 'complete'),
       ( 3, 'active'),
       ( 3, 'complete');

-- ----------------------------
-- Records of orders_products
-- ----------------------------
INSERT INTO orders_products ( product_id, order_id, quantity)
VALUES (5, 1, 3),
       (1, 1, 2),
       (3, 1, 4),
       (7, 3, 6),
       (4, 2, 5),
       (6, 2, 1),
       (1, 4, 4),
       (3, 4, 2),
       (5, 4, 7),
       (7, 4, 4),
       (3, 5, 3),
       (2, 6, 2),
       (4, 6, 1);