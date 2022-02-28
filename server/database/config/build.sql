BEGIN;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(150) DEFAULT 'Gaza'
);

INSERT INTO users (name, location) VALUES 
  ('Rand', 'Gaza'),
  ('Salma', 'Gaza'),
  ('Saleh', 'Gaza'),
  ('Ghada', 'Gaza');

COMMIT;