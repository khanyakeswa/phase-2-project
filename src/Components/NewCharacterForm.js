import React from "react";
import AvatarCarousel from "./AvatarCarousel"
import DetailsForm from "./Forms/DetailsForm"
import AttributesForm from "./Forms/AttributesForm"
import AbilitiesForm from "./Forms/AbilitiesForm"

function NewCharacterForm() {
    return (
        <div>
            <AvatarCarousel />
            <DetailsForm />
            <AttributesForm />
            <AbilitiesForm />
        </div>
    )
}

export default NewCharacterForm