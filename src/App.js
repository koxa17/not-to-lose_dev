import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './_reset.css'
import './App.scss'
import Header from './Component/header/Header'
import Main from './Component/content/Main'
import Footer from './Component/footer/Footer'
import Banner from './Component/content/Banner'

function App() {
  return (
    <>
      <div className="first-display">
        <Header />
        <Main />
      <Banner />
      </div>
      <Footer />
    </>
  )
}

export default App
