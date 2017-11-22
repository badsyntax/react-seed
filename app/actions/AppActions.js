import alt from '../alt'

class AppActions {
  constructor () {
    this.generateActions('getItems')
  }
}

export default alt.createActions(AppActions)
