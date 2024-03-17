import React from 'react';
import { StyledProjectButton } from './styled';

const ProjectButton = ({ buttonText, onClick, opacity }) => (
    <StyledProjectButton
      onClick={onClick}
      style={{ opacity }}
    >
      {buttonText}
    </StyledProjectButton>
);

export default ProjectButton;
