// import express from 'express'
const express=require('express')
// import route from './route/route'
// import cors from 'cors'
const cors = require('cors');
const pool= require('./database');

const route = require('./route/route')
const app = express();
app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({extended:true}))

  app.use('/',route);

// app.get('/getName', (req,res)=>{
//     // let data= req.body
//      res.send("Vashitva Pathak")
//  })
let PORT=3000;
app.listen(PORT, ()=>{
    console.log(`express running at ${PORT}`)
})

