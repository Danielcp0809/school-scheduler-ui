import React from "react";
import "./Weekdays.css";

interface WeekdaysProps {
  dayHeaderSize: number[];
  dayHeight: number;
  showDivisions: boolean;
}

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

function Weekdays({ dayHeaderSize, dayHeight, showDivisions }: WeekdaysProps) {
  return (
    <div
      id="days-row"
      className="days-row"
      style={{ gridTemplateColumns: `repeat(${days.length}, 1fr)` }}
    >
      {days.map((day, index) => (
        <div id="day-item" className="day-item" key={index}>
          {day}
          <div
            className={`day-division ${showDivisions ? "divisions" : ""}`}
            style={{
              width: `${dayHeaderSize[0] + 2}px`,
              top: `${dayHeaderSize[1]}px`,
              height: dayHeight,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Weekdays;
