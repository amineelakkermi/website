import React from 'react'
import styles , { layout } from '../constants/style'
import { business, businessman, businessman2 } from '../assets'
import "./pottential.css";
import { motion } from 'framer-motion';




const Pottential = () => {


  return(

  
    <motion.section 

     initial = { { opacity : 0 ,  translateY: -100 } }
     whileInView = {{ opacity: 1 ,  translateY: 0 }}
     transition = {{ duration: 0.3 , delay: 0.3 , type:"spring" , stiffness: 80 }}
     viewport={{ once: true }}
 
    id="about" className={`
    
    relative
    h-[100%] flex md:flex-row flex-col md:my-5 my-12  ${styles.paddingY}`}>

      <div className={`${layout.sectionInfo}`}>
      <h1 className={`
      font-poppins font-semibold xs:text-[66px] text-[50px]
      text-sectionTitle w-full
      
      `}> Elakkermi Amine - developer from Algeria</h1>


      <p className={`${styles.paragraph} ${styles.paragraph} max-w-[470px] mt-5`}>
      I am a computer science student, My main experience is in fronend , but i also have a passion for design , given that producing a modern website , fast , easy to use and built with best practises 
      </p>
    </div>

    <div className={`${layout.sectionImg}`}
      initial = { { opacity : 0 , translateX: -50 , translateY: 100 } }
      whileInView = {{ opacity: 1 , translateX: 0 , translateY: 0 }}
      transition = {{ duration: 0.3 , delay:  0.3 }}
      viewport={{ once: true }}
    >

      <img src={businessman} alt="business" className={`w-[100%] h-[100%] object-contain`} />
    </div>
   
 
    

    </motion.section>
  
  
  )

  
}


      



export default Pottential
