import React from 'react'
import { useNavigate } from 'react-router-dom'
import titleImage from '../Assets/Images/dnd-vector.svg'
import { motion } from 'framer-motion'

function StarterScreen({ currentScreen, setScreen }) {
  const navigate = useNavigate()

  function handleStartClick() {
    // setScreen('/character')
    console.log(currentScreen)
    navigate('/character')
  }

  return (
    <motion.div
      onClick={handleStartClick}
      id='starter-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={titleImage} alt='dnd'></img>
      <span>CAMPAIGN PARTY CREATOR</span>
      <br />
      <p>click anywhere to begin</p>
    </motion.div>
  )
}

export default StarterScreen
