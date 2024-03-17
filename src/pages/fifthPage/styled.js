import styled from 'styled-components';

export const ContainerFifthButton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 8px; /* Проміжок між кнопками */
  margin: 17px 0 95px 50px;
  padding: 10px;
  overflow: hidden;
  @media (min-width: 481px) {
    grid-gap: 20px;
  }

  @media (min-width: 769px) {
    grid-gap: 40px;
  }
`;

export const TopicButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #36173D;
  text-align: center;
  @media (min-width: 481px) {
    width: 110px;
    height: 110px;
  }

  @media (min-width: 769px) {
    width: 140px;
    height: 140px;
  }

  & > img {
    margin: 0;
  }

  & > p {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.06em;
    margin: 6px 0 0 0;
    padding: 0 5px 0 0;
    @media (min-width: 481px) {
      font-size: 14px;
      line-height: 16px;
    }
  
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 18px;
    }
  }

  &:nth-child(2) {
    margin-top: 20px;
  }

  &:nth-child(3) {
    margin-top: -5px;
  }

  &:nth-child(4) {
    margin-top: 30px;
  }

  &:nth-child(5) {
    margin-top: -30px;
  }

  &:nth-child(6) {
    margin-top: -11px;
  }

  &:nth-child(7) {
    margin-top: -27px;
  }
`;
