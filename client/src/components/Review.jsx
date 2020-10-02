import { FaAngleRight } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const Review = ({ reviews = [], eventHandler = () => {} }) => {
  const getReviewAverage = () => {
    if (reviews.length === 0) {
      return 0;
    }
    let sum = 0;
    reviews.forEach((review) => { sum += review.score; });
    return sum / reviews.length;
  };

  return (
    <div className="review-block">
      <span className="review" onClick={(e) => eventHandler(e)} onKeyPress={(e) => eventHandler(e)} role="button" tabIndex="0">

        <div className="review-title">Reviews</div>
        <StarRatings
          rating={getReviewAverage()}
          starRatedColor="black"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0px"
        />
        <span className="count">
          (
          {
            reviews.length
          }
          )
        </span>
      </span>
      <FaAngleRight className="fa-right-angle" size="1.25em" />
    </div>
  );
};

Review.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  reviews: PropTypes.array.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default Review;
