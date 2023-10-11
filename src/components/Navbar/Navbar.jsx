import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import './style.css'; 

function Navbar() {
    const [background, setBackground] = useState("rgba(0, 31, 63, 1)");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const maxOpacity = 0.9;
            const newOpacity = Math.max(maxOpacity - currentScrollY / 200, 0.1); 
            setBackground(`rgba(0, 31, 63, ${newOpacity})`);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar position="fixed" className="appBarStyle" style={{ background }}>
            <Toolbar style={{margin: '10px'}}>
                <Button 
                    className="navButton" 
                    color="inherit" 
                    component={NavLink} 
                    to="/" 
                    value="/"
                    startIcon={<HomeRoundedIcon />}
                    style={{color: 'white'}}
                >
                    My Portfolio
                </Button> 
                <Typography variant="h6" style={{ flexGrow: 1 }} />
                
                <Button className="navButton" color="inherit" 
                component={NavLink} 
                to="/about" 
                value="/about"
                startIcon={<AssignmentIndRoundedIcon />}>About me</Button>
                <Button className="navButton" color="inherit" 
                component={NavLink} 
                to="/projects" 
                value="/projects"
                startIcon={<BackupTableRoundedIcon/>}>Projects</Button>
                <Button className="navButton" color="inherit" 
                component={NavLink} 
                to="/contact" 
                value="/contact"
                startIcon={<ConnectWithoutContactRoundedIcon/>}>Let's Connect</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
