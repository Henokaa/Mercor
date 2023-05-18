import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'


const Paragraph = ({ words, index, length, scrollYProgress }) => {
    const scaleX = useSpring(scrollYProgress)
    const color = useTransform(
        scrollYProgress,
        [0.4*index / length,  0.4*(index+1) / length],
        ['#202020', '#ffffff'],
    )
    return (
        <motion.span
            key={index}
            style={{
                color: color,
                scaleX,
                transition: "color 0.5s ease-in-out"
            }
            }
        >
            {words}{" "}
        </motion.span>
    )
}

export default Paragraph