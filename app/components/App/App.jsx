import './_App.scss';

import React from 'react';
import _ from 'lodash';
import AppActions from '../../actions/AppActions';
import { AppBar, AppCanvas, IconButton } from 'material-ui';
import { APP_TITLE } from '../../constants/AppConstants';
import NewsStore from '../../stores/NewsStore';
import LeftNav from '../LeftNav/LeftNav';
import NewsList from '../NewsList/NewsList';
import Icon from '../Icon/Icon';

let { Perf } = React.addons;

function getState(state) {
  return _.merge({
    posts: NewsStore.getAll()
  }, state);
}

class App extends React.Component {

  state = getState();

  constructor(...args) {
    super(...args);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
    AppActions.getNews();
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    Perf.start();
    this.setState(getState());
    Perf.stop();
    Perf.printInclusive();
    Perf.printWasted();
  }

  onMenuIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  onRefreshButtonTap() {
    AppActions.refreshNews();
  }

  render() {

    let refreshButton = (
      <IconButton
        className={'app-bar__refresh'}
        onTouchTap={this.onRefreshButtonTap.bind(this)}
        touch={true}>
        <Icon type={'refresh'} />
      </IconButton>
    );

    let appBar = (
      <AppBar
        className={'app-bar mui-dark-theme'}
        onMenuIconButtonTouchTap={this.onMenuIconButtonTouchTap.bind(this)}
        title={APP_TITLE}
        zDepth={0}>
        {refreshButton}
      </AppBar>
    );

    let newsList = (
      <div className={'mui-app-content-canvas'}>
        <NewsList
          posts={this.state.posts} />
      </div>
    );

    let appCanvas = (
      <AppCanvas predefinedLayout={1}>
        {appBar}
        <LeftNav ref={'leftNav'} />
        {newsList}
      </AppCanvas>
    );

    return appCanvas;
  }
}

export default App;
