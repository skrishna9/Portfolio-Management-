require("dotenv").config();
const express =require('express');
const mongoose = require('mongoose');
const app = express();
require("./db/connect");

const stock =require("./models/addSchema");
const cors=require('cors');

const router = require("./routes/router");

app.use(cors());
app.use(express.json());

app.use(router);

const port = 3299;

app.listen(port, ()=>{
    console.log(`Server is Start on port ${port}`);
})