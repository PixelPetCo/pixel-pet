const { db } = require('./db')
const app = require('./app')
const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV !== 'production') {
  try {
    require('./secrets')
  } catch (err) {
    console.log('No secrets file found - make sure to add one!')
  }
}

db.sync().then(() => {
  console.log(process.env.CONVERSATION_USERNAME)
  console.log('The database is synced')
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})
