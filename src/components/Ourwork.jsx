import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Ourwork = () => {
const workdata=[
    {
        title:"mobile app development",
        desc: "nokia ka mobile majbuti me badiya hotan hai good by gusy ",
        image:assets.work_mobile_app
    },
    {
        title:"dashboard management",
        desc: "jis school me dev dash padta tha us school ke board ka name",
        image:assets.work_dashboard_management
    },
    {
        title:"fitnes app promotion",
        desc: "chutiya bano fit raho",
        image:assets.work_fitness_app
    },
]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.2}}
    viewport={{once:true}}
    
    id ="our-work" className='flex flex-col items-center  gap-7 px-4 sm:px-12 lg:px-24 xl:px-30 text-gray-700 dark:text-white'>
        <Title  title="our letest work" desc="from stratergy to loda lasun we craft digital solution that move your bussines kahi or"/>
      
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full max-w-5xl'>
        {
            workdata.map((work,index)=>(
                <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5,delay: index * 0.2}}
                viewport={{once:true}}
                
                key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer"> 

                <img src={work.image} className="w-full rounded-xl" alt=""/>
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                <p className='text-sm opacity-75 w-5/6'>{work.desc}</p>
                
                </motion.div>
                ))
        }
      </div>
    </motion.div>
  )
}

export default Ourwork
