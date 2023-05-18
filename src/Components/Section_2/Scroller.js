import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './Scrolling.css'

const Scroller = () => {
  const { scrollYProgress } = useScroll();

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    ["0", "100%"]
  );

  return (
    <div className='scrolling'>
      <span className='page'>1</span>
      <div className='scrolling-bg'>
        <motion.div className='scrolling-line'
          style={{
            height: height,
          }}
          transition={{ type: "spring", stiffness: 250 }}>
        </motion.div>
      </div>
      <span className='page'>2</span>
    </div>
  )
}

export default Scroller