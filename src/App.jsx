import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Content from './components/Content'
import aside from './components/M_side'
import './App.css'
import M_side from './components/M_side'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='inner'>
        <M_side/>
        <Content/>
      </div>
      <Nav/>
      <Footer/>
    </div>
  )
}

export default App
