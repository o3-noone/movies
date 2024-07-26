import React from 'react'
import Hero from './Hero/hero'
import "./home.css"
import Category from './category/category'
import Device from './device/device'
import Questions from './questions/questions'
import Sub from './sub/sub'
import Trial from './tralFree/trial'
const Home = ({data}) => {
  return (
    <div className='home'>
    <Hero data={data}/>
    <Category baza={data}/>
    <Device/>
    <Questions/>
    <Sub/>
    <Trial/>
    </div>
  )
}

export default Home