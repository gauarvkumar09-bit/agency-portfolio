import React, { use, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/hero'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx';
import Services from './components/Services.jsx';
import Ourwork from './components/Ourwork.jsx';
import Teams from './components/Teams.jsx';
import Contactus from './components/Contactus.jsx';
import {Toaster} from "react-hot-toast";
import Footer from './components/Footer.jsx';



const App = () => {

const [theme, setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );

  const dotRef=useRef(null)
const outlineRef=useRef(null)
//refrence for custom curser

const mouse=useRef({
  x:0,
  y:0
})
const position=useRef({
  x:0,
  y:0
})
useEffect(()=>{
  // 👉 detect touch / mobile device
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) {
    if (dotRef.current) dotRef.current.style.display = "none";
    if (outlineRef.current) outlineRef.current.style.display = "none";
    return; // stop effect here
  }
const mouseMoveHandler=(e)=>{
  mouse.current.x=e.clientX;
  mouse.current.y=e.clientY;
}
document.addEventListener("mousemove",mouseMoveHandler);

const animate =()=>{
  position.current.x +=(mouse.current.x - position.current.x) *0.15;
  position.current.y +=(mouse.current.y - position.current.y) *0.15;
  if(dotRef.current && outlineRef.current){
    dotRef.current.style.transform = `translate3d(${mouse.current.x-6}px, ${mouse.current.y -6}px,0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x-20}px, ${position.current.y -20}px,0)`;
}
requestAnimationFrame(animate);
}
animate();

return()=>{
  document.removeEventListener("mousemove",mouseMoveHandler)
}
},[])




  return (
 <div className='dark:bg-black relative'>

{/* <Toaster /> */}
<Toaster
  position="center-top"
  toastOptions={{
    style: {
      background: '#333',
      color: '#fff',
    },
  }}
/>


      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <Ourwork />
      <Teams />
      <Contactus />
      <Footer theme={theme}  />
      {/* Custom cursor */}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10  rounded-full border border-primary pointer-events-none z-[9999]
      style={transition="transform 0.1s ease-out"}'>
      
      </div>
        {/* Cursor dot */}
        <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3  rounded-full  bg-primary pointer-events-none z-[9999]'>

        </div>

    </div>
  )
}

export default App
