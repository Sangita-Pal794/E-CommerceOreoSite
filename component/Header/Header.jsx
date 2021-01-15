import React from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import EmailIcon from "@material-ui/icons/Email";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FlagIcon from "@material-ui/icons/Flag";
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SettingsIcon from '@material-ui/icons/Settings';
import AppLogo from "../../assets/images/applogo.png";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="appbar-container">
        <div className="app-logo">
          <img src={AppLogo} alt="applogo" className="app-image" />
        </div>
        <Typography variant="h6" className="app-name">
          OREO
        </Typography>
        <IconButton className="header-action-buttons">
          <SwapHorizIcon />
        </IconButton>
        <IconButton className="header-action-buttons">
          <InsertInvitationIcon />
        </IconButton>
        <IconButton className="header-action-buttons">
          <EmailIcon />
        </IconButton>
        <IconButton className="header-action-buttons">
          <ContactPhoneIcon />
        </IconButton>
        <IconButton className="header-action-buttons">
          <NotificationsIcon />
        </IconButton>
        <IconButton className="header-action-buttons">
          <FlagIcon />
        </IconButton>
        <TextField
          variant="outlined"
          margin="dense"
          name="Search"
          placeholder="Search"
          className="appbar-searchbar"
          InputProps={{
            // <-- toggle button is added.
            endAdornment: (
              <InputAdornment position="end"
              >
                <IconButton className="search-icon-button">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="appbar-spacing"></div>
        <IconButton className="header-action-buttons">
          <PowerSettingsNewIcon />
        </IconButton>
        <IconButton className="header-action-buttons">
          <SettingsIcon />
        </IconButton>
      </div>
    </>
  );
}
