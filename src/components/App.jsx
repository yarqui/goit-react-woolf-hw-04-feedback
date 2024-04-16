import Section from '../common/components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container } from '../common/components/Container/Container.styled';
import { useState } from 'react';

const Titles = {
  FEEDBACK: 'Please leave a feedback',
  STATISTICS: 'Statistics',
};

const message = 'There is no feedback';

const options = ['good', 'neutral', 'bad'];

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(INITIAL_STATE);
  const { good, bad, neutral } = feedback;

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedback);

    const total = values.reduce((total, value) => total + value, 0);

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = Math.round((good / total) * 100);

    return percentage || 0;
  };

  const total = countTotalFeedback();

  return (
    <Container>
      <Section title={Titles.FEEDBACK}>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title={Titles.STATISTICS}>
        {total ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={message} />
        )}
      </Section>
    </Container>
  );
};

export default App;
