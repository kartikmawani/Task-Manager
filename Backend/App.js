 import DatabaseConnected from './db/db.js'
 import dotenv from "dotenv"
dotenv.config()
import cors from 'cors'

import express from "express"
import Routes from "./Router/Route.js"
const app=express();

DatabaseConnected();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',Routes)
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Setting up the server at  ${PORT}`)
})