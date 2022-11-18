import React from 'react'

const FinalCharacterCard = ({
  character,
  savedCharacters,
  setSavedCharacters,
}) => {
  const deleteButtonCLickHandler = () => {
    fetch(`http://localhost:6001/savedCharacters/${character.id}}`, {
      method: 'DELETE',
    })
    const newSavedCharacters = savedCharacters.filter(
      (char) => char.id !== character.id
    )
    // setSavedCharacters(newSavedCharacters)
    console.log(newSavedCharacters)
  }

  return (
    <div id='final-character-card'>
      <div id='final-wrapper'>
        <div id='character-delete-button' onClick={deleteButtonCLickHandler}>
          <svg
            id='close-svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M12,4h4v4h-4v-4Z' />
            <path d='M4,12h4v4h-4v-4Z' />
            <path d='M0,16H4v4H0v-4Z' />
            <path d='M16,0h4V4h-4V0Z' />
            <path d='M4,4h4v4h-4v-4Z' />
            <path d='M8,8h4v4h-4v-4Z' />
            <path d='M12,12h4v4h-4v-4Z' />
            <path d='M16,16h4v4h-4v-4Z' />
            <path d='M0,0H4V4H0V0Z' />
          </svg>
        </div>
        <img src={character.img}></img>
        <div id='details-container'>
          <span>{character.name}</span>
          <span></span>
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FinalCharacterCard
