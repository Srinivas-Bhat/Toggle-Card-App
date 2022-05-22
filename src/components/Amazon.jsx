import React from 'react';
// import "./App.css";

const Amazon = () => {
  return (
    
    <div className='card-div yellow-color'>
        <div className="date-logo-div">
            <p className='date-tag'>28/10/2020</p>
            <div className='image-div'>
            <i class="fa-brands fa-amazon"></i>
            </div>
        </div>
        <button className='case-study-btn'>Case Study</button>
        <p className='amazon-gift'>Amazon Gift</p>
        <p className='pay-tag'>Pay</p>
        <div className='mobile-arrow-div'>
            <div>
                <p className='mobile-tag'>Desktop - Mobile</p>
            </div>
            <div>
                <p className='arrow-tag'> <i class="fa-solid fa-arrow-right-long"></i></p>
            </div>
        </div> 
    </div>
  )
}

export default Amazon