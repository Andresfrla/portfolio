import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import './style.css'

function ContactMe() {

    return (
        <Container className="container" style={{marginTop: '200px'}}>
            <Typography variant="h4" gutterBottom>
                Let's get in touch
            </Typography>
            <Typography>
                <Link href="mailto:andresfranla@gmail.com"><MailRoundedIcon/> andresfranla@gmail.com</Link>
            </Typography>
            <Typography><PhoneCallbackRoundedIcon/> +52 55 391 383 02</Typography>
            <Typography>
                <Link href="https://linkedin.com/in/andresfrancolangthon/"><LinkedInIcon/> LinkedIn</Link>
            </Typography>
            <Typography>
                <Link href="https://github.com/Andresfrla"><GitHubIcon/> GitHub</Link>
            </Typography>
        </Container>
    );
}

export default ContactMe;
