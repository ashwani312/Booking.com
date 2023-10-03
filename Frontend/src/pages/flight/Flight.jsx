import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './flight.css'
import { DateRange } from "react-date-range";
import { faBed, faCalendarDays, faPlaneArrival, faPlaneDeparture, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Flights from '../../flightComponent/flights/Flights';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
const Flight = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="flightContainer">
                <h1 className='flightTitle'>Compare and book flights with ease</h1>
                <div className="flightHeader">Discover your next dream destination</div>

                <div className="flightHeaderSearch">
                    <div className="flighSearchItem">
                    <FontAwesomeIcon icon={ faPlaneDeparture} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Where from?"
                            className="flightSearchInput"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="flighSearchItem">
                    <FontAwesomeIcon icon={faRightLeft} className='to' />
                    </div>
                    <div className="flighSearchItem">
                    <FontAwesomeIcon icon={faPlaneArrival} />
                        <input
                            type="text"
                            placeholder="Where to?"
                            className="flightSearchInput"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="flighSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                      {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={true}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
                    </div>
                    <div className="flighSearchItem">
                        <button className='flightSearchButton'>Search</button>
                    </div>
                </div>

            </div>
            <Flights/>
            <div className="flightFooter">

            <MailList/>
            <Footer/>
            </div>
        </div>
    )
}

export default Flight