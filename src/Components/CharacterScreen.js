import React from 'react'
import NewCharacterForm from './NewCharacterForm'
import PickCharacter from './PickCharacter'
import MemberSelection from './MemberSelection'

function CharacterScreen() {
  return (
    <div id='character-screen'>
      <MemberSelection />
      <NewCharacterForm />
      <PickCharacter />
    </div>
  )
}

export default CharacterScreen
