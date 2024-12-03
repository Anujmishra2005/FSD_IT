import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/Home'; // Import Home component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<h1>Counter App</h1>} />
        <Route path="/stopwatch" element={<h1>Stop Watch App</h1>} />
        <Route path="*" element={<h1>No Page Available</h1>} /> {/* 404 Page */}
      </Routes>
    </div>
  );
};

export default App;

// rafce