import React, { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import {
  ScoreBar,
  Count,
} from '../ReviewModalStyling.jsx';

const ReviewTabTitle = styled.div`
  font-weight: bold;
`;

const ReviewTab = styled.div`
  align-items: center;
  border-top: 1px solid #f5f5f5;
  font-size: 16px;
  width: 100%;
  height: auto;
  padding: 20px 0;
  &:hover ${ReviewTabTitle}{
    text-decoration: underline;
  };
`;

const StyledFaAngleRight = styled(FaAngleRight)`
  width: auto;
  float: right;
  position: relative;
  size: 1.25em;
`;

// on hover underline (check styled-component refs)
// .review-block:hover .review-title {
//   text-decoration: underline;
// }

const ReviewMain = ({ reviews = [], showModal = () => {} }) => {
  const getReviewAverage = () => {
    if (reviews.length === 0) {
      return 0;
    }
    let sum = 0;
    reviews.forEach((review) => { sum += review.score; });
    return Number.parseFloat(sum / reviews.length).toFixed(1);
  };

  return (
    <ReviewTab onClick={showModal}>
      <span>
        <ReviewTabTitle>Reviews</ReviewTabTitle>
        <StarRatings
          rating={Number(getReviewAverage())}
          starRatedColor="black"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0px"
          svgIconPath="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z"
          svgIconViewBox="0 0 24 24"
        />
        <Count>
          (
          {
            reviews.length
          }
          )
        </Count>
      </span>
      <StyledFaAngleRight />
    </ReviewTab>
  );
};

ReviewMain.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  reviews: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ReviewMain;
