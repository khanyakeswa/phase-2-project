import React, { useState } from 'react'
import NewCharacterForm from './NewCharacterForm'
import PickCharacter from './PickCharacter'
import MemberSelection from './MemberSelection'

function CharacterScreen({currentScreen}) {
  const [currentCharacterScreenDisplay, setCurrentCharacterScreenDisplay] =
    useState('member-selection')

  // function transitionSlides() {

  // }

  return (
    <div id='character-screen'>
      <MemberSelection
        setCurrentCharacterScreenDisplay={setCurrentCharacterScreenDisplay}
      />
      <NewCharacterForm />
      <PickCharacter />
    </div>
  )
}

export default CharacterScreen
