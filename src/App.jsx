
import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import MyOutlet from './Components/MyOutlet'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <MyOutlet></MyOutlet>
      <Footer></Footer>
    </>
  )
}

export default App
