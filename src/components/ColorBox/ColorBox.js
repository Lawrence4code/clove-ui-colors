import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import UIfx from "uifx";

import styles from "./ColorBoxStyles";
import { SoundContext } from "../../context/soundContext";

import chimeAudio from "../../assets/media/chime.wav";

const chime = new UIfx(chimeAudio, {
  volume: 0.2, // number between 0.0 ~ 1.0
  throttleMs: 1000,
});

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  static contextType = SoundContext;

  changeCopyState(soundState) {
    this.setState({ copied: true }, () => {
      if (soundState) {
        setTimeout(() => chime.play(), 200);
      }
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { soundState } = this.context;
    const { copied } = this.state;
    return (
      <CopyToClipboard
        text={background}
        onCopy={() => this.changeCopyState(soundState)}
      >
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
          />

          <div
            className={classNames(classes.copyMessage, {
              [classes.showMessage]: copied,
            })}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);
