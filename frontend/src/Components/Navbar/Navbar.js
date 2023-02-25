import React from "react";
import { useDispatch } from "react-redux";
import { changeWard } from "../../Actions/ChangeWardActions";

const Navbar = ({ wards }) => {
  const dispatch = useDispatch();
  const setCurrentWard = (ward) => {
    dispatch(changeWard(ward));
  };
  return (
    <nav className="flex flex-col w-1/5 justify-around items-center bg-teal-300">
      {wards.map((ward) => (
        <li
          className="list-none font-medium text-lg hover:text-orange-600 cursor-pointer"
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
