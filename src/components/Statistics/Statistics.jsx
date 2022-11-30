import PropTypes from 'prop-types';
import {
  StatisticBox,
  TitleStatistic,
  TextStatistic,
} from './Statistics.styled';
import React from 'react';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticBox>
      <TitleStatistic>Statistics:</TitleStatistic>
      <TextStatistic>Good:{good}</TextStatistic>
      <TextStatistic>Neutral:{neutral}</TextStatistic>
      <TextStatistic>Bad:{bad}</TextStatistic>
      <TextStatistic>Total:{total()}</TextStatistic>
      <TextStatistic>Positive feedback:{positivePercentage()}%</TextStatistic>
    </StatisticBox>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
