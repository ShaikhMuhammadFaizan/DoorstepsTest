import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import {Navigate, useNavigate} from 'react-router-dom'

export default function Navbar() {

  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-light customeNav">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="" width="70%"/>
            </a>
            <div>
                <Button variant="outline" onClick={()=>{navigate('/CreateExperiment')}}>Create Experiment</Button>
                <Button variant="contained" onClick={()=>{navigate('/AttemptExperiment')}} className="nav-attempt-button">Attempt Experiment</Button>
            </div>
                
        </div>
           
    </nav>
  )
}
