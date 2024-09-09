import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'

function App() {

  return (
    <> 
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App
