import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Wrapper } from './App.styled';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // *______________________________
  // handleMouseMove = e => {
  //   const el = document.getElementById('wrapper');
  //   const d = el.getBoundingClientRect();
  //   let x = e.clientX - (d.left + Math.floor(d.width / 2));
  //   let y = e.clientY - (d.top + Math.floor(d.height / 2));
  //   // Invert values
  //   x = x - x * 2;
  //   y = y - y * 2;
  //   document.documentElement.style.setProperty('--scale', 1.6);
  //   document.documentElement.style.setProperty('--x', x / 2 + 'px');

  //   document.documentElement.style.setProperty('--y', y / 2 + 'px');
  // };

  // handleMouseLeave = () => {
  //   document.documentElement.style.setProperty('--scale', 1);
  //   document.documentElement.style.setProperty('--x', 0);
  //   document.documentElement.style.setProperty('--y', 0);
  // };

  // *_________________________________
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
      // <div
      //   id="wrapper"
      //   onMouseMove={this.handleMouseMove}
      //   onClick={this.handleMouseLeave}
      // >
      <Wrapper>
        <Section title="Please leave feedback">
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
        </Section>
      </Wrapper>
      // <img id="image" />
      // </div>
    );
  }
}
