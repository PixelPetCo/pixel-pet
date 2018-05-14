// ACTION TYPES

const PETS_FETCH = 'PETS_FETCH'
const PETS_CREATE = 'PETS_CREATE'
const PETS_UPDATE = 'PETS_UPDATE'
const PETS_REMOVE = 'PETS_REMOVE'

// INITIAL STATE

const initialState = {}

// ACTION CREATORS

const fetchPets = pets => ({
  type: PETS_FETCH,
  pets
})
const createPet = pet => ({ type: PETS_CREATE }, pet)
const updatePet = pet => ({ type: PETS_UPDATE }, pet)
const removePet = id => ({ type: PETS_DELETE }, id)

// THUNK CREATORS

export const getPets = () => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get(`/api/pets`)
      dispatch(fetchPets(pets))
    } catch (error) {
      console.error('Could not get pets: ', error)
    }
  }
}

export const postPet = pet => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.post(`/api/pets`, pet)
    dispatch(createPet(data))
  } catch (error) {
    console.error(error)
  }
}

export const putPet = pet => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.put(`/api/pets/${pet.id}`, pet)
    dispatch(updatePet(data))
  } catch (error) {
    console.error(error)
  }
}

export const deletePet = id => async (dispatch, _, { axios }) => {
  try {
    await axios.delete(`/api/products/${id}`)
    dispatch(removePet(id))
  } catch (error) {
    console.error(error)
  }
}

// HELPER FUNCTIONS

const removeFromPets = (state, { id }) => {
  const newState = { state }
  delete newState[id]
  return state
}

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case PETS_FETCH:
      return action.pets
    case PETS_CREATE:
      return { ...state, [action.pet.id]: action.pet }
    case PETS_UPDATE:
      return { ...state, [action.pet.id]: action.pet }
    case PETS_REMOVE:
      return removeFromPets(state, action.pet)
    default:
      return state
  }
}
