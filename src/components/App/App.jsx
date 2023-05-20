import React, { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import { Container } from '../App/App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    if (event.target.id === 'good') setGood(prev => prev + 1);
    else if (event.target.id === 'neutral') setNeutral(prev => prev + 1);
    else if (event.target.id === 'bad') setBad(prev => prev + 1);
  };

  const TotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / TotalFeedback) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      {TotalFeedback !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

export default App;
