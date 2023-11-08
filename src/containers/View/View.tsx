import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@mui/material";
import { themePallete } from "../Layout/Layout";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./View.css";

interface ViewProps {
  children: React.ReactNode;
  title: string;
  icon: IconDefinition;
  description?: string;
  actions?: IActionButtons[];
}

export interface IActionButtons {
  label: string;
  onClick: () => void;
  icon?: IconDefinition;
}

function View(props: ViewProps) {
  const { children, title, icon, description, actions } = props;
  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-info">
          <div className="title">
            <FontAwesomeIcon
              icon={icon}
              style={{ color: themePallete.primary }}
              size="2x"
            />
            <Typography variant="h4">{title}</Typography>
          </div>
          {description ? (
            <Typography variant="caption">{description}</Typography>
          ) : (
            <div style={{ minHeight: 20 }} />
          )}
        </div>
        <div className="action-buttons">
          {actions?.map((action, index) => (
            <Button variant="contained" key={index} onClick={action.onClick}>
              {action.icon && (
                <FontAwesomeIcon
                  icon={action.icon}
                  style={{ marginRight: 5 }}
                />
              )}
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="view-children-container">{children}</div>
    </div>
  );
}

export default View;
