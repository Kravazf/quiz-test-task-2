import React from 'react';
import {
  useParams,
  useNavigate,
} from 'react-router-dom';
import Header from '../../components/header/Header';
import data from '../../data/data.json';
import {
  MainWrap,
  QuestionText,
  SubTitle,
} from '../firstPage/styled';
import {
  ContainerSecondButton,
  GenderButton,
  GenderImg,
  GenderTittle,
} from './styled';

const SecondPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const {
    title,
    subTitle,
    icons,
    options,
    type,
  } = data[language].secondPage;

  const saveSelectedGender = (index) => {
    const singleSelectImage = {
      title,
      type,
      options: options[index],
    };
    localStorage.setItem('SelectedGender', JSON.stringify(singleSelectImage));
  };

  const redirectToNextPage = () => {
    navigate(`/third-page/${language}`);
  };

  const handleButtonClick = (index) => {
    saveSelectedGender(index);
    redirectToNextPage();
  };

  const renderGenderButtons = () => icons.map((icon, index) => (
      <GenderButton
        key={index}
        onClick={() => handleButtonClick(index)}>
        <GenderImg
          src={icon}
          alt={`Icon ${index}`}
        />
        <GenderTittle>{`${options[index]}`}</GenderTittle>
      </GenderButton>
  ));

  return (
    <div>
      <Header currentQuestion={2} totalQuestions={5} />
      <MainWrap>
        <QuestionText>{title}</QuestionText>
        <SubTitle>{subTitle}</SubTitle>
        <ContainerSecondButton>
          {renderGenderButtons()}
        </ContainerSecondButton>
      </MainWrap>
    </div>
  );
};

export default SecondPage;
