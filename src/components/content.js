import React from 'react'
import Navbar from './navbar/navbar'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Users from './users/users'
import Feed from './feed/feed'
import Profile from './profile/profile'

function Content() {
  return (
    <HashRouter>
    <Navbar />
    <Routes> 
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  )
}

export default Content
