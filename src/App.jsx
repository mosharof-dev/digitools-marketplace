
import { AiFillAndroid } from 'react-icons/ai'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Banner/Stats'
import Footer from './Components/Footer/Footer'
import CTA from './Components/CTA/CTA'
import Pricing from './Components/PricingCard/Pricing'
import StepCard from './Components/StepsSection/StepCard '

function App() {


  return (
    <>
    {/* NabBar Section */}
     <NavBar></NavBar>

     {/* Banner Section */}
     <Banner></Banner>
     <Stats></Stats>
  
  <StepCard></StepCard>
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
