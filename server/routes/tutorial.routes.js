module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller.js')
    let router = require('express').Router()

    // create a new Tutorial
    router.post('/', tutorials.create)
    // retrieve all Tutorials
    router.get('/', tutorials.findAll)
    // retrieve all published Tutorials
    router.get('/published',tutorials.findAllPublished)
    // retrieve a single Tutorial with id
    router.get('/:id', tutorials.findOne)
    // update a Tutorial with id
    router.put('/:id',tutorials.update)
    // delete a Tutorial
    router.delete('/:id',tutorials.deleteOne)

    app.use('/api/tutorials', router)
}