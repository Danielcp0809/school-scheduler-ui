import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Scheduler from "../pages/Scheduler";

const App = () => {
    return (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/horario" element={<Scheduler/>} />
            </Routes>
          </Layout>
        </BrowserRouter>
    );
  };
  
  export default App;