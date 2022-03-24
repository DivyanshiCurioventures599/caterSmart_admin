import React from 'react';
import './home.css';
import Navbar from './navbar/navbar';
import Ordercard from './ordercard/ordercard';
//import orederlist from './orderlist/orederlist';

 import Orederlist from './orderlist/orederlist';
 import Sidebar from './sidebar/sidebar';
//import home from '../public/images/home.png';


function App() {
  return (
    <div className="App">

      <div className='sidebar-col-4'>
        <Sidebar /> </div>
      
      <div className='ordersummarymain-col'>
        <div className='menubar1'> <Navbar /></div>
        <div className='containercard'>
    <div className='orderlistbtn'><Orederlist /></div>
          <div className='allcard'>
           <Ordercard />
          </div>
           </div>
      </div>   
      </div>
  );
}

export default App;
