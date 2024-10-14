/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Works.css';
// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/1.gif';
import Veritru from '../../assets/recentprojects/2.gif';
import Lofo from '../../assets/recentprojects/lofo.jpg';
import Startup from '../../assets/recentprojects/3.gif';
import Lacalle from '../../assets/recentprojects/Welcome.svg';
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));
export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Sale & Maketings', 
      description: `8 years of sales and development for Mua&Ban - Muaban.net`,
      alter: 'F-NFT Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Digital Marketing - Software Development', 
      description: `6 years Branding, Design and Developing Business System`,
      alter: 'Digital Marketing',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'HCMC Conservatory of Music', 
      description: `Graduated from Ho Chi Minh City Conservatory of Music 2003`,
      alter: 'F-NFT Project',
      // image: `${Lofo}`,
    },
    { 
      id: 4,
      title: '3D, 2D Graphics Design', 
      description: `5 years Design Branding, Webdding, Ecommerce, Advertising`,
      alter: 'Graphics Design',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Blockchain Executive', 
      description: `7 years of development, financial, training, mining, securities, solutions`,
      alter: 'Blockchain Executive',
      image: `${Lacalle}`,
    },
  ]);
  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
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
