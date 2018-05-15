import store from '../../../../../store'

export default () => {
  const state = store.getState()
  const pet = state.user.petModel
  switch (pet) {
    case 'boxyBunny':
      return '#ffd1d1'
    case 'circleCat':
      return '#484D49'
    default:
      return '#513797'
  }
}
