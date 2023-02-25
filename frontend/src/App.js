import React from "react";
import Auth from "./Pages/Auth/Auth";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogoutHandler from "./Components/LogoutHandler/LogoutHandler";
import AddReview from "./Pages/Review/AddReview";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  let currentWard = useSelector((state) => state.wardName);
  currentWard = currentWard.replace(/\s/g, "").toLowerCase();
  console.log(currentWard);
  return (
    <div>
      {location.pathname !== "/auth" && <LogoutHandler />}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path={`/${currentWard}/review`} element={<AddReview />} />
      </Routes>
    </div>
  );
}

export default App;
