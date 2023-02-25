import React from "react";
import PatientIcon from "../../../assets/icons/patient.png";
import WorkerIcon from "../../../assets/icons/worker.png";
import Review from "../../../Components/Review/Review";
import "./Ward.css";
const Ward = ({ currentWardData }) => {
  return (
    <div className="ward_info w-full justify-around">
      <div className="ward_info__name">
        <p className="text-3xl font-medium mt-6">{currentWardData.wardName}</p>
      </div>
      <div className="ward_info__details w-2/5">
        <div className="ward_info__patient">
          <img src={PatientIcon} width="70px" height="70px" alt="patient" />
          <h2>{currentWardData.patientNumber}</h2>
          <p>Ward Patient</p>
        </div>
        <div className="ward_info__worker">
          <img src={WorkerIcon} width="70px" height="70px" alt="worker" />
          <h2>{currentWardData.workerNumber}</h2>
          <p>Ward Worker</p>
        </div>
      </div>
      <div className="ward_info__review">
        <Review clean={currentWardData.cleanPoints} />
      </div>
    </div>
  );
};

export default Ward;
