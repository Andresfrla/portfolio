import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import MenuIcon from '@mui/icons-material/Menu';
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
                {/* Botón del menú hamburguesa (visible solo en móvil) */}
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={handleToggleDrawer} 
                    className="menuIconMobile"   /* <--- Añade la clase aquí */
                >
                    <MenuIcon />
                </IconButton>


                {/* Título "My Portfolio" como enlace a Home (visible solo en escritorio) */}
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
                        startIcon={<BackupTableRoundedIcon />}>
                        Projects
                    </Button>
                    <Button className="navButton" color="inherit"
                        style={{ margin: '10px' }} 
                        component={NavLink} 
                        to="/contact" 
                        value="/contact"
                        startIcon={<ConnectWithoutContactRoundedIcon />}>
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
                        <BackupTableRoundedIcon /> Projects
                    </ListItem>
                    <ListItem button component={NavLink} to="/contact" value="/contact" onClick={handleToggleDrawer}>
                        <ConnectWithoutContactRoundedIcon /> Let's Connect
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;