import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    
} from 'reactstrap';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
   
    title: {
      flexGrow: 1,
      fontFamily: 'Cormorant Garamond' ,
      fontSize: '2em',
      marginLeft: '1em',
      color: 'grey',
    },
    bar: {
        background: '#d3dff2',
    },
    button: {
        fontFamily: 'Cormorant Garamond',
        color: 'grey',
    }
  }));

const Sitebar = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} >
        <Toolbar> 
          <Typography variant="h6" edge="start" className={classes.title}>
            Flower Pot
          </Typography>
          <Button color="inherit" className={classes.button} onClick={props.clickLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


{/*
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
  return(
    <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Flower Pot</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                </NavItem>
            </Nav>
            
            </Collapse>
        </Navbar>
)}*/}

export default Sitebar;