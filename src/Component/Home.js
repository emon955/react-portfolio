import React from 'react'
import Slider from './banner/Slider'
import Product from './Shopping cart/component/Product'
import Service from './service/Service'
import Blog from './Blog/Blog'
import Footer from './footer/Footer'
const Home = () => {
  return (
     <>
         <Slider />
         <Service />
         <Product />
         <Blog />
         <Footer />
     </>
  )
}

export default Home