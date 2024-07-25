import React from 'react'
import Hero from './Hero/hero'
import "./home.css"
import Category from './category/category'
const Home = ({data}) => {
  return (
    <div className='home'>
    <Hero data={data}/>
    <Category baza={data}/>
    </div>
  )
}

export default Home