import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./PageStyles";

const Page = ({ children, classes }) => {
  return <section className={classes.Page}>{children}</section>;
};
export default withStyles(styles)(Page);
