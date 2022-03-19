// {/* <div className="experiment-form-element">
//             <div className="add-experiment-form">
//                 <div className="add-experiment-form-header">
//                     <h2>{newExperiment}</h2>
//                         {/* <TextField
//                             id="outlined"
//                             label="No of Questions"
//                             value=""
//                             size="small"
//                         />  */}
//                 </div>
//                 <div className="add-experiment-form-question-section">
//                       {inputFields.map((inputField, index)=>{
//                           let x = index;
//                         return <div key={index} className="generation-question-area">
//                          <h3>Question {index+1}</h3><br></br>                            
//                             <div className="question-section">
//                             <TextField
//                                 id="outlined"
//                                 label="Enter Question"
//                                 name="question"
//                                 value={inputFields.question}
//                                 variant="filled"
//                                 onChange={event=>changeQuestionInput(index,event)}
//                                 className="question-text"
//                                 size="small"
//                             />
//                             <IconButton aria-label="delete" color="primary" onClick={addQuestionField}>
//                                 <AddIcon />
//                             </IconButton>
//                             </div>
//                             <div className="answer-type-element">
//                                 <FormLabel id="row-radio-buttons-group-label"className="ans-type-select">Answer Type</FormLabel>
//                                     <RadioGroup row aria-labelledby="row-radio-buttons-group-label"
//                                         name="row-radio-buttons-group" defaultValue="s" onChange={event=>radioGroupChange(index,event)}
//                                     >
//                                         <FormControlLabel value="s" control={<Radio />} label="Single-line text" />
//                                         <FormControlLabel value="m" control={<Radio />} label="Multi-line text" />
//                                         <FormControlLabel value="o" control={<Radio />} label="List of options" />
//                                 </RadioGroup>
//                             </div>
//                          </div>  
//                       })}
//                     <Button variant="contained" onClick={submitQuestions} className="expSubmitBtn">
//                         Create Experiment 
//                     </Button>
//                 </div>
                
//             </div>
//         </div>



// admin.jsx


// import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Logo from '../assets/logo.svg'

// import Axios from "axios";
// import ShowExperiments from "./ShowExperiments";

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';

// import { useState } from "react";
// // import ImageIcon from '@mui/icons-material/Image';
// // import WorkIcon from '@mui/icons-material/Work';
// // import BeachAccessIcon from '@mui/icons-material/BeachAccess';




// export default function AdminLogin() {
//     const [newExperiment, setnewExperiment] = useState(' ');
//     const [toggleList, setToggleList] = useState(1);
//     const [listOfOptionsIndex, setlistOfOptionsIndex] = useState('a');
//     const [radioSelected, setRadioSelected] = useState('');
//     const [listOfOptions, setlistOfOptions] = useState(' ');

    
//     const [inputFields, setInputFields] = useState([{question:'', ansType:'s'}])

//     const changeQuestionInput =(index,event)=>{
//         // console.log(index,event.target.value);
//         const values = [...inputFields];
//         values[index][event.target.name] = event.target.value;
//         setInputFields(values);
//     }

//     const submitQuestions = (e)=>{
//         console.log("Input fields ", inputFields);
//         addExperiment();
//     }

//     const addQuestionField = ()=>{
//         console.log('add button')
//         setInputFields([...inputFields, {question:'', ansType:'s'}])
//         console.log(inputFields);
//     }

//     const radioGroupChange =(index,e)=>{
//         console.log(index,'Raio change', e.target.defaultValue);
//         console.log(inputFields[index].ansType=e.target.defaultValue);
//         // setlistOfOptionsIndex(index);
//         // setRadioSelected(e.target.defaultValue)
//     }

//     const newExperimentName = (event)=>{
//         // console.log('newExperiment = ', event.target.value)
//         setnewExperiment(event.target.value)
//     }
//     const addExperiment = (event)=>{
//         console.log(typeof(inputFields),inputFields[0] );
//         // console.log('newExperiment = Experiement ADDEDD: ', newExperiment)
//         Axios.post('http://localhost:3005/create', {
//             name: JSON.stringify(inputFields) 
//             // name:inputFields
//         }).then((response)=>{
//             console.log(response, "==> SUCCESS");
//         })
//     }

//   return (
//       <>
//         <div className="Login-form">
            
//                 {/* <div>
//                     <img src={Logo} width="70%" className="mt-10"/>
//                 </div> */}
//                 <div className="create-experiment-area">
//                 <h4 className="exp-heading">Create Experiment</h4><br />
//                     <TextField className="text-field" value={newExperiment} onChange={newExperimentName} label="New Experiment Name" id="margin-none" variant="filled" size="large"/> 
//                     <br />
//                 </div>
//                     <Button variant="contained" color="success" onClick={addExperiment}> Add Experiment </Button>
                
                
//         </div>
//         {(toggleList==0)?
//             <ShowExperiments />:
//             <h3>Form</h3>
//         }
        
//     </>
//   );
// }


// {/* <TextField className="text-field" label="Username" id="margin-none" variant="filled" size="large"/> 
//       <TextField className="text-field" label="Password" type="password" id="margin-normal" margin="normal" variant="filled" size="large"/>
//       <Button variant="contained" size="large">Contained</Button> */}



//     //   <div className="experiment-list-element">
//     //         <h1 style={{color: "#ff6a5a"}}>Choose Experiment</h1>
//     //         <List className="experiment-list">
//     //             <ListItem className="experiment-list-item">
//     //                 <h5>Social Media</h5>
//     //             </ListItem>
//     //             <ListItem className="experiment-list-item">
//     //                 <h5>Social Media</h5>
//     //             </ListItem>
//     //         </List>
//     //     </div>

//     // <h6>Question: 01</h6>
//     //                     <TextField
//     //                         id="outlined"
//     //                         label="Enter Question"
//     //                         value=""
//     //                         size="small"
                            
//     //                     />
//     //                     <br></br>
//     //                     <FormControl >
//     //                         <FormLabel id="demo-row-radio-buttons-group-label">Answer Type</FormLabel>
//     //                         <RadioGroup
//     //                             row
//     //                             aria-labelledby="demo-row-radio-buttons-group-label"
//     //                             name="row-radio-buttons-group"
//     //                         >
//     //                             <FormControlLabel value="female" control={<Radio />} label="Single-line text" />
//     //                             <FormControlLabel value="male" control={<Radio />} label="Multi-line text" />
//     //                             <FormControlLabel value="other" control={<Radio />} label="List of options" />
//     //                         </RadioGroup>
//     //                         <div className="no-options">
//     //                         <TextField
//     //                             id="outlined"
//     //                             label="Answer Option"
//     //                             value=""
//     //                             size="small"
//     //                         />
//     //                         </div>
//     //                         <Button variant="outlined">Outlined</Button>
//     //                     </FormControl> 














//     .............................................................
    
// <div className="Login-form">
            
//                 {/* <div>
//                     <img src={Logo} width="70%" className="mt-10"/>
//                 </div> */}
//                 <div className="create-experiment-area">
//                 <h4 className="exp-heading">Create Experiment</h4><br />
//                     <TextField className="text-field" value={newExperiment} onChange={newExperimentName} label="New Experiment Name" id="margin-none" variant="filled" size="large"/> 
//                     <Box
//                         component="form"
//                         justify="space-around"
//                         container
//                         sx={{
//                             '& > :not(style)': { mt: 3,width: '27ch' },
//                         }}
//                         noValidate
//                         // autoComplete="off"
//                         >
//                         <TextField id="outlined-basic" type="text" label="Enter Name" variant="outlined" value={userName} onChange={inputUserName}/>
//                         <TextField id="outlined-basic" type="email" label="Enter Email" variant="outlined" value={userEmail} onChange={inputUserEmail}/>
//                         <TextField id="outlined-basic" type="number" label="Enter Phone" variant="outlined" value={userPhone} onChange={inputUserPhone}/>
//                         <TextField
//                             id="outlined-select-currency"
//                             select
//                             label="Select"
//                             value={experimentCatergory}
//                             onChange={changeExpCat}
//                             >
//                             <MenuItem value="market">Market</MenuItem>
//                             <MenuItem value="property">Property</MenuItem>
                           
//                         </TextField>
                       
//                     </Box>
                    
//                     <br />
//                     <br />
//                 </div>
//                     <Button variant="contained" color="success" onClick={createExperiment}> Add Experiment </Button>
//         </div> */}