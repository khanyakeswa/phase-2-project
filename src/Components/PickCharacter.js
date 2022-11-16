import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard'

function PickCharacter({setHeader}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('Recruit an Adventurer')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className={`ui-container`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CharacterCard />
    </motion.div>
  )
}

export default PickCharacter
