import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AbilitiesForm() {
  const navigate = useNavigate();

  const handleAbilitiesClick = () => {

    const style = { 
      
      color: 'red'
    }
  }

  return (
    <div>
      {/* <input type="radio" id="first" name='ability'/>
      <label htmlFor="first">First</label>
      <br />
      <input type="radio" id="second" name='ability'/>
      <label htmlFor="second">Second</label>
      <br />
      <input type="radio" id="third" name='ability'/>
      <label htmlFor="third">Third</label>
      <br /> */}

      <div className="abilities" onClick={handleAbilitiesClick}>First</div>
      <div className="abilities">Second</div>
      <div className="abilities">Third</div>
      <button
        className="formsButton"
        onClick={() => navigate("/character/create/attributes")}
      >
        ADD ABILITY
      </button>
    </div>
  );
}

export default AbilitiesForm;
