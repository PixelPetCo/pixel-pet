const express = require('express')
const path = require('path')
const app = express()
module.exports = app

// all of our boilerplate middleware
app.use(require('./middleware'))

// all of our "auth" and "api" routes
app.use(require('./routes'))

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err.message)
  console.error(err.stack)
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})
