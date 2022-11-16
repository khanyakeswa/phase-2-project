import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function MemberSelection({setCurrentCharacterScreenDisplay}) {
    const navigate = useNavigate

    const [visibiltyPhase, setVisibility] = useState('')

    // function newCharacterClickHandler() {
    //     navigate
    // }

    return (
        <div id="member-selection" className={`ui-container ${visibiltyPhase}`}>
            <button onClick={navigate('/character/create')}>create new adventurer</button>
            <button onClick={navigate('/character/pick')}>recruit adventurer</button>
        </div>
    )
}

export default MemberSelection