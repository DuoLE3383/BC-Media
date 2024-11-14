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
    display: "block",
    height: "100vh",
    overflowY: "scroll", // Bật cuộn dọc
    scrollSnapType: "y mandatory", // Kích hoạt snap scrolling theo chiều dọc
    scrollBehavior: "smooth", // Cuộn mượt mà
  },
  section: {
    minHeight: "auto", // Sử dụng min-height thay vì height
    scrollSnapAlign: "start", // Căn chỉnh phần đầu của mỗi phần khi cuộn tới
    display: "flex", // Căn chỉnh nội dung trong mỗi phần
    justifyContent: "center", // Căn giữa nội dung theo chiều ngang
    alignItems: "center", // Căn giữa nội dung theo chiều dọc
    padding: "2rem", // Khoảng cách nội dung so với viền
    boxSizing: "border-box", // Đảm bảo padding không ảnh hưởng đến chiều cao thực tế
    // position: 'relative',  // Đảm bảo vị trí của nội dung không bị chèn lên nhau
    overflow: "hidden", // Đảm bảo rằng nội dung không tràn ra ngoài
  },
  contentWrapper: {
    zIndex: 1, // Đảm bảo nội dung hiển thị phía trên các lớp khác
    maxWidth: "100%", // Đảm bảo nội dung không vượt quá chiều rộng của container
    overflow: "auto", // Thêm cuộn nếu nội dung quá lớn
    alignItems: "center", //lignItems: 'center', //
  },
  img: {
    maxWidth: "39%",
    height: "auto",
    alignItems: "right",
    textAlign: "right",
    // borderRadius: '8px',
    // Đặt Media Query tại đây
    "@media (max-width: 150px)": {
      maxWidth: "150px", // Điều chỉnh kích thước hình ảnh khi chiều rộng màn hình nhỏ hơn 150px
    },
  },
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
