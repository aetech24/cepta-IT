import React from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye} from "react-icons/ai";
const Shop = ({shop, Filter, allcatefilter}) => {
  return (
    <>
    <div class="shop">
        <h2># shop</h2>
        <p>Home . shop</p>
        <div class="container">
            <div class="left_box">
                <div class="category">
                    <div class="header">
                        <h2>All Categories</h2>
                    </div>
                    <div class="box">
                        <ul>
                            <li onClick={() => allcatefilter ()}># All</li>
                            <li onClick={() => Filter ("laptop")}># laptop</li>
                            <li onClick={() => Filter ("phone")}># phone</li>
                            <li onClick={() => Filter ("watch")}># watch</li>
                            <li onClick={() => Filter ("speaker")}># speaker</li>
                            <li onClick={() => Filter ("headphone")}># headphone</li>
                            <li onClick={() => Filter ("desktop")}># desktop</li>
                        </ul>
                    </div>
                </div>
                <div class="banner">
                    <div class="image_box">
                        <img src="images/banner3.jpg" alt="shop_side_banner" />
                    </div>
                </div>
            </div>
            <div class="right_box">
                <div class="banner">
                    <div class="image_box">
                        <img src="images/banner4.jpg" alt="shop_top_banner" />
                    </div>
                </div>
                <div class="product_box">
                    <h2>Shop Products</h2>
                    <div class="product_container">
                        {
                            shop.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div class="box">
                                        <div class="img_box">
                                            <img src={curElm.image} alt="product_image" />
                                            <div class="icon">
                                            <li><AiFillHeart /></li>
                                            <li><AiFillEye /></li>
                                            </div>
                                        </div>
                                        <div class="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>{curElm.price}</p>
                                            <button>Add To Cart</button>
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
    </div>
    </>
  )
}

export default Shop