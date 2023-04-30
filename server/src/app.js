const express = require('express');
const indexRouter=require('./routes/index.route')
const cors=require('cors');
const path=require('path');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(indexRouter);
app.get('/', (req, res)=>{
    res.sendFile(express.static(path.join(__dirname, '..', 'public', 'index.html')))
})

module.exports=app;