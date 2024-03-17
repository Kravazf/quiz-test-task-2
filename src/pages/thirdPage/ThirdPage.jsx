import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import data from '../../data/data.json';
import { ContainerLangButton, MainWrap } from '../firstPage/styled';
import { AgeButton, AgeTittle, QuestionTextThirdPage } from './styled';

const ThirdPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const { title, options } = data[language].thirdPage;

  const saveSelectedAge = (item) => {
    const singleAgeItem = {
      title,
      type: data[language].thirdPage.type,
      options: item,
    };
    localStorage.setItem('SelectedAge', JSON.stringify(singleAgeItem));
  };

  const redirectToNextPage = () => {
    navigate(`/fourth-page/${language}`);
  };

  const handleButtonClick = (item) => {
    saveSelectedAge(item);
    redirectToNextPage();
  };

  const renderAgeButtons = () => options.map((item, index) => (
      <AgeButton
        key={index}
        onClick={() => handleButtonClick(item)}>
        <AgeTittle>{item}</AgeTittle>
      </AgeButton>
  ));

  return (
    <div>
      <Header currentQuestion={3} totalQuestions={5} />
      <MainWrap>
        <QuestionTextThirdPage>{title}</QuestionTextThirdPage>
        <ContainerLangButton>
          {renderAgeButtons()}
        </ContainerLangButton>
      </MainWrap>
    </div>
  );
};

export default ThirdPage;
