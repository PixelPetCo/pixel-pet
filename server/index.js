if (process.env.NODE_ENV !== 'production') {
  try {
    require('./secrets')
  } catch (err) {
    console.log('No secrets file found - make sure to add one!')
  }
}

const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')

db.sync().then(() => {
  console.log('The database is synced')
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})
