import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const APPBAR = styled(AppBar)``;

const CAMERAICON = styled(CameraIcon)`
  margin-right: 16px;
`;

class Navbar extends Component {
  state = {};
  render() {
    return (
      <APPBAR position="fixed">
        <Toolbar>
          <CAMERAICON />
          <Typography variant="h6" color="inherit" noWrap>
            InstaSneak
          </Typography>
        </Toolbar>
      </APPBAR>
    );
  }
}

export default Navbar;
