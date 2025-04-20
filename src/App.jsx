

import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'


function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
