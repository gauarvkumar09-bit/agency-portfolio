import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({theme}) => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8}}
    viewport={{once:true}}
    
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:pt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        <div className='  parent flex justify-between  lg:items-center max-lg:flex-col gap-10'>
            <motion.div
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5,delay:0.2}}
            viewport={{once:true}}
            
            
            className='space-y-5 text-sm text-gray-700 dark:text-gray-300'>
                <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-44' />  
                <p className='max-w-md'>from strtery to solution we creat that you bussines move forward</p>
                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href="#home">Home</a></li>
                    <li><a className='hover:text-primary' href="#services">services</a></li>
                    <li><a className='hover:text-primary' href="#our-work">our-work</a></li>
                    <li><a className='hover:text-primary' href="#contact-us">contact-us</a></li>
                </ul>
                </motion.div>
            <motion.div
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6,delay:0.3}}
            viewport={{once:true}}
            
            className=' text-gray-600 dark:text-gray-400'>
                <h3 className='font-sm'>subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>
                    the lattest new is that i am getting a inteship
                </p>
                <div className='flex gap-2 text-sm'>
                 <input type='email' placeholder='enter your email'  className='w-full p-3 text-sm outline-none rounded dark:text-gray-200
                 bg-transparent border  border-gray-300 dark:border-gray-500'/>
                
                 <button className='bg-primary text-white  rounded px-6 '>subscribe</button>
             </div>
            </motion.div>
        </div>
        <hr className='border-gray-300  dark:border-gray-500 my-6'/>
        <motion.div
        initial={{opacity:0,}}
        whileInView={{opacity:1,}}
        transition={{duration:0.5,delay:0.4}}
        viewport={{once:true}} 
        
        className='pb-6  text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap '>
            <p>
                copy right @ 2026 All right reserved
            </p>
            <div className='flex items-center  justify-between  gap-4 '>
                <img src={assets.facebook_icon} alt="" />
                  <img src={assets.instagram_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />

            </div>
        </motion.div>
      
    </motion.div>
  )
}

export default Footer
