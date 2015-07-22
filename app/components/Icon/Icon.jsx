import styles from './_Icon.scss';

import React from 'react';
import classnames from 'classnames';

import refreshIcon24 from '!!raw!material-design-icons/navigation/svg/production/ic_refresh_24px.svg';
import errorIcon18 from '!!raw!material-design-icons/alert/svg/production/ic_error_18px.svg';
import warningIcon18 from '!!raw!material-design-icons/alert/svg/production/ic_warning_18px.svg';

let icons = {
  refresh24: refreshIcon24,
  error18: errorIcon18,
  warning18: warningIcon18
};

let { PropTypes } = React;

export default class Icon extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.number
  }

  static defaultProps = {
    size: 24
  }

  getClassName() {
    return classnames(
      styles['-' + this.props.type],
      styles['icon'],
      styles['-size-' + this.props.size]
    );
  }

  render() {
    let html = {
      __html: icons[this.props.type + this.props.size]
    };
    return (
      <div
        className={this.getClassName()}
        dangerouslySetInnerHTML={html}>
      </div>
    );
  }
}
