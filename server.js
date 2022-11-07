const express = require('express');
const app = express();
const date = require('./date');
const connectionDB = require('./database/connection');

//connecting mongoDB 
connectionDB();

//parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));

app.get("/", (req,res) => {
    const today = date.getDate();
    res.render("list", {listTitle: today});
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})

