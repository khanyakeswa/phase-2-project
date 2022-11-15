import { React, useState } from 'react'
import CharacterScreen from './CharacterScreen'
import PartyScreen from './PartyScreen'
import StarterScreen from './StarterScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState('')

  return (
    <div id='window'>
      <header>
        <span>{currentScreen}</span>
      </header>
      <CharacterScreen />
      <PartyScreen />
      <StarterScreen />
    </div>
  )
}

export default App
