import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Webpage.css";
import Header from "./components/Header/Header";
import { Container, Divider } from "@mui/material";
import { Toaster } from "react-hot-toast";

interface WebpageProps {
  children: React.ReactNode;
}

function Webpage({ children }: WebpageProps) {
  return (
    <div className="webpage">
      <Toaster position="bottom-center" gutter={8}/>
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
