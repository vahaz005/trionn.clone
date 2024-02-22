import React from 'react'
import './image.css'
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Image({url  , title , top}) {
  gsap.fromTo(".right__1" ,
  {
    x:395.5,

      rotate :10
  },
  {
    x:0,
      rotate:0,
      duration: 1,
      
      scrollTrigger: {
          trigger: ".right__1",
         
          scrub: true,
          markers: false,
          toggleActions: 'play start reverse reverse'
      }
})
gsap.fromTo(".left__1" ,
{
 y:100 ,

   
},
{
  y:-5 , 
    duration: 1,
    
    scrollTrigger: {
        trigger: ".left__1",
       
        scrub: true,
        markers: false,
        toggleActions: 'play start reverse reverse'
    }
  }
)

  return (
    <>
    <div className="container" style={top={top}}>
      <div className="sub__container">
      <div className="left__1">
       <div className="leftalone">{title}</div>
       <div className="txt">UI Design, UX, Wireframe</div>
       <button className='b3'>View Project</button>
        </div>
      <div className="right__1">
      <img loading="lazy" src ={url} alt="" />
       
      </div>
        
      </div>
        
    </div>
    </>
  )
}

export default Image
