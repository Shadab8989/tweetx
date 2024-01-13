import React, { useEffect } from 'react'
import Navbar from './navbar/navbar'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Users from './users/users'
import Feed from './feed/feed'
import Profile from './profile/profile'

function Content({changeLoginStatus}) {

  useEffect(()=> {
    window.addEventListener('beforeunload',(e) =>{
      e.preventDefault();
      alert("Are you sure you want to leave? All the content will be erased!")
    })
  },[])

  return (
    <HashRouter>
    <Navbar changeLoginStatus = {changeLoginStatus}/>
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
