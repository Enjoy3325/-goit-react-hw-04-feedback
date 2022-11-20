import { Notification } from '../Notification/Notification';
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
    // const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    // return totalFeedback;
    return Object.values(this.state).reduce((acc, number) => acc + number, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };
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
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage || 0}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
