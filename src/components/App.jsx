import { Component } from 'react';
import { Container } from './Container/Container.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

let total = 0;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prev => ({
      [option]: prev[option] + 1,
    }));

    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    total++;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = (this.state.good / total) * 100;
    return positiveFeedback;
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback..." />
          )}
        </Section>
      </Container>
    );
  }
}
