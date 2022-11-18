import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceHolderCharacterCard = () => {
    const navigate = useNavigate()

    const recruitButtonHandler = () => {
        navigate('/character/selection')
    }

    return (
        <div id='placeholder-character-card'>
            <div id='placeholder-wrapper'>
                <span>position empty</span>
                <button onClick={recruitButtonHandler} className='nes-btn is-primary'>recruit</button>
            </div>
        </div>
    )
}

export default PlaceHolderCharacterCard