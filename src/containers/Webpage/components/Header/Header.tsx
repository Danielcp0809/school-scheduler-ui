import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../reducers/rootReducer";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { setLogoutSession } from "../../../../slices/authSlice";

interface HeaderProps {}

function Header(props: HeaderProps) {
  const [userProfileAnchorEl, setUserProfileAnchorEl] =
    useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.auth.user);
  const open = Boolean(userProfileAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserProfileAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setUserProfileAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(setLogoutSession())
  }
  return (
    <div className="header">
      <h2>Horarios</h2>
      <Button
        className="user-profile-button"
        id="user-profile-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{textTransform: 'none'}}
      >
          <Avatar>
            {user?.first_name[0]}
            {user?.last_name[0]}
          </Avatar>
          <div className="header__info">
            <h4>
              {user?.first_name} {user?.last_name}
            </h4>
          </div>
          <FontAwesomeIcon icon={faCaretDown} />
      </Button>
      <Menu
        id="user-profile-menu"
        anchorEl={userProfileAnchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
