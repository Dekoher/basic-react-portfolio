import React from 'react'
import Home from './home/home';
import About from './about/about';
import './pages.css';

export default function Pages() {
  return (
    <div className='pages-container'>
      <Home></Home>
      <About></About>
    </div>
  )
}
