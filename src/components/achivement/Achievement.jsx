import React from 'react'
import "./achievement.css";
import styles from '../../constants/style';
import Project  from "../project/Project";
import { projectData } from '../../constants';
import { motion } from 'framer-motion';


const Achievement = () => (
    
    <motion.section id="achievement" className={`h-[100%] ${styles.paddingY}  md:my-5 my-12 `}
    
    
    initial = { { opacity : 0 ,  translateY: -100 } }
    whileInView = {{ opacity: 1 ,  translateY: 0 }}
    transition = {{ duration: 0.3 , delay: 0.3 , type:"spring" , stiffness: 80 }}
    viewport={{ once: true }}

    
    
    >
    
  
    <h1 className={`${styles.heading2}`}
     
    
    >Some Projects</h1>
    <div className={`w-full mt-4   ${styles.paddingY} `}>
    <Project />
    </div>
   
    

    
    </motion.section>
)

export default Achievement
