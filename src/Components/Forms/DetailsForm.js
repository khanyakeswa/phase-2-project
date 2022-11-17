import React, { useState } from "react";
// import AvatarCarousel from "../AvatarCarousel";
import { useNavigate } from 'react-router-dom'

function DetailsForm() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [roles, setRoles] = useState('');

  const handleNameChange = e => {

    setName(e.target.value)
  }

  const handleRolesChange = e => { 

    setRoles(e.target.value)
  }

  return (
    <div>
      {/* <AvatarCarousel /> */}

      <form>
        <label style={{ color:'white' }} htmlFor="name" id="name">
          Name Your Character
          <input type="text" id="name" value={name} onChange={handleNameChange}></input>
        </label>

        <label style={{ color:'white' }} htmlFor="roles"> Decide Your Role
          <select id='roles' onChange={handleRolesChange}>
            <option value=''></option>
            <option value='barbarian'>Barbarian</option>
            <option value='bard'>Bard</option>
            <option value='cleric'>Cleric </option>
            <option value='druid'>Druid </option>
            <option value='fighter'>Fighter</option>
            <option value='monk '>Monk </option>
            <option value='paladin'>Paladin </option>
          </select>
        </label>

        <button className="formsButton" onClick={()=>navigate("/character/create/abilities")}> Create Character</button>
      </form>

    </div>
  );
}

export default DetailsForm;
