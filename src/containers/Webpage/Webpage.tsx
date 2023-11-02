import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Webpage.css";
import Header from "./components/Header/Header";
import { Divider } from "@mui/material";

interface WebpageProps {
  children: React.ReactNode;
}

function Webpage({ children }: WebpageProps) {
  return (
    <div className="webpage">
      <Sidebar />
      <div className="main-page">
        <Header />
        <Divider />
        <div className="children-container">{children}</div>
      </div>
    </div>
  );
}

export default Webpage;
