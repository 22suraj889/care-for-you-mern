import React, { useState } from "react";
import Auth from "./Pages/Auth/Auth";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogoutHandler from "./Components/LogoutHandler/LogoutHandler";
import AddReview from "./Pages/Review/AddReview";
import { useSelector } from "react-redux";
import Reviews from "./Pages/Review/Reviews";
import EditAddWard from "./Pages/EditAddWard/EditAddWard";

function App() {
  const [updatedId, setUpdatedId] = useState(0);
  const location = useLocation();
  let currentWard = useSelector((state) => state.wardName);
  const ward = currentWard;
  currentWard = currentWard.replace(/\s/g, "").toLowerCase();
  return (
    <div>
      {location.pathname !== "/auth" && <LogoutHandler />}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route
          path={`/${currentWard}/reviews`}
          element={<Reviews ward={ward} />}
        />
        <Route
          path={`/${currentWard}/addReview`}
          element={<AddReview ward={ward} />}
        />
        <Route
          path={`/${currentWard}/edit`}
          element={
            <EditAddWard updatedId={updatedId} setUpdatedId={setUpdatedId} />
          }
        />
        <Route
          path="/addWard"
          element={
            <EditAddWard updatedId={updatedId} setUpdatedId={setUpdatedId} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
