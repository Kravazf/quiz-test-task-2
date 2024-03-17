import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MainWrap } from '../firstPage/styled';
import data from '../../data/data.json';
import {
  DawnloadButtonWrap,
  IconDownloadButton,
  ImgCheckmark,
  SubTitleLastPage,
  TextDownload,
  TitleTextLastPage,
} from './styled';
import ProjectButton from '../../components/projectButton/ProjectButton';

const LastPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const {
    titleText,
    subTitleText,
    img,
    icon,
    privacyAndTermsAgreement,
    buttonText,
  } = data[language].lastPage;

  const handleRetakeQuiz = () => {
    localStorage.clear();
    navigate('/');
  };

  const generateCSVContent = () => {
    const dataFromLocalStorage = {
      selectedLanguageData: JSON.parse(localStorage.getItem('selectedLanguageData')),
      SelectedGender: JSON.parse(localStorage.getItem('SelectedGender')),
      SelectedAge: JSON.parse(localStorage.getItem('SelectedAge')),
      fourthPageInfo: JSON.parse(localStorage.getItem('fourthPageInfo')),
      selectedOptionsFifth: JSON.parse(localStorage.getItem('selectedOptionsFifth')),
      pageFormInfo: JSON.parse(localStorage.getItem('pageFormInfo')),
    };

    const headers = ['order', 'title', 'type', 'answer'];

    const content = Object.keys(dataFromLocalStorage).map((key, index) => {
      const item = dataFromLocalStorage[key];
      const order = index + 1;
      const question = item.title;
      const { type } = item;
      const answerText = Array.isArray(item.options) ? item.options.join(', ') : item.options ?? '';
      return `${order};${question};${type};${answerText}`;
    }).join('\n');

    return `${headers.join(';')}\n${content}`;
  };

  const downloadAnswers = () => {
    const csvContent = generateCSVContent();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'user_answers.csv');
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <MainWrap>
      <TitleTextLastPage>{titleText}</TitleTextLastPage>
      <SubTitleLastPage>{subTitleText}</SubTitleLastPage>
      <ImgCheckmark
        src={img}
        alt={img}
      />
      <DawnloadButtonWrap onClick={downloadAnswers}>
        <IconDownloadButton
          src={icon}
          alt={icon}
        />
        <TextDownload>{privacyAndTermsAgreement}</TextDownload>
      </DawnloadButtonWrap>
      <ProjectButton
        opacity={1}
        buttonText={buttonText}
        onClick={handleRetakeQuiz}
      />
    </MainWrap>
  );
};

export default LastPage;
