const Item = require("../model/items");
const date = require("../utilities/date");

const Delete = async(req, res) => {
    const itemID = req.body.checkbox;
    const listName = req.body.listName;
    const day = await date.getDate();
    try{
      if(listName===day){
        await Item.deleteOne({_id: itemID});
        res.redirect("/");
      }
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Delete;

