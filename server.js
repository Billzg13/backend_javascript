const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//todo routes here
const todoRoutes = require('./routes/api/todo')
const authorRoutes = require('./routes/api/author')

//connect to DB
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(()=> console.log('connected succesfully on database'))
.catch(err=> console.log(err));

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//routes start here

//Todo Routes
app.use('/api/todos', todoRoutes);

//Author Routes
app.use('/api/authors', authorRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(5000,
     () => console.log('listening on port 5000!'))