import React from "react";
import { useNavigate } from 'react-router-dom'

function AbilitiesForm() {
  const navigate = useNavigate()

  return (
    <div>
      <label style={{ color:'white' }}htmlFor="ability">
        PICK YOUR ABILITY
        <button className="abilitybutton"></button>
        <button className="abilitybutton"></button>
        <button className="abilitybutton"></button>
      </label>

      <button className="formsButton">ADD ABILITY</button>
      <button onClick={()=>navigate("/character/create/attributes")}>Go to attributes</button>
    </div>
  );
}

export default AbilitiesForm;
