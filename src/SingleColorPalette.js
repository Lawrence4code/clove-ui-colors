import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

import { SoundContextProvider } from "./context/soundContext";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    const selectedColor = this.props.colorId.replace(/-/g, " ");
    return (
      <SoundContextProvider>
        <div className={classes.Palette}>
          <Navbar
            handleChange={this.changeFormat}
            showingAllColors={false}
            selectedColor={selectedColor}
          />
          <div className={classes.colors}>
            {colorBoxes}
            <div className={classes.goBack}>
              <Link to={`/palette/${id}`}>GO BACK</Link>
            </div>
          </div>

          <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
      </SoundContextProvider>
    );
  }
}
export default withStyles(styles)(SingleColorPalette);
