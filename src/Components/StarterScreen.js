import React from 'react';
import titleImage from '../Assets/Images/dnd-vector.svg';

function StarterScreen() {
    return (
    <div id='starter-screen'>
        <img src={titleImage} alt='dnd'></img>
        <span>CAMPAIGN PARTY CREATOR</span>
        <br />
        <p>click anywhere to begin</p>
    </div>
    )
}

export default StarterScreen