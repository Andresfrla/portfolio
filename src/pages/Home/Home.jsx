import { Container, Typography } from '@mui/material';
import Typed from 'react-typed';
import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ContactMe from '../Contact/Contact';
import './style.css';

function Home() {
  return (
    <div className="homeContainer" >
        <Container className={'intro'} id='home' fluid style={{marginTop: '100px'}}>
            <h1>&sdot; 
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
            &sdot;</h1>
        </Container>
        <Container className="about">
            <About/>
        </Container>
        <Container className="projects">
            <Projects/>
        </Container>
        <Container className="contactMe">
            <ContactMe/>
        </Container>
    </div>
  );
}

export default Home;
