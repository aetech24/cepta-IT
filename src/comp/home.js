import React, { useState } from 'react'
import './home.css'
import { createRoutesFromElements, Link } from 'react-router-dom';
import Homeproduct from './home.product'
import { AiFillEye, AiFillHeart} from "react-icons/ai";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  //filter of trending product
  const filtercate = (x) =>
  {
    const filterproduct = Homeproduct.filter((curElm) =>
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All trending products
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }
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
                  <h2 onClick={() => allTrendingProduct()}>Trending Products</h2>
                </div>
                <div class="cate">
                  <h3 onClick={() => filtercate('new')}>New</h3>
                  <h3 onClick={() => filtercate('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate('top')}>Top Selling</h3>
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
                              <div class="icon_box">
                              <AiFillEye />
                              </div>
                              <div class="icon_box">
                              <AiFillHeart />
                              </div>
                            </div>
                          </div>
                          <div class="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className='btn'>Add To Cart</button>
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
                  <div class="container">
                    <div class="testimonial">
                      <div class="head">
                        <h3>Our Testimonials</h3>
                      </div>
                      <div class="detail">
                        <div class="img_box">
                          <img src="" alt="testimonial"></img>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home