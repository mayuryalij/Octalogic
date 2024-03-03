import { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          label="Enter First name"
          value={userData ? userData["firstname"] : ""}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Enter Last name"
          value={userData ? userData["lastname"] : ""}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setStep(2)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
