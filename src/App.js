import './App.css'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout />
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;
