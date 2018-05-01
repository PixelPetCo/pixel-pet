const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/pixel-pet', {
  logging: false
})

module.exports = db
