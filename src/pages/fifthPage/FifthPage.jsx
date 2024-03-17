import {
  React,
  useEffect,
  useState,
} from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import Header from '../../components/header/Header';
import {
  MainWrap,
  QuestionText,
  SubTitle,
} from '../firstPage/styled';
import {
  GenderImg,
  GenderTittle,
} from '../secondPage/styled';
import data from '../../data/data.json';
import ProjectButton from '../../components/projectButton/ProjectButton';
import {
  ContainerFifthButton,
  TopicButton,
} from './styled';

const FifthPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();

  const {
    title,
    subTitle,
    options,
    icons,
    buttonText,
  } = data[language].fifthPage;

  const [selectedOptionsFifth, setSelectedOptionsFifth] = useState([]);

  useEffect(() => {
    const fifthPageInfo = {
      title,
      type: data[language].fifthPage.type,
      options: selectedOptionsFifth,
    };

    localStorage.setItem('selectedOptionsFifth', JSON.stringify(fifthPageInfo));
  }, [selectedOptionsFifth, language, title]);

  const handleOptionClick = (item) => {
    if (selectedOptionsFifth.includes(item)) {
      const newSelectedOptionsFifth = selectedOptionsFifth.filter((option) => option !== item);
      setSelectedOptionsFifth(newSelectedOptionsFifth);
    } else if (selectedOptionsFifth.length < 3) {
      setSelectedOptionsFifth([...selectedOptionsFifth, item]);
    }
  };

  const getButtonStyle = (item) => (selectedOptionsFifth.includes(item)
    ? { outline: '2px solid #E4229B' }
    : {});

  const handleButtonClick = () => {
    navigate(`/loader-page/${language}`);
  };

  return (
    <div>
      <Header currentQuestion={5} totalQuestions={5} />
      <MainWrap>
        <QuestionText>{title}</QuestionText>
        <SubTitle>{subTitle}</SubTitle>
        <ContainerFifthButton>
          {options.map((item, index) => (
            <TopicButton
              key={index}
              onClick={() => handleOptionClick(item)}
              style={getButtonStyle(item)}
            >
              <GenderImg
                src={icons[index]}
                alt={item}
              />
              <GenderTittle>{item}</GenderTittle>
            </TopicButton>
          ))}
        </ContainerFifthButton>
        <ProjectButton
          buttonText={buttonText}
          onClick={handleButtonClick}
          opacity={selectedOptionsFifth.length > 0 ? 1 : 0.2}
        />
      </MainWrap>
    </div>
  );
};

export default FifthPage;
