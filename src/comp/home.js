import React, { useEffect, useState } from 'react'
import './home.css'
import { createRoutesFromElements, Link } from 'react-router-dom';
import Homeproduct from './home.product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = () => {
  //product category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  //trending products
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  //filter of trending product
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All trending products
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct)
  }

  //Product Type
  useEffect(() => {
    productcategory()
  })
  const productcategory = () => {
    //New Product
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    //Featured product
    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturedProduct(featuredcategory)

    //Top product
    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
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
                    trendingProduct.map((curElm) => {
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
                <button>Show More</button>
              </div>
            </div>
            <div class="right_box">
              <div class="right_container">
                <div class="testimonial">
                  <div class="head">
                    <h3>Our Testimonials</h3>
                  </div>
                  <div class="detail">
                    <div class="img_box">
                      <img src="images/About Image.jpg" alt="testimonial"></img>
                    </div>
                    <div class="info">
                      <h3>Stedan</h3>
                      <h4>Web Developer</h4>
                      <p>Excellent service and quality products! I got new laptop and phone here, and they both work perfectly. Highly recommend for all your tech needs!</p>
                    </div>
                  </div>
                </div>
                <div class="newsletter">
                  <div class="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div class="form">
                    <p>join our mailing list</p>
                    <input type="email" placeholder='E-mail' autoComplete='off'></input>
                    <button>subscribe</button>
                    <div class="icon_box">
                      <div class="icon">
                        <BiLogoFacebook />
                      </div>
                      <div class="icon">
                        <BiLogoTwitter />
                      </div>
                      <div class="icon">
                        <BiLogoInstagram />
                      </div>
                      <div class="icon">
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banners">
          <div class="container">
            <div class="left_box">
              <div class="box">
                <img src="images/banner1.jpg" alt="banner1"></img>
              </div>
              <div class="box">
                <img src="images/banner2.jpg" alt="banner2"></img>
              </div>
            </div>
            <div class="right_box">
              <div class="top">
                <img src="images/banner4.jpg" alt="banner3"></img>
                <img src="images/banner3.jpg" alt="banner4"></img>
              </div>
              <div class="bottom">
                <img src="images/banner5.jpg" alt="banner5"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="product_type">
                  <div class="container">
                    <div class="box">
                    <div class="header">
                      <h2>New Product</h2>
                    </div>
                    {
                      newProduct.map((curElm) =>
                      {
                        return(
                          <>
                          <div class="productbox">
                            <div class="img-box">
                              <img src={curElm.image} alt="newproduct"></img>
                            </div>
                            <div class="detail">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <div class="icon">
                              <button><AiFillEye /></button>
                              <button><AiFillHeart /></button>
                              <button><AiOutlineShoppingCart /></button>
                            </div>
                            </div>
                          </div>
                          </>
                        )
                      })
                    }
                    </div>
                    <div class="box">
                    <div class="header">
                      <h2>Featured Product</h2>
                    </div>
                    {
                      featuredProduct.map((curElm) =>
                      {
                        return(
                          <>
                          <div class="productbox">
                            <div class="img-box">
                              <img src={curElm.image} alt="newproduct"></img>
                            </div>
                            <div class="detail">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <div class="icon">
                              <button><AiFillEye /></button>
                              <button><AiFillHeart /></button>
                              <button><AiOutlineShoppingCart /></button>
                            </div>
                            </div>
                          </div>
                          </>
                        )
                      })
                    }
                    </div>
                    <div class="box">
                    <div class="header">
                      <h2>Top Product</h2>
                    </div>
                    {
                      topProduct.map((curElm) =>
                      {
                        return(
                          <>
                          <div class="productbox">
                            <div class="img-box">
                              <img src={curElm.image} alt="newproduct"></img>
                            </div>
                            <div class="detail">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <div class="icon">
                              <button><AiFillEye /></button>
                              <button><AiFillHeart /></button>
                              <button><AiOutlineShoppingCart /></button>
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
      </div>
      </>
  )
}

export default Home