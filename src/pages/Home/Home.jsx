import { Container, Typography } from '@material-ui/core';
import Typed from 'react-typed';
import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ContactMe from '../Contact/Contact';
import './style.css';

function Home() {
  return (
    <div className="homeContainer">
        <Container className={'intro'} id='home' maxWidth="lg" style={{marginTop: '100px'}}>
            <Typography variant="h1" align="center">
                &sdot; 
                <Typed
                    strings={[
                        " Hello! I'm Andres ",
                        " Web developer ",
                        " Business Administrator ",
                    ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop 
                /> 
            &sdot;
            </Typography>
        </Container>
        <Container className="about" maxWidth="lg">
            <About/>
        </Container>
        <Container className="projects" maxWidth="lg">
            <Projects/>
        </Container>
        <Container className="contactMe" maxWidth="lg">
            <ContactMe/>
        </Container>
    </div>
  );
}

export default Home;
