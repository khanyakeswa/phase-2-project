import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard'
import CharacterCollection from './CharacterCollection'

function PickCharacter({ setHeader, data }) {
  const [selectedCharacter, setSelectedCharacter] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('Recruit an Adventurer')
      setSelectedCharacter(data[0])
    }, 1)
    return () => clearTimeout(timer)
  }, [])
  
  // const dataArray = data.map((character) => {
  //   ;<CharacterCard key={character.id} dataObj={character} />
  // })

  return (
    <motion.div
      id='pic-character'
      className={`ui-container`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CharacterCard selectedCharacter={selectedCharacter} />
      <CharacterCollection setSelectedCharacter={setSelectedCharacter} charactersData={data}/>
    </motion.div>
  )
}

export default PickCharacter
