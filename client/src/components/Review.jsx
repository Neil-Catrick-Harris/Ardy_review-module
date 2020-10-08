import React from 'react';
import Moment from 'moment';
import { BsX } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
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

export const UserReview = styled.div`
  align-items: center;
  border-top: 1px solid #f5f5f5;
  font-size: 16px;
  width: 100%;
  height: auto;
  padding: 20px 0;
`;

const ReviewTitle = styled.div`
  font-weight: 700;
  padding-bottom: 0.625rem;
`;

const UserReviewHeader = styled.div`
  font-size: 0.75rem;
  margin-bottom: 30px!important;
`;

const UserReviewInfo = styled.span`
  float: right;
`;

const StyledBsX = styled(BsX)`
  padding-right: 5px;
`;

const StyledBiCheck = styled(BiCheck)`
  padding-right: 5px;
`;

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
      <RatingMiniComponent key={review.id + param} title={paramTitle[param]} param={param} />,
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
    const val = review[param] * 20;
    return (
      <ScoreBar>
        <ReviewScoreProgressBar value={val} />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </ScoreBar>
    );
  };

  const RatingMiniComponent = ({ title, param }) => (
    <RatingModalComponent>
      <RatingModalComponentBlurb>{ title }</RatingModalComponentBlurb>
      <ReviewScoreBar param={param} />
      <RatingModalComponentRatingNumber>{ review[param] }</RatingModalComponentRatingNumber>
    </RatingModalComponent>
  );

  const recommendBlurb = () => {
    if (review.recommend) {
      return (
        <UserReviewHeader>
          <StyledBiCheck />
          Yes, I recommend this product
        </UserReviewHeader>
      );
    }
    return (
      <UserReviewHeader>
        <StyledBsX />
        No, I don&apos;t recommend this product
      </UserReviewHeader>
    );
  };

  return (
    <UserReview>
      <UserReviewHeader>
        <span>
          { getReviewStars(review.score) }
          {' '}
        </span>
        <UserReviewInfo>
          { review.user }
          {' '}
          -
          {' '}
          { Moment(review.date).format('MM/DD/YYYY') }
        </UserReviewInfo>
      </UserReviewHeader>
      <ReviewTitle>{ review.title }</ReviewTitle>
      <ReviewModalSpacing>{ review.body }</ReviewModalSpacing>
      {
        recommendBlurb()
      }
      {
        getAvailableRatings()
      }
    </UserReview>
  );
};

export default Review;
