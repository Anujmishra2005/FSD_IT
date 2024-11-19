import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<h1>Login Page</h1>}></Route>
        <Route path='/logout' element={<h1>Logout Page</h1>}></Route>
        <Route path='/quiz' element={<h1>Quiz App</h1>}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='*' element={<h1>No Page Available</h1>}></Route>
      </Routes>
    
    </>
  );
}

export default App;
