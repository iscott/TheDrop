const
  dotenv = require('dotenv').load(),
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  port = 3000

mongoose.connect('mongodb://localhost/the-drop', (err) => {
  console.log(err || "Connected to MongoDB.")
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('root route')
})

app.listen(port, function(err) {
  console.log(err || `Server is running on ${port}`)
})
