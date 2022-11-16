import React from "react";
import AvatarCarousel from "../AvatarCarousel";

function DetailsForm() {
  return (
    <div>
      <AvatarCarousel />

      <form>
        <label style={{ color:'white' }} htmlFor="name" id="name">
          Name Your Character
          <input type="text" id="name"></input>
        </label>

        <label style={{ color:'white' }} htmlFor="roles"> Decide Your Role
          <select id='roles'>
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

        <button className="formsButton">Create Character</button>
      </form>
    </div>
  );
}

export default DetailsForm;
