import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Webpage.css";
import Header from "./components/Header/Header";
import { Container, Divider } from "@mui/material";

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
        <Container style={{margin: 0}} className="children-container">{children}</Container>
      </div>
    </div>
  );
}

export default Webpage;
