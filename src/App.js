import './App.css';
import React from 'react';

import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/rooms' element={<Rooms/>}/>
          <Route exact path='/rooms/:slug' element={<SingleRoom/>}/>
          <Route element={<Error/>}/>     ///Not catching error??
      </Routes>
    </>
  );
}

export default App;