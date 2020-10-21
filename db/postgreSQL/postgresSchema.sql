
DROP DATABASE IF EXISTS reviews_module;

CREATE DATABASE reviews_module;

\c reviews_module;

CREATE TABLE IF NOT EXISTS reviews (
  product_id INT,
  _user VARCHAR(100),
  score INT,
  title VARCHAR(255),
  body VARCHAR(600),
  recommend INT,
  review_date VARCHAR(100),
  ease INT,
  product_value INT,
  quality INT,
  appearance INT,
  works INT
);