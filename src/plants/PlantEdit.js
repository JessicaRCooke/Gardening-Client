import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/enviornment';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core';

const PlantEdit = (props) => {
    console.log(props)
    const [editPlantName, setEditPlantName] = useState(props.plantToUpdate.plantname);
    const [editDatePlanted, setEditDatePlanted] = useState(props.plantToUpdate.dateplanted);
    const [editWhere, setEditWhere] = useState(props.plantToUpdate.where);
    const [editSun, setEditSun] = useState(props.plantToUpdate.sun);
    const [editAlive, setEditAlive] = useState(props.plantToUpdate.alive);
    const [editSoil, setEditSoil] = useState(props.plantToUpdate.alive);
    const [editNotes, setEditNotes] = useState(props.plantToUpdate.notes);
    const [modal, setModal] =useState(true);

    const toggle = () => setModal(!modal);

    const useStyles = makeStyles ({
        modal: {
            background: '#d3dff2',
            fontFamily: 'Cormorant Garamond',
        }, 
        button: {
            fontFamily: 'Cormorant Garamond',
        },
     
    });
    const classes = useStyles()

const plantUpdate = (event, plant) => {
    event.preventDefault();
    fetch(`${APIURL}/plant/${props.plantToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({plant: {plantname: editPlantName, dateplanted: editDatePlanted, where: editWhere, sun: editSun, alive: editAlive, soil: editSoil, notes: editNotes}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => {
        props.fetchPlants();
        props.updateOn();
        console.log(res);
    })
}
    return(
        <Modal isOpen={modal} className={classes.modal}>
            <ModalHeader className={classes.modal}>Update your plant<IconButton><ClearIcon onClick={toggle}/> </IconButton> </ModalHeader>
            <ModalBody className={classes.modal}>
                <Form onSubmit={plantUpdate} className={classes.modal}>
                    <FormGroup>
                        <Label htmlFor="plantname">Edit Plant Name</Label>
                        <Input name="plantname" value={editPlantName} onChange={(e) => setEditPlantName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htlmFor="dateplanted">Edit Plant Date</Label>
                        <Input name='dateplanted' value={editDatePlanted} onChange={(e) => setEditDatePlanted(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='where'>Edit Location</Label>
                        <Input name='where' value={editWhere} onChange={(e) => setEditWhere(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='sun'>Edit Sun Exposure</Label>
                    <Input type="select" name='Sun' value={editSun} onChange={(e) => setEditSun(e.target.value)}>
                    <option value="Full Sun">Full Sun</option>
                    <option value="Part Sun">Part Sun</option>
                    <option value="Shade">Shade</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='Alive'>Is the Plant Alive?</Label>
                        <Input type="select" name="Alive" value={editAlive} onChange={(e) => setEditAlive(e.target.value)}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor='soil'>Edit Watering Preference</Label>
                    <Input type='select' name='Soil' value={editSoil} onChange={(e) => setEditSoil(e.target.value)}>
                    <option value="Wet">Wet</option>
                    <option value="Dry">Dry</option>
                   
                    </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='notes'>Edit Notes</Label>
                        <Input name='notes' value={editNotes} onChange={(e) => setEditNotes(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit'>Update Your Plant</Button>
                </Form>
            </ModalBody>
            </Modal>
    )
}

export default PlantEdit;