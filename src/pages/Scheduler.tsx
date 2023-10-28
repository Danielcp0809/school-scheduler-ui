import React from "react";
import { Button } from "@mui/material";
import Calendar from "../components/Calendar/Calendar";
import { getTeachers } from "../services/Api";

interface SchedulerProps {}

function Scheduler(props: SchedulerProps) {
  return <div>
    <Button onClick={async () => {
      await getTeachers();
    }}>Get teachers</Button>
    <Calendar />
  </div>;
}

export default Scheduler;
