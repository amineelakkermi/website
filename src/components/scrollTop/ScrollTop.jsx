import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import "./scrollTop.css";


const ScrollTop = () => {
   
    const [ isVisible , setIsVisible ] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll" , () => {
            window.scrollY >= 100 ? setIsVisible(true) : setIsVisible(false); 
        })
    } , [])

    const goTOtop = () => {
        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
    }

  return (
    <div>
      <button className="btn-Scroll" style={{ display : isVisible ? "block" : "none" }}  onClick={goTOtop}>
        <FaArrowCircleUp />
      </button>
    </div>
  )
}

export default ScrollTop
