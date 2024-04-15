import { PureComponent } from 'react';

import Section from '../common/components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container } from '../common/components/Container/Container.styled';

const Titles = {
  FEEDBACK: 'Please leave a feedback',
  STATISTICS: 'Statistics',
};

const message = 'There is no feedback';

const options = ['good', 'neutral', 'bad'];

class App extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    // const name = e.target.name;

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    const total = values.reduce((total, value) => total + value, 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / total) * 100);

    return percentage ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title={Titles.FEEDBACK}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title={Titles.STATISTICS}>
          {total ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
