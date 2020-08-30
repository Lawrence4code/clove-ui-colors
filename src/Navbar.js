import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";
import clove from "./assets/images/clover.svg";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import { SoundContext } from "./context/soundContext";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  static contextType = SoundContext;

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const {
      level,
      changeLevel,
      showingAllColors,
      classes,
      selectedColor,
    } = this.props;
    const { soundState, toggleSound } = this.context;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">
            <img
              src={clove}
              style={{ width: "35px", height: "35px" }}
              alt="Clove UI colors Logo"
            />
          </Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        {selectedColor && (
          <div>
            <h3 className={classes.selectedColorTitle}>
              {selectedColor} variants
            </h3>
          </div>
        )}
        <div className={classes.selectContainer}>
          <div className={classes.volumeContainer}>
            {soundState ? (
              <VolumeUpIcon
                className={classes.deleteIcon}
                onClick={toggleSound}
              />
            ) : (
              <VolumeOffIcon
                className={classes.deleteIcon}
                onClick={toggleSound}
              />
            )}
          </div>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
export default withStyles(styles)(Navbar);
