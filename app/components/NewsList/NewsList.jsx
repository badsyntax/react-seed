import styles from './_NewsList.scss';

import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
import mui from 'material-ui';

let { List, ListDivider } = mui;
let { PropTypes } = React;

export default class NewsList extends React.Component {

  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  render() {
    var items = this.props.posts.map(function(item) {
      return (
        <article>
          <NewsListItem
            item={item}
            key={'listing-item-' + item.id} />
          <ListDivider />
        </article>
      );
    });
    return (
      <section className={styles.listing}>
        <List>
          {items}
        </List>
      </section>
    );
  }
}
