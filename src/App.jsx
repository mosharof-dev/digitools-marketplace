
import { AiFillAndroid } from 'react-icons/ai'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Banner/Stats'
import Footer from './Components/Footer/Footer'
import CTA from './Components/CTA/CTA'
import Pricing from './Components/PricingCard/Pricing'

function App() {


  return (
    <>
    {/* NabBar Section */}
     <NavBar></NavBar>

     {/* Banner Section */}
     <Banner></Banner>
     <Stats></Stats>
  {/* Pricing Card */}
  <Pricing></Pricing>
  {/* CTA Section  */}
   <CTA></CTA>
    {/* Footer Section */}
  <Footer></Footer>

        
    </>
  )
}

export default App
