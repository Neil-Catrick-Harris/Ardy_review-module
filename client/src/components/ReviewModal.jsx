import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const reviewModal = ({ reviews }) => {
  const getReviewAverageForParam = (name) => {
    if (reviews.length === 0) {
      return 0;
    }
    let sum = 0;
    reviews.forEach((review) => { sum += review.score; });
    return sum / reviews.length;
  };

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
