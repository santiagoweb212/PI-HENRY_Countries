import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = useSelector((state) => state.authRequestReducer);
  const savedAuthState = JSON.parse(localStorage.getItem("authState"));

  return (
    <div>
      {savedAuthState?.auth || auth ? <Outlet /> : <Navigate to={"/welcome"} />}
    </div>
  );
};

export default PrivateRoute;
