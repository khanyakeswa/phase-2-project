import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import titleImage from './Images/dnd-vector.png'
import { motion } from 'framer-motion'

function StarterScreen({ setHeader }) {
  const navigate = useNavigate()
  

  function handleStartClick() {
    navigate('/character/selection')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('"Adventure Awaits!"')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      onClick={handleStartClick}
      id='starter-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src='/dnd-vector.png' alt='dnd'></img>
      <span>CAMPAIGN PARTY CREATOR</span>
      <br />
      <p>click anywhere to begin</p>
    </motion.div>
  )
}

export default StarterScreen
