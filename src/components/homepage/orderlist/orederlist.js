import React from 'react';
import Ordercard from '../ordercard/ordercard';
//import Ordercard1 from '../../ordercard/ordercard1';

import './orederlist.css';
import Vector4 from '../../images/Vector4.png'
import Vector6 from '../../images/Vector6.png'

const orederlist = () => {
  return (
    <div className='orderlist1'>
      <text className='olist'><b>ORDER LIST</b></text>
      <div className='btnrow'>
        
        <button className='obtng'>
        <img className='buttonimage' src={Vector4} alt='images' />#215</button>
        <button className='obtny'>#216</button>
        <button className='obtng'> 
        <img className='buttonimage' src={Vector4} alt='images' />#217</button>
        <button className='obtng'> 
        <img  className='buttonimage' src={Vector4} alt='images' />#218</button>
        <button className='obtny'>#219</button>
        <button className='obtnr'>
          <img className='buttonimage' src={Vector6} alt='images' />#220</button>
        <button className='obtny'>#221</button>
        <button className='obtny'>#222</button>
        </div>
         
       </div>
  )
}

export default orederlist