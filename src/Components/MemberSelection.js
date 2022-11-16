import React, { useState } from "react";

function MemberSelection({setCurrentCharacterScreenDisplay}) {
    const [visibiltyPhase, setVisibility] = useState('')

    function newCharacterClickHandler(e) {
        setVisibility('post')
        setCurrentCharacterScreenDisplay()
        console.log(e.target.parentNode.id)
    }

    function chooseCharacterClickHandler(e) {
        setVisibility('post')
        setCurrentCharacterScreenDisplay()
        console.log(e.target.parentNode.id)
    }

    return (
        <div id="member-selection" className={`ui-container ${visibiltyPhase}`}>
            <button onClick={newCharacterClickHandler}>create new adventurer</button>
            <button onClick={chooseCharacterClickHandler}>recruit adventurer</button>
        </div>
    )
}

export default MemberSelection