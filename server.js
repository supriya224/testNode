const express = require('express');
const config = require('./configure');
const app = express();  // create object for express;
const routes = require('./src/routes/routes');
const dbConn = require('./src/dbConnection/dbConnection');
const port = process.env.port || config.app.port;
// middlewares define here
app.use(express.json());
// routes for server
app.get("/",(req,res)=>{
        res.send("server is running!!!");
})
 app.use('/api',routes);
// listning server port
app.listen(port,()=>{
    console.log("server is running on port:",port);
});
