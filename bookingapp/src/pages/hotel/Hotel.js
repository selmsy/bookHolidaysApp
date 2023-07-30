import React from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hotel = () => {
  return (
    <div>
<Navbar/>
<Header type="list"/>
<div className='hotelContainer'>
  <div className='hotelWraper'>
    <div className='hotelTitle'>
      Hotel Palm Gold
    </div>
    <div className='hotelAddress'>
      <FontAwesomeIcon icon={faLocationDot}/>
      <span>York St 134 Chicago</span>
      </div>
      <span className='hotelDistance'>
      Location: 250 from center</span>
   <span className='hotelPriceHighlight'>
    Book now and get a discount
   </span>
   
  </div>
</div>

    </div>
  )
}

export default Hotel