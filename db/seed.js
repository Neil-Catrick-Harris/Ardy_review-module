require('./index.js');
const faker = require('faker');
const Review = require('./Review.js');
const Response = require('./Response.js');

Review.hasOne(Response);
Response.belongsTo(Review);

const generateScore = () => Math.ceil(Math.random() * 5);

const generateSeedReviewData = () => {
  const data = [];
  for (let i = 0; i < 100; i += 1) {
    // randomly generate between 15 and 25 reviews per product
    const numberOfReviews = Math.floor(Math.random() * 10) + 15;
    let review = faker.lorem.paragraph();
    // console.log(typeof review);
    if (review.length > 255) {
      review = review.slice(0, 255);
    }
    for (let j = 0; j < numberOfReviews; j += 1) {
      const params = {
        product_id: i + 1,
        user: faker.internet.userName(),
        score: generateScore(),
        title: faker.lorem.words(),
        body: review,
        recommend: Math.random() >= 0.5,
        date: faker.date.past(),
        response_id: j === 0 ? i : null,
        ease: generateScore(),
        value: generateScore(),
        quality: generateScore(),
        appearance: generateScore(),
        works: generateScore(),
      };
      data.push(params);
    }
  }
  return data;
};

const generateSeedResponseData = () => {
  const data = [];
  for (let i = 0; i < 100; i += 1) {
    let response = faker.lorem.paragraph();
    if (response.length > 255) {
      response = response.slice(0, 255);
    }
    const params = {
      reviewId: i + 1,
      responder: faker.name.firstName(),
      response_date: faker.date.past(),
      response_body: response,
    };
    data.push(params);
  }

  return data;
};

const insertSeedData = () => {
  const reviewData = generateSeedReviewData();
  const responseData = generateSeedResponseData();

  Review.sync({ force: true })
    .then(() => Review.bulkCreate(reviewData))
    .then(() => Response.sync({ force: true })
      .then(() => Response.bulkCreate(responseData))
      .catch((err) => {
        console.log('ERRORED');
        console.log(err);
      }))
    .catch((err) => {
      console.log('ERRORED');
      console.log(err);
    });
};

insertSeedData();
