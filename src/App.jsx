import './App.css'
import Booking from './Components/Booking'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Book from './Components/Book'
import About from './Components/About'
import Contact from './Components/Contact'
import Topbtn from './Components/Topbtn'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/rooms' element={<Booking/>}/>
      <Route path='/booking' element={<Book/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Topbtn/>
    </>
  )
}

export default App
