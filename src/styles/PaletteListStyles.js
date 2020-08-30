import sizes from "./sizes";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    backgroundImage:
      `linear-gradient(to bottom, rgba(75, 75, 75, 0.8), rgba(15, 15, 15, 1)),
    url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1050&q=80')`,
    backgroundSize: `cover`,
    overflow: "scroll"
  },
  heading: {
    fontSize: "2rem",
    margin: "1.25rem 0 1.75rem .75rem"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "85%"
    },
    [sizes.down("xs")]: {
      width: "80%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },

  logo: {
    display: "flex",
    alignItems: "center"
  },
  palettes: {
    boxSizing: "border-box",
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridColumnGap: "3.5rem",
    gridRowGap: "2.25rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    },
    margin: "0 auto"
  }
};
