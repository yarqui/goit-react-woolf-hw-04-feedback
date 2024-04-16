import PropTypes from 'prop-types';

import { FeedbackOptsWrap } from './FeedbackOptions.styled';
import { Button } from 'components/Button/Button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
