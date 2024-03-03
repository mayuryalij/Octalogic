import { useState, useContext } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const FinalStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [finalData, setFinalData] = useState([]);

  const submitData = async () => {
    setFinalData([...finalData, userData]);

    try {
      const sendData = await axios.post(
        "http://localhost:3000/api/bookings",
        finalData
      );
      console.log("Data sent successfully:", sendData);

      alert("Booking Successfully");
      setUserData("");
      setStep(1);
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  return (
    <div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label=" Select Start Date"
            value={
              userData && userData.startDate
                ? new Date(userData.startDate)
                : null
            }
            onChange={(date) => setUserData({ ...userData, startDate: date })}
            format="MM/dd/yyyy"
          />
        </MuiPickersUtilsProvider>
      </div>

      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label=" Select End Date"
            value={
              userData && userData.endDate ? new Date(userData.endDate) : null
            }
            onChange={(date) => setUserData({ ...userData, endDate: date })}
            format="MM/dd/yyyy"
          />
        </MuiPickersUtilsProvider>
      </div>

      <div>
        <Button
          variant="contained"
          onClick={() => setStep(3)}
          color="secondary"
        >
          Back
        </Button>
        <Button variant="contained" onClick={submitData} color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FinalStep;
