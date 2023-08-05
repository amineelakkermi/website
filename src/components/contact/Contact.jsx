import React from 'react'
import styles, { layout } from '../../constants/style'
import "./contact.css";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



let input = document.querySelectorAll("input");
let textarea = document.querySelectorAll("textarea");


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    
      

e.preventDefault();

    if(input.value != 0 && textarea.value != 0){

    emailjs.sendForm(
    'elakkermi',
    'template_s7szudf',
    form.current,
    'JA-qszfO4YXZXmYLX'
    )
    
    .then((result) => {
      e.target.reset();
    }, (error) => {
      console.log(error.text);
    });


    }else{
     console.log("eroor")
    }
    
     


   



    
  };

   
  return(
 <motion.section id="contact" className={` flex flex-col   ${styles.paddingY}  md:my-5 my-12`}
    initial = { { opacity : 0 , translateY: -100 } }
    whileInView = {{ opacity: 1 , translateY: 0 }}
    transition = {{ duration: 0.6 , delay: 0.6 , type:"spring" , stiffness: 80 }}
    
    >
       

      <h1 className={`${styles.heading2} text-center`}>Contact</h1>
    
      <form ref={form} onSubmit={sendEmail} className={`w-full flex flex-col gap-10 mt-12 ${styles.padding}`}>

      <div className={`w-full flex md:flex-row flex-col  gap-10`}>
      <input type="text" name="user_name"   placeholder="Your Name" className={`${layout.input}`} />
      <input type="text"  name="user_email"  placeholder="Your Email" className={`${layout.input}`} />
      </div>
      
      
      <div className={`w-full flex md:flex-row flex-col  gap-10`}>
      <input type="text"    placeholder="Your Number"  className={`${layout.input}`} />
      <input type="text"    placeholder="type subject" className={`${layout.input}`} />
      </div>      

      <div>
      <textarea name="message"      placeholder="Subject" className={`${layout.inputSubject} resize-none w-full `} />
      </div>

     
      
     
    <div className={`flex justify-center items-center`}>
    <input type="submit" value="Send" className='bg-[orangered]  text-white font-poppins text-[22px] font-medium w-[170px] h-[70px]
    
    cursor-[pointer]
    
    '/>
    </div>
    

      

      


      

    </form>
      

    </motion.section>
  )
}



export default Contact
  /*/<div className={`w-full flex flex-col gap-10 mt-12 ${styles.padding}`}>
       
      <div className={`w-full flex md:flex-row flex-col  gap-10`}>
      <input type="text"    placeholder="Your Name" className={`${layout.input}`} />
      <input type="text"    placeholder="Your Email" className={`${layout.input}`} />
      </div>


      <div className={`w-full flex md:flex-row flex-col  gap-10`}>
      <input type="number"    placeholder="Your Number" className={`${layout.input}`} />
      <input type="text"    placeholder="Email Subject" className={`${layout.input}`} />
      </div>

      <div>
      <div className='flex flex-row'>
      <input type="text" placeholder="Subject" className={`${layout.inputSubject} w-full`} />
      </div>
      
      </div>
      </div>/*/