import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';
import APIURL from '../helpers/enviornment';
import Button from '@material-ui/core/Button'
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    const useStyles = makeStyles ({
        modal: {
            background: '#d3dff2',
            fontFamily: 'Cormorant Garamond',
        }, 
        button: {
            fontFamily: 'Cormorant Garamond',
        }
    });
    const classes = useStyles();
    const handleSubmit =(event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signin`, {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
        (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return(
        <Modal isOpen={modal} className={classes.modal}>
        <ModalHeader className={classes.modal} >Login<IconButton><ClearIcon onClick={toggle}/></IconButton></ModalHeader>
        <ModalBody className={classes.modal}>
        <Form onSubmit={handleSubmit} classname={classes.modal}>
        <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
        </FormGroup>
            <Button  className={classes.button} variant="outlined" type="submit" >Login</Button>
        </Form>
        </ModalBody>
        </Modal>
    )
}
export default Login;