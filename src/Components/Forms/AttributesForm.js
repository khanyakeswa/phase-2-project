import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AttributesForm() {
  const navigate = useNavigate();


  let max = 25;

  const [strength, setStrength] = useState(0);
  const [dex, setDex] = useState(0);
  const [intel, setIntel] = useState(0);

  const totalPoints = Number(strength) + Number(dex) + Number(intel);
  const remainder = max - totalPoints;

  const handleStrengthChange = (e) => {
    return remainder > 0 ? setStrength(e.target.value) : null;
  };

  const handleDexChange = (e) => {
    return remainder > 0 ? setDex(e.target.value) : null;
  };

  const handleIntelChange = (e) => {
    return remainder > 0 ? setIntel(e.target.value) : null;
  };

  return (
    <div>
      <form>
        <label style={{ color: "white" }} htmlFor="strength">
          STRENGTH
          <input
            type="number"
            id="strength"
            value={strength}
            min="0"
            onChange={handleStrengthChange}
          />
        </label>

        <label style={{ color: "white" }} htmlFor="dex">
          DEX
          <input
            type="number"
            id="dex"
            value={dex}
            onChange={handleDexChange}
            min="0"
          />
        </label>

        <label style={{ color: "white" }} htmlFor="intel">
          INTEL
          <input
            type="number"
            id="intel"
            value={intel}
            onChange={handleIntelChange}
            min="0"
          />
        </label>
      </form>

      <h2 style={{ color: "white" }}>Health: {strength * 10}</h2>
      <h2 style={{ color: "white" }}>DEX: {dex * 10} </h2>
      <h2 style={{ color: "white" }}>MANA:{intel * 10} </h2>
      <button
        className="formsButton"
        onClick={() => navigate("/character/create/abilities")}
      >
        ADD ATRIBUTES
      </button>
    </div>
  );
}

export default AttributesForm;
