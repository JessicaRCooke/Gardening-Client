import React from 'react';
//import {Table, Button} from 'reactstrap';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from '@material-ui/core/colors';
import { mergeClasses } from '@material-ui/styles';
import Card from '@material-ui/core/Card'
import { platform } from 'os';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import APIURL from '../helpers/enviornment';
import { whileStatement } from '@babel/types';



const useStyles = makeStyles({

    card: {
      minWidth: 275,
      maxWidth: 275,
      maxHeight: 500,
      backgroundColor: '#68cc7a',
      fontFamily: 'Cormorant Garamond',
      border: '1px solid lightgrey',
     
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
      fontFamily: 'Cormorant Garamond',
    },
    title: {
      fontSize: 30,
      textTransform: 'uppercase',
      fontFamily: 'Cormorant Garamond',
      color: 'white',

      
    },
    pos: {
      marginBottom: 12,
      fontFamily: 'Cormorant Garamond',
    },
  });


const PlantTable = (props) => {
   const classes = useStyles();
    const deletePlant = (plant) => {
        fetch(`${APIURL}/plant/${plant.id}`, {
            method: "DELETE",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPlants())
    }


    const plantMapper =() => {
        
        return props.plants.map((plant, index) => {
            return(
                <div className={classes.bullet}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}  gutterBottom> {plant.plantname}
                        <IconButton color='green'  size='small' aria-label="edit" onClick={() => {props.editUpdatePlant(plant); props.updateOn()}} >
                            <EditIcon />
                            </IconButton> </Typography>
                        <Typography className={classes.pos}> Plant Date: {plant.dateplanted}</Typography>
                        <Typography className={classes.pos}> Location: {plant.where}</Typography>
                        <Typography className={classes.pos}> Sun exposure: {plant.sun}</Typography>
                        <Typography className={classes.pos}> Is the plant alive: {plant.alive}</Typography>
                        <Typography className={classes.pos}> Watering Preference: {plant.soil}</Typography>
                        <Typography className={classes.pos}> Notes: {plant.notes}</Typography>
                        
                         <IconButton color='danger' aria-label="Delete" onClick={() => {deletePlant(plant)}}> 
                        <DeleteIcon />
                        </IconButton>
                    </CardContent>
                </Card>
                </div>
            )
        })
    }
{/*const plantMapper = () => {
    return props.plants.map((plant, index) => {
        return(
            <div>
            <TableRow key={index}>
                <TableHead scope="row">{plant.owner}</TableHead>
                <td>{plant.plantname}</td>
                <td>{plant.dateplanted}</td>
                <td>{plant.where}</td>
                <td>{plant.sun}</td>
                <td>{plant.alive}</td>
                <td>{plant.soil}</td>
                <td>{plant.notes}</td>
                <Fab color="secondary" aria-label="edit" onClick={() => {props.editUpdatePlant(plant); props.updateOn()}} >
                <EditIcon />
                </Fab>
                <Fab color='danger' aria-lable="Delete" onClick={() => {deletePlant(plant)}}> 
                <DeleteIcon />
                </Fab>
            </TableRow>
            </div>
        )
    })
}  





 return (
        <div >
       
        <h3>My Garden</h3>
        <hr/>
        <Table  >
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
                {plantMapper()}
            </tbody>
        </Table>
       
        </div>
)*/}
return (
    <div>
    {plantMapper()}
    </div>
)
}
export default PlantTable;