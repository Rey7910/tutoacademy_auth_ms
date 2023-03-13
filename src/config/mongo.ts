import "dotenv/config"
import {connect, connection} from "mongoose"
const mongoose = require('mongoose')    

const DB_URI = <string> process.env.DB_URI;
const db = mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("connected to database"))



module.exports = ()=> db;   

