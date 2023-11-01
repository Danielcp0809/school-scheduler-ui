import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Scheduler from "../pages/Scheduler";
import Login from "../pages/Login";
import Auth from "../containers/Auth/Auth";
import Courses from "../pages/Courses";
import Teachers from "../pages/Teachers";
import Subjects from "../pages/Subjects";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<Auth />}>
            <Route path="/" element={<Navigate to="/horarios" replace />} />
          </Route>

          <Route element={<Auth />}>
            <Route path="/horarios" element={<Scheduler />} />
          </Route>

          <Route element={<Auth />}>
            <Route path="/cursos" element={<Courses />} />
          </Route>

          <Route element={<Auth />}>
            <Route path="/profesores" element={<Teachers />} />
          </Route>     

          <Route element={<Auth />}>
            <Route path="/materias" element={<Subjects />} />
          </Route>  
            
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
