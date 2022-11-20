import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const clickOnButton = e.currentTarget.textContent;
    this.setState(prevState => ({
      [clickOnButton]: prevState[clickOnButton] + 1,
    }));
  };
  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage() {
    const positivPercentage = Math.round(
      (this.state.good / this.countTotalFeedback) * 100
    );
    return positivPercentage;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    return (
      <div>
        {/* <Wrapper></Wrapper> */}
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
