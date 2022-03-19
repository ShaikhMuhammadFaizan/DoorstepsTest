import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import {useNavigate, useLocation} from 'react-router-dom'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import TextareaAutosize from '@mui/material/TextareaAutosize';




export default function ShowExperiments() {

    const [experimentsList, setExperimentsList] = useState([]);
    const [questions, setQuestions]=useState([]);
    const [selectedQuestion, setSelectedQuestion]=useState('');
    const [userName, setUserName]=useState('');
    const [userEmail, setUserEmail]=useState('');
    const [userPhone, setUserPhone]=useState('');
    // const [userAnswers, setUserAnswers]=useState([]);

    const [answerFields, setAnswerFields] = useState([{answer:''}])

    let data=[]; 
    let navigate = useNavigate();
    let location = useLocation().pathname;


    useEffect(() => {
        if(experimentsList.length==0){
            getExperiments();
        }else{return}
    })

    const getExperiments = ()=>{
        // console.log("fired");
        Axios.get('http://doorsteps.informative.pk/experiments').then((res)=>{
            var data = res.data;
            for(var i=0;i<data.length;i++){
                data[i].experimentQuestions = eval(data[i].experimentQuestions)
            }
            setExperimentsList(data);
        })
    }

    const experimentSelect = (value)=>{
        // console.log("value = > ", value);
        setSelectedQuestion(value);
    }

    const answerValue = (i,e)=>{
        data = answerFields;
        data[i]=e.target.value;
        setAnswerFields(data);
        
    }

    const submitAnswers =()=>{
        for(var i=0;i<selectedQuestion.experimentQuestions.length;i++){
            // console.log('answerFields[i] => ',answerFields[i],i);
            if(!answerFields[i]||answerFields[i].answer!=''&& !userName && !userEmail && !userPhone){
               return alert("Please, Complete the form")
            }else{
                if(userName && userEmail && userPhone){
                    Axios.post('http://doorsteps.informative.pk/submitanswers', {
                    questionid: selectedQuestion.id, 
                    username: userName, 
                    useremail: userEmail, 
                    userphone: userPhone,
                    answers: JSON.stringify(answerFields),
                }).then((response)=>{
                    navigate('/FormSubmitted');
                })
                }else{
                  return  alert("Please, Complete the form");
                }
            }
        }
    }

    const disableExperiment = (value,e)=>{
        const disableValue =  (value.disable=='y'?'n':'y');
        // console.log(disableValue);
        Axios.post('http://doorsteps.informative.pk/updateDisable', {
            rowId:value.id,
            disableValue,
        }).then((response)=>{
            // console.log(response, "==> response");
             alert("Experiment Name: "+ value.experimentName + " is " + (disableValue=='y'?'disabled':'enabled'))
            getExperiments();
        })
    }
 

  return (
    <div>
        <div className='experiment-list-element'>
            <h2 style={{textAlign: "left", marginBottom:"4%"}}>Select Experiment</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, }} aria-label="caption table">
                    <TableHead >
                    <TableRow className="experiment-list-head">
                        <TableCell>Experiment Name</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Total Questions</TableCell>
                        <TableCell align="center">Created by</TableCell>
                        {(location=="/CreateExperiment")?
                                <TableCell align="center">Enable/Disable</TableCell>
                            :null}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {experimentsList.map((value,key) => (
                        (location=="/AttemptExperiment"&&value.disable!="y"||location=="/CreateExperiment")?
                        <TableRow key={key} className="experiment-list-render" onClick={()=>experimentSelect(value)}>
                            <TableCell component="th" scope="row">{value.experimentName}</TableCell>
                            <TableCell align="center">{value.category}</TableCell>
                            <TableCell align="center">{value.experimentQuestions.length}</TableCell>
                            <TableCell align="center">{value.name}</TableCell>
                            {(location=="/CreateExperiment")? 
                            <TableCell align="center"><IconButton aria-label="delete" color="warning">
                                    <CommentsDisabledIcon color={(value.disable=='y')?"disabled":"primary"} onClick={(event)=>disableExperiment(value,event)}/>
                              </IconButton></TableCell>
                            :null}
                        </TableRow>:null
                    ))}
                    </TableBody>
                </Table>
        </TableContainer> 
        </div>

        {(selectedQuestion!='' && location!="/CreateExperiment")?
            <div className='experiment-attemp-area'>
                 <h2>{selectedQuestion.experimentName}</h2>
                    <div className="mt-5">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" value={userName}  onChange={(e)=>{setUserName(e.target.value)}}/>
                    </div>
                    <div className="mt-3">
                        <label className="form-label" >Email Address</label>
                        <input type="email" className="form-control form-control-lg" id="exampleInputPassword1" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Contact Number</label>
                        <input type="number" className="form-control form-control-lg" id="exampleInputPassword1" value={userPhone} onChange={(e)=>{setUserPhone(e.target.value)}}/>
                    </div>
                  {selectedQuestion.experimentQuestions.map((value,index)=>{
                      
                      return <div key={index} className="attemp-question-section">
                                <h5>Question {index+1}</h5>
                                <h6>{value.question}</h6>
                                {value.ansType=="s"?
                                    // <TextField fullWidth  id="outlined-basic" label="Answer" variant="outlined" />
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Anwser" className="multiline-textaera" onChange={event=>answerValue(index,event)}></input>
                                :null}
                                {value.ansType=="m"?
                                    // <TextField fullWidth  minrow={2} id="outlined-basic" label="Answer" variant="outlined" />
                                      <textarea className="form-control" placeholder='Answer' id="exampleFormControlTextarea1" rows="3" className="multiline-textaera" onChange={event=>answerValue(index,event)}></textarea>
                                :null}

                            </div>
                  })}      
                        <Button variant="contained" onClick={()=>submitAnswers()} className="expSubmitBtn">
                            Submit 
                        </Button> 
            </div>
        : <div></div> }
       
         
    </div>
  )
}
