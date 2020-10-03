import React from 'react';
import Moment from 'moment';

const Review = ({ review }) => {
  return (
    <div>
      Individial Review Layout:
      <div>
        <span>Rating stars</span>
        <span>Posted date</span>
      </div>
      <div>Title</div>
      <div>Review body</div>
      <div>Recommendation Blurb</div>
      <div>Scores</div>
    </div>
  );
};

export default Review;
