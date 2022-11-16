import React from "react";
import DetailsForm from "./Forms/DetailsForm"
import AttributesForm from "./Forms/AttributesForm"
import AbilitiesForm from "./Forms/AbilitiesForm"

function NewCharacterForm() {
    return (
        <div>
            <DetailsForm />
            <AttributesForm />
            <AbilitiesForm />
        </div>
    )
}

export default NewCharacterForm