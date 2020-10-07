import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import Modal from 'react-modal';
import ReviewMain from './components/ReviewMain.jsx';
import ReviewModal from './components/ReviewModal.jsx';

const ReviewModule = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getAllReviews = () => {
    const queryString = window.location.pathname;
    axios.get(`http://localhost:3003/api/reviews${queryString}`).then((response) => {
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
    <div className="main">
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

ReactDOM.render(<ReviewModule />, document.getElementById('review-module'));
