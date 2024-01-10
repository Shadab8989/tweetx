import React from 'react'
import './individual.css'
import { useState } from 'react'
import PersonImage from '../../personImage'

function Individual({name,followers}) { 
    const [followState,setFollowState] = useState('Follow')

    const handleClick = () => {
        if(followState === "Follow"){setFollowState("Following")}
        else{setFollowState("Follow")}

    }
  return (
    <div className='container'>
    <PersonImage />
    <div className='person-info'>
        <h3>
            {name}
        </h3>
        <p>Followers:{followers}</p>
    </div>
    <button className='follow-btn' onClick={handleClick}>{followState}</button>
    
      
    </div>
  )
}

export default Individual
