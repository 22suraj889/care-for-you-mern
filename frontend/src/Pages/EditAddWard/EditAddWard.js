import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import HospitalBg from "./hospital-background.jpg"; // Import the hospital background image
import { useDispatch } from "react-redux";
import { putWardData, updateWardData } from "../../Actions/WardActions";
import { useNavigate } from "react-router-dom";

function WardForm({ updatedId, setUpdatedId }) {
  const [wardData, setWardData] = useState({
    wardName: "",
    wardNumber: 0,
    patientNumber: 0,
    workerNumber: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clearHandler = () => {
    setUpdatedId(0);
    setWardData({
      wardName: "",
      wardNumber: 0,
      patientNumber: 0,
      workerNumber: 0,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedId === 0) {
      console.log(wardData);
      dispatch(putWardData(wardData));
      clearHandler();
    } else {
      console.log(updatedId);
      dispatch(updateWardData(updatedId, wardData));
      clearHandler();
    }
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HospitalBg})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg px-8 py-6 w-full"
      >
        <h2 className="text-2xl text-center font-semibold mb-4">Covid Ward</h2>
        <div className="mb-4">
          <TextField
            label="Ward Name"
            name="wardName"
            value={wardData.wardName}
            onChange={(e) => {
              setWardData({
                ...wardData,
                wardName: e.target.value.toUpperCase(),
              });
            }}
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Ward Number"
            name="wardNumber"
            value={wardData.wardNumber}
            onChange={(e) => {
              setWardData({ ...wardData, wardNumber: Number(e.target.value) });
            }}
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Patient Number"
            name="patientNumber"
            value={wardData.patientNumber}
            onChange={(e) => {
              setWardData({
                ...wardData,
                patientNumber: Number(e.target.value),
              });
            }}
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Worker Number"
            name="workerNumber"
            value={wardData.workerNumber}
            onChange={(e) => {
              setWardData({
                ...wardData,
                workerNumber: Number(e.target.value),
              });
            }}
            fullWidth
            required
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WardForm;
