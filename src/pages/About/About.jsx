import React from 'react';
import { Container, Typography, Link, Box, Card, CardContent } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import profileImage from '../../img/1695652006050.png'
import './style.css'
import CallToAction from '../../components/callToAction/CallToAction';


function About() {
    return (
        <Container>
            <div className="imageContainer">
                <img src={profileImage} alt="Profile" width={'300px'} className="profileImage"/>
            </div>
            <div>
            <div className="buttonContainer">
            <CallToAction/>
            </div>
            <Card className='card'>
            <CardContent className="aboutCard">
            <Typography variant="h2" gutterBottom>
                About Me
            </Typography>

            <Typography textAlign={'justify'} paragraph>
            I am a seasoned Business Administrator with over 7 years of rich experience in the commercial sector. My expertise lies in provider negotiations and the optimization of sales processes, with a sharp focus on the diligent management of KPIs.
            </Typography>

            <Box marginBottom={2}>
                <Typography variant="h6">🌎 International Experience</Typography>
                <Typography paragraph textAlign={'justify'}>
                    With over 4 years in both traditional and e-commerce markets in Mexico, I have cultivated a comprehensive understanding of the industry. My journey also includes a notable stint with one of the premier retailers in South America, located in Colombia.
                </Typography>
            </Box>

            <Box marginBottom={2}>
                <Typography variant="h6">🔍 In-Depth Understanding</Typography>
                <Typography paragraph textAlign={'justify'}>
                My profound grasp of extensive consumer demands stems from my hands-on experiences combined with an acute observational acumen.
                </Typography>
            </Box>

            <Box marginBottom={2}>
                <Typography variant="h6">💼 Leadership & Teamwork</Typography>
                <Typography paragraph textAlign={'justify'}>
                Renowned for my exceptional interpersonal abilities, I pride myself on proactive leadership coupled with a distinct flair for data analysis. I thrive in team settings, handle pressure with ease, and am unwaveringly committed to lifelong learning.
                </Typography>
            </Box>

            <Box marginBottom={2}>
                <Typography variant="h6">📊 Strategic Analytics</Typography>
                <Typography paragraph textAlign={'justify'}>
                    I utilize my analytical skills for strategic decision-making, ensuring that business initiatives align with the broader goals and focus on constant enhancement.
                </Typography>
            </Box>


            <Box marginBottom={2}>
                <Typography variant="h6">💡 Bridging Business with Tech</Typography>
                <Typography paragraph textAlign={'justify'}>
                Recently, I embarked on a journey into the tech realm and successfully graduated from a web development bootcamp. My skill set now encompasses JavaScript, React, Node.js, MongoDB, and front-end development. My mission is to merge my business acumen with these newfound technical capabilities, acting as a conduit between the worlds of business and technology.
                </Typography>
            </Box>

            <Typography paragraph textAlign={'justify'}>
                📄 Interested in gaining a more comprehensive view of my professional journey? <Link href="https://drive.google.com/file/d/1SjZksltRKK7pujRZM70GclVWws53qpTn/view?usp=sharing" target="_blank" rel="noopener" color="primary" underline="hover"><LinkIcon fontSize="small" /> Download my resume</Link>.
            </Typography>
            </CardContent>
            </Card>
            </div>

        </Container>
    );
}

export default About;
