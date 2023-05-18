import {React, useMemo} from 'react'
import './Section_1.css'
import Paragraph from './Paragraph'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Section1 = () => {
  const para = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold."
  const content = useMemo(() => para.split(" "), [para])

  const { scrollYProgress } = useScroll()
  return (
    <div className='part_1 lg:w-[1000px] mt-11'>
      <p className='scroller'>
        {content.map((words, i) => (
          <Paragraph words={words} index={i} length={content.length} scrollYProgress={scrollYProgress} />
        ))}
      </p>
    </div>
  )
}

export default Section1