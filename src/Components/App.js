import { React, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import CharacterScreen from './CharacterScreen'
import PartyScreen from './PartyScreen'
import StarterScreen from './StarterScreen'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  const [currentScreen, setScreen] = useState('/')

  const screenTitles = {
    '/': '',
    '/character/select': 'Add to Your Party',
    '/character/create': 'Create a New Adventurer',
    '/character/create/points': 'Allocate Attribute Points',
    '/character/create/spells': 'Select your Power',
    '/character/pick': 'Pick an Adventurer',
    '/party': 'Adventure Awaits!',
  }

  return (
    <div id='window' className={currentScreen} key={location.pathname}>
      <header id='current-screen-header'>
        {currentScreen !== '/' ? (
          <span>"{screenTitles[currentScreen]}"</span>
        ) : null}
        <svg
          id='a'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 25.01 24.29'
        >
          <path
            className='b'
            d='M5.36,24.29H.72s0-4.62,0-4.62l7.16-7.16-3.7-3.71-1.85,1.85-1.85-1.85,3.24-3.24L0,1.85,1.85,0l3.71,3.71L8.8,.46l1.85,1.85-1.85,1.85,3.71,3.7,3.7-3.7-1.85-1.85,1.85-1.85,3.24,3.24,3.71-3.71,1.85,1.85-3.71,3.71,3.24,3.24-1.85,1.85-1.85-1.85-3.7,3.7,7.15,7.15v4.63s-4.64,0-4.64,0l-7.14-7.14-7.15,7.15ZM15.29,10.65l3.7-3.7-.93-.93-3.7,3.7,.93,.93h0ZM3.33,21.66h.94l6.38-6.38-.92-.93-6.39,6.39v.91Zm18.34,0v-.92L6.95,6.02l-.93,.93,14.71,14.71h.94Z'
          />
        </svg>
      </header>
      <AnimatePresence>
        <Routes location={location}>
          <Route
            path='/character'
            element={<CharacterScreen setScreen={setScreen} />}
          />
          <Route
            path='/party'
            element={<PartyScreen setScreen={setScreen} />}
          />
          <Route
            path='/endscreen'
            element={<StarterScreen setScreen={setScreen} />}
          />
          <Route
            path='/'
            element={
              <StarterScreen
                currentScreen={currentScreen}
                setScreen={setScreen}
              />
            }
          ></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
