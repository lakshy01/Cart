
const route = require('express').Router();
const mongoose = require('mongoose');
const Item = mongoose.model('Item');
route.route('/place')
   .get((req, res)=>{
   Item.find({})
   .then((items)=>{
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.send(items);
   }, (err)=>{
       if(err)
       console.log(err);
   })
   .catch((err)=>console.log(err));
})
    .post((req, res) => {
    let item = new Item();
    item.name = req.body.name;
    item.id = req.body.id;
    item.discount = req.body.discount;
    item.cost = req.body.cost;
    item.quantity = req.body.quantity;
    item.size = req.body.size;
    item.url = req.body.url;
    item.save((err, doc) => {
        if (!err) {
            res.status(201).send(doc);
        } else {
            res.status(501).send(err);
        }
    })
})
exports = module.exports = route;