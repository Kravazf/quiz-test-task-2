import styled, { keyframes } from 'styled-components';

export const getProgressBarWidth = (currentQuestion, totalQuestions) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  return `calc(${progressPercentage}% - 10%)`;
};

const fillProgressBar = (width) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  position: relative;
`;

export const QuestionText = styled.div`
  margin-top: 44px;
  display: flex;
  font-family: 'Albert Sans';
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;

  @media (min-width: 481px) {
    font-size: 1.4rem;
  }

  @media (min-width: 769px) {
    font-size: 1.6rem;
  }
`;

export const CarrentQuestion = styled.p`
  color: #e4229c;
  margin: 0;
`;

export const TotalQuestions = styled.p`
  color: #e8eaf2;
  margin: 0;
`;

export const BackButton = styled.img`
  position: absolute;
  top: 57px;
  left: 0px;
  cursor: pointer;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: #e8eaf2;
  border-radius: 100px;
  margin-top: 13px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background: #e4229c;
  animation: ${({ width }) => fillProgressBar(width)} 0.2s ease-out forwards;
`;
