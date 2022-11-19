import { React, useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import CharacterScreen from './CharacterScreen'
import PartyScreen from './PartyScreen'
import StarterScreen from './StarterScreen'
import { AnimatePresence } from 'framer-motion'
import TextTransition, { presets } from 'react-text-transition'
import MuteButton from './MuteButton'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const [currentHeader, setHeader] = useState('')
  const [data, setData] = useState([])
  const [savedCharacters, setSavedCharacters] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/characters')
      .then((resp) => resp.json())
      .then((files) => {
        setData(files)
      })
  }, [])

  function backButtonHandler() {
    navigate(-1)
  }

  // const screenTitles = {
  //   '/': '',
  //   '/character/selection': 'Add to Your Party',
  //   '/character/create': 'Create a New Adventurer',
  //   '/character/create/points': 'Allocate Attribute Points',
  //   '/character/create/spells': 'Select your Power',
  //   '/character/pick': 'Pick an Adventurer',
  //   '/party': 'Adventure Awaits!',
  // }

  return (
    <div id='window' className={currentHeader} key={location.pathname}>
      <MuteButton />
      <header
        id='current-screen-header'
        className={currentHeader === '' ? 'hidden' : 'visible'}
      >
        <div className='header-container'>
          <TextTransition
            springConfig={presets.gentle}
            style={{ justifyContent: 'center', height: 36.5 }}
          >
            <span>{currentHeader}</span>
          </TextTransition>
        </div>
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
        <Routes>
          <Route
            path='/character/*'
            element={
              <CharacterScreen
                data={data}
                setHeader={setHeader}
                savedCharacters={savedCharacters}
                setSavedCharacters={setSavedCharacters}
              />
            }
          />
          {/* <Route
            path='/character/pick'
            element={
              <PickCharacter
                setHeader={setHeader}
                data={data}
                setSavedCharacters={setSavedCharacters}
              />
            }
          /> */}
          <Route
            path='/party'
            element={
              <PartyScreen
                setHeader={setHeader}
                savedCharacters={savedCharacters}
                setSavedCharacters={setSavedCharacters}
              />
            }
          />
          <Route
            path='/endscreen'
            element={<StarterScreen setHeader={setHeader} />}
          />
          <Route
            path='/'
            element={
              <StarterScreen
                currentHeader={currentHeader}
                setHeader={setHeader}
              />
            }
          ></Route>
          <Route path='*' element={<div>OOPS</div>} />
        </Routes>
      </AnimatePresence>
      {location.pathname === '/party' ? null : location.pathname !== '/' ? (
        <div id='back-button-container'>
          <button
            onClick={backButtonHandler}
            id='back-button'
            className='nes-btn is-primary'
          >
            <svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 15'>
              <path
                className='b'
                d='M5,0V1.67h-1.67v1.67H1.67v1.67H0v1.67H1.67v1.67h1.67v1.67h1.67v1.67h1.67v-3.33H15v1.67h-1.67v1.67h-1.67v1.67h-1.67v1.67h5v-1.67h1.67v-1.67h1.67v-1.67h1.67v-3.33h-1.67v-1.67h-1.67v-1.67H6.67V0h-1.67Z'
              />
            </svg>
          </button>
          <span>go back</span>
        </div>
      ) : null}
      <footer>Copyright © Jonny Tilahun, Khanya Keswa</footer>
    </div>
  )
}

export default App
