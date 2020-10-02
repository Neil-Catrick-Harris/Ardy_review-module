import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewMain from './components/ReviewMain.jsx';
import ReviewModal from './components/ReviewModal.jsx';

const App = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getAllReviews = () => {
    const queryString = window.location.pathname;
    axios.get('/').then(() => {
      axios.get(`/api/reviews${queryString}`).then((response) => {
        setReviews(response.data);
      }).catch((error) => {
        console.log('error getting reviews');
      });
    }).catch((error) => {
      console.log('error loading index');
    });
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  const eventHandler = (event) => {
    event.preventDefault();
    setIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <ReviewMain reviews={reviews} eventHandler={eventHandler} />
      { modalIsOpen ? <ReviewModal reviews={reviews} /> : <div /> }
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
