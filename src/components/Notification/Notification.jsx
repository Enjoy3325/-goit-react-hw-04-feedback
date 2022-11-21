import PropTypes from 'prop-types';
import { NotificacionText } from './Notification.styled';
import React from 'react';

export function Notification({ message }) {
  return <NotificacionText> {message}</NotificacionText>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
