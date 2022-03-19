const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())
const db  = mysql.createConnection({
    user: 'informat_user_doorsteps',
    host: 'localhost',
    password: 'M%M{Oo[mgW}P',
    database: 'informat_doorsteps'
})
db.connect(function(err) {
    if (err) {
      return console.error('error CONNECTION: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

app.post('/create', (req, res)=>{
    console.log("req => ",req)
    const questions = req.body.questions;
    const experimentName = req.body.experimentName;
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const category = req.body.category;
    console.log(questions)
        db.query("INSERT INTO experiments (experimentQuestions, experimentName,email,name,phone,category,disable) VALUES (?,?,?,?,?,?,?)", [questions,experimentName,email,name,phone,category,'n'], (err, result)=>{
    if(err){
            res.send("ERR")
            console.log("error", err)
        }else {
            console.log("Res  ", res)
            // navigate('/FormSubmitted');
            res.send("success")
        }
    })
})

app.post('/submitanswers', (req, res)=>{
    console.log("req => ",req)
    const questionid = req.body.questionid;
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userphone = req.body.userphone;
    const answers = req.body.answers;
    // console.log(questions)
        db.query("INSERT INTO answers (questionId, userName,userEmail,userPhone,answers) VALUES (?,?,?,?,?)", [questionid,username,useremail,userphone,answers], (err, result)=>{
        if(err){
            res.send("ERR")
            console.log("error ", err)
        }else {
            console.log("Res", res)
            res.send("success")
        }
    })
})

app.post('/updateDisable', (req, res)=>{
    console.log("req => ",req)
    const rowId = req.body.rowId;
    const disableValue = req.body.disableValue;
        db.query("UPDATE experiments SET disable = (?) WHERE id = (?)",[disableValue,rowId],(err,result)=>{
        if(err){
            res.send("ERR")
            console.log("error ", err)
        }else {
            console.log("Res ", res)
            res.send("success")
        }
    })
})

app.get('/experiments',(req,res)=>{
    db.query("SELECT * FROM experiments", (err, result)=>{
        if(err){
            console.log("error ", err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3005, ()=>{
    console.log("EXPRESS WORKS")
})