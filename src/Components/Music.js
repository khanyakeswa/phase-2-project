import { React } from 'react'
import useSound from 'use-sound';
import song from '../Assets/Sounds/legend.mp3'

const Music = () => {
    const [play, { sound }] = useSound(song);
    play()

    return(
        <div className="music-player"></div>
    )
}

export default Music