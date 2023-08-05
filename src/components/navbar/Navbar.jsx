import React, { useState } from 'react'
import { navLinks } from '../../constants'
import styles from '../../constants/style'
import { logo , menu , close } from '../../assets'
import "./navbar.css"
import { motion } from "framer-motion"



const Navbar = () => {
  
  
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  


  return (
    <nav className=" w-full  flex py-4   items-center navbar ">
      <img src={logo} alt="logo" className=" w-[77px] z-30 object-contain " />
      
     
     

      <ul className=" list-none lg:flex hidden justify-end items-center flex-1  gap-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative font-poppins font-medium cursor-pointer text-[20px] duration-300 hover:text-[orangered]  ${
              active === nav.title ? "text-[000]" : "text-[000]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id} `}>{nav.title}</a>
          </li>
        ))}
      </ul>

     
    

      <div

      className={`lg:hidden flex   flex-1 justify-end items-center`}  >
         
         <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-[pointer]"
          onClick={() => setToggle(!toggle) }
          
          />
       
       
      
        <div
          className={`${
            !toggle ? "hidden" : "flex" 
          } z-20 p-6 bg-[dark] absolute top-20 right-0 mx-10 my-2 min-w-[140px] rounded-xl bg-[#011]  justify-center items-center sidebar`}
        >
      
        <ul className="list-none flex justify-center items-center  gap-8 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px] 
                
                ${

                  active === nav.title ? "text-[orangered]" : "text-[white]"
                }
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title) && setToggle(toggle)
                 
                }
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
     

    </nav>
  );
};





















export default Navbar;