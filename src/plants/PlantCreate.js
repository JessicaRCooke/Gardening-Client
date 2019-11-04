import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/enviornment';

const PlantCreate = (props) => {
    const [plantname, setPlantName] = useState('');
    const [dateplanted, setDatePlanted] = useState('');
    const [where, setWhere] = useState('');
    const [sun, setSun] = useState('');
    const [alive, setAlive] = useState('');
    const [soil, setSoil] = useState('');
    const [notes, setNotes] = useState('');
    

const handleSubmit = (e) => {
    //e.preventDefault();
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
    }).then(props.fetchPlants())
    props.createOn();
}
    

    return(
        <Modal isOpen={true}>
        <ModalHeader charCode="x">Add a New Plant</ModalHeader>
        <ModalBody>
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <Label htmlFor="plantname">Plant Name</Label>
                <Input name='plantname' value={plantname} onChange={(e) => setPlantName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='dateplanted'>Date Planted </Label>
                <Input name='dateplanted' value={dateplanted} onChange={(e) => setDatePlanted(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='where'>Where Planted </Label>
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
                <Label htmlFor='alive'>Is it alive?</Label>
                <Input required type='select' name="alive" value={alive} onChange ={(e) => setAlive(e.target.value)}>
                    <option/>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='soil'>Soil Type</Label>
                <Input required type='select' name='soil' value={soil} onChange={(e) => setSoil(e.target.value)}>
                    <option/>
                    <option value="Clay">Clay</option>
                    <option value="Silt">Silt</option>
                    <option value="Sand">Sand</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='notes'>Notes</Label>
                <Input name='notes' value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </FormGroup>
            <Button type='submit'>Submit</Button>
           
            
        </Form>
        </ModalBody>
           
        </Modal>
    )
}

export default PlantCreate;