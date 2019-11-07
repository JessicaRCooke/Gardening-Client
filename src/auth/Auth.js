import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import {Modal, ModalBody} from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
//import Wreath from '../assets/floral border.png'
import { flexbox } from '@material-ui/system';
import Wreath from '../assets/floral border.png'

const Heading = styled.h1`
font-family: Cormorant Garamond;
font-size: 100px;
color: #687a68;
`;

const Resize = styled.img`
width: 100vw;
height: auto;
margin-top: -10'
background-position: center center;
display: flex;
postion: absolute;
margin-top: 0em;
`;

const useStyles = makeStyles({
    auth: {
        fontFamily: 'Cormorant Garamond', 
        color: 'green', 
        opacity: '90%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '50em',
        marginRight: '50em',
     
       
    },
    button: {
        fontFamily: 'Cormorant Garamond', 
        backgroundColor: '#dae6e0',
        borderRadius: '2px',
          
        
    },
    
    paper: {
        marginLeft: '50em',
        marginRight:'50em',
        height: '10em',
        color: 'green',
        postion: 'absolute',
        display: 'flex',
        fontFamily: 'Cormorant Garamond',
        
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        
    }
   
})

const Auth = (props) => {

const classes = useStyles();

const [signupActive, setSignupActive] = useState(false);
const [loginActive, setLoginActive] = useState(false);

const signupOn = () => {
    setSignupActive(!signupActive)
}
const loginOn = () => {
    setLoginActive(!loginActive)
}

    return(
        <div>
             <Heading>Flower Pot</Heading>
      
     
            
                    <button variant="outlined" className={classes.button} onClick={signupOn}>Signup</button> 
                    {signupActive !== false ? <Signup signupActive={signupActive} setSignupActive={setSignupActive} updateToken={props.updateToken}/> :<> </>}
                
               
                 
                    <button variant="outlined" className={classes.button}onClick={loginOn}>Login</button>
                    {loginActive !== false ? <Login loginActive={loginActive} setLoginActive={setLoginActive} updateToken={props.updateToken}/> : <> </>} 
                  
                  
     
        
           <Resize src={Wreath} />
               
        </div>
    )
}
export default Auth;