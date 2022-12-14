import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = ({savedCharacters}) => {
  const [windowDimentions, setDimenstion] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })


  const detectSize = () => {
    setDimenstion({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimentions])

  return (
    <>
      {/* <button id='finalSubmission' className='nes-btn is-primary' onClick={() => setBtn(!btn)}>
        Final Submission
      </button> */}
      {savedCharacters.length === 4 ? (
        <ReactConfetti
          width={windowDimentions.width}
          height={windowDimentions.height}
          tweenDuration={1000}
        />
      ): null}
    </>
  )
}

export default Confetti
