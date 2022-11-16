import React, { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NewCharacterForm from './NewCharacterForm'
import PickCharacter from './PickCharacter'
import MemberSelection from './MemberSelection'
import { AnimatePresence, motion } from 'framer-motion'

function CharacterScreen({ setHeader }) {
  const [currentCharacterScreenDisplay, setCurrentCharacterScreenDisplay] =
    useState('member-selection')

  return (
    <motion.div
      id='character-screen'
      // initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        <Routes>
          <Route path='*' element={<MemberSelection setHeader={setHeader}/>} />
          <Route path='create/*' element={<NewCharacterForm setHeader={setHeader}/>} />
          <Route path='pick' element={<PickCharacter setHeader={setHeader}/>} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default CharacterScreen
