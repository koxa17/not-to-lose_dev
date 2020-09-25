import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Fragment} from 'react'
import './_reset.css'
import './App.css'
import Header from './Component/header/Header'
import Main from './Component/content/Main'
import Footer from './Component/footer/Footer'

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App
