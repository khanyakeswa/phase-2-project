import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'
import useSound from 'use-sound'
import success from '../Assets/Sounds/success.mp3'

function CharacterCard({
  selectedCharacter,
  savedCharacters,
  setSavedCharacters,
}) {
  const navigate = useNavigate()
  const [play, { stop }] = useSound(success, {
    soundEnabled: true,
    interrupt: false,
    volume: 0.1,
  })

  function recruitButtonClickHandler() {
    navigate('/party')
    play()

    if (savedCharacters.length <= 3) {
      fetch('http://localhost:6001/savedCharacters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(selectedCharacter),
      })
      setSavedCharacters([...savedCharacters, selectedCharacter])
    }
  }

  return (
    <div id='character-card-container'>
      <div id='character-card'>
        <img src={process.env.PUBLIC_URL + selectedCharacter.img}></img>
        <div id='details-container'>
          <div id='card-name-container'>
            <TextTransition
              direction='up'
              springConfig={presets.gentle}
              style={{ justifyContent: 'center', height: 36.5 }}
            >
              <span>{selectedCharacter.name}</span>
            </TextTransition>
          </div>
          <span></span>
          <p>{selectedCharacter.description}</p>
          <svg
            id='down-arrow'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 15 8.57'
          >
            <path className='b' d='M8.57,8.57h-2.14v-2.14h2.14v2.14Z' />
            <path className='b' d='M15,2.14h-2.14V0h2.14V2.14Z' />
            <path className='b' d='M12.86,4.29h-2.14V2.14h2.14v2.14Z' />
            <path className='b' d='M10.71,6.43h-2.14v-2.14h2.14v2.14Z' />
            <path className='b' d='M6.43,6.43h-2.14v-2.14h2.14v2.14Z' />
            <path className='b' d='M4.29,4.29H2.14V2.14h2.14v2.14Z' />
            <path className='b' d='M2.14,2.14H0V0H2.14V2.14Z' />
          </svg>
        </div>
      </div>
      <button
        onClick={recruitButtonClickHandler}
        className='nes-btn is-primary'
      >
        recruit
      </button>
    </div>
  )
}

export default CharacterCard
