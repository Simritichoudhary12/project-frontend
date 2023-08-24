
import './App.css';
import { Login } from './component/Login';

import { Home } from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';   //for making bootstrap java script work
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Shoes } from './component/Shoes';
import { Womens } from './component/Womens';
import { AddToCart } from './component/AddToCart';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/shoes" element={<Shoes/>}/>
        <Route exact path="/womens" element={<Womens/>}/>
        <Route exact path="/addtocart" element={<AddToCart/>}/>

        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
