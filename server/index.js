import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import formRouter from './routes/form.js';


const app = express();
app.use(express.json());
app.use(cors());


const CONNECTION_URL = "mongodb+srv://stefan:stefan@cluster0.la5s6.mongodb.net/node-react?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () =>  console.log('Connection work', {PORT} ))) 
    .catch(() => {
        console.log('Connection failed');
    });


app.use("/api/form", formRouter);

