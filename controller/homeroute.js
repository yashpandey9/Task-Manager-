const Item = require("../model/items");
const defaultItems = require("../utilities/defaultItems.json")
const date = require("../date");

const home = async(req, res) => {
    const foundItems = await Item.find({});
    const day = date.getDate();
    try{
        if(foundItems.length === 0){
            await Item.insertMany(defaultItems);
            res.redirect("/");
        }
        else{await Item.deleteMany({name: {$in: ["Welcom to your to do list!", "Hit + to add a new task.", "<== Hit this to delete a task.", "Hit this to edit a task. ==>"]} });
            res.render("list", {listTitle: day, newlistItems: foundItems});
        }
    }catch(err){
        console.log(err);
        process.exit(1);
    }   
} 
module.exports = home;