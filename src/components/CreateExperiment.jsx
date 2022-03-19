import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate, useLocation} from 'react-router-dom'

import Axios from "axios";
import ShowExperiments from "./ShowExperiments";

import Avatar from '@mui/material/Avatar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

import { useState } from "react";
import { MenuItem } from "@mui/material";

export default function CreateExperiment() {
    const [newExperiment, setnewExperiment] = useState('');
    const [toggleList, setToggleList] = useState(0);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [experimentCatergory, setExperimentCatergory] = useState('Property');

    let navigate = useNavigate();
    let location = useLocation().pathname;
    
    const [inputFields, setInputFields] = useState([{question:'', ansType:'s'}])

    const changeQuestionInput =(index,event)=>{
        // console.log(index,event.target.value);
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const inputUserName =(event)=>{
        // console.log(event.target.value)
        setUserName(event.target.value)
    }
    const inputUserEmail =(event)=>{
        // console.log(event.target.value)
        setUserEmail(event.target.value)
    }
    const inputUserPhone =(event)=>{
        // console.log(event.target.value)
        setUserPhone(event.target.value)
    }
    const changeExpCat =(event)=>{
        // console.log(event.target.value)
        setExperimentCatergory(event.target.value)
    }

    
    const submitExperiment = (e)=>{
        // console.log("Input fields ", inputFields);
        addExperiment();
    }

    const addQuestionField = ()=>{
        // console.log('add button')
        setInputFields([...inputFields, {question:'', ansType:'s'}])
    }

    const radioGroupChange =(index,e)=>{
        // console.log(index,'Raio change', e.target.defaultValue);
        // console.log(inputFields[index].ansType=e.target.defaultValue);
    }

    const createExperiment =()=>{
        // console.log(newExperiment);
        (newExperiment=='')?setToggleList(0):setToggleList(1)
    }

    const newExperimentName = (event)=>{
        setnewExperiment(event.target.value)
    }

    const addExperiment = (event)=>{
        // console.log(inputFields)
        if(newExperiment&&userName&&userPhone&&userEmail&&inputFields[0].question !== ''){
            Axios.post('http://doorsteps.informative.pk/create', {
                questions: JSON.stringify(inputFields),
                experimentName: newExperiment,
                email:userEmail,
                name:userName,
                phone:userPhone,
                category:experimentCatergory
            }).then((response)=>{
                if(response.data=="success"){
                  navigate('/FormSubmitted');
                }else{
                    alert("Please, complete the form");
                }
            })
        }else{
            // console.log('call');
            alert("Please, complete the form");
        }
        
    }

  return (
      <>
            <div className="Login-form">
                <div className="create-experiment-area">
                <h4 className="exp-heading">Create Experiment</h4><br />
                    <TextField className="text-field" value={newExperiment} onChange={newExperimentName} label="New Experiment Name" id="margin-none" variant="outlined" size="large"/> 
                    <Box
                        component="form"
                        justify="space-around"
                        align-items="center"
                        container
                        sx={{
                            '& > :not(style)': { m: 2,width: '27ch', space: 10 },
                        }}
                        noValidate
                        // autoComplete="off"
                        >
                        <TextField id="outlined-basic" type="text" label="Enter Name" variant="outlined" value={userName} onChange={inputUserName}/>
                        <TextField id="outlined-basic" type="email" label="Enter Email" variant="outlined" value={userEmail} onChange={inputUserEmail}/>
                        <TextField id="outlined-basic" type="number" label="Enter Phone" variant="outlined" value={userPhone} onChange={inputUserPhone}/>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select Category"
                            value={experimentCatergory}
                            onChange={changeExpCat}
                            >
                            <MenuItem value="market">Market</MenuItem>
                            <MenuItem value="property">Property</MenuItem>
                        </TextField>
                    </Box>
                    <br />
                    <br />
                </div>
                    <Button variant="contained" color="success" onClick={createExperiment}> Add Experiment </Button>
            </div>

        {(toggleList==0)?
            <ShowExperiments />:
            <div className="experiment-form-element">
            <div className="add-experiment-form">
                <div className="add-experiment-form-header">
                    <h2>{newExperiment}</h2>
                </div>
                <div className="add-experiment-form-question-section">
                      {inputFields.map((inputField, index)=>{
                          let x = index;
                        return <div key={index} className="generation-question-area">
                         <h3>Question {index+1}</h3><br></br>                            
                            <div className="question-section">
                            <TextField
                                id="outlined"
                                label="Enter Question"
                                name="question"
                                value={inputFields.question}
                                variant="filled"
                                onChange={event=>changeQuestionInput(index,event)}
                                className="question-text"
                                size="small"
                            />
                            <IconButton aria-label="delete" color="primary" onClick={addQuestionField}>
                                <AddIcon />
                            </IconButton>
                            </div>
                            <div className="answer-type-element">
                                <FormLabel id="row-radio-buttons-group-label"className="ans-type-select">Answer Type</FormLabel>
                                    <RadioGroup row aria-labelledby="row-radio-buttons-group-label"
                                        name="row-radio-buttons-group" defaultValue="s" onChange={event=>radioGroupChange(index,event)}
                                    >
                                        <FormControlLabel value="s" control={<Radio />} label="Single-line text" />
                                        <FormControlLabel value="m" control={<Radio />} label="Multi-line text" />
                                </RadioGroup>
                            </div>
                         </div>  
                      })}
                    <Button variant="contained" onClick={submitExperiment} className="expSubmitBtn">
                        Create Experiment 
                    </Button>
                </div>
                
            </div>
        </div>
        }
        
    </>
  );
}
