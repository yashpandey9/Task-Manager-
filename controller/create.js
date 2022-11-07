const date = require('../date');
const Item = require('../model/items');
const List = require('../model/lists');

const create = async(req, res) =>{
    const itemName = req.body.newItem;
    const listName = req.body.list;
    const day = await date.getDate();
    const item = new Item({
        name: itemName
    });
    try{
        if(listName===day){
            item.save();
            res.redirect("/");
        }
        else{
          await List.findOne({name: listName}, function(err, foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName);
          })
        }
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = create;