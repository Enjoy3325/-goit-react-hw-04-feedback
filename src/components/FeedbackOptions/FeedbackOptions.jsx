import React from 'react';
// import PropTypes from 'prop-types';

// Отрисовываю заголовок и кнопки баттон. Должна отображаться в Апп
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul>
        {options.map(key => (
          <li key={key}>
            <button type="button" onClick={onLeaveFeedback}>
              {key}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// FeedbackOptions.propTypes = {};
