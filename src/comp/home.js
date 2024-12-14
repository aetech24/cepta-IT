import React, { useState } from 'react'
import './home.css'
import { createRoutesFromElements, Link } from 'react-router-dom';
import Homeproduct from './home.product'
import { AiFillEye, AiFillHeart} from "react-icons/ai";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  return (
    <>
      <div className="home">
        <div className='top_banner'>
          <div class="content">
            <h3>All black</h3>
            <h2>Smart Watch</h2>
            <p>30% off at your first order</p>
            <Link to='/shop' className='link'> Shop Now </Link>
          </div>
        </div>
        <div class="trending">
          <div class="container">
            <div class="left_box">
              <div class="header">
                <div class="heading">
                  <h2>Trending Products</h2>
                </div>
                <div class="cate">
                  <h3>New</h3>
                  <h3>Featured</h3>
                  <h3>Top Selling</h3>
                </div>
              </div>
              <div class="products">
                <div class="container">
                  {
                    trendingProduct.map((curElm) =>
                    {
                      return (
                        <>
                        <div class="box">
                          <div class="img_box">
                            <img src={curElm.image} alt=""></img>
                            <div class="icon">
                              <div class="icon-box">
                              <AiFillEye />
                              </div>
                              <div class="icon-box">
                              <AiFillHeart />
                              </div>
                            </div>
                          </div>
                        </div>
                        </>
                        )    
                    })
                  }
                </div>
              </div>
            </div>
            <div class="right_box">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home