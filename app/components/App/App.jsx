import styles from './_App.scss';

import React from 'react';
import _ from 'lodash';
import AppActions from '../../actions/AppActions';
import { APP_TITLE } from '../../constants/AppConstants';
import NewsStore from '../../stores/NewsStore';
import LeftNav from '../LeftNav/LeftNav';
import NewsList from '../NewsList/NewsList';
import Icon from '../Icon/Icon';

import mui from 'material-ui';

let { AppBar, AppCanvas, IconButton } = mui;

let ThemeManager = new mui.Styles.ThemeManager();

let { Perf } = React.addons;

function getState(state) {
  return _.merge({
    posts: NewsStore.getAll()
  }, state);
}

class App extends React.Component {

  state = getState();

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
    AppActions.getNews();
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
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

    // return <div>foo</div>;

    let refreshButton = (
      <IconButton
        className={styles['app-bar__refresh']}
        onTouchTap={this.onRefreshButtonTap.bind(this)}
        touch={true}>
        <Icon type={'refresh'} />
      </IconButton>
    );

    let appBar = (
      <AppBar
        className={styles['app-bar mui-dark-theme']}
        onLeftIconButtonTouchTap={this.onMenuIconButtonTouchTap.bind(this)}
        title={APP_TITLE}
        zDepth={0}>
        {refreshButton}
      </AppBar>
    );

    let newsList = (
      <div className={styles['mui-app-content-canvas']}>
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
