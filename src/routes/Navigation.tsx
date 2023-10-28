import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Scheduler from "../pages/Scheduler";
import Login from "../pages/Login";
import Auth from "../containers/Auth/Auth";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Auth />}>
            <Route path="/" element={<Navigate to="/horarios" replace />} />
            <Route path="/horarios" element={<Scheduler />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
