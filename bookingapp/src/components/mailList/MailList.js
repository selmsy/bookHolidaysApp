import React from 'react'
import "./mailList.css"
const MailList = () => {
  return (
    <div className="mail">
    <h1 className="mailTitle">Stay in touch with us</h1>
    <span className="mailDesc">Current best deals are waiting for you</span>
    <div className="mailInputContainer">
      <input type="text" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
  </div>
)
}

export default MailList