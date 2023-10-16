import React from "react";
import "./Hours.css";

interface HoursProps {
  hours: {
    type: string;
    time: string;
  }[];
  breakWidth: number;
  hoursColumnSize: number[];
  showDivisions: boolean;
}

function Hours({
  hours,
  breakWidth,
  hoursColumnSize,
  showDivisions,
}: HoursProps) {
  return (
    <div
      id="hours-column"
      className="hours-column"
      style={{ gridTemplateRows: `repeat(${hours.length}, 1fr)` }}
    >
      {hours.map((hour, index) => (
        <div id="hour-item" className="hour-item" key={index}>
          {hour.time}
          <div
            className={`hour-division ${hour.type === "break" ? "break" : ""} ${
              showDivisions ? "divisions" : ""
            }`}
            style={{
              height: `${hoursColumnSize[1]}px`,
              left: `${hoursColumnSize[0] + 1}px`,
              width: breakWidth - 1,
            }}
          >
            {hour.type === "break" ? "RECREO" : ""}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hours;
