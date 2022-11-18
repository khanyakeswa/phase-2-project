import React, { useState } from 'react'
import Music from './Music'
import useSound from 'use-sound'
import song from '../Assets/Sounds/legend.mp3'

const MuteButton = () => {
  const [muted, setMuted] = useState(true)
  function playButtonHandler() {
    console.log('playing')
    setMuted(!muted)
    play()
  }
  function stopButtonHandler() {
    setMuted(!muted)
    stop()
  }

  const [play, { stop }] = useSound(song, {
    onend: () => {
      play()
    },
    soundEnabled: muted,
    interrupt: true,
    volume: 0.1,
  })

  return (
    <div id='mute-button-container'>
      {muted ? (
        <>
          <button
            onClick={playButtonHandler}
            id='mute-button'
            className='nes-btn is-primary'
          >
            <svg
              id='a'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 13.12 11.25'
            >
              <polygon
                className='c'
                points='3.75 0 3.75 1.87 1.87 1.87 1.87 3.75 0 3.75 0 7.5 1.87 7.5 1.87 9.37 3.75 9.37 3.75 11.25 5.62 11.25 5.62 0 3.75 0'
              />
              <rect className='b' x='7.5' y='3.75' width='1.88' height='1.87' />
              <rect
                className='b'
                x='9.37'
                y='5.62'
                width='1.87'
                height='1.88'
              />
              <rect
                className='b'
                x='11.25'
                y='3.75'
                width='1.87'
                height='1.87'
              />
              <rect
                className='b'
                x='11.25'
                y='7.5'
                width='1.87'
                height='1.87'
              />
              <rect className='b' x='7.5' y='7.5' width='1.88' height='1.87' />
            </svg>
          </button>
          <span>play music</span>
        </>
      ) : (
        <>
          <button
            onClick={stopButtonHandler}
            id='mute-button'
            className='nes-btn is-primary'
          >
            <svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 15'>
              <rect className='b' x='9.38' width='1.88' height='1.87' />
              <rect
                className='b'
                x='11.25'
                y='1.87'
                width='1.87'
                height='1.87'
              />
              <rect
                className='b'
                x='13.13'
                y='3.75'
                width='1.88'
                height='7.5'
              />
              <rect
                className='b'
                x='11.25'
                y='11.25'
                width='1.87'
                height='1.87'
              />
              <rect
                className='b'
                x='9.38'
                y='13.12'
                width='1.88'
                height='1.88'
              />
              <polygon
                className='c'
                points='3.75 1.88 3.75 3.75 1.88 3.75 1.88 5.63 0 5.63 0 9.38 1.88 9.38 1.88 11.25 3.75 11.25 3.75 13.12 5.63 13.12 5.63 1.88 3.75 1.88'
              />
              <rect className='b' x='7.5' y='3.75' width='1.87' height='1.88' />
              <rect
                className='b'
                x='9.37'
                y='5.63'
                width='1.88'
                height='3.75'
              />
              <rect className='b' x='7.5' y='9.38' width='1.87' height='1.87' />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export default MuteButton
