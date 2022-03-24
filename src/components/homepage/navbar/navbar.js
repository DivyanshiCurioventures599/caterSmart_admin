import React from 'react';
import  './navbar.css';
import { Navbar ,Nav } from 'react-bootstrap';
import notification from '../../images/notification.png';

const navbar = () => {
  return (
   <div className='navbar-col'>
  <Navbar collapseOnSelect expand="lg" variant="white">
  <Navbar.Brand href="#home">
    <input type="text" placeholder='Search here'></input></Navbar.Brand>
 <div className='nbar'>
  <Navbar.Collapse >
    <Nav >
      < Nav.Link href="#features">
        <button className='cbtn12'>J</button></Nav.Link>
        
      <Nav.Link href="#pricing">
        
      <text className='Admin_resto'>Admin1_resto</text>
      </Nav.Link> <img  className='notification1' src={notification} alt='images'/>
     
    </Nav>

   
  </Navbar.Collapse>
  </div>
 

</Navbar>
           
          
     
        
      

     
       </div>
  )
}

export default navbar