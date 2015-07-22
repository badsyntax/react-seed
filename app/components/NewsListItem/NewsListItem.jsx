import styles from './_NewsListItem.scss';

import React from 'react';
import classnames from 'classnames';
import { FormattedRelative } from 'react-intl';
import mui from 'material-ui';

let { ListItem } = mui;
let { PropTypes } = React;

export default class NewsListItem extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  getClassName() {
    return classnames(styles['listing-item']);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.item.id !== this.props.item.id;
  }

  render() {
    let item = this.props.item;
    let time = new Date(item.ctime * 1000);

    return (
      <ListItem
        primaryText={item.title}
        secondaryText={
          <p>
            <span style={{color: mui.Styles.Colors.darkBlack}}>{item.up - item.down} points by {item.username}</span><br/>
            <FormattedRelative value={time} /> with {item.comments} comments
          </p>
        }
        secondaryTextLines={2} />
    );
  }
}
