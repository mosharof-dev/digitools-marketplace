
import { AiFillAndroid } from 'react-icons/ai'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Banner/Stats'
import Footer from './Components/Footer/Footer'
import CTA from './Components/CTA/CTA'
import Pricing from './Components/PricingCard/Pricing'
import StepCard from './Components/StepsSection/StepCard '
import { useState } from 'react'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import ProductToggle from './Components/ProductToggle/ProductToggle'
const getProducts = async () => {
  const res = await fetch('/products.json')
  return res.json()
}
const productPromise = getProducts()
function App() {

  const [activeTab, setActiveTab] = useState('Products')
  const [cart, setCart] = useState([]);
  // console.log(cart, "Hello");

  return (
    <>
    {/* NabBar Section */}
     <NavBar cart={cart}/>

     {/* Banner Section */}
     <Banner/>

     <Stats/>

  {/* ProductToggle */}
  <ProductToggle activeTab={activeTab} setActiveTab={setActiveTab} cart={cart}/>

{activeTab === "Products" ? 
<Products productPromise={productPromise} cart={cart} setCart={setCart}/>

: <Cart cart={cart} setCart={setCart}/>}

  {/* StepCard Section Added */}
    <StepCard/>

    {/* Pricing Card */}
    <Pricing/>

    {/* CTA Section  */}
    <CTA/>
    
    {/* Footer Section */}
    <Footer/>

        
    </>
  )
}

export default App
