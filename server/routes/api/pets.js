const router = require('express').Router()
const { Pet } = require('../../db')
module.exports = router

// GET /api/pets

router.get('/', async (req, res, next) => {
  try {
    const { data } = await Pet.findAll({
      where: { userId: req.user.dataValues.id }
    })
    const pets = data && data.reduce((accumulator, pet) => {
      accumulator[pet.id] = pet
      return accumulator
    }, {})
    res.json(pets)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const pet = await Pet.create(req.body)
    res.json(pet)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pets = await Pet.findById(req.params.id)
    res.json(pets)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const [numUpdated, updatedRows] = await Pet.update(req.body, {
      where: { id },
      returning: true
    })
    if (numUpdated) {
      res.status(200).json(updatedRows[0])
    } else {
      const error = new Error(`No pet with the ID ${id}`)
      error.status = 400
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const destroyed = await Pet.destroy({ where: { id: req.params.id } })
    if (destroyed) {
      res.json({ id: req.params.id, message: 'Deleted successfully' })
    } else {
      const error = new Error(`We have no pet with the ID ${req.params.id}`)
      error.status = 400
      next(error)
    }
  } catch (error) {
    next(error)
  }
})
