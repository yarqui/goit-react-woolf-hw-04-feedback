import PropTypes from 'prop-types';
import { PureComponent } from 'react';

export class Notification extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

export default Notification;
