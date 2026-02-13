import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData =[
        {
            titel:'advertising',
            description:'we turn bold ideas into power full digital soluion that connect, engage...',
            icon:assets.ads_icon

        },
        {
            titel:'content-marketing',
            description:'we help you execute your plane and driven result..',
            icon:assets.marketing_icon
        },
        {
            titel:'content-writing',
            description:'kuch nahi bas ai se prompt lelena hai',
            icon:assets.content_icon

        },
        {
            titel:'social-media',
            description:'ye sab bram hota hai tum padai pe dyan do babu',
            icon:assets.social_icon

        },
    ]
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    
    id="services" className='relative flex flex-col  items-center gap-7  px-4 sm:px-12  lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title='how can we help?' desc='from stratergy to  lauda lasun  execution we craft digital solution  that your bussines go backwark' />
          
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service,index)=>(
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
      
    </motion.div>
  )
}

export default Services
