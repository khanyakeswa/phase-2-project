import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'


function CharacterCard({ selectedCharacter }) {
  const navigate = useNavigate()
  const characterImg = selectedCharacter.img

  function recruitButtonClickHandler() {
    navigate('/party')
  }

  return (
    <div id='character-card-container'>
      <div id='character-card'>
        <img src={require( characterImg)}></img>
        <div id='details-container'>
          <div id='card-name-container'>
            <TextTransition
              direction='down'
              springConfig={presets.gentle}
              style={{ justifyContent: 'center', height: 36.5 }}
            >
              <span>{selectedCharacter.name}</span>
            </TextTransition>
          </div>
          <span></span>
          <p>Description</p>
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
