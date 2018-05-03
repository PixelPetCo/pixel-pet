#!/usr/bin/env node

const {db, User} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ name: 'cody', email: 'cody@email.com', password: '123'}),
    User.create({ name: 'grace', email: 'grace@hopper.com', password: '123'})
  ])
  console.log(`seeded ${users.length} users`)
  console.log('name: ', users[0].name, 'email: ', users[0].email, ' password: 123')
  console.log('name: ', users[0].name, 'email: ', users[1].email, ' password: 123')
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
