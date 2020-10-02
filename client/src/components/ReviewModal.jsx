import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import Progress from 'react-progressbar';
import Review from './review.jsx';

const reviewModal = ({ reviews }) => {
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

  const getReviewScoreBar = (name) => {
    const avg = Number(getReviewAverageForParam(name)) * 20;
    return (
      // <Progress completed={avg} className="score-full-bar" />
      <div className="score-full-bar">
        <div className="score-percent-bar" />
      </div>
    );
  };

  const reviewsAverage = Number(getReviewAverageForParam('score'));

  const RatingMiniComponents = ({ title, param }) => {
    let average;
    if (param === 'score') {
      average = reviewsAverage;
    } else {
      average = Number(getReviewAverageForParam(param));
    }
    return (
      <div>
        <span>{ title }</span>
        <span>{ getReviewStars(average) }</span>
        <span>{ average }</span>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h2>Reviews</h2>
        <h1>{ reviewsAverage }</h1>
        <div>{ getReviewStars(reviewsAverage) }</div>
        <h2>Average customer ratings</h2>
        <div>
          <RatingMiniComponents title="Overall" param="score" />
          <RatingMiniComponents title="Value for money" param="value" />
          <RatingMiniComponents title="Product quality" param="quality" />
          <RatingMiniComponents title="Appearance" param="appearance" />
          <RatingMiniComponents title="Works as expected" param="works" />
        </div>
      </div>

      <div>
        {
          reviews.map((review) => <Review key={review.id} review={review} />)
        }
      </div>
    </div>
  );
};

export default reviewModal;
