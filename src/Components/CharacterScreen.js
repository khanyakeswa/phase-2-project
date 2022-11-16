import React, { useState } from 'react'
import NewCharacterForm from './NewCharacterForm'
import PickCharacter from './PickCharacter'
import MemberSelection from './MemberSelection'
import { motion } from 'framer-motion'

function CharacterScreen({ currentScreen }) {
  const [currentCharacterScreenDisplay, setCurrentCharacterScreenDisplay] =
    useState('member-selection')

  return (
    <motion.div
      id='character-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MemberSelection
        setCurrentCharacterScreenDisplay={setCurrentCharacterScreenDisplay}
      />
      <NewCharacterForm />
      <PickCharacter />
    </motion.div>
  )
}

export default CharacterScreen
