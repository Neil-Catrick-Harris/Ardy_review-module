const sequelize = require('./index.js');
const Review = require('./Review.js');
const Response = require('./Response.js');
const faker = require('faker');

Review.hasOne(Response);
Response.belongsTo(Review);

var generateSeedReviewData = function () {
  var data = [];
  for (var i = 0; i < 100; i++) {
    // randomly generate between 15 and 25 reviews per product
    var numberOfReviews = Math.floor(Math.random() * 10) + 15;
    var review = faker.lorem.paragraph();
    //console.log(typeof review);
    if (review.length > 255) {
      review = review.slice(0, 255);
    }
    for (var j = 0; j < numberOfReviews; j++) {
      var params = {
        product_id: i,
        user: faker.internet.userName() + i,
        score: generateScore(),
        title: faker.lorem.words(),
        body: review,
        recommend: Math.random() >= 0.5,
        date: faker.date.past(),
        response_id: j === 0 ? i : null,
        ease: generateScore(),
        value: generateScore(),
        quality: generateScore(),
        appearance: generateScore()
      }
      data.push(params);
    }
  }
  return data;
}

var generateSeedResponseData = function() {
  var data = [];
  for (var i = 0; i < 100; i++) {
    var response = faker.lorem.paragraph();
    if (response.length > 255) {
      response = response.slice(0, 255);
    }
    var params = {
      reviewId: i + 1,
      responder: faker.name.firstName(),
      response_date: faker.date.past(),
      response_body: response
    }
    data.push(params);
  }

  return data;
}


var generateScore = function() {
  return Math.ceil(Math.random() * 5);
}

var insertSeedData = function() {
  var reviewData = generateSeedReviewData();
  var responseData = generateSeedResponseData();

  Review.sync({force: true})
  .then(function() {
    return Review.bulkCreate(reviewData)
  })
  .then(function() {
    Response.sync({force: true})
    .then(function() {
      return Response.bulkCreate(responseData)
    })
    .catch(function(err) {
      console.log("ERRORED")
      console.log(err);
    })
  })
  .catch(function(err) {
    console.log("ERRORED")
    console.log(err);
  })
}

insertSeedData();