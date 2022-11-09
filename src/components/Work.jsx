import React from 'react'
import ProjectMenu from './ProjectMenu'
import { motion } from 'framer-motion'
const Work = () => {
  return (
    <motion.div 
    initial = {{ opacity: 0 }}
    animate = {{ opacity: 1 }}
    transition = {{ duration:0.5, ease: "easeOut" }}
    >
        <ProjectMenu />
    </motion.div>
  )
}

export default Work