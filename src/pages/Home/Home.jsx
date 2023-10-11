import { Container, Typography } from '@mui/material';
import Typed from 'react-typed';
import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ContactMe from '../Contact/Contact';
import './style.css';

function Home() {
  return (
    <div className="homeContainer">
          <Container className={'intro'} id='home' fluid>
          <h1>&sdot; <Typed
            strings={[
                      " Hello! I'm Andres ",
                      " Web developer ",
                      " Business Administrator ",
                      ]}
          typeSpeed={60}
          backSpeed={50}
          loop /> &sdot;</h1>
        </Container>
      <Container>
        <About/>
        <Projects/>
        <ContactMe/>
      </Container>
    </div>
  );
}

export default Home;
