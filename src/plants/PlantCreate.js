import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import ClearIcon from '@material-ui/icons/Clear';
import APIURL from '../helpers/enviornment';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core';


const PlantCreate = (props) => {
    console.log(props)
    const [plantname, setPlantName] = useState('');
    const [dateplanted, setDatePlanted] = useState('');
    const [where, setWhere] = useState('');
    const [sun, setSun] = useState('');
    const [alive, setAlive] = useState('');
    const [soil, setSoil] = useState('');
    const [notes, setNotes] = useState('');
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    const useStyles = makeStyles ({
        modal: {
            background: '#b6cdf2',
            fontFamily: 'Cormorant Garamond',
        }, 
        button: {
            fontFamily: 'Cormorant Garamond',
        },
       
    });
    const classes = useStyles()

    

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/plant/myplant`, {
        method: "POST",
        body: JSON.stringify({plant: {plantname: plantname, dateplanted: dateplanted, where: where, sun: sun, alive: alive, soil: soil, notes: notes}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => res.json())
    .then((plantData) => {
        console.log(plantData);
        setPlantName('');
        setDatePlanted('');
        setWhere('');
        setSun('');
        setAlive('');
        setSoil('');
        setNotes('');
    }).then((res) => {
        props.fetchPlants();
        
        console.log(res);
    })
}


    return(
        <Modal isOpen={modal} className={classes.modal}>
        <ModalHeader className={classes.modal} >Add a New Plant <IconButton><ClearIcon onClick={toggle}/></IconButton></ModalHeader>
        <ModalBody className={classes.modal}>
        <Form onSubmit = {handleSubmit} >
            <FormGroup>
                <Label htmlFor="plantname">Plant Name</Label>
                <Input name='plantname' value={plantname} onChange={(e) => setPlantName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='dateplanted'>Plant Date </Label>
                <Input name='dateplanted' value={dateplanted} onChange={(e) => setDatePlanted(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='where'>Location </Label>
                <Input name='where' value={where} onChange={(e) => setWhere(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='sun'>Sun Exposure </Label>
                <Input required type="select" name='sun' value={sun} onChange={(e) => setSun(e.target.value)}>
                    <option/>
                    <option value="Full Sun">Full Sun</option>
                    <option value="Part Sun">Part Sun</option>
                    <option value="Shade">Shade</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='alive'>Is the plant alive?</Label>
                <Input required type='select' name="alive" value={alive} onChange ={(e) => setAlive(e.target.value)}>
                    <option/>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='soil'>Watering Preference</Label>
                <Input required type='select' name='soil' value={soil} onChange={(e) => setSoil(e.target.value)}>
                    <option/>
                    <option value="Dry">Dry</option>
                    <option value="Wet">Wet</option>
                    
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='notes'>Notes</Label>
                <Input name='notes' value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </FormGroup>
            <Button type='submit' onClick={toggle}>Submit</Button>
           
            
        </Form>
        </ModalBody>
           
        </Modal>
    )
}

export default PlantCreate;