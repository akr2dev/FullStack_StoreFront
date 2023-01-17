/* Replace with your SQL commands */
create type order_status as enum ('active', 'complete');

alter type order_status owner to store_admin;

CREATE TABLE IF NOT EXISTS orders
(
    id         SERIAL PRIMARY KEY,
    user_id    INT NOT NULL REFERENCES users (id),
    status     order_status
);
alter table orders
    owner to store_admin;