CREATE TABLE IF NOT EXISTS mykea.reviews (
  product_id int,
  user text,
  score int,
  title text,
  body text,
  recommend int,
  review_date text,
  ease int,
  product_value int,
  quality int,
  appearance int,
  works int,
  PRIMARY KEY (product_id)
);