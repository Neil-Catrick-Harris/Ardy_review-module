USE mykea;

COPY reviews (product_id, user, score, title, body, recommend, review_date, ease, product_value, quality, appearance, works) FROM '/Users/ncg8/Documents/review/db/reviews.csv' with header=true and delimiter='|';