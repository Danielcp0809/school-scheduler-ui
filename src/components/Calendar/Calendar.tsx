import React, { useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Hours from "./components/Hours/Hours";
import Weekdays from "./components/Weekdays/Weekdays";
import "./Calendar.css";
import { useSelector } from "react-redux";
import { IRootState } from "../../reducers/rootReducer";

interface CalendarProps {}

const ReactGridLayout = WidthProvider(RGL);
const layoutGap = 8;
const divisionsPerHour = 3;

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 1, minW: 1, maxW: 1 },
  { i: "b", x: 1, y: 0, w: 1, h: 1, minW: 1, maxW: 1 },
  { i: "c", x: 2, y: 0, w: 1, h: 1, minW: 1, maxW: 1 },
  { i: "d", x: 0, y: 1, w: 1, h: 1, minW: 1, maxW: 1 },
  { i: "e", x: 1, y: 1, w: 1, h: 1, minW: 1, maxW: 1 },
  { i: "f", x: 2, y: 1, w: 1, h: 1, minW: 1, maxW: 1 },
  { i: "g", x: 2, y: 1, w: 1, h: 1 },
  { i: "h", x: 2, y: 1, w: 1, h: 1 },
  { i: "j", x: 0, y: 11, w: 1, h: 3, static: true },
];

const hours = [
  { type: "class", time: "7:15 - 8:00" },
  { type: "class", time: "8:00 - 8:45" },
  { type: "class", time: "8:45 - 9:30" },
  { type: "class", time: "9:30 - 10:15" },
  { type: "break", time: "10:15 - 10:45" }, // RECRE0
  { type: "class", time: "10:45 - 11:30" },
  { type: "class", time: "11:30 - 12:15" },
  { type: "class", time: "12:15 - 13:00" },
];

function Calendar(props: CalendarProps) {
  const [rowHeight, setRowHeight] = useState(0);
  const [breakWidth, setBreakWidth] = useState(0);
  const [hoursColumnSize, setHoursColumnSize] = useState([0, 0]);
  const [dayHeight, setDayHeight] = useState(0);
  const [dayHeaderSize, setDayHeaderSize] = useState([0, 0]);

  const isMenuOpen = useSelector((state: IRootState) => state.app.isMenuOpen);

  useEffect(() => {
    updateContainerHeight();

    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  useEffect(() => {
    console.log("isMenuOpen", isMenuOpen)
    setTimeout(() => {
      updateContainerHeight();
    }, 100)
  }, [isMenuOpen])

  const updateContainerHeight = () => {
    const calendarContainer = document.getElementById("calendar-grid");
    const calendarHeader = document.getElementById("days-row");
    const hoursColumn = document.getElementById("hours-column");
    const hoursItems = document.getElementById("hour-item");
    const daysItem = document.getElementById("day-item");
    if (calendarContainer && calendarHeader) {
      const calendarContainerHeight =
        calendarContainer.clientHeight - calendarHeader.clientHeight;
      const rowHeightValue =
        ((calendarContainerHeight - layoutGap) / hours.length -
          layoutGap * divisionsPerHour) /
        divisionsPerHour;
      setRowHeight(rowHeightValue);
      setDayHeight(calendarContainerHeight);
    }
    if (calendarContainer && hoursColumn) {
      setBreakWidth(calendarContainer.clientWidth - hoursColumn.clientWidth);
    }
    if (hoursItems) {
      setHoursColumnSize([hoursItems.clientWidth, hoursItems.clientHeight]);
    }

    if (daysItem) {
      setDayHeaderSize([daysItem.clientWidth, daysItem.clientHeight]);
    }
  };

  return (
    <div id="calendar-grid" className="calendar-grid">
      <div className="empty-cell"></div>
      <Hours
        hours={hours}
        breakWidth={breakWidth}
        hoursColumnSize={hoursColumnSize}
        showDivisions={true}
      />
      <Weekdays
        dayHeight={dayHeight}
        dayHeaderSize={dayHeaderSize}
        showDivisions={true}
      />
      <ReactGridLayout
        isDraggable={true}
        isResizable={true}
        preventCollision={true}
        allowOverlap={false}
        className="layout"
        layout={layout}
        margin={[layoutGap, layoutGap]}
        cols={5}
        maxRows={hours.length * divisionsPerHour}
        rowHeight={rowHeight}
        compactType={null}
      >
        <div className="class-time" key="j">
          TEST
        </div>
        <div className="class-time" key="a">
          a
        </div>
        <div className="class-time" key="b">
          b
        </div>
        <div className="class-time" key="c">
          c
        </div>
        <div className="class-time" key="d">
          d
        </div>
        <div className="class-time" key="e">
          e
        </div>
        <div className="class-time" key="f">
          f
        </div>
        <div className="class-time" key="g">
          g
        </div>
        <div className="class-time" key="h">
          h
        </div>
      </ReactGridLayout>
    </div>
  );
}

export default Calendar;
