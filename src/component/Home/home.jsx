import React from 'react'
import Hero from './Hero/hero'
import "./home.css"
const Home = ({data}) => {
  return (
    <div className='home'>
    <Hero data={data}/>
    
    </div>
  )
}

export default Home