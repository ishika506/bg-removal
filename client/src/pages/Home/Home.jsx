import React from 'react'
import Header from '../../components/Header/Header'
import Steps from '../../components/Steps/Steps'
import Slider from '../../components/Slider/Slider'
import Testimonial from '../../components/Testimonial/Testimonial'
import Upload from '../../components/Upload/Upload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Slider/>
      <Testimonial/>
      <Upload/>
    </div>
  )
}

export default Home
