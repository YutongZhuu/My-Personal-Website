const {content}=require('../models/index.model')

function getContent(req, res){
    console.log(content)
    res.status(200).json((content));
}
module.exports={getContent};