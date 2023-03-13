import "dotenv/config";
import express from 'express';
import cors from 'cors';
import {router} from './routes';
//import db from "./config/mongo"



const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());  // Security according to the API consume


app.use(express.json()); // in order to receive data from the body

app.use(router);

// import connection to db
require('./config/mongo');

//db().then(() => console.log("Conection ready"))

app.listen(PORT, () => console.log('Listening on port',PORT));