import './App.css'
import Nav from './comp/nav'
import React, { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home.product'
const App = () => {
  //Add To Cart
  const  [cart, setCart] = useState([])
  //Shop page product
  const [shop, setShop] = useState(Homeproduct)
  //Shop Search Filter
  const [search, setSearch] = useState('')
  // shop category filter
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }
  // shop search filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
    {
      alert("Please enter something to search!")
      setShop(Homeproduct)
    }
    else
    {    
          const searchfilter = Homeproduct.filter((x) =>
          {
            return x.cat === search
          })
          setShop(searchfilter)
    }
  }
  //Add to cart

  const addtocart = (product) =>
  {
    const exist = cart.find((x) => 
      {
        return x.id === product.id
      })
      if (exist)
      {
        alert("This product has already been added to cart")
      }
      else
      {
        setCart([...cart, {...product, qty:1}])
        alert("Added To cart")
      }
  }
  console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;
