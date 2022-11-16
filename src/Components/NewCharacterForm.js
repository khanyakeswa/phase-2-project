import { React, useEffect, Routes, Route } from "react";
import DetailsForm from "./Forms/DetailsForm";
import AttributesForm from "./Forms/AttributesForm";
import AbilitiesForm from "./Forms/AbilitiesForm";
import { AnimatePresence, motion } from "framer-motion";

function NewCharacterForm({ setHeader }) {
  console.log("form")
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeader("Create a New Adventurer");
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="ui-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Create Character!</h1>
    
      {/* <AnimatePresence>
        <Routes>
          <Route path='details' element={<DetailsForm />}></Route>
          <Route path='attributes' element={<AttributesForm />}></Route>
          <Route path='abilities' element={<AbilitiesForm />}></Route>
        </Routes>
      </AnimatePresence> */}
    </motion.div>
  );
}

export default NewCharacterForm;
