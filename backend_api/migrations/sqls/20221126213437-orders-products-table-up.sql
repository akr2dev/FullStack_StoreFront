/* Replace with your SQL commands */
CREATE TABLE orders_products (
id SERIAL PRIMARY KEY,
 product_id INT REFERENCES products(id) ON DELETE SET NULL,
 order_id INT REFERENCES orders(id) ON DELETE SET NULL,
quantity INT NOT NULL
);