'use strict'
module.exports = (req, res, next) => {
    console.log(`Method: ${req.method}`, `Path: ${req.path}`)
    next()
}
