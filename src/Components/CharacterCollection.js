import { React } from 'react'

const CharacterCollection = ({ setSelectedCharacter, charactersData }) => {
  const tileClickHandler = (e) => {
    setSelectedCharacter(charactersData[e.target.id - 1])
  }

  const characterTiles = charactersData.map((obj) => {
    return (
      <div
        id={obj.id}
        key={obj.id}
        onClick={tileClickHandler}
        className='tile-container'
      >
        <img src={obj.img}></img>
        <span>{obj.name}</span>
      </div>
    )
  })

  return (
    <div id='character-collection-wrapper'>
      <div id='character-collection-container' className=''>
        {characterTiles}
      </div>
    </div>
  )
}

export default CharacterCollection
