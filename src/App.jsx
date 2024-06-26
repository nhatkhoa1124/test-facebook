import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
  <>
    <Header />
     <Routes>
      <Route path="/" element={<Home/>}/>

    </Routes> 
  </>
  );
}

export default App
