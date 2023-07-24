import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {faCar} from "@fortawesome/free-solid-svg-icons";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
import {faTaxi} from "@fortawesome/free-solid-svg-icons";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {faPerson} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';
import './header.css';

const Header = () => {
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    }
]);
  return (
    <div className='header'>
        <div className='headerList'>
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed}/>
            <span>Accommodation</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar}/>
            <span>Rent a car</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane}/>
            <span>Flights</span>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi}/>
            <span>Transportation</span>
            </div>
            
            </div>
            <div>
            <h1 className='headerTitle'>One step from your dream holiday</h1>
            <p className='headerDesc'>Sign up and we'll send the best deals to you</p>
            <button className='headerBtn'>Sign in / Register</button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                <input type='text' placeholder="I'd like to go.." className='headerSearchInput'/>
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                <span className='headerSearchText'>date to date</span>
                <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false} 
                ranges={date}
                />
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                <span className='headerSearchText'>2 adults 2 children 1 room</span>
                </div>
                <div className='headerSearchItem'>
                    <button className='headerBtn'>Search</button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header