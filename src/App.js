import './App.scss';
import Home from './page/Home';
import Product from './page/Prouduct';

import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter basename=''>
    <div className='ex1'>
      <header>
        <nav className='menu'>
          <Link to="/">Home</Link>
          <Link to="/Product">Product</Link>
        </nav>
        <main>
          <Routes>
            <Route path='/'element={<Home/>} />
            <Route path='/Product'element={<Product/>} />
          </Routes>
        </main>
      </header>
    </div>
    </BrowserRouter>  
  );
}

export default App;
