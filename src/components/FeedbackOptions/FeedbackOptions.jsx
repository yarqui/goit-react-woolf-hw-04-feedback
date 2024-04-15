import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FeedbackOptsWrap } from './FeedbackOptions.styled';
import { Button } from 'components/Button/Button.styled';

export class FeedbackOptions extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <FeedbackOptsWrap>
        {options?.map(option => (
          <Button
            key={option}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </FeedbackOptsWrap>
    );
  }
}

export default FeedbackOptions;
