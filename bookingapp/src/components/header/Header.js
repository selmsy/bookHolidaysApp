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
import {format} from "date-fns";
import { useState } from 'react';
import './header.css';

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

const handleOption = (name, operation) => {
    setOptions(prev=>{
        return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1, 
        }
    })
}
  return (
    <div className="header">
        <div className="headerList">
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
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false} 
                ranges={date} className='date'
                />}
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                <span className='headerSearchText'>{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>
                            Adult
                        </span>
                        <div className='optionCounter'>
                        <button className='optionCounterBtn' onClick={()=>handleOption("adult", "d")}>
                            -
                        </button>
                        <span className='optionCouterNumber'>{options.adult}</span>
                        <button className='optionCounterBtn' onClick={()=>handleOption("adult", "i")}>
                            +
                        </button>
                    </div> </div>
                    <div className='optionItem'>
                        <span className='optionText'>
                            Children
                        </span>
                        <div className='optionCounter'>
                        <button className='optionCounterBtn' onClick={()=>handleOption("children", "d")}>
                            -
                        </button>
                        <span className='optionCouterNumber'>{options.children}</span>
                        <button className='optionCounterBtn'onClick={()=>handleOption("children", "i")}>
                            +
                        </button>
                    </div></div>
                    <div className='optionItem'>
                        <span className='optionText'>
                            Room
                        </span>
                        <div className='optionCounter'>
                        <button className='optionCounterBtn' onClick={()=>handleOption("room", "d")}>
                            -
                        </button>
                        <span className='optionCouterNumber'>{options.room}</span>
                        <button className='optionCounterBtn' onClick={()=>handleOption("room", "i")}>
                            +
                        </button>
                    </div></div>
                </div>
                </div>
                <div className='headerSearchItem'>
                    <button className='headerBtn'>Search</button>
                </div>
                </div>
            </div>
        </div>

 
  )
}

export default Header