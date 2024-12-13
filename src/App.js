import './App.css';
import Nav from './comp/nav';
import {BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    </BrowserRouter>
    </>
  )
}
export default App;
