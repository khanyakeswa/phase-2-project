import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function MemberSelection({ setHeader }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('Add to Your Party')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  function newCharacterClickHandler() {
    navigate('/character/create/details')
  }

  function pickCharacterClickHandler() {
    navigate('/character/pick')
  }

  return (
    <motion.div
      id='member-selection'
      className={`ui-container`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className='nes-btn is-primary' onClick={newCharacterClickHandler}>
        create new adventurer
      </button>
      <button
        className='nes-btn is-primary'
        onClick={pickCharacterClickHandler}
      >
        recruit adventurer
      </button>
    </motion.div>
  )
}

export default MemberSelection
