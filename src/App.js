import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home ';
import ProductData  from './Pages/ProductData';
import AddProduct from './Pages/Addproduct ' ;
import Nav from './Pages/Nav';
 


function App() {


  return (
 <Router>
        <Nav />
    <Routes>
        <Route element={<Home />}  path='/' />
        {/* <Route element={<ProductData />}  path='/Productdata' /> */}
        <Route element={<ProductData />}  path='/Productdata/:id' />
        <Route element={<AddProduct/>}   path='/Addproduct' /> 
    </Routes>
  </Router> 
  );
}

export default App;

