import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './createGlobalStyle.jsx';
import ReviewMain from './components/ReviewMain.jsx';
import ReviewModal from './components/ReviewModal.jsx';

const ReviewModule = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  let { productId } = useParams();

  const getAllReviews = () => {
    if (!productId) {
      productId = '1';
    }

    axios.get(`/api/reviews/products/${productId}`).then((response) => {
      setReviews(response.data);
    }).catch((error) => {
      console.log('error getting reviews');
    });
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const clickHandler = (event) => {
    let targetClassName = event.target.className;
    // svg icon className is an object, this is here to catch that edge case
    if (typeof targetClassName === 'object') {
      targetClassName = targetClassName.baseVal;
    }

    if (targetClassName && targetClassName.includes('display-block')) {
      handleCloseModal();
    }
  };

  return (
    <div>
      <GlobalStyle />
      <ReviewMain reviews={reviews} showModal={showModal} />
      <ReviewModal
        show={modalIsOpen}
        reviews={reviews}
        closeModal={handleCloseModal}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default ReviewModule;
