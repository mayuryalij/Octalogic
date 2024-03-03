import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export const ThirdStep = () => {
  const [carModel, setCarModel] = useState([]);
  const [bikeModel, setBikeModel] = useState([]);
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/vehicles");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCarModel(data.cars);
        setBikeModel(data.bikes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (value) => {
    setUserData({ ...userData, selectData: value });
  };

  return (
    <div>
      <div>
        {carModel && (
          <Autocomplete
            disablePortal
            id="4-wheeler-autocomplete"
            options={carModel}
            getOptionLabel={(option) => option?.model1 || ""}
            value={userData ? userData["carModel"] : ""}
            onChange={(e, value) => handleSelectChange(value)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label=" Select 4 Wheeler Model" />
            )}
          />
        )}
      </div>

      <div>
        {bikeModel && (
          <Autocomplete
            disablePortal
            id="2-wheeler-autocomplete"
            options={bikeModel}
            getOptionLabel={(option) => option.bike || ""}
            value={userData ? userData["carModel"] : ""}
            onChange={(e, value) => handleSelectChange(value)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select 2 Wheeler Model" />
            )}
          />
        )}
      </div>

      <div>
        <Button
          variant="contained"
          onClick={() => setStep(2)}
          color="secondary"
        >
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(4)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
