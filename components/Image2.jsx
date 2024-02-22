import React from 'react'
import './image2.css'
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Image2({url  , title , top}) {
  gsap.fromTo(".right__12 img" ,
  {
    x:395.5,

      rotate :10
  },
  {
    x:0,
      rotate:0,
      duration: 0.3,
      
      scrollTrigger: {
          trigger: ".right__12 img",
         
          scrub: true,
          markers: false,
          toggleActions: 'play start reverse reverse'
      }
})
gsap.fromTo(".left__122" ,
{
 y:100 ,

   
},
{
  y:-5 , 
    duration: 1,
    
    scrollTrigger: {
        trigger: ".left__12",
       
        scrub: true,
        markers: false,
        toggleActions: 'play start reverse reverse'
    }
  }
)

  return (
    <>
    <div className="container2" style={top={top}}>
      <div className="sub__container2">
      <div className="left__12">
       <div className="leftalone2">{title}</div>
       <div className="txt2r">UI Design, UX, Wireframe</div>
       <button className='b32'>View Project</button>
        </div>
      <div className="right__12">
      <img loading="lazy" src ={url} alt="" />
       
      </div>
        
      </div>
        
    </div>
    </>
  )
}

export default Image2
