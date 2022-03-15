import React from 'react';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;
