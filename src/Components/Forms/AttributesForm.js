import React, { useState } from "react";

function AttributesForm() {
  let [TotalStatPoints, setTotalStatPoints] = useState(25);

  const [strength, setStrength] = useState(0);
  const [dex, setDex] = useState(0);
  const [intel, setIntel] = useState(0);

  const handleStrengthChange = (e) => {
    setStrength(e.target.value);
  };

  const handleDexChange = (e) => {
    setDex(e.target.value);
  };

  const handleIntelChange = (e) => {
    setIntel(e.target.value);
  };

    const totalPoints = Number(strength) + Number(dex) + Number(intel);
    
   
   

  return (
    <div>
      <form>
        <label style={{ color:'white' }}htmlFor="strength">
          STRENGTH
          <input
            type="number"
            id="strength"
            value={strength}
            min="0"
            max={TotalStatPoints}
            onChange={handleStrengthChange}
          />
        </label>

        <label style={{ color:'white' }} htmlFor="dex">
          DEX
          <input
            type="number"
            id="dex"
            value={dex}
            onChange={handleDexChange}
            min="0"
            max={TotalStatPoints}
          />
        </label>

        <label style={{ color:'white' }} htmlFor="intel">
          INTEL
          <input
            type="number"
            id="intel"
            value={intel}
            onChange={handleIntelChange}
            min="0"
            max={TotalStatPoints}
          />
        </label>
      </form>

      <h2 style={{ color:'white' }}>Health: {strength * 10}</h2>
      <h2 style={{ color:'white' }}>DEX: {dex * 10} </h2>
      <h2 style={{ color:'white' }}>MANA:{intel * 10} </h2>
      <button className="formsButton">ADD ATRIBUTES</button>
    </div>
  );
}

export default AttributesForm;
