import React from 'react'
import styles , { layout } from '../constants/style'
import { CardSkills, CardSkills2 } from '../components'
import { skillData , skillsDataReverse } from '../constants'
import { motion } from 'framer-motion'





const Skills = () => (
  
  <section id='skills' className={`h-[100%] flex flex-col ${styles.paddingY}    md:my-5 my-12`}
  
  >
 
 
  <motion.div className={`${layout.sectionInfo} `}
  
  initial = { { opacity : 0 ,  translateY: -100 } }
  whileInView = {{ opacity: 1 , translateY: 0 , }}
  transition = {{ duration: 0.3 , delay: 0.3 , type:"spring" , stiffness: 100 }}
  

  >

  <h1 className={`${styles.heading2} mb-5 `}>Skills</h1>
  <p className={`${styles.paragraph}  max-w-[520px] mt-5`}>During my education, I was able to acquire many skills and working knowledge of some programming languages and work frameworks, of which I mention :</p>
  </motion.div>
 
 
  
 

 
  <div className={`w-full`}>
   
    {
    skillData.map((item , index) => (
      <CardSkills key={item.id} {...item} index={index}  />
      
    ))
   }
   

 
  {
    skillsDataReverse.map((item , index) => (
      <CardSkills2 key={item.id} {...item} index={index} />
    ))
   }
 


   
  

  </div>
  
 
  
  </section>
)

export default Skills
