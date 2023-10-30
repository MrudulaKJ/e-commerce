// HomePage.js
import React from 'react';
import Header from '../Components/Header';
import ImageCarousel from '../Components/ImageCarousel'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '20px' }}>
      <ImageCarousel />
      </div>
    </div>
  );
};

export default HomePage;
