import { Button } from '@mui/material';
import './style.css';

const CallToAction = () => {
    return (
        <Button 
        variant='contained'
        className="downloadBtn" 
        component="a" 
        href="https://drive.google.com/file/d/1SjZksltRKK7pujRZM70GclVWws53qpTn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Download my CV 🧔🏻
        </Button>
    )
}

export default CallToAction;
