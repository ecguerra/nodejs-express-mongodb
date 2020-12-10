const dbConfig = require('../config/db.config.js')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Default setup for mongoose 
// create an empty object and passing values to be used for setup
const db = {}
// passing the entire mongoose middle
db.mongoose = mongoose,
// setting a url and grabbing that url from dbConfig
db.url = dbConfig.url,
// requiring model and passing the mongoose middleware
db.tutorials = require('./tutorial.model.js')(mongoose)

module.exports = db