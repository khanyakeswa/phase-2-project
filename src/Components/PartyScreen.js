import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function PartyScreen({setHeader}) {
  const [isPopulated, setPopulated] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('A Worthy Party!')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      id='party-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id='party-container'>
        {}
      </div>
    </motion.div>
  )
}

export default PartyScreen
