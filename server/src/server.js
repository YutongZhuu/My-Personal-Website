const http = require('http');
const app=require('./app')
const {loadContent}=require('./models/index.model');
const { error } = require('console');


const server=http.createServer(app);
const PORT=process.env.PORT||3001;


const startServer=async()=>{
     await loadContent()
      .catch((error)=>{
          console.log(error);
      })

     server.listen(PORT, ()=>{
          console.log(`listening on port ${PORT}...`)
     });
}


startServer();
