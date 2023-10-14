import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';;
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';
import CallToAction from '../callToAction/CallToAction';

function Navbar() {
    const [background, setBackground] = useState("rgba(0, 31, 63, 1)");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

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
        <>
        <AppBar position="fixed" className="appBarStyle" style={{ background }}>
            <Toolbar style={{ margin: '10px' }}>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={handleToggleDrawer} 
                    className="menuIconMobile"
                >
                    <MenuIcon />
                </IconButton>

                <Button color="inherit" component={NavLink} to="/" className="desktopOnly">
                    My Portfolio
                </Button>
                
                <Typography variant="h6" style={{ flexGrow: 1 }} className="desktopOnly"></Typography>

                <div className="desktopOnly">
                    <CallToAction />
                    <Button className="navButton" color="inherit" 
                        style={{ margin: '10px' }}
                        component={NavLink} 
                        to="/about" 
                        value="/about"
                        startIcon={<AssignmentIndRoundedIcon />}>
                        About me
                    </Button>
                    <Button className="navButton" color="inherit" 
                        style={{ margin: '10px' }}
                        component={NavLink} 
                        to="/projects" 
                        value="/projects"
                        startIcon={<BusinessCenterIcon />}>
                        Projects
                    </Button>
                    <Button className="navButton" color="inherit"
                        style={{ margin: '10px' }} 
                        component={NavLink} 
                        to="/contact" 
                        value="/contact"
                        startIcon={<ContactPhoneIcon />}>
                        Let's Connect
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
            
            <Drawer anchor="left" open={drawerOpen} onClose={handleToggleDrawer}>
                <List>
                    <ListItem button component={NavLink} to="/" value="/" onClick={handleToggleDrawer}>
                        <HomeRoundedIcon /> My Portfolio
                    </ListItem>
                    <hr/>
                    <ListItem button component={NavLink} to="/about" value="/about" onClick={handleToggleDrawer}>
                        <AssignmentIndRoundedIcon /> About me
                    </ListItem>
                    <ListItem button component={NavLink} to="/projects" value="/projects" onClick={handleToggleDrawer}>
                        <BusinessCenterIcon /> Projects
                    </ListItem>
                    <ListItem button component={NavLink} to="/contact" value="/contact" onClick={handleToggleDrawer}>
                        <ContactPhoneIcon /> Let's Connect
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
