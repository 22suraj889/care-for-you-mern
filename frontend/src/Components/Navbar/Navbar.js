import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWard } from "../../Actions/ChangeWardActions";

const Navbar = ({ wards }) => {
  const dispatch = useDispatch();
  const setCurrentWard = (ward) => {
    dispatch(changeWard(ward));
  };
  const selectedWard = useSelector((state) => state.wardName);
  return (
    <nav className="flex overflow-y-scroll flex-col w-1/4 justify-around items-center bg-teal-300">
      {wards.map((ward) => (
        <li
          className={`list-none hover:text-orange-600 font-medium text-lg ${
            selectedWard === ward ? "text-orange-600" : "black"
          } cursor-pointer`}
          onClick={() => setCurrentWard(ward)}
          key={ward}
        >
          {ward}
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
