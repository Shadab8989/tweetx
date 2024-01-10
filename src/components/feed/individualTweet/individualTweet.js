import React from 'react'
import "./individualTweet.css"
import PersonImage from '../../personImage'

function IndividualTweet() {
  return (
    <div className='tweet-container'>
    <PersonImage />
    <div className='tweet-content'>
    <div className='tweet-head'>
         <h3>Shadab</h3>
        <p>time</p>
    </div>
        <div className='tweet-para'>Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Lorem ipsum dolor sit amet, elit, sed do eiusmod. </div>
    </div>
      
    </div>
  )
}

export default IndividualTweet
