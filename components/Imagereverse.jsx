
import React from 'react'
import './imager.css'
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Imagereverse({url  , title}) {
  gsap.fromTo(".right__1r img" ,
  {
    x:-395.5,

      rotate :-10 
  },
  {
    x:0,
      rotate:0,
      duration: 0.3,
      
      scrollTrigger: {
          trigger: ".right__1r img",
         
          scrub: true,
          markers: false,
          toggleActions: 'play start reverse reverse'
      }
})
gsap.fromTo(".left__1r" ,
{
 y:100 ,

   
},
{
  y:-5 , 
    duration: 1,
    
    scrollTrigger: {
        trigger: ".left__1r",
       
        scrub: true,
        markers: false,
        toggleActions: 'play start reverse reverse'
    }
  }
)

  return (
    <>
    <div className="containerr">
      <div className="sub__containerr">
     
      <div className="right__1r">
      <img loading="lazy" src ={url} alt="" />
       
      </div>
      <div className="left__1r">
       <div className="leftaloner">{title}</div>
       <div className="txtr">UI Design, UX, Wireframe</div>
       <button className='b3r'>View Project</button>
        </div>
        
      </div>
        
    </div>
    </>
  )
}

export default Imagereverse
