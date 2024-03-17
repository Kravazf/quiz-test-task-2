import React, { /* useCallback, useEffect, */ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageButton from '../../components/language-button/LanguageButton';
import {
  ContainerLangButton,
  MainWrap,
  QuestionText,
  SubTitle,
} from './styled';
import Header from '../../components/header/Header';
import data from '../../data/data.json';
// import { dataPages } from '../../api/dataPages/dataPages'; все що закоментовано, Це реалызація в

const FirstPage = () => {
  const initialLanguage = Object.keys(data)[0];
  const [language, setLanguage] = useState(initialLanguage);
  // const [dataPagesList, setDataPagesList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  const navigate = useNavigate();

  const { firstPage } = data[language];
  const { title, subTitle } = firstPage;

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem(
      'selectedLanguageData',
      JSON.stringify({
        title: firstPage.title,
        type: firstPage.type,
        options: newLanguage,
      }),
    );
  };

  const redirectToNextPage = (newLanguage) => {
    navigate(`/second-page/${newLanguage}`);
  };

  const changeLanguage = (newLanguage) => {
    updateLanguage(newLanguage);
    redirectToNextPage(newLanguage);
  };

  // const fetchDataPages = useCallback(async () => {
  //   setLoading(true);

  //   try {
  //     const response = await dataPages.get();
  //     setDataPagesList(response);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchDataPages();
  // }, []);

  // if (loading) return <p>loading...</p>;
  // if (error) return <p>{error}</p>;

  const renderLanguageButtons = () => Object.keys(data).map((lang) => (
    <LanguageButton
      key={lang}
      language={lang}
      onClick={changeLanguage}
    >
      {data[lang].firstPage.options}
    </LanguageButton>
  ));

  return (
    <div>
      <Header currentQuestion={1} totalQuestions={5} />
      <MainWrap>
        <QuestionText>{title}</QuestionText>
        <SubTitle>{subTitle}</SubTitle>
        <ContainerLangButton>
          {renderLanguageButtons()}
        </ContainerLangButton>
      </MainWrap>
      {/* {dataPagesList.map((value) => (
        <p key={value.id}>{value.name}</p>
      ))} */}
    </div>
  );
};

export default FirstPage;
