import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import Review from './review.jsx';

const reviewModal = ({ reviews, show, closeModal, clickHandler }) => {
  const showHide = show ? 'modal display-block' : 'modal display-none';
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

    const percentBarStyle = {
      backgroundColor: 'black',
      width: `${avg}%`,
      height: '0.5rem',
      position: 'absolute',
      left: '0',
    };

    return (
      <div className="review-score-bar">
        <div className="review-score-progress-bar" style={percentBarStyle} />
        <ReviewBarDots />
        <ReviewBarDots />
        <ReviewBarDots />
        <ReviewBarDots />
      </div>
    );
  };

  const ReviewBarDots = () => {
    const style = {
      width: '0.25rem',
      height: '0.25rem',
      borderRadius: '50%',
      backgroundColor: 'white',
      zIndex: '1',
    };
    return (<div style={style} />);
  };

  const reviewsAverage = Number(getReviewAverageForParam('score'));

  const RatingMiniComponents = ({ title, param }) => {
    let average;
    if (param === 'score') {
      average = reviewsAverage;
      return (
        <div className="rating-mini-component">
          <span className="mini-component-blurb">{ title }</span>
          <span className="mini-component-rating-bar">{ getReviewStars(average) }</span>
          <span className="mini-component-rating-number">{ average }</span>
        </div>
      );
    }
    average = Number(getReviewAverageForParam(param));
    return (
      <div className="rating-mini-component">
        <span className="mini-component-blurb">{ title }</span>
        <ReviewScoreBar param={param} />
        <span className="mini-component-rating-number">{ average }</span>
      </div>
    );
  };

  return (
    <div className={showHide} onClick={(e) => clickHandler(e)}>
      <div className="review-modal">
        <div className="review-modal-close">
          <div onClick={(e) => closeModal(e)} className="close-circle">
            <BsX className="bs-x" size="1.25em" />
          </div>
        </div>
        <div className="review-modal-body">
          <div className="review-modal-header review-modal-spacing">Reviews</div>
          <div className="review-modal-spacing">
            <div className="review-modal-average">{ reviewsAverage }</div>
            <div>{ getReviewStars(reviewsAverage) } <span className="count">({reviews.length})</span></div>
          </div>
          <div className="review-modal-spacing"><b>Average customer ratings</b></div>
          <div className="review-modal-spacing">
            <RatingMiniComponents title="Overall" param="score" />
            <RatingMiniComponents title="Ease of assembly/installation" param="ease" />
            <RatingMiniComponents title="Value for money" param="value" />
            <RatingMiniComponents title="Product quality" param="quality" />
            <RatingMiniComponents title="Appearance" param="appearance" />
            <RatingMiniComponents title="Works as expected" param="works" />
          </div>

          <div>
            {
              reviews.map((review) => <Review key={review.id} review={review} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviewModal;
