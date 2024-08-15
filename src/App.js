import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Room from './Components/Room'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:roomId' element={<Room />} />
          {/* /room is path and roomId is Path Parameter */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
