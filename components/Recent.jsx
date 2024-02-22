import React from 'react'
import './recent.css'
import { motion } from 'framer-motion';
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll , useTransform } from 'framer-motion';


function Recent() {
 




  // Map scroll progress to text color opacity;
 
  gsap.to(".rights2" , {
    x:270,
    duration :1 ,
    scrollTrigger:{
      trigger :".rights1",
      scrub:4,

      toggleActions : "play start reverse reverse"
    }
  
  })
  gsap.to(".rights1" , {
    x:10,
    duration :5 ,
    scrollTrigger:{
      trigger :".rights1",
      scrub:4,

      toggleActions : "play start reverse reverse"
    }
  
  })
  gsap.to(".right div" , {
    
    duration :0.7 ,
    scrollTrigger:{
      trigger :".rights1",
      scrub:4,

      toggleActions : "play start reverse reverse"
    }
  
  })
  
  return (
    <>
    <div className="recentmain">
        <div className="right">
            <motion.span className="rights1"
          
            
            >recent</motion.span>
            <span className="rights2">work</span>
            <div>In the creative wilderness, </div>
            <div>clients find our work truly </div>
            <div>beloved.</div>

        </div>
        <div className="left">
        <button >Explore work</button>

        </div>

    </div>
    </>
  )
}

export default Recent
