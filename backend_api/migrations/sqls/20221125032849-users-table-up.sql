CREATE TABLE IF NOT EXISTS users
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(200)        NOT NULL,
    last_name  VARCHAR(200)        NOT NULL,
    email      VARCHAR(200) UNIQUE NOT NULL,
    password   VARCHAR(300)        NOT NULL,
    admin      BOOLEAN             NOT NULL DEFAULT FALSE
);
 ALTER TABLE IF EXISTS users
    OWNER to store_admin;