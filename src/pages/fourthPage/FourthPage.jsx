import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import data from '../../data/data.json';
import { ContainerLangButton, MainWrap } from '../firstPage/styled';
import { AgeButton, AgeTittle, QuestionTextThirdPage } from '../thirdPage/styled';
import ProjectButton from '../../components/projectButton/ProjectButton';
import { InputBooks } from './styled';

const FourthPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const { title, type, options } = data[language].fourthPage;

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fourthPageInfo = {
      title,
      type,
      options: selectedOptions,
    };
    localStorage.setItem('fourthPageInfo', JSON.stringify(fourthPageInfo));
  }, [selectedOptions, language, title, type]);

  const handleButtonClick = () => {
    navigate(`/fifth-page/${language}`);
  };

  const addSelectedOption = (item) => {
    setSelectedOptions([...selectedOptions, item]);
  };

  const removeSelectedOption = (item) => {
    setSelectedOptions(selectedOptions.filter((selectedItem) => selectedItem !== item));
  };

  const action = {
    true: removeSelectedOption,
    false: addSelectedOption,
  };

  const handleOptionClick = (item) => {
    const isSelected = selectedOptions.includes(item);
    action[isSelected](item);
  };

  const formatQuestionText = (text) => {
    const formattedText = text.replace(
      /\b(hate)\b/gi,
      '<span style=color: #E4229B>$1</span>',
    );
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div>
      <Header currentQuestion={4} totalQuestions={5} />
      <MainWrap>
        <QuestionTextThirdPage>
          {formatQuestionText(title)}
        </QuestionTextThirdPage>
        <ContainerLangButton>
          {options.map((item, index) => (
            <AgeButton
              key={index}
              onClick={() => handleOptionClick(item)}
              style={{
                backgroundColor: selectedOptions.includes(item)
                  ? 'rgb(228, 34, 155, 0.2)'
                  : '',
                outline: selectedOptions.includes(item)
                  ? '2px solid #E4229B'
                  : '',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <AgeTittle>
                {item}
              </AgeTittle>
              <InputBooks
                name='checkbox'
                type='checkbox'
                checked={selectedOptions.includes(item)}
                onChange={() => handleOptionClick(item)}
              />
            </AgeButton>
          ))}
        </ContainerLangButton>
        <ProjectButton
          buttonText={data[language].emailPage.buttonText}
          onClick={handleButtonClick}
          opacity={selectedOptions.length > 0 ? 1 : 0.2}
        />
      </MainWrap>
    </div>
  );
};

export default FourthPage;
