import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import { useAuthStore } from '../store/useAuthStore'

const App = () => {

   const {authUser,checkAuth} = useAuthStore()

   useEffect(() => {checkAuth()}, [checkAuth])

   
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='settings' element={<SettingsPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>

      </Routes>
    </div>
  )
}

export default App