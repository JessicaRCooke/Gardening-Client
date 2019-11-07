import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import PlantCreate from './PlantCreate';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';
import { grey, red, green } from '@material-ui/core/colors';
import APIURL from '../helpers/enviornment';
import Sitebar from '../home/Navbar';
import { fontFamily } from '@material-ui/system';


const useStyles = makeStyles({
   root: {
       background: '#e8ed8e',
       height: '100%',
       margin: '20px',
       marginBottom: '20px',
       position: 'absoulte',
       zIndex: '2',
       
   },
   header: {
       textalign: 'center',
       fontFamily: 'Cormorant Garamond',
       color: 'grey',
    
   },
   fab: {
       fontFamily: 'Cormorant Garamond',
       background: 'whitesmoke',
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

const createOn = () => {
    setCreateActive(!createActive);
    console.log(createActive)
}
const clearToken = () => {
    localStorage.clear();
    props.setSessionToken('');
  }


const updateOn = () => {
    setUpdateActive(!updateActive);
}

     const fetchPlants = () => {
        
         fetch(`${APIURL}/plant/myplant/`, {
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
    <div>
        <Sitebar clickLogout={clearToken}></Sitebar>
     
       
<Paper className={classes.root}>
    <Container>
        <Row>
            <Col lg='12'>
            <h1 className={classes.header}>My Garden</h1> 
            </Col>
        </Row>

        <Row>
            <Col lg='12'>
            <Fab variant="extended" className={classes.fab} onClick={createOn}>
                Add a Plant
                <AddIcon />
            </Fab>
            {createActive !== false ? <PlantCreate fetchPlants={fetchPlants} createActive={createActive} setCreateActive={setCreateActive}  token={props.token}/> :<> </>}
            </Col>
        </Row>        
        <Row> 
            <Col lg="12'">
            <PlantTable  plants={plants} editUpdatePlant={editUpdatePlant} updateOn={updateOn} fetchPlants={fetchPlants} token={props.token}/>
            {updateActive ? <PlantEdit plantToUpdate={plantToUpdate} updateOn={updateOn} token={props.token} fetchPlants={fetchPlants}/> : <></>}
            </Col>
        </Row>     
    </Container>
        </Paper>  
     </div>
    )
}


export default PlantIndex;