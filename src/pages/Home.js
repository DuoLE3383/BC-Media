import React from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { Content } from "../components/content/Content";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { Resume } from "../components/resume/Resume";
import { SocialIcons } from "../components/content/SocialIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { SideNavbar } from "../components/nav/SideNavbar";
import { Works } from "../components/works/Works";
import { About } from "../components/about/About";
import Logo from "../assets/recentprojects/Welcome.gif";
import { Link } from 'react-router-dom';

// import { Contact } from '../components/contact/Contact';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "top",
    marginTop: "-15px",
    display: "block",
    height: "110vh",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    scrollBehavior: "smooth",
  },
  section: {
    minHeight: "auto",
    scrollSnapAlign: "start",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    boxSizing: "border-box",
    overflow: "hidden",
    contentWrapper: {
      zIndex: 1,
      maxWidth: "100%",
      overflow: "auto",
      alignItems: "center",
    },
    img: {
      maxWidth: "39%",
      height: "auto",
      alignItems: "right",
      textAlign: "right",
      "@media (max-width: 150px)": {
        maxWidth: "150px",
      },
    },
  }
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      {/* Section 1: Home */}
      <div className={classes.section}>
        <div className={classes.contentWrapper}>
          <DisplacementSphere />
          <LogoLink />
          <Content />
          <Hidden smDown>
            <SocialIcons />
          </Hidden>
          <Hidden mdUp>
            <SpeedDials />
          </Hidden>
        </div>
      </div>

      {/* Section 2: Resume */}
      <div className={classes.section}>
        <div className={classes.contentWrapper}>
          <Resume />
          <ThemeToggle />
        </div>
      </div>

      {/* Section 3: Works */}
      <div className={classes.section}>
        <div className={classes.contentWrapper}>
          <Works />
        </div>
      </div>

      {/* Section 4: About */}
      <div className={classes.section}>
        <div className={classes.contentWrapper}>
          <About />
        </div>
      </div>

      {/* Section 5: Contact */}
      <div className={classes.section}>
        <div className={classes.contentWrapper}>
          <img className={classes.img} src={Logo} alt="logo" />
        </div>
      </div>

      {/* Side Navbar */}
      <p>Learn more about how we handle your data by reading our <Link to="/privacy">Privacy Policy</Link>.</p>
      <SideNavbar />
    </div>
  );
};
