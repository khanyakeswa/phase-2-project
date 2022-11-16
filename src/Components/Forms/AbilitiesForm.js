import React from "react";

function AbilitiesForm() {
  return (
    <div>
      <label style={{ color:'white' }}htmlFor="ability">
        PICK YOUR ABILITY
        <button className="abilitybutton"></button>
        <button className="abilitybutton"></button>
        <button className="abilitybutton"></button>
      </label>

      <button className="formsButton">ADD ABILITY</button>
    </div>
  );
}

export default AbilitiesForm;
