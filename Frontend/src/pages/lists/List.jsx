import React, { useState } from 'react'
import Navbar from '../../componants/navbar/Navbar'
import Header from '../../componants/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem  from '../../componants/searchItem/SearchItem'
import MailList from '../../componants/mailList/MailList'
import Footer from '../../componants/Footer/Footer'


export default function List() {

  const imageurls = [
    {
      url : 'https://cf.bstatic.com/xdata/images/hotel/square600/52530992.webp?k=9c2760b864d8e90aab5b6272d7b62dc4d9f22ff8bad169e2bc5f6c316b25f965&o='
    },
    {
      url : 'https://cf.bstatic.com/xdata/images/hotel/square600/118372635.webp?k=cd2abfddb4fd3c29da9ec270ebb77c617147bcaa19e1ea876ccf4a50a1aed0f1&o='
    },{
    url : 'https://cf.bstatic.com/xdata/images/hotel/square600/229001738.webp?k=c8020092e78a665690891222b9435e6ea5594dd4ec2aced4f96b1c8ef0c28edf&o='
    },
    {
      url : 'https://cf.bstatic.com/xdata/images/hotel/square600/427331279.webp?k=602f1fcec94bdc90d3430652c06460f4e6f29a1a90a3d915bd5a18dd9fbc2fe0&o='
    },
    {
      url : 'https://cf.bstatic.com/xdata/images/hotel/square600/463631959.webp?k=4f33b67ed79af0ba3d3c3d42e9f5e60429134a9a78bca118847975f959a71d6b&o='
    },
    {
      url : 'https://cf.bstatic.com/xdata/images/hotel/square600/331951467.webp?k=19d6baf5565564214fa8652918ebb52229711a46604c6b265edae491dc1e1e95&o='
    },
    {
      url : 'https://cf.bstatic.com/xdata/images/xphoto/540x405/219730590.webp?k=10a70a5982bc3bc2661b2d8ac142f3320bb52acedd32130504c192975a8d9b47&o='
    },
    {
      url : 'https://cf.bstatic.com/xdata/images/xphoto/540x405/219730590.webp?k=10a70a5982bc3bc2661b2d8ac142f3320bb52acedd32130504c192975a8d9b47'
    }

  
  ]

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [option, setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listwrapper">
          <div className="listSearch">
            <h1 className="lstitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label >Check-in-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date}
              />}
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className='lsOptionInput' />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className='lsOptionInput' />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Adults
                    </span>
                    <input type="number" min={1} className='lsOptionInput' placeholder={option.adult} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Children
                    </span>
                    <input type="number" min={0} className='lsOptionInput' placeholder={option.children} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Room
                    </span>
                    <input type="number" min={1} className='lsOptionInput' placeholder={option.room} />
                  </div>
                  </div>
                </div>
              </div>
              <button className='searchBtn'>Search</button>
            </div>
            <div className="listResult">
              <SearchItem url = {imageurls[0].url}/>
              <SearchItem url = {imageurls[1].url}/>
              <SearchItem url = {imageurls[2].url}/>
              <SearchItem url = {imageurls[3].url}/>
              <SearchItem url = {imageurls[4].url}/>
              <SearchItem url = {imageurls[5].url}/>
              <SearchItem url = {imageurls[6].url}/>
              <SearchItem url = {imageurls[7].url}/>
            </div>
          </div>
          <MailList/>
        <Footer/>
        </div>
        
      </div>
      )
}
