
import { AiFillAndroid } from 'react-icons/ai'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Banner/Stats'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
    {/* NabBar Section */}
     <NavBar></NavBar>

     {/* Banner Section */}
     <Banner></Banner>
     <Stats></Stats>
     
     
  
    {/* Footer Section */}
    <Footer></Footer>

        
    </>
  )
}

export default App
