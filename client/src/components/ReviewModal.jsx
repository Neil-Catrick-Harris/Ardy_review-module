import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import Review from './Review.jsx';
import {
  RatingModalComponent,
  RatingModalComponentBlurb,
  RatingModalComponentRatingBar,
  RatingModalComponentRatingNumber,
  ReviewModalSpacing,
  ReviewScoreProgressBar,
  ScoreBar,
  Dot,
  Count,
} from '../ReviewModalStyling.jsx';

const ReviewModal = styled.div`
  width: 500px;
  height: auto;
  position: sticky;
  float: right;
  transform: translateX(${(props) => props.show ? '0' : '100%'});
  transition: all ease 300ms;
  background-color: white;
  z-index: 5;
`;

const ReviewModalBody = styled.div`
  overflow-y: scroll;
  height: 84vh;
  color: #484848;
  padding: 30px 50px 40px 50px;
`;

const ReviewModalClose = styled.div`
  height: 35px;
  padding: 25px 37px 25px 37px;
`;

const ReviewModalCloseCircle = styled.div`
  width: 35px;
  height: 35px;
  float: right;
  display: flex;
  border-radius: 50%;
  background-color: white;
  position: relative;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: lightgrey;
  };
`;

const ReviewModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 30px!important;
`;

const ReviewModalAverageScore = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: black;
`;

const StyledBsX = styled(BsX)`
  position: absolute;
  size: 1.25em;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: ${(props) => props.show ? 'block' : 'none'};
`;

const reviewModal = ({ reviews, show, closeModal }) => {
  const getReviewAverageForParam = (param) => {
    if (reviews.length === 0) {
      return 0;
    }
    let sum = 0;
    reviews.forEach((review) => { sum += review[param]; });
    return Number.parseFloat(sum / reviews.length).toFixed(1);
  };

  const getReviewStars = (score) => (
    <StarRatings
      rating={score}
      starRatedColor="black"
      numberOfStars={5}
      starDimension="15px"
      starSpacing="0px"
      svgIconPath="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z"
      svgIconViewBox="0 0 24 24"
    />
  );

  const ReviewScoreBar = ({ param }) => {
    const avg = Number(getReviewAverageForParam(param)) * 20;

    return (
      <ScoreBar>
        <ReviewScoreProgressBar value={avg} />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </ScoreBar>
    );
  };

  const reviewsAverage = Number(getReviewAverageForParam('score'));

  const RatingMiniComponent = ({ title, param }) => {
    let average;
    if (param === 'score') {
      average = reviewsAverage;
      return (
        <RatingModalComponent>
          <RatingModalComponentBlurb>{ title }</RatingModalComponentBlurb>
          <RatingModalComponentRatingBar>{ getReviewStars(average) }</RatingModalComponentRatingBar>
          <RatingModalComponentRatingNumber>{ average }</RatingModalComponentRatingNumber>
        </RatingModalComponent>
      );
    }
    average = Number(getReviewAverageForParam(param)).toFixed(1);
    return (
      <RatingModalComponent>
        <RatingModalComponentBlurb>{ title }</RatingModalComponentBlurb>
        <ReviewScoreBar param={param} />
        <RatingModalComponentRatingNumber>{ average }</RatingModalComponentRatingNumber>
      </RatingModalComponent>
    );
  };

  return (
    <ModalOverlay show={show} onClick={(e) => closeModal(e)}>
      <ReviewModal show={show}>
        <ReviewModalClose>
          <ReviewModalCloseCircle onClick={(e) => closeModal(e)}>
            <StyledBsX />
          </ReviewModalCloseCircle>
        </ReviewModalClose>
        <ReviewModalBody>
          <ReviewModalTitle>Reviews</ReviewModalTitle>
          <ReviewModalSpacing>
            <ReviewModalAverageScore>{ reviewsAverage }</ReviewModalAverageScore>
            <div>
              { getReviewStars(reviewsAverage) }
              <Count>
                ({ reviews.length })
              </Count>
            </div>
          </ReviewModalSpacing>
          <ReviewModalSpacing><b>Average customer ratings</b></ReviewModalSpacing>
          <ReviewModalSpacing>
            <RatingMiniComponent title="Overall" param="score" />
            <RatingMiniComponent title="Ease of assembly/installation" param="ease" />
            <RatingMiniComponent title="Value for money" param="value" />
            <RatingMiniComponent title="Product quality" param="quality" />
            <RatingMiniComponent title="Appearance" param="appearance" />
            <RatingMiniComponent title="Works as expected" param="works" />
          </ReviewModalSpacing>

          <div>
            {
              reviews.map((review) => <Review key={review.id} review={review} />)
            }
          </div>
        </ReviewModalBody>
      </ReviewModal>
    </ModalOverlay>
  );
};

export default reviewModal;
