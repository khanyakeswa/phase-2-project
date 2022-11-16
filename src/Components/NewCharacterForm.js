import React, { useEffect } from 'react'
import DetailsForm from './Forms/DetailsForm'
import AttributesForm from './Forms/AttributesForm'
import AbilitiesForm from './Forms/AbilitiesForm'
import { motion } from 'framer-motion'

function NewCharacterForm({ setHeader }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader('Create a New Adventurer')
    }, 1)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Create Character!</h1>
      <DetailsForm />
      <AttributesForm />
      <AbilitiesForm />
    </motion.div>
  )
}

export default NewCharacterForm
