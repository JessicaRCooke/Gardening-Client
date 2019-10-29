import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PlantCreate from './PlantCreate';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';

const PlantIndex = (props) => {
const [plants, setPlants] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [plantToUpdate, setPlantToUpdate] = useState([]);

const editUpdatePlant = (plant) => {
    setPlantToUpdate(plant);
    console.log(plant)
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}

     const fetchPlants = () => {
         fetch('http://localhost:3000/plant/myplant', {
             method: 'GET',
             headers: new Headers ({
                 'Content-Type' : 'application/json',
                 'Authorization' : props.token
             })
         }) .then( (res) => res.json())
         .then((plantData) => {
             setPlants(plantData)
         })
     }

     useEffect(() => {
         fetchPlants();
     }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <PlantCreate fetchPlants={fetchPlants} token={props.token}/>
                </Col>
                <Col md="9">
                    <PlantTable plants={plants} editUpdatePlant={editUpdatePlant} updateOn={updateOn} fetchPlants={fetchPlants} token={props.token}/>
                </Col>
                {updateActive ? <PlantEdit plantToUpdate={plantToUpdate} updateOff={updateOff} token={props.token} fetchPlants={fetchPlants}/> : <></>}
            </Row>
        </Container>     
    )
}


export default PlantIndex;