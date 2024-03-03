/* eslint-disable react-refresh/only-export-components */

import { useState, createContext } from "react";
import App from "./App";

export const multiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);

  return (
    <multiStepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
      }}
    >
      <App />
    </multiStepContext.Provider>
  );
};

export default StepContext;
