import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './component/Chat'
import Contact from './component/Contact'

function App() {
  return (
   <React.Fragment>
       <Routes>
          <Route path='/' element={<Chat/>} />
          <Route path='/contact' element={<Contact/>} />
       </Routes>
   </React.Fragment>
  )
}

export default App