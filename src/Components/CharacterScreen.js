import React, { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import CharacterFormContainer from './CharacterFormContainer'
import PickCharacter from './PickCharacter'
import MemberSelection from './MemberSelection'
import { AnimatePresence, motion } from 'framer-motion'
import DetailsForm from './Forms/DetailsForm'
import AttributesForm from './Forms/AttributesForm'
import AbilitiesForm from './Forms/AbilitiesForm'

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
          <Route path='selection' element={<MemberSelection setHeader={setHeader} />} />
          <Route
            path='create'
            element={<CharacterFormContainer setHeader={setHeader} />}
          >
            <Route path='details' element={<DetailsForm />} />
            <Route path='attributes' element={<AttributesForm />} />
            <Route path='abilities' element={<AbilitiesForm />} />
          </Route>
          <Route
            path='pick'
            element={<PickCharacter setHeader={setHeader} />}
          />
        </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default CharacterScreen
