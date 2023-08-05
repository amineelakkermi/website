import React from 'react'
import styles, { layout } from '../constants/style'
import { motion } from 'framer-motion'


const CardSkills2 = ({ img , title , content }) => (
  
  <motion.div className={`flex md:flex-row flex-col mt-10`}
  
  initial = { { opacity : 0 ,  translateY: -100 } }
  whileInView = {{ opacity: 1 , translateY: 0 , }}
  transition = {{ duration: 0.9 , delay: 0.9 , type:"spring", stiffness: 80 }}
  
  
  > 
  <div className={`${layout.sectionImgReverse} ${styles.paddingY}`}>
  <img id="image" src={img} alt="image" className={`md:w-[300px] w-[200px]
   object-contain md:mr-24 mr-0  md:mb-0 mb-12`} />
  
  </div>

  <div className={`${layout.sectionInfo}`}>
  <div id="card1" className={`flex flex-col  `}>
  <h2 className={`${styles.headingCard}`}>{title}</h2>
  <p className={`${styles.paragraph} mt-5`}>{content}</p>
  </div>
  </div>


  </motion.div>

 
 
 
 

)
 

  


export default CardSkills2
