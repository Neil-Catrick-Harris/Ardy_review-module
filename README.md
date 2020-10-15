# review

## setup

1. To install dependencies: `npm install`
2. Create a .env file in your root directory and add these configs:
    `NODE_ENV=development`
    `PORT=3000`
    `DB_USERNAME=<username>`
    `DB_PASSWORD=<password>`
3. To setup the database: `npm run seed`
4. To start the server: `npm start`

## CRUD ENDPOINTS
- Create: `/api/reviews`
  - Request body information will be used to create a new review in the database

- Read: `/api/reviews/products/:productId`
  - ProductId will be used to query database for review with matching product_id
  
- Update: `/api/reviews/products/:productId`
  - ProductId will be used to query database for review with matching product_id
  - Information in request body will be used update review selected from query

- Delete: `/api/reviews/products/:productId`
  - ProductId will be used to delete review with database with matching product_id
