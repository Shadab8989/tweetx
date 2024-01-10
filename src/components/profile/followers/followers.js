import React from 'react'
import Individual from '../../users/individual/individual'

function Followers() {
  return (
    <div>
      <Individual name='Person 1' followers={451} status={"Follow"}/>
      <Individual name='Person 2' followers={754} status={"Follow"}/>
      <Individual name='Person 3' followers={123} status={"Follow"}/>
    </div>
  )
}

export default Followers
