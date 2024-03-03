import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useContext } from "react";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
      <div>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Select Number of wheels
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={userData ? userData["vehicletype"] : ""}
            onChange={(e) =>
              setUserData({ ...userData, vehicletype: e.target.value })
            }
          >
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <Button
          variant="contained"
          onClick={() => setStep(1)}
          color="secondary"
        >
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(3)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
