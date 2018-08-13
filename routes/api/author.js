const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');
const Author = require('../../models/Author');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'user Works' }));

// @route   GET api/authors/all
// @desc    prints all authors in json format
// @access  Public
router.get('/all', (req, res) => {
    console.log('some1 getted me on authors');
    Author.find()
        .sort({date: 1})
        .then(authors => res.json(authors) );
});

// @route   POST api/authors/
// @desc    creates an Author
// @access  Public
router.post('/', (req, res) =>{
    console.log('some1 posted me on authors with '+req.body.name);
    const newAuthor = new Author({
        name: req.body.name
    });
    newAuthor.save()
    .then(author => res.json(author) );
});

// @route   GET api/authors/id
// @desc    prints all todos for this author
// @access  Public
router.get('/:id', (req, res) =>{
    console.log('some1 wants to get the todos of this id: '+req.params.id);
    Todo.find({author: req.params.id})
    .sort({date : 1})
    .then(todos => res.json(todos))
    

});

router.delete('/:id', (req, res) => {
    console.log('some1 wants to delete this author '+req.params.id);
    
    Author.findByIdAndRemove(req.params.id)
    .then(author => res.json({success:'item deleted'}))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;