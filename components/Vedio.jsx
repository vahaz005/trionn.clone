import React from 'react'
import "./vedio.css"
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Vedio() {
    gsap.fromTo(".vediowrapper video" ,
{
  borderRadius : 99999 , y :-191.58, scaleX:0.14 ,
  scaleY:0.14

   
},
{
  y:0 , borderRadius:24 , scaleX:1 , scaleY:1 ,
    duration: 1,
    
    scrollTrigger: {
        trigger: ".vediowrapper video",
       
        scrub: true,
        markers: false,
        toggleActions: 'play start reverse reverse'
    }
  }
)

  return (
    <>
    <div className="vediowrapper">
   <video  src="./public/intro-video.mp4" autoPlay></video>
        </div>
        </>
  )
}

export default Vedio
