import React from 'react'
import './home.css'
import { motion } from 'framer-motion';


function Home() {
  return (
    <>
    <div className='main'>
        <div className='main__div'>
            <div className="main__txt">
                <motion.span className='txt1'
                initial = {{opacity:0 , y:200}}
                animate = {{opacity:1 , y:0}}
                transition={{duration : 1, type : "spring"}}
                >roar in the</motion.span>
                <span className='txt2'>digital wilderness.</span>
                </div>
               
                
        </div>
        <div className="button">
                  <div className="sub__button">
                   
                      <motion.button className='b1'
                      initial = {{y:200,  opacity:0}}
                      animate ={
                        {
                          y:0 , opacity:1
                        }
                      }
                      transition={{duration:2}}
                      >Explore work</motion.button>
                    
                    
                      <button className='b2'>Get in touch</button>
                    
                  </div>
                </div>
    </div>
    </>
  )
}

export default Home
