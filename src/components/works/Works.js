import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextDecrypt } from '../content/TextDecrypt'; // Giả sử bạn đã import đúng
import Portfolio from '../../assets/recentprojects/1.gif';
import Veritru from '../../assets/recentprojects/3.gif';
import Lofo from '../../assets/recentprojects/2.gif';
import Startup from '../../assets/recentprojects/4.gif';
import Lacalle from '../../assets/recentprojects/Welcome.gif';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh', // Mỗi phần chiếm toàn bộ chiều cao trang
    width: '100vw', // Chiều rộng toàn màn hình
    scrollSnapAlign: 'start', // Khi cuộn tới phần, căn chỉnh phần đầu của nó
    display: 'flex',
    alignItems: 'center', // Căn giữa nội dung theo chiều dọc
    justifyContent: 'center', // Căn giữa nội dung theo chiều ngang
    padding: theme.spacing(1), // Padding xung quanh nội dung
    boxSizing: 'border-box', // Đảm bảo padding không làm ảnh hưởng tới chiều rộng thực tế
  },
  imgWrapper: {
    width: '100%',
    maxWidth: '500px', // Giới hạn chiều rộng của hình ảnh
  },
  img: {
    width: '400px',
    height: 'auto',
  },
  contentWrapper: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: '1.3rem',
    color: '#ffff',
    border: '1px solid #ccfc',
    borderRadius: '10px',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 85, 92, 0.6)',
    boxShadow: '0 4px 8px rgba(0, 0, 11, 0.1), 0 6px 20px rgba(0, 0, 15, 0.1)', // 3D box effect
    opacity: 0, // Để bắt đầu từ trạng thái ẩn
    animation: `$fadeIn 1s forwards`, // Kích hoạt animation fade-in
    transform: 'translateZ(0)', // Đảm bảo phần tử nằm trên mặt phẳng 3D
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)', // Dịch chuyển từ dưới lên
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)', // Trở về vị trí ban đầu
    },
  },
}));

export const Works = () => {
  const classes = useStyles();

  const [projects] = useState([
    { 
      id: 1,
      title: 'BC Media Entertainment', 
      description: 'BC Media Entertainment hướng đến trở thành thương hiệu uy tín trong ngành giải trí, là nơi hội tụ của những ý tưởng sáng tạo và không gian nghệ thuật đột phá.',
      alter: 'BC Media',
      image: Portfolio,
    },
    { 
      id: 2,
      title: 'Multimedia Marketing', 
      description: 'Chúng tôi cam kết mang lại giá trị thực cho đối tác và khán giả thông qua các dự án giải trí sáng tạo, đầy cảm hứng và gắn kết mọi người lại gần nhau hơn',
      alter: 'Multimedia Marketing',
      image: Veritru,
    },
    { 
      id: 3,
      title: 'Chất lượng', 
      description: 'Sáng tạo: Tạo ra những sản phẩm độc đáo và khác biệt',
      alter: 'Chất lượng: Cam kết về chất lượng trong từng sản phẩm và dịch vụ',
      image: Lofo,
    },
    { 
      id: 4,
      title: 'Công nghệ', 
      description: 'Ứng dụng công nghệ tiên tiến để tối ưu hóa mọi hoạt động',
      alter: 'Multimedia',
      image: Startup,
    },
    { 
      id: 5,
      title: 'Phát triển bền vững', 
      description: 'Luôn đặt khách hàng là trung tâm trong mọi hoạt động',
      alter: 'Phát triển bền vững: Xây dựng giá trị lâu dài cho cộng đồng và xã hội',
      image: Lacalle,
    },
  ]);

  return (
    <div style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
      {projects.map((project, index) => (
        <Container component="main" className={classes.main} key={project.id} maxWidth="md">
          <Grid container spacing={2} alignItems="center">
            {/* Bố cục thay đổi dựa trên index để đảo chiều ảnh và nội dung */}
            {index % 2 === 0 ? (
              <>
                <Grid item xs={12} md={6}>
                  <div className={classes.imgWrapper}>
                    <img src={project.image} alt={project.alter} className={classes.img} />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className={classes.contentWrapper}>
                    <Typography className={classes.title}>
                      <TextDecrypt text={project.title} />
                    </Typography>
                    <Typography className={classes.description}>
                      {project.description}
                    </Typography>
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <Box className={classes.contentWrapper}>
                    <Typography className={classes.title}>
                      <TextDecrypt text={project.title} />
                    </Typography>
                    <Typography className={classes.description}>
                      {project.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.imgWrapper}>
                    <img src={project.image} alt={project.alter} className={classes.img} />
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      ))}
    </div>
  );
};
