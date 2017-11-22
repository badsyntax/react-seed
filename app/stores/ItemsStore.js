import alt from '../alt'
import WebAPI from '../util/WebAPI'
import AppActions from '../actions/AppActions'

class ItemsStore {
  constructor () {
    this.bindAction(AppActions.getItems, this.getItems)
    this.state = {items: [], error: null}
  }

  getItems () {
    WebAPI.getItems()
    .then((items) => {
      this.setState({items: items})
    })
    .catch(() => {
      this.state.error = 'error'
    })
  }
}

export default alt.createStore(ItemsStore, 'ItemsStore')
