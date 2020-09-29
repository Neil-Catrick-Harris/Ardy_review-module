import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';

const App = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // need to get reviews from backend and calculate the average and display in form of stars
  // need to check if review state is true
  // populate reviews tab on the side
  // main page for reviews is simple component, just a clickable element with ratings
  return (<div>Hello World</div>);
};

ReactDOM.render(<App />, document.getElementById('app'));
