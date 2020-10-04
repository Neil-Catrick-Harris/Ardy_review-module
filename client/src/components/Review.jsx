import React from 'react';
import Moment from 'moment';
import { BsX } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import StarRatings from 'react-star-ratings';

const Review = ({ review }) => {
  const getAvailableRatings = () => {
    const paramTitle = {
      score: 'Overall',
      ease: 'Ease of assembly/installation',
      value: 'Value for money',
      quality: 'Product quality',
      appearance: 'Appearance',
      works: 'Works as expected',
    };
    const ratingParams = ['ease', 'value', 'quality', 'appearance', 'works'];

    for (let i = 0; i < ratingParams.length; i += 1) {
      if (review[ratingParams[i]] === 0) {
        ratingParams.splice(i, 1);
      }
    }

    const miniComponents = [];
    ratingParams.forEach((param) => miniComponents.push(
      <RatingMiniComponents key={review.id + param} title={paramTitle[param]} param={param} />,
    ));

    return <div>{miniComponents}</div>;
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
    const percentBarStyle = {
      backgroundColor: 'black',
      width: `${review[param] * 20}%`,
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

  const RatingMiniComponents = ({ title, param }) => {
    let average;
    if (param === 'score') {
      return (
        <div className="rating-mini-component">
          <span className="mini-component-blurb">{ title }</span>
          <span className="mini-component-rating-bar">{ getReviewStars(review[param]) }</span>
          <span className="mini-component-rating-number">{ average }</span>
        </div>
      );
    }
    return (
      <div className="rating-mini-component">
        <span className="mini-component-blurb">{ title }</span>
        <ReviewScoreBar param={param} />
        <span className="mini-component-rating-number">{ review[param] }</span>
      </div>
    );
  };

  const recommendBlurb = () => {
    if (review.recommend) {
      return (
        <div className="review-modal-spacing user-review-header">
          <BiCheck style={{ paddingRight: '5px' }} />
          Yes, I recommend this product
        </div>
      );
    }
    return (
      <div className="review-modal-spacing user-review-header">
        <BsX style={{ paddingRight: '5px' }} />
        No, I don&apos;t recommend this product
      </div>
    );
  };

  return (
    <div className="review-block">
      <div className="review-modal-spacing user-review-header">
        <span>
          { getReviewStars(review.score) }
          {' '}
        </span>
        <span className="user-review-info">
          {review.user}
          {' '}
          -
          {' '}
          {Moment(review.date).format('MM/DD/YYYY')}
        </span>
      </div>
      <div className="review-modal-title">{review.title}</div>
      <div className="review-modal-spacing">{review.body}</div>
      {
        recommendBlurb()
      }
      {
        getAvailableRatings()
      }
    </div>
  );
};

export default Review;
