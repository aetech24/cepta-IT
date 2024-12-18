import React from 'react'
import { Routes, Route} from 'react-router';
import Home from './home';
import Shop from './shop';
const Rout = ({shop, Filter, allcatefilter}) => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>} />
    </Routes>
    </>
  )
}

export default Rout