import store from '../../../../../store'

export default () => {
  const state = store.getState()
  const pet = state.user.petModel
  switch (pet) {
    case 'bunnyModel':
      return '#ffd1d1'
    case 'circleCatModel':
      return '#484D49'
    default:
      return '#513797'
  }
}
