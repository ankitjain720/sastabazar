import express from 'express'
import connection from './Database/db.js';
import Router from './Routes/route.js'
const app = express();
import dotenv from 'dotenv';
const port = 4400;
const hostname = '127.0.0.1'
import bodyParser from 'body-parser'


app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Router);


dotenv.config();
const Username = process.env.db_username;
const Password = process.env.db_password


connection(Username ,Password);




app.listen(port , ()=>{

    console.log(`server is running at http://${hostname}:${port}/`)
})