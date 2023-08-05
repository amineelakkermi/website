import React from 'react'
import styles , { layout } from '../../constants/style'
import "./cardSkills.css";
import { motion } from 'framer-motion';



const CardSkills = ({title , content , img}) => {
  
  return (
 
    
    <motion.div className={`w-full  flex md:flex-row flex-col justify-between items-center ${styles.paddingY}`}
    
    initial = { { opacity : 0 ,  translateY: -100 } }
    whileInView = {{ opacity: 1 , translateY: 0 , }}
    transition = {{ duration: 0.6 , delay: 0.6 , type:"spring" , stiffness: 80 }}
  
    
    >
    
    
    <div  className={`flex-1 flex justify-center items-start flex-col`}>
    <div id="card1" className={`flex flex-col  md:mt-0 mt-10`}>
    <h2 className={`${styles.headingCard}`}>{title}</h2>
    <p className={`${styles.paragraph} mt-5`}>{content}</p>
    </div>
    </div>
    
  
    
  
    <div className={`flex-1 md:mt-0 mt-12 md:ml-10 ml-0`}>
    <img id="image" src={img} alt="image" className={`md:w-[270px] w-[200px]
    object-contain md:ml-24 ml-0 md:mt-0 mt-12 `} />
    </div>
    </motion.div>
   
    
   
 
    
    
   
 
    

 
 
 
 
 
  )
}

export default CardSkills;
