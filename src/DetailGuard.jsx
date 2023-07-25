import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const DetailGuard = ({ children }) => {
  const data = useSelector((state) => state?.product?.dateByYear?.results);
  if (data) return children;
  else return <Navigate to="/choose_type" />;
};

export default DetailGuard;