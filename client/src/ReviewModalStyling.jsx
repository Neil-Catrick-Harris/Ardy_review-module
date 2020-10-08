/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

export const ReviewModalSpacing = styled.div`
  margin-bottom: 30px!important;
`;

// For the mini review component with review rating bars
export const RatingModalComponent = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 0.875rem;
`;

export const RatingModalComponentBlurb = styled.span`
  width: 100%;
`;

export const RatingModalComponentRatingBar = styled.span`
  position: relative;
  width: 200px;
`;

export const RatingModalComponentRatingNumber = styled.span`
  padding: 0 1.25rem;
`;

// Others
export const ScoreBar = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  background-color: lightgray;
  height: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
`;

export const ReviewScoreProgressBar = styled.div`
  background-color: black;
  width: ${(props) => props.value}%;
  height: 0.5rem;
  position: absolute;
  left: 0;
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
`;

export const Count = styled.span`
  padding-left: 10px;
  font-size: 0.75rem;
  color: #484848;
`;
