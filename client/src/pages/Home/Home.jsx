import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Sum23Products from '../../components/Sum23Products/Sum23Products'
import HomeProducts from '../../components/HomeProducts/HomeProducts'

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <Sum23Products />
      <HomeProducts />
    </div>
  )
}

export default Home