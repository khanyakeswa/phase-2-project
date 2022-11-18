import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PlaceHolderCharacterCard from './PlaceholderCharacterCard'
import FinalCharacterCard from './FinalCharacterCard'
import Confetti from './Confetti'

function PartyScreen({setHeader}) {
  const [savedCharacters, setSavedCharacters] = useState([])
  const [btn, setBtn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/savedCharacters')
    .then((response) => response.json())
    .then(data => setSavedCharacters(data))
  },[])

  function createConfetti() {
    savedCharacters.length = 4 ? setBtn(true) : null
  }

  useEffect(() => {
    setTimeout(() => {
      createConfetti()
    }, 1);
  },[])

  const cardList = savedCharacters.map((char) => {
        if(char.name) {return(
          <FinalCharacterCard key={char.id} character={char} savedCharacters={savedCharacters} setSavedCharacters={setSavedCharacters}/>
        )}
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('A Worthy Party!')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      id='party-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id='party-container'>
        {cardList}
        {savedCharacters.length < 4 ? <PlaceHolderCharacterCard /> : null}
        <Confetti btn={btn}/>
      </div>
    </motion.div>
  )
}

export default PartyScreen
