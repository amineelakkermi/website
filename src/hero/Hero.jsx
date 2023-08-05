import React from 'react'
import './hero.css';
import style, { layout } from "../constants/style";
import { whoIm } from '../constants';
import { instagram  , twitter  , businessman } from '../assets';
import { motion } from 'framer-motion';


const Hero = () => (
  


  <motion.section id="home" className={` h-[100%] relative flex flex-col px-8 justify-start items-start md:my-10 my-5 ${style.paddingY}`}
  
  initial = { { opacity : 0 ,  y: -100 } }
  whileInView = {{ opacity: 1 , y: 0 }}
  transition = {{ duration: 0.3 , delay: 0.3 , type:"spring" , stiffness:80 }}
  
  >
    

  <div>
  {
  whoIm.map((item) => (
    <h2 key={item.id} className={`font-poppins angry__tools_text font-medium text-[24px] leading-[42px] tracking-[1px]`}>{item.title}</h2>
  ))
}
  </div>
  <h1 className={` font-poppins font-medium xs:text-[58px] text-[48px] text-sectionTitle  w-full flex-wrap text-start mt-10`}>
  Hy  everyone , And Welcome in my website</h1>


  <div>
<button  className={`p-4 mt-12 bg-[#2F2B3A]`}>
<a href="#about" className='font-poppins text-white font-medium text-[16px]  tracking-[1px]'>
  Read more for me
</a> 
</button>

  </div>

  
  </motion.section>

 

  
)

export default Hero;
