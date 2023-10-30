// src/App.js
import React from 'react';
import HomePage from './Pages/HomePage';
import cover from './Images/cover.jpg';

const appStyles = {
  backgroundImage: `url(${cover})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat', 
  height: '100vh',
  opacity: 1,
};

const App = () => {
  return (
    <div style={appStyles}>
      <HomePage />
    </div>
  );
};

export default App;
