import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';

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

  return (
    <div>
      Reviews:
      <div>
        Rating stars
      </div>
      <div>
        Rating count
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
