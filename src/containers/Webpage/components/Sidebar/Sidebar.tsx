import React, { useEffect } from "react";
import {
  IconDefinition,
  faBars,
  faBook,
  faCalendarDays,
  faChalkboardUser,
  faGear,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Sidebar.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen } from "../../../../slices/appSlice";
import { IRootState } from "../../../../reducers/rootReducer";

interface SidebarProps {}

interface SidebarItems {
  id: number;
  label: string;
  icon: IconDefinition;
  path: string;
}

const sidebarOptions: SidebarItems[] = [
  {
    id: 1,
    label: "Horarios",
    icon: faCalendarDays,
    path: "horarios",
  },
  {
    id: 2,
    label: "Cursos",
    icon: faChalkboardUser,
    path: "cursos",
  },
  {
    id: 3,
    label: "Profesores",
    icon: faPeopleGroup,
    path: "profesores",
  },
  {
    id: 4,
    label: "Materias",
    icon: faBook,
    path: "materias",
  },
  {
    id: 5,
    label: "Configuración",
    icon: faGear,
    path: "configuracion",
  },
];

function Sidebar(props: SidebarProps) {
  const location = useLocation();
  const dispatch = useDispatch();
  const isMenuOpen =
    useSelector((state: IRootState) => state.app.isMenuOpen) ?? false;

  useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          dispatch(setMenuOpen({ isMenuOpen: true }));
        } else {
          dispatch(setMenuOpen({ isMenuOpen: false }));
        }
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])  
  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <div
        className={`toggle-menu ${isMenuOpen ? "active" : ""}`}
        onClick={() => {
          dispatch(setMenuOpen({ isMenuOpen: !isMenuOpen }));
        }}
      >
        <FontAwesomeIcon className="icon open" icon={faBars} />
      </div>
      <ul>
        {sidebarOptions.map((option) => {
          const isActive = location.pathname === `/${option.path}`;
          return (
            <li key={option.id} className={`${isActive ? "active" : ""}`}>
              <b></b>
              <b></b>
              <a href={option.path}>
                <span className="icon-container">
                  <FontAwesomeIcon className="icon" icon={option.icon} />
                </span>
                <span className="title">{option.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
