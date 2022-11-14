const express = require('express');
const app = express();
const connectionDB = require('./server/database/connection');
const routes = require('./server/routes/router');
const mongoose = require('mongoose');

//connecting mongoDB 
connectionDB();

//parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
app.use('/public', express.static('public'));

//routing
app.use(routes);

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...')
})

//printing the process id 
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3010;
}
const server = app.listen(port, () => {
    console.log(process.pid);
    console.log(`on process id: ${process.pid}`);
})

//gracefully shutting down the server
//it is executed when ctrl c is pressed
process.on('SIGINT', ()=>{
   console.log('SIGINT recieved.')
   server.close(()=>{
    console.log('server is closed...')
    mongoose.connection.close(false, () => {
        process.exit(0)
    })
   })
})

//it executes when kill statement is executed
process.on('SIGTERM', ()=>{
    console.log('SIGTERM recieved.')
    server.close(()=>{
        console.log('server is closed...')
        mongoose.connection.close(false, () => {
            process.exit(0)
        })
       })
})


