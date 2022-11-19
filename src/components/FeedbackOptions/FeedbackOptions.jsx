import { Button } from 'components/Button/Button';
import React from 'react';
// import PropTypes from 'prop-types';

// Отрисовываю заголовок и кнопки баттон. Должна отображаться в Апп
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnBox>
      <h1>Please leave feedback</h1>
      <ul>
        {options.map(key => (
          <li key={key}>
            <Button type="button" onClick={onLeaveFeedback}>
              {key}
            </Button>
          </li>
        ))}
      </ul>
    </BtnBox>
  );
}

// FeedbackOptions.propTypes = {};
