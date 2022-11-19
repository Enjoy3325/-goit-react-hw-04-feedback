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
    const ClickOnButton = e.target.textContent;
    this.setState(prevState => ({
      [ClickOnButton]: prevState[ClickOnButton] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    return;
    <div>
      <Wrapper>
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Wrapper>
    </div>;
  }
}
