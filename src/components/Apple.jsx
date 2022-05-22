import React from 'react'
// import "./App.css";

const Apple = () => {
  return (
    <div className='card-div white-color'>
        <div className="date-logo-div">
            <p className='date-tag'>17 Sep 2020</p>
            <div className='image-div'>
            <i class="fa-brands fa-apple"></i>
            </div>
        </div>
        <button className='case-study-btn'>Case Study</button>
        <p className='amazon-gift'>Apple Gift</p>
        <p className='pay-tag'>Payment</p>
        <div className='mobile-arrow-div'>
            <div>
                <p className='mobile-tag'>MacOS - Mobile</p>
            </div>
            <div>
                <p className='arrow-tag'> <i class="fa-solid fa-arrow-right-long"></i></p>
            </div>
        </div> 
    </div>
  )
}

export default Apple