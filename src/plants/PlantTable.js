import React from 'react';
import {Table, Button} from 'reactstrap';

const PlantTable = (props) => {
    const deletePlant = (plant) => {
        fetch(`http://localhost:3000/plant/${plant.id}`, {
            method: "DELETE",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPlants())
    }
const plantMapper = () => {
    return props.plants.map((plant, index) => {
        return(
            <tr key={index}>
                <th scope="row">{plant.id}</th>
                <td>{plant.plantname}</td>
                <td>{plant.dateplanted}</td>
                <td>{plant.where}</td>
                <td>{plant.sun}</td>
                <td>{plant.alive}</td>
                <td>{plant.soil}</td>
                <td>{plant.notes}</td>
                <Button color='warning' onClick={() => {props.editUpdatePlant(plant); props.updateOn()}}>Update</Button>
                <Button color='danger' onClick={() => {deletePlant(plant)}}>Delete</Button>
            </tr>
        )
    })
}

    return (
        <>
        <h3>My Plants</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Plant Name</th>
                    <th>Date Planted</th>
                    <th>Where</th>
                    <th>Sun</th>
                    <th>Alive?</th>
                    <th>Type of Soil</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </Table>
        </>
    )
}

export default PlantTable;