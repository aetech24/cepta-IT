import './App.css'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_products'
const App = () => {
  //Shop page product
  const [shop, setShop] = useState(Homeproduct)
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
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;
