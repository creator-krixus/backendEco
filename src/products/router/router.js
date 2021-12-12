const express = require('express');
const router = express.Router()
const routes = require('../routes/products')

const apiRouter = (app) => {
    app.use('/api/v1', router)
    router.use('/products', routes)
}

module.exports = apiRouter;