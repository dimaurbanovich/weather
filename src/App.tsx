import React from 'react';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import { Routes, Route } from 'react-router-dom';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

function App() {
  return (
    <>
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
