// write your custom hook here to control your checkout form
import { useState } from "react";

// form object
const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

//this custom hook  to apply non-visual behavior and stateful logic throughout my components.
//This way I can reuse the same hook over and over again
export const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  // this handle takes the current name value as an event and updates its current state
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [
    showSuccessMessage,
    setShowSuccessMessage,
    values,
    setValues,
    handleChanges,
  ];
};
