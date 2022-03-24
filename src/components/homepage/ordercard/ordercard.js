import React from 'react';
import './ordercard.css';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import Vector4 from '../../images/Vector4.png'
import Vector6 from '../../images/Vector6.png'

const ordercard = () => {
  return (
    <div className='cardsdemo'>
      <div className='cardrow1'>
        <div className='rcard'>
        <div className='rcardheader'> 
        <div className='cbtnl'>
          <text>Order #215</text><br></br>
          <text className='time'>20 May 2021,12:21 PM</text>
        </div>
        <button className='cbtn'><b>J</b></button>
        </div >
        <div className='content'>
       
        <div className='content1'> 
        <img   src={food2} alt='images'/>
         
        </div>
        <div className='content2'>
         <text><b>Lion of vision</b></text><br></br>
         <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
         <text className='price'>120.5     </text>
         <text className='quantity'>Qyt. 20</text>
        </div>
        </div>
        <div className='content'>
        <div className='content1'>
        <img   src={food1} alt='images'/>
        </div>
        <div className='content2'>
         <text><b>Lion of vision</b></text><br></br>
         <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
         <text className='price'>120.5     </text>
         <text className='quantity'>Qyt. 20</text>
        </div>
        </div>
        <br></br>
        {/* <hr></hr> */}
        <div className='contenthr'><br></br>
        <div className='contenthr1'><br></br> 
          <text>X 45 items  </text> <br></br>   
            <text>12000</text>
        </div>
        <div className='contenthr2'>
              <button className='obtng1'><img  className='vectorimage' src={Vector4} alt='images'/></button>
          <button className='obtnr1'><img className='vectorimage'  src={Vector6} alt='images'/></button>
        </div>   
        </div>
        </div>


        {/* card 2 start  */}
        <div className='rcard2'>

        <div className='rcardheader'> 

        <div className='cbtnl'>
          <text>Order #215</text><br></br>
          <text className='time'>20 May 2021,12:21 PM</text>
        </div>
          
        <button className='cbtn'><b>J</b></button>
        </div >
        <div className='content'>
       
        <div className='content1'> 
        <img   src={food2} alt='images'/>
         
        </div>
        <div className='content23'>
         <text><b>Lion of vision</b></text><br></br>
         <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
         <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
        </div>
        </div>
        <div className='content'>
        <div className='content1'>
        <img   src={food1} alt='images'/>
        </div>
        <div className='content23'>
         <text><b>Lion of vision</b></text><br></br>
         <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
         <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
        </div>
        </div>
        <br></br>
        <div className='contenthr'> <br></br>
        <div className='contenthr1'> <br></br> <br></br>
          <text>X 45 items  </text> <br></br>     <text>12000</text>
        </div>
        <div className='contenthr2'>
         <button className='obtnr12'><img  className='vectorimage'  src={Vector6} alt='images'/>REJECTED</button>
        </div>   
        </div>
        </div>

        {/* card3 start */}
        <div className='rcard3'>

<div className='rcardheader'> 

<div className='cbtnl'>
  <text>Order #215</text><br></br>
  <text className='time'>20 May 2021,12:21 PM</text>
</div>
  
<button className='cbtn'><b>J</b></button>
</div >
<div className='content'>

<div className='content1'> 
<img   src={food2} alt='images'/>
 
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<div className='content'>
<div className='content1'>
<img   src={food1} alt='images'/>
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<br></br>
<div className='contenthr'> <br></br>
<div className='contenthr1'> <br></br> <br></br>
  <text>X 45 items  </text> <br></br>     <text>12000</text>
</div>
<div className='contenthr2'>
      <button className='obtng13'><img   className='vectorimage' src={Vector4} alt='images'/>COMPLETED</button>

</div>   
</div>
</div>
</div>
<div className='cardrow2'>
{/* card 4 start */}
<br></br>

<div className='rcard4'>

<div className='rcardheader'> 

<div className='cbtnl'>
  <text>Order #215</text><br></br>
  <text className='time'>20 May 2021,12:21 PM</text>
</div>
  
<button className='cbtn'><b>J</b></button>
</div >
<div className='content'>

<div className='content1'> 
<img   src={food2} alt='images'/>
 
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<div className='content'>
<div className='content1'>
<img   src={food1} alt='images'/>
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<br></br>
<div className='contenthr'> <br></br>
<div className='contenthr1'> <br></br> <br></br>
  <text>X 45 items  </text> <br></br>     <text>12000</text>
</div>
<div className='contenthr2'>
      <button className='obtng1'><img  className='vectorimage' src={Vector4} alt='images'/></button>
          <button className='obtnr1'><img className='vectorimage'  src={Vector6} alt='images'/></button>
</div>   
</div>
</div>

{/* card5 start  */}


<br></br>

<div className='rcard5'>

<div className='rcardheader'> 

<div className='cbtnl'>
  <text>Order #215</text><br></br>
  <text className='time'>20 May 2021,12:21 PM</text>
</div>
  
<button className='cbtn5'><b>J</b></button>
</div >
<div className='content'>

<div className='content1'> 
<img   src={food2} alt='images'/>
 
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<div className='content'>
<div className='content1'>
<img   src={food1} alt='images'/>
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<br></br>
<div className='contenthr'> <br></br>
<div className='contenthr1'> <br></br> <br></br>
  <text>X 45 items  </text> <br></br>     <text>12000</text>
</div>
<div className='contenthr2'>
      <button className='obtnr12'><img className='vectorimage'  src={Vector6} alt='images'/>REJECTED</button>
</div>   
</div>
</div>


{/* card6 start */}



<br></br>

<div className='rcard6'>

<div className='rcardheader'> 

<div className='cbtnl'>
  <text>Order #215</text><br></br>
  <text className='time'>20 May 2021,12:21 PM</text>
</div>
  
<button className='cbtn'><b>J</b></button>
</div >
<div className='content'>

<div className='content1'> 
<img   src={food2} alt='images'/>
 
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<div className='content'>
<div className='content1'>
<img   src={food1} alt='images'/>
</div>
<div className='content2'>
 <text><b>Lion of vision</b></text><br></br>
 <text className='black_pudding'>Black Pudding Pure & Jerk</text><br></br>
 <text className='price'>120.5     </text><text className='quantity'>Qyt. 20</text>
</div>
</div>
<br></br>
<div className='contenthr'> <br></br>
<div className='contenthr1'> <br></br> <br></br>
  <text>X 45 items  </text> <br></br>     <text>12000</text>
</div>
<div className='contenthr2'>
      <button className='obtng13'><img  className='vectorimage' src={Vector4} alt='images'/>COMPLETED</button>

</div>   
</div>
</div>
</div>
        </div>
   
  )
}

export default ordercard