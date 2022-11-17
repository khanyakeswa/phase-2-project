import React from 'react'
import { motion } from 'framer-motion'

function PartyScreen() {
  return (
    <motion.div
      id='party-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id='party-container' className='ui-container'></div>
    </motion.div>
  )
}

export default PartyScreen
