const db = require('./database')
const User = require('./user')
const Pet = require('./pet')

Pet.belongsTo(User)
User.hasMany(Pet)

module.exports = {
  db,
  User,
  Pet
}
