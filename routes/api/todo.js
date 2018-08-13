const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
    console.log('some1 getted me on todos');
    Todo.find()
        .sort({date: 1})
        .then(todos => res.json(todos))
});

// @route POST api/items
// @desc post an item
// @access public
router.post('/', (req, res)=>{
    console.log('some1 posts me on todos')
    const newTodo = new Todo({
      body:req.body.body,
      author:req.body.authorID
    });
    newTodo.save()
    .then(todo => res.json(todo));
});
  
router.delete('/:id', (req, res) => {
    console.log('some1 wants to delete this item '+req.params.id);
    Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.json({success:'item deleted'}))
    .catch(err => res.status(404).json({success: false}));
});

router.get('/:name', (req, res) => {
    console.log('some1 wants to get this todo : ' +req.params.name);
    Todo.find({'body':req.params.name})
    .sort({date : 1})
    .then(todo => res.json(todo))
    .catch(err =>{
        console.log(err);
        res.json(err);
    });
});

router.put('/:id', (req, res) =>{
    console.log('some1 wants to update info on object with id : '+req.params.id+ ' with the new body of : '+req.body.body);

    const newBody = req.body.body;
    const newAuthor = req.body.authorID;
    Todo.findOneAndUpdate({_id : req.params.id}, { body: newBody, author: newAuthor}, {new: true},(err, doc) =>{
        if(err){
            console.log("Something wrong when updating data!");
            res.status('404').json({message:'this id doesnt exit'});
        }
        res.json(doc);
    });
    

});

module.exports = router;