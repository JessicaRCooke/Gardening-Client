import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';

const PlantEdit = (props) => {
    const [editPlantName, setEditPlantName] = useState(props.plantToUpdate.plantname);
    const [editDatePlanted, setEditDatePlanted] = useState(props.plantToUpdate.dateplanted);
    const [editWhere, setEditWhere] = useState(props.plantToUpdate.where);
    const [editSun, setEditSun] = useState(props.plantToUpdate.sun);
    const [editAlive, setEditAlive] = useState(props.plantToUpdate.alive);
    const [editSoil, setEditSoil] = useState(props.plantToUpdate.alive);
    const [editNotes, setEditNotes] = useState(props.plantToUpdate.notes);

const plantUpdate = (event, plant) => {
    event.preventDefault();
    fetch(`http://localhost:3000/plant/${props.plantToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({plant: {plantname: editPlantName, dateplanted: editDatePlanted, where: editWhere, sun: editSun, alive: editAlive, soil: editSoil, notes: editNotes}}),
        header: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => {
        props.fetchPlants();
        props.updateOff();
    })
}
    return(
        <Modal isOpen={true}>
            <ModalHeader>Save a Plant</ModalHeader>
            <ModalBody>
                <Form onSubmit={plantUpdate}>
                    <FormGroup>
                        <Label htmlFor="plantname">Edit Plant Name</Label>
                        <Input name="plantname" value={editPlantName} onChange={(e) => setEditPlantName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htlmFor="dateplanted">Edit Date Planted</Label>
                        <Input name='dateplanted' value={editDatePlanted} onChange={(e) => setEditDatePlanted(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='where'>Edit Where</Label>
                        <Input name='where' value={editWhere} onChange={(e) => setEditWhere(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='sun'>Edit Sun</Label>
                    <Input type="select" name='Sun' value={editSun} onChange={(e) => setEditSun(e.target.value)}>
                    <option value="Full Sun">Full Sun</option>
                    <option value="Part Sun">Part Sun</option>
                    <option value="Shade">Shade</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='Alive'>Edit Alive</Label>
                        <Input type="select" name="Alive" value={editAlive} onChange={(e) => setEditAlive(e.target.value)}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor='soil'>Edit Soil</Label>/>
                    <Input type='select' name='Soil' value={editSoil} onChange={(e) => setEditSoil(e.target.value)}>
                    <option value="Clay">Clay</option>
                    <option value="Silt">Silt</option>
                    <option value="Sand">Sand</option>
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