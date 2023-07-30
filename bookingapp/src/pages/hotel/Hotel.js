import React from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
import {faCircleArrowLeft,faCircleArrowRight,faCircleXmark} from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
const [slide, setSlide] = useState(0);
const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

const handleOpen = (i) => {
  setSlide(i);
  setOpen(true);
};

  return (
    <div>
<Navbar/>
<Header type="list"/>
<div className='hotelContainer'>
  {open && <div className='slider'>
  <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
  <div className="sliderWrapper">
  <img src={photos[slide].src} alt="" className="sliderImg" />
    </div>        
    </div>}
  <div className='hotelWraper'>
    <div className='hotelTitle'>
      Hotel Palm Gold
    </div>
    <div className='hotelAddress'>
      <FontAwesomeIcon icon={faLocationDot}/>
      <span>80 East Wacker Place, Chicago Loop, Chicago, IL 60601, United States</span>
      </div>
      <span className='hotelDistance'>
      Location: 250 from center</span>
   <span className='hotelPriceHighlight'>
    Book now and get a discount
   </span>
<div className='hotelImages'>
  {photos.map((photo, i)=>(
    <div className='hotelImgWrapper'>
      <img src={photo.src} alt='' className='hotelImg' onClick={handleOpen}/>
      </div>
  ))}
</div>
<div className='hotelDetails'>
  <div className='hotelDetailsText'>
  <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDescription">
              Featuring a shared lounge, a restaurant as well as a bar, citizenM Chicago Downtown is located in the centre of Chicago, 1.7 km from Ohio Street Beach. 
              With free WiFi, this 4-star hotel offers a 24-hour front desk and a business centre. The property is non-smoking and is situated 2.4 km from Oak Street Beach.
              At the hotel, each room includes a desk. All units in citizenM Chicago Downtown are equipped with a TV with cable channels and an iPad.
              A vegetarian, vegan or gluten-free breakfast can be enjoyed at the property.
              Popular points of interest near the accommodation include Millennium Station, Shops at Northbridge and CIBC Theatre. 
              The nearest airport is Midway International Airport, 18 km from citizenM Chicago Downtown.
              This is our guests' favourite part of Chicago, according to independent reviews.
              </p>
  </div>
    <div className='hotelDetailsPrice'>
    <h1>Perfect for a 8-night stay!</h1>
              <span>
                Located in the real heart of Chicago, this property has an
                excellent location score of 9.7!
              </span>
              <h2>
                <b>$825</b> (8 nights)
              </h2>
              <button>Reserve or Book Now!</button>
              </div>
</div>
  </div>
  <MailList />
        <Footer />
</div>

    </div>
  )
}

export default Hotel