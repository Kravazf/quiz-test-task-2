import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  QuestionText,
  CarrentQuestion,
  TotalQuestions,
  BackButton,
  ProgressBarContainer,
  ProgressBarFill,
  getProgressBarWidth,
} from './styled';

const Header = ({ currentQuestion, totalQuestions, onPrevQuestion }) => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    if (onPrevQuestion) {
      onPrevQuestion();
    } else {
      navigate(-1);
    }
  };

  const progressBarWidth = getProgressBarWidth(currentQuestion, totalQuestions);

  return (
    <HeaderContainer>
      {currentQuestion > 1 && (
        <BackButton src='/quiz-test-task-2/icons/back.svg' alt='back' onClick={goToPreviousPage} />
      )}
      <QuestionText>
        <CarrentQuestion>{currentQuestion}</CarrentQuestion>
        <p style={{
          fontWeight: '500',
          color: '#E8EAF2',
          margin: '0',
          padding: '0 2px 0 5px',
        }}>
          /
        </p>
        <TotalQuestions>{totalQuestions}</TotalQuestions>
      </QuestionText>
      <ProgressBarContainer>
        <ProgressBarFill width={progressBarWidth} />
      </ProgressBarContainer>
    </HeaderContainer>
  );
};

export default Header;
