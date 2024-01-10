import React from 'react'
import './individual.css'
import { useState } from 'react'
import PersonImage from '../../personImage'

function Individual({name,followers,status}) { 
    const [followState,setFollowState] = useState(status)

    const handleClick = () => {
        if(followState === "Follow"){setFollowState("Following")}
        else{setFollowState("Follow")}

    }
  return (
    <div className='container'>
    <PersonImage />
    <div className='person-info'>
        <h4>
            {name}
        </h4>
        <p>Followers:{followers}</p>
    </div>
    <button className='follow-btn' onClick={handleClick}>{followState}</button>
    
      
    </div>
  )
}

export default Individual
