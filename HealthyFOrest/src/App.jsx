import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Navbar from './components/header'
import Banner from './components/banner'
import Card from './components/Card'




import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Banner />
        <h1>HealthyFOrest</h1>
      <Card
        title='Sample Card Title'
        description='This is a sample card description. You can customize the content as needed.'
      />
      <Footer />
    </div>
  )
}

export default App
