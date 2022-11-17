import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard'
import CharacterCollection from './CharacterCollection'

function PickCharacter({setHeader}) {
  const [selectedCharacter, setSelectedCharacter] = useState('')

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
      <CharacterCard selectedCharacter={selectedCharacter}/>
      <CharacterCollection setSelectedCharacter={setSelectedCharacter}/>
    </motion.div>
  )
}

export default PickCharacter
