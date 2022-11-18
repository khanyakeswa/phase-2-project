import React from 'react'

const FinalCharacterCard = ({
  character,
  savedCharacters,
  setSavedCharacters,
}) => {

  const charID = Number(character.id)
  const deleteButtonCLickHandler = () => {
    fetch(`http://localhost:6001/savedCharacters/${charID}`, {
      method: 'DELETE',
    })
    const newSavedCharacters = savedCharacters.filter(
      (char) => char.id !== character.id
    )
    setSavedCharacters(newSavedCharacters)
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
          <svg id="down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 8.57"><path className="b" d="M8.57,8.57h-2.14v-2.14h2.14v2.14Z"/><path className="b" d="M15,2.14h-2.14V0h2.14V2.14Z"/><path className="b" d="M12.86,4.29h-2.14V2.14h2.14v2.14Z"/><path className="b" d="M10.71,6.43h-2.14v-2.14h2.14v2.14Z"/><path className="b" d="M6.43,6.43h-2.14v-2.14h2.14v2.14Z"/><path className="b" d="M4.29,4.29H2.14V2.14h2.14v2.14Z"/><path className="b" d="M2.14,2.14H0V0H2.14V2.14Z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default FinalCharacterCard
