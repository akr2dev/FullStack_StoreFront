/* Replace with your SQL commands */
CREATE TYPE products_category AS ENUM ( 'Laptops', 'Phones', 'Accessories' );
alter type products_category owner to store_admin;

CREATE TABLE products
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(200)   NOT NULL,
    price    NUMERIC(10, 2) NOT NULL,
    category products_category
);
alter table products
    owner to store_admin;