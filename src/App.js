import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import Product from './page/Prouduct';
import Product_b from './page/Prouduct_b';
import data from "./page/data.json"
import { useEffect, useState } from 'react';
import axios from 'axios'
import Param from "./page/Param.js"

function App() {
  let [data_b,setData] = useState();
    useEffect(function(){ 
    axios('/data_b.json')
    .then(d=>{
      setData (d.data);
    })

  },[  ])

  if(!data_b) return ;

  return (
    <BrowserRouter >
      <div className='ex1'>
        <header>
          <nav className='menu'>
            <Link to="/">Home</Link>
            <Link to="/Product">Product </Link>
            <Link to="/Product_b">Product_b</Link>
            <Link to="/Param Item/code:1000">Param Item</Link>
          </nav>
          <main>
            <Routes>
              <Route path='/'element={<Home/>} />
              <Route path='/Product'element={<Product data={data}/>} />
              <Route path='/Product_b'element={<Product_b data={data_b}/>} />
              <Route path='/Param Item/:code'element={<Param Item data ={data_b}/>} />
            </Routes>
          </main>
        </header>
      </div>
    </BrowserRouter>  
  );
}

export default App;
