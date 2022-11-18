import { React } from 'react'
import useSound from 'use-sound';
import song from '../Assets/Sounds/legend.mp3'

const Music = ({muted}) => {
    const [play, { sound }] = useSound(song, {
        onend: () => {play()},
        soundEnabled: muted,
        interrupt: true,
        volume: .1
    });
    play()

    return(
        <div className="music-player"></div>
    )
}

export default Music