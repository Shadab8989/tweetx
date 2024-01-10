import React from 'react'
import IndividualTweet from '../../feed/individualTweet/individualTweet'

function Posts() {
  return (
    <div style={{overflowY:"auto"}}>
      <p>Posts</p>
      <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet />
    </div>
  )
}

export default Posts
