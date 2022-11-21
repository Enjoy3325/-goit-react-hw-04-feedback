import PropTypes from 'prop-types';
import {
  BoxButton,
  ListButton,
  ItemButton,
  ButtonStyle,
  TextButton,
} from './FeedbackOptions.styled';
import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BoxButton>
      <ListButton>
        {options.map(key => (
          <ItemButton key={key}>
            <ButtonStyle type="button" onClick={onLeaveFeedback}>
              <TextButton>{key}</TextButton>
            </ButtonStyle>
          </ItemButton>
        ))}
      </ListButton>
    </BoxButton>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
