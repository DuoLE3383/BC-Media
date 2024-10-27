import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
// import { FirstName, LastName } from "../../utils/getName";
import logo from "../../assets/recentprojects/Welcome.gif";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(30),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
  img: {
    maxWidth: "79%",
    height: "auto",
    alignItems: "center",
    textAlign: "center",
    // borderRadius: '8px',
    // Đặt Media Query tại đây
    "@media (max-width: 150px)": {
      maxWidth: "150px", // Điều chỉnh kích thước hình ảnh khi chiều rộng màn hình nhỏ hơn 150px
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <img className={classes.img} src={logo} alt="Logo" />

        {/* <Typography variant="h4" component="h3">
          <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography> */}
        <Typography variant="h2" component="h2" className={classes.jobs}>
          <TextDecrypt text={`${Resume.basics.job1}`} />
          <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
      </div>
    </Container>
  );
};
