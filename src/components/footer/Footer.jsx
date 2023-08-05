


import React from 'react'
import styles, { layout } from '../../constants/style'
import { instagram, logo, twitter } from '../../assets';
import { navLinks } from '../../constants';

const Footer = () => {

    return(
        <section className={` flex md:flex-row flex-col
        justify-between items-center
         md:px-48 px-12
         py-7
        
    
        w-full `}>
        <div className={`flex flex-col`}>
        <div className={`flex flex-row gap-5 md:justify-start justify-center items-center my-4`}>
        <img src={logo} alt="logo" className={`md:w-[70px] h-[50px] md:h-[70px] h-[50px]`} />
        <h2 className={`font-poppins md:text-[45px] text-[30px] font-semibold text-[000]`}>EA4</h2>
        </div>
        <div className={`flex flex-row md:justify-start justify-center items-center mt-5 gap-10`}>
          <a href="https://www.instagram.com/amineelakkermi2/?next=%2F" target='_blank'><img id="instagram" src={instagram} alt="instagram" className={`md:w-[75px] w-[50px] md:h-[75px] h-[50px] cursor-[pointer]`} /></a>
          <a href="https://www.youtube.com/" target='_blank' ><img id="twitter" src={twitter} alt="twitter" className={`md:w-[75px] w-[50px] md:h-[75px] h-[50px] cursor-[pointer]`} /></a>
         
        </div>
        <div className='mt-8'>
        <h3 className={`font-poppins md:text-[25px] text-[19px] font-semibold text-[000] text-center leading-[44px]`}>Copyright © 2022 <span className={`text-white`}>EA4</span> All rights reserved</h3>
        </div>
        </div>

        <div className={`flex flex-col  `}>
          <h3 className={`font-poppins md:text-[32px] my-7 text-[22px] font-semibold text-[000] md:text-start text-center `}>Links</h3>
          <ul className={`list-none flex flex-col gap-10 `}>
          {
                navLinks.map((item , index) => (
                <li  key={item.id}
                className={`font-poppins duration-300 hover:text-[orangered] font-medium text-[000] cursor-pointer text-[20px] md:text-start text-center`}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a></li>
                ))
            }
          </ul>
          
        
        </div>
       
      </section>
    )

}

export default Footer;
