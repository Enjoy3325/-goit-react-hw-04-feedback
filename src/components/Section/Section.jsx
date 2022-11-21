import PropTypes from 'prop-types';
import { SectionBox, TitleHead } from './Section.styled';
import React from 'react';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      {title && <TitleHead>{title}</TitleHead>}
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
