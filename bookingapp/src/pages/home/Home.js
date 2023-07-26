import React from 'react'
import "./home.css"
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
<Navbar />
<Header />
<div className="homeContainer">
    <Featured/>
    <h1 className='homeTitle'>Take a look at these spaces:</h1>
    
    <PropertyList/>
    <MailList/>
    <Footer/>
</div>
    </div>
    
  )
}

export default Home