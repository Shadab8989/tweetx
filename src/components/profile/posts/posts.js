import React from 'react'
import IndividualTweet from '../../feed/individualTweet/individualTweet'
import WriteTweet from '../../writeTweet/writeTweet'

function Posts() {
  return (
    <div style={{padding:"0.5rem"}}>
    <WriteTweet />
      {/* <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet /> */}
    </div>
  )
}

export default Posts
