const express=require('express')
// import express from 'express'
const pool=require('../database')
const router=express.Router();

router.get('/getData',(req,res)=>{
    res.status(200).send("hello how are you");
})
router.get('/getName', (req,res)=>{
   // let data= req.body
    res.status(200).send("Vashitva Pathak")
})

router.post('/adduser',(req,res)=>{
    const username=req.body["username"]
    const password=req.body["password"]
   // const { username,password}=req.body
    console.log(` username: ${username}
    password:${password}`)
//`INSERT INTO accounts (username, password) VALUES ("${username}","${password}"  );` '${username}','${password}'
// 
//INSERT INTO accounts (username, password) VALUES (${username}, ${password})
  const insertSTMT=`INSERT INTO accounts (username, password) VALUES ($1, $2)`;
    pool.query(insertSTMT, [username, password]).then((response)=>{
        console.log("Data Saved")   
        console.log(response)     
    })   
    .catch((err)=>{
   console.log(err)
    });
   
    console.log(req.body);
    res.status(200).send("Response Received: "+`UserName: ${username}  Password:${password}`)
});
module.exports=router;    