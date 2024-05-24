import './App.css'
import Booking from './Components/Booking'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/rooms' element={<Booking/>}/>
    </Routes>
    </>
  )
}

export default App
