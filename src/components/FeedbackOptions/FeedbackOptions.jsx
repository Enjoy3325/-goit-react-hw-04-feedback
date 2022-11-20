// import PropTypes from 'prop-types';
import React from 'react';

// Отрисовываю заголовок и кнопки баттон. Должна отображаться в Апп
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
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

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
