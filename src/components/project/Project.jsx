import React from 'react'
import "./project.css";
import styles, { layout } from '../../constants/style';
import { projectData } from '../../constants';
import { css, html, javascript } from '../../assets';
import { addScaleCorrector, motion } from 'framer-motion';

const Project = ({ title , content }) => {


  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  
  return(
    <div id="container" className={`mt-10  grid xs:grid-cols-1  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3
    md:gap-16 gap-20

    `}>
       
       {

        projectData.map((item , index) => (
        
        <motion.div key={item.id} id="product" className={` md:my-12 my-5 relative flex flex-col justify-center items-center  md:py-5 py-2     rounded-2xl`}
        
        
    
        
        >
            <div className='absolute md:top-[-30%] top-[-60px]   object-contain '>
              <img src={item.bg} alt="bg" id="bg" className={`${index != projectData.length -1 ? "md:w-[150px] w-[100px]" : "md:w-[150px] w-[130px] " }`} />
            </div>
           <h2 className={`${styles.headingCard} text-center mt-20`}>{item.title}</h2>
           <div className={`flex flex-row flex-wrap  xs:gap-x-10 gap-x-5  gap-y-5  mt-10 justify-center  `}>
           {
            item.image.map((logo , index) => (
              <img key={logo.id} src={logo.icon} alt="icon" className={`w-[50px] h-[50px] object-contain mb-4 `}/>

      
            ))
           }
          </div>
         </motion.div>
        ) )
       }

    </div>

  )

}

 

  
  
 





export default Project



/*/ 
className={`mt-16 mr-10 grid  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3
    grid xs:grid-cols-3 grid-cols-2 
     

  `}>
/*/