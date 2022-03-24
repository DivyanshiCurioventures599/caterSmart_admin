import React from 'react';
//import   './navbar.css';
import home from '../../images/home.png';
import order_history from '../../images/order_history.png';
import setting from '../../images/setting.png';
import menu from '../../images/menu.png';
import staticals from '../../images/staticals.png';
import message from '../../images/message.png';
import Ellipse from '../../images/Ellipse.png';
import logo2 from '../../images/logo2.png'


const sidebar = () => {
  return (
    <div className='card1'>  
    <div className='logoimage1'>
     <img  className='logo2' src={logo2} alt='images'/>

    </div>
      <div className='lfetinner-card1'>
      </div>
      <div className='lfetinner-card2'>
        <button class="btn">
         <img className='iconshome' src={home} alt='images' />
        <text className='texthome'>
        <b> Home</b>
     </text></button>
     <br></br><br></br> <br></br>  <br></br>

     <div className='menubar'>
     
        <p className='list'>  
         <img  className='icons' src={order_history} alt='images' />
         ORDER HISTORY </p> 
        <p className='list'> 
         <img  className='icons' src={message} alt='images' />MESSAGE</p>
        <p className='list'> 
         <img  className='icons' src={staticals} alt='images' />STATISTICS</p>
        <p className='list'> 
         <img className='icons'  src={menu} alt='images' />MENU</p> 
        <p className='list'>
         <img  className='icons' src={setting} alt='images' />SETTING</p>
       
     </div>
     
        
      </div>
       <p className='resturant'> 
         <img  className='iconsellipse' src={Ellipse} alt='images' />Restaurant open</p>

     </div>
  )
}

export default sidebar