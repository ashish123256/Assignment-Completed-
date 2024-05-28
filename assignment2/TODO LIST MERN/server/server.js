import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";
import bodyParser from 'body-parser'; 

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",Routes);

const Port = process.env.PORT || 5500;

Connection();

app.listen(Port,()=> console.log(`Your server is running successfully on PORT ${Port}`) )