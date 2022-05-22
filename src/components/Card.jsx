import React from 'react'

const Card = (props) => {
    
  return (
    <div className={`card-div ${props.bgcolor}`}>
        <div className="date-logo-div">
            <p className='date-tag'>{props.date}</p>
            <div className='image-div'>
                {props.logo}
            </div>
        </div>
        <button className='case-study-btn'>Case Study</button>
        <p className='amazon-gift'>{props.gift}</p>
        <p className='pay-tag'>{props.pay}</p>
        <div className='mobile-arrow-div'>
            <div>
                <p className='mobile-tag'>{props.mode}</p>
            </div>
            <div>
                <p className='arrow-tag'> <i class="fa-solid fa-arrow-right-long"></i></p>
            </div>
        </div> 
    </div>
  )
}

export default Card;

{/* <i class="fa-brands fa-amazon"></i> */}