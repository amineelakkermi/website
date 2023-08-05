import styles from "./constants/style";
import { Navbar , Hero , Pottential , Skills , CardSkills , CardSkills2 , Achievement , Contact , Footer , ScrollTop  } from "./components";
import { motion  ,  useScroll } from "framer-motion";
import "./index.css"

 


const App = () => {

  const { scrollYProgress } = useScroll();

  return(
  
    
  
  <div className=" w-full overflow-hidden"  
    
  >
  

  <motion.div
  className="progress-bar"
  style={{ scaleX: scrollYProgress }}
  />

  

  <div className={` bg-[rgba(255, 255, 255, 1)] ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    
    </div>
  </div>
  
  <ScrollTop />



 
  <div className={`h-[100%] angry__tools ${styles.flexStart}`}>
   
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>

  </div>


  
  <div className={` angry__tools_reverse ${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
  <Pottential />   
  </div>
  </div>
  
  
   
    

   
    <div className={` angry__tools ${styles.paddingX} ${styles.flexCenter}`}>
   
    <div className={`${styles.boxWidth}`}> 
    <Skills />
    </div>
    </div>
 
   
    
    <div className={`angry__tools_reverse ${styles.paddingX}  ${styles.flexCenter}`}>

   

    <div className={`${styles.boxWidth}`}>   
    <Achievement />
    </div>
    </div>
    
   
    
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
   
    <div className={`${styles.boxWidth}`}>     
    <Contact /> 
    </div>
    </div>
    
    

   <div className={`angry__tools w-full`}>
 

    <Footer />  
  
  
   </div>

   </div>
  )
}

;



export default App;




