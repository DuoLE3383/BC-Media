/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/recentprojects/Welcome.gif';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "BC Media Entertainment";
  const aboutme = `Tự hào là đơn vị hàng đầu trong lĩnh vực giải trí và truyền thông kỹ thuật số. Với sứ mệnh kết nối, sáng tạo và mang đến những trải nghiệm giải trí đỉnh cao, chúng tôi không ngừng phát triển và đa dạng hóa các sản phẩm, dịch vụ của mình để đáp ứng nhu cầu ngày càng cao của khách hàng.`;
  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          {/* <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div> */}
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
