const express = require('express');

const app = express();

const cors = require('cors');

const port = 3001;

const host = '127.0.0.1';

const mongoose = require('mongoose');

const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://rangi:Rangika@cluster0.4podpxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async()=>{
    try{
        await mongoose.connect(uri)
        console.log("connected to MongoDB")
    }
    catch(err){
        console.log("MongoDb Error:",err)
    }
}

connect();

const server = app.listen(port,host, ()=>{
    console.log(`app is listening ${server.address().port}`)
});

app.use('/api',router);