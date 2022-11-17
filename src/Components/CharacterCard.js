import React from 'react'

function CharacterCard({selectedCharacter}) {
  return (
    <div id='character-card-container'>
      <div id='character-card'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'></img>
        <div id='details-container'>
          <span>{selectedCharacter.name}</span>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
