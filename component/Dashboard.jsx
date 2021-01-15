import React from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Header from "./Header/Header.jsx"
import "./Dashboard/Dashboard.scss";


export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <Header/>
        </div>
        <div className="dashboard-body">
<div className="dashboard-outer-container">
  <div className="left-part">
  <Typography variant="h6" className="left-part-app-name">
          Product
        </Typography>
  </div>
  </div>          
        </div>
      </div>
    </>
  );
}
