import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./PaletteStyles";

import { SoundContextProvider } from "../../context/soundContext";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <SoundContextProvider>
        <div className={classes.Palette}>
          <Navbar
            level={level}
            changeLevel={this.changeLevel}
            handleChange={this.changeFormat}
            showingAllColors
          />

          <div className={classes.colors}>{colorBoxes}</div>
          <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
      </SoundContextProvider>
    );
  }
}
export default withStyles(styles)(Palette);
