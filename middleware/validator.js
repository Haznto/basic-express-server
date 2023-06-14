'use strict'

module.exports = (req, res, next) => {
    if (req.query.name) {
        next()
    }
    else next({ message: 'please pass a name in the url as query' })
}