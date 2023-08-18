import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import HomePage from './HomePage';
import SecondPage from './SecondPage';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
