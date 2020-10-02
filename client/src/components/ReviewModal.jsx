import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const reviewModal = ({ reviews }) => {
  console.log('was here');
  // 1-20 out of x

  const getReviewAverageForParam = (name) => {
    if (reviews.length === 0) {
      return 0;
    }
    let sum = 0;
    reviews.forEach((review) => { sum += review.score; });
    return sum / reviews.length;
  };

  // product_id: i + 1,
  // user: faker.internet.userName(),
  // score: generateScore(),
  // title: faker.lorem.words(),
  // body: review,
  // recommend: Math.random() >= 0.5,
  // date: faker.date.past(),
  // response_id: j === 0 ? i : null,
  // ease: generateScore(),
  // value: generateScore(),
  // quality: generateScore(),
  // appearance: generateScore(),


  return (
  <div>
    Overall { getReviewAverageForParam("score") }
    Ease of assembly/installation { getReviewAverageForParam("ease") }
    Value for money { getReviewAverageForParam("value") }
    Product quality { getReviewAverageForParam("quality") }
    Appearance { getReviewAverageForParam("appearance") }
    Works as expected { getReviewAverageForParam("works") }
  </div>
  );
};

export default reviewModal;
