import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWardData } from "../../Actions/WardActions";
import Navbar from "../../Components/Navbar/Navbar";
import Ward from "./Ward/Ward";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWardData());
  }, []);

  const wardsData = useSelector((state) => state.wards);
  const currentWard = useSelector((state) => state.wardName);
  const wards = [...new Set(wardsData.map((ward) => ward.wardName))];
  const [currentWardData] = wardsData.filter(
    (ward) => ward.wardName === currentWard
  );
  console.log(currentWardData);
  return (
    <div className="flex h-screen">
      <Navbar wards={wards} />
      {currentWardData && <Ward currentWardData={currentWardData} />}
    </div>
  );
};

export default Home;
