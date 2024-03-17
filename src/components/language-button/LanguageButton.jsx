import React from 'react';
import { StyledButton } from './styled';

const LanguageButton = ({ language, onClick }) => (
    <StyledButton onClick={() => onClick(language)}>
      {language}
    </StyledButton>
);

export default LanguageButton;
