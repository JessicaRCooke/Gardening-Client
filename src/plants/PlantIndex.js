import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import PlantCreate from './PlantCreate';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';
import { grey, red } from '@material-ui/core/colors';


const useStyles = makeStyles({
   root: {
       background: red,
       height: "100vh",
       margin: '20px',
   },
   header: {
       textalign: 'center'
   }
})


const PlantIndex = (props) => {
    const classes = useStyles();
    
const [plants, setPlants] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [plantToUpdate, setPlantToUpdate] = useState({});
const [createActive, setCreateActive] = useState(false);

const editUpdatePlant = (plant) => {
    setPlantToUpdate(plant);
    console.log(plant)
}

const createOn =() => {
    setCreateActive(!createActive);
    console.log(createActive)
}



const updateOn = () => {
    setUpdateActive(!updateActive);
}

     const fetchPlants = () => {
        
         fetch('http://localhost:3000/plant/myplant/', {
             method: 'GET',
             headers: new Headers ({
                 'Content-Type' : 'application/json',
                 'Authorization' : props.token
             })
         }) .then( (res) => res.json())
         .then((plantData) => {
             setPlants(plantData)
             console.log(plantData)
         })
     }

     useEffect(() => {
         fetchPlants();
     }, [])

    return(
<Paper>
    <Container>

        <Row>
            <Col lg='12'>
            <h1 className={classes.header}>My Garden</h1> 
            </Col>
        </Row>

        <Row>
            <Col lg='12'>

            <Fab variant="extended" onClick={createOn}>
                Add a Plant
                <AddIcon />
            </Fab>
            {createActive ? <PlantCreate createOn={createOn}  token={props.token}/> :<> </>}
            </Col>
        </Row>
                
        <Row> 
            <PlantTable  plants={plants} editUpdatePlant={editUpdatePlant} updateOn={updateOn} fetchPlants={fetchPlants} token={props.token}/>
            {updateActive ? <PlantEdit plantToUpdate={plantToUpdate} updateOn={updateOn} token={props.token} fetchPlants={fetchPlants}/> : <></>}
        </Row>
            
    </Container>
        </Paper>  
      
    )
}


export default PlantIndex;