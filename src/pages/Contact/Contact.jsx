import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneCallbackRoundedIcon from '@material-ui/icons/PhoneCallbackRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import './style.css';

function ContactMe() {
    return (
        <Container className="container" style={{marginTop: '200px'}}>
            <Typography variant="h4" gutterBottom>
                Let's get in touch
            </Typography>
            <Typography>
                <Link component="a" href="mailto:andresfranla@gmail.com">
                    <MailRoundedIcon /> andresfranla@gmail.com
                </Link>
            </Typography>
            <Typography>
                <PhoneCallbackRoundedIcon /> +52 55 391 383 02
            </Typography>
            <Typography>
                <Link component="a" href="https://linkedin.com/in/andresfrancolangthon/">
                    <LinkedInIcon /> LinkedIn
                </Link>
            </Typography>
            <Typography>
                <Link component="a" href="https://github.com/Andresfrla">
                    <GitHubIcon /> GitHub
                </Link>
            </Typography>
        </Container>
    );
}

export default ContactMe;
