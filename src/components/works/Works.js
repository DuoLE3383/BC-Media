/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Works.css';
// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/1.gif';
import Veritru from '../../assets/recentprojects/3.gif';
import Lofo from '../../assets/recentprojects/2.gif';
import Startup from '../../assets/recentprojects/4.gif';
import Lacalle from '../../assets/recentprojects/Welcome.gif';
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  // project: {
  //   maxWidth: '100vw',
  //   display: 'flex',
  //   marginBottom: '2rem',
  //   alignItems: 'center',
  // },
  // imgWrapper: {
  //   maxWidth: '100vw',
  //   flex: '1',
  //   marginRight: '2rem',
  // },
  // contentWrapper: {
  //   maxWidth: '100vw',
  //   flex: '2',
  // },
  // img: {
  //   maxWidth: '100%',
  //   maxWidth: '100vw',
  //   height: 'auto',
  //   borderRadius: '8px',
  // }
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: '', 
      description: `BC Media Entertainment hướng đến trở thành thương hiệu uy tín trong ngành giải trí, là nơi hội tụ của những ý tưởng sáng tạo và không gian nghệ thuật đột phá.`,
      alter: 'BC Media',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: '', 
      description: `Chúng tôi cam kết mang lại giá trị thực cho đối tác và khán giả thông qua các dự án giải trí sáng tạo, đầy cảm hứng và gắn kết mọi người lại gần nhau hơn`,
      alter: 'Multimedia Marketing',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: '', 
      description: `Sáng tạo: Tạo ra những sản phẩm độc đáo và khác biệt`,
      alter: 'Chất lượng: Cam kết về chất lượng trong từng sản phẩm và dịch vụ',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Công nghệ', 
      description: `Ứng dụng công nghệ tiên tiến để tối ưu hóa mọi hoạt động`,
      alter: 'Multimedia ',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: '', 
      description: `Luôn đặt khách hàng là trung tâm trong mọi hoạt động`,
      alter: 'Phát triển bền vững: Xây dựng giá trị lâu dài cho cộng đồng và xã hội',
      image: `${Lacalle}`,
    },
  ]);
  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter } className={classes.img}/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
