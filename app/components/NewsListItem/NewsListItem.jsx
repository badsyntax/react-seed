import './_NewsListItem.scss';

import React from 'react';
import classnames from 'classnames';
import { FormattedRelative } from 'react-intl';
import { FloatingActionButton } from 'material-ui';

let { PropTypes } = React;

class NewsListItem extends React.Component {

  getClassName() {
    return classnames('listing-item');
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.item.id !== this.props.item.id;
  }

  render() {
    let item = this.props.item;
    let time = new Date(item.ctime * 1000);

    return (
      <article className={this.getClassName()}>
        <h2>
          <a href={item.url} rel="nofollow" target={'_system'}>
            {item.title}
          </a>
        </h2>
        <footer className={'listing-item-metadata'}>
          <span>{item.up - item.down} points</span>
          <span>by</span>
          <span>
            <a href={'http://echojs.com/user/' + item.username} target={'_system'}>
              {item.username}
            </a>
          </span>
          <span><FormattedRelative value={time} /></span>
          <span className={'listing-item-metadata__comments'}>
            <span>with</span>
            <a href="#">
              {item.comments} comments
            </a>
          </span>
        </footer>
        <a className="list-item-comments" href="#">
          <FloatingActionButton
            mini={true}
            secondary={true}
            >
            <span>{item.comments}</span>
          </FloatingActionButton>
        </a>
      </article>
    );
  }
}

NewsListItem.propTypes = {
  item: PropTypes.object.isRequired
};

NewsListItem.contextTypes = {
  router: PropTypes.func
};

export default NewsListItem;
