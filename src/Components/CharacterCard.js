import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'

function CharacterCard({
  selectedCharacter,
  savedCharacters,
  setSavedCharacters,
}) {
  const navigate = useNavigate()
  console.log(selectedCharacter.description)

  function recruitButtonClickHandler() {
    navigate('/party')
    // setSavedCharacters([...savedCharacters, selectedCharacter])
    fetch('http://localhost:6001/savedCharacters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(selectedCharacter),
    })
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
