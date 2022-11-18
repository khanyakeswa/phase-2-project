import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AbilitiesForm() {
  const navigate = useNavigate();

  const [isFirstClicked, setIsFirstClicked] = useState(false);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);

  const handleFirstAbilities = () => {
    setIsFirstClicked(!isFirstClicked);
    setIsSecondClicked(false);
    setIsThirdClicked(false);
  };

  const handleSecondAbilities = () => {
    setIsSecondClicked(!isSecondClicked);
    setIsFirstClicked(false);
    setIsThirdClicked(false);
  };

  const handleThirdAbilities = () => {
    setIsThirdClicked(!isThirdClicked);
    setIsFirstClicked(false);
    setIsSecondClicked(false);
  };

  return (
    <div>
      <div
        className="abilities"
        onClick={handleFirstAbilities}
        style={{ backgroundColor: isFirstClicked ? "yellow" : null }}
      >
        First
      </div>
      <div
        className="abilities"
        onClick={handleSecondAbilities}
        style={{ backgroundColor: isSecondClicked ? "yellow" : null }}
      >
        Second
      </div>
      <div
        className="abilities"
        onClick={handleThirdAbilities}
        style={{ backgroundColor: isThirdClicked ? "yellow" : null }}
      >
        Third
      </div>
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
