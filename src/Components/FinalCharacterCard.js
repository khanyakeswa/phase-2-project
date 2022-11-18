import React from 'react'

const FinalCharacterCard = ({ character }) => {
  return (
    <div id='character-card-container'>
      <div id='character-card'>
        <img src={character.img}></img>
        <div id='details-container'>
          <span>{character.name}</span>
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

export default FinalCharacterCard
