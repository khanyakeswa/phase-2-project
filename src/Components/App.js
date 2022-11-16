import { React, useState } from 'react'
import CharacterScreen from './CharacterScreen'
import PartyScreen from './PartyScreen'
import StarterScreen from './StarterScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState('member-selection')

  const screenTitles = {
    'starter-screen': '',
    'member-selection': 'Add to Your Party',
    'new-character': 'Create a New Adventurer',
    'new-character-stats': 'Allocate Attribute Points',
    'new-character-spells': 'Select your Power',
    'pick-character': 'Pick an Adventurer',
    // "party-reveal": "",
  }

  return (
    <div id='window' className={currentScreen}>
      <header id='current-screen-header'>
        <span>"{screenTitles[currentScreen]}"</span>
        <svg
          id='a'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 25.01 24.29'
        >
          <path
            class='b'
            d='M5.36,24.29H.72s0-4.62,0-4.62l7.16-7.16-3.7-3.71-1.85,1.85-1.85-1.85,3.24-3.24L0,1.85,1.85,0l3.71,3.71L8.8,.46l1.85,1.85-1.85,1.85,3.71,3.7,3.7-3.7-1.85-1.85,1.85-1.85,3.24,3.24,3.71-3.71,1.85,1.85-3.71,3.71,3.24,3.24-1.85,1.85-1.85-1.85-3.7,3.7,7.15,7.15v4.63s-4.64,0-4.64,0l-7.14-7.14-7.15,7.15ZM15.29,10.65l3.7-3.7-.93-.93-3.7,3.7,.93,.93h0ZM3.33,21.66h.94l6.38-6.38-.92-.93-6.39,6.39v.91Zm18.34,0v-.92L6.95,6.02l-.93,.93,14.71,14.71h.94Z'
          />
        </svg>
      </header>
      <CharacterScreen currentScreen={currentScreen} />
      <PartyScreen currentScreen={currentScreen} />
      <StarterScreen currentScreen={currentScreen} />
    </div>
  )
}

export default App
