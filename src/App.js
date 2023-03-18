import React from 'react'
import './App.css'
import Header from './modules/Header'
import Footer from './modules/Footer'
import Copyright from './modules/Copyright'

import ToDo from './modules/ToDo/ToDo'

function App() {
  return (
    <div className='App'>
      <Header />
      <ToDo />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
