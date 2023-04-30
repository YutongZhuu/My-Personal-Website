const express=require('express');
const indexRouter=express.Router();
const {getContent} = require('./index.controller')
indexRouter.get('/content', getContent);

module.exports=indexRouter;