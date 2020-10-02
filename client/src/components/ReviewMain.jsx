import { FaAngleRight } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const ReviewMain = ({ reviews = [], eventHandler = () => {} }) => {
  const getReviewAverage = () => {
    if (reviews.length === 0) {
      return 0;
    }
    let sum = 0;
    reviews.forEach((review) => { sum += review.score; });
    return Number.parseFloat(sum / reviews.length).toFixed(1);
  };

  return (
    <div className="review-block" onClick={(e) => eventHandler(e)} onKeyPress={(e) => eventHandler(e)} role="button" tabIndex="0">
      <span className="review">
        <div className="review-title">Reviews</div>
        <StarRatings
          rating={Number(getReviewAverage())}
          starRatedColor="black"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0px"
          svgIconPath="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z"
          svgIconViewBox="0 0 24 24"
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

ReviewMain.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  reviews: PropTypes.array.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default ReviewMain;
