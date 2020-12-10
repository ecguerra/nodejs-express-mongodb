const db = require('../models')
// grabs the tutorial model from index where everything is brought together
const Tutorial = db.tutorials

// Create and Save a new Tutorial
exports.create = (req,res) => {
    // validate the request
    if(!req.body.title){
        res.status(400).send({message: 'Title cannot be empty'})
        return
    }
    // create a Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })
    // save Tutorial in the database
    tutorial
        .save(tutorial)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'An error occurred while creating the Tutorial'
            })
        })
}

// retrieve all the Tutorials from the database
exports.findAll = (req, res) => {
    // find all the Tutorials in the database
    Tutorial.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || 'An error occurred while retrieving tutorials'
            })
        })
}

// find a single Tutorial with id
exports.findOne = (req, res) => {
    const id = req.params.id
    // res.send(id)
    Tutorial.findById(id).then(data => {
        if(!data)
        return res.status(400).send({message: `Tutorial with ${id} not found`})
        else return res.send(data)
    }) 
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'An error occurred while retrieving tutorial'
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    // console.log(id)
    Tutorial.update(
        {_id: id},
        {
            title: req.body.title, 
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        })
        .then(data => {
        if(!data)
        return res.status(400).send({message: `Tutorial with ${id} not found`})
        else return res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'An error occurred while updating tutorial'
        })
    })
}

exports.deleteOne = (req, res) => {
    const id = req.params.id
    Tutorial.deleteOne({_id: id})
    .then(data => {
        if(!data)
        return res.status(400).send({message: `Tutorial with ${id} not found`})
        else return res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'An error occurred while deleting tutorial'
        })
    })
}

exports.findAllPublished = (req, res) => {
    Tutorial.find({published: true})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'An error occurred while retrieving tutorials'
        })
    })
}