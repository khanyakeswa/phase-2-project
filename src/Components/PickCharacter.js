import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard'
import CharacterCollection from './CharacterCollection'

function PickCharacter({ setHeader }) {
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('Recruit an Adventurer')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    fetch('http://localhost:6001/characters')
      .then((resp) => resp.json())
      .then((files) => {
        setData(files)
        setSelectedCharacter(files[0])
      })
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
