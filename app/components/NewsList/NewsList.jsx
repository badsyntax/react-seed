import styles from './_NewsList.scss';

import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';

let { PropTypes } = React;

class NewsList extends React.Component {

  getNewsListItem(item = {}) {
    return (
      <NewsListItem
        item={item}
        key={'listing-item-' + item.id} />
    );
  }

  render() {
    return (
      <section className={styles['listing']}>
        {this.props.posts.map(this.getNewsListItem, this)}
      </section>
    );
  }
}

NewsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default NewsList;
