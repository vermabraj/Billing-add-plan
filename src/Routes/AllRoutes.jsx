import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import AddPlan from "../Components/Addplan";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add_plan" element={<AddPlan />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
