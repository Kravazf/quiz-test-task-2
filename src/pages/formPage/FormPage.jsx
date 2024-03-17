import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
import ProjectButton from '../../components/projectButton/ProjectButton';
import data from '../../data/data.json';
import { MainWrap } from '../firstPage/styled';
import { QuestionTextThirdPage } from '../thirdPage/styled';
import {
  FormInput,
  InputWrap,
  InvalidText,
  PrivacyAndTermsAgreementText,
  SubTitleText,
} from './styled';

const CustomLink = ({ to, children }) => (
  <Link to={to} style={{ color: '#EB2F9A', textDecoration: 'none' }}>
    {children}
  </Link>
);

const FormPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);

  const isValidEmail = (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  const getEmailPageData = (key) => data[language].emailPage[key];

  useEffect(() => {
    setValidEmail(isValidEmail(emailValue));
  }, [emailValue]);

  const {
    title,
    subTitleText,
    inputText,
    buttonText,
    invalidEmailMessage,
  } = data[language].emailPage;

  const handleValidFormSubmission = () => {
    const pageFormInfo = {
      title,
      type: getEmailPageData('type'),
      options: emailValue,
    };
    localStorage.setItem('pageFormInfo', JSON.stringify(pageFormInfo));
    navigate(`/last-page/${language}`);
  };

  const handleInvalidFormSubmission = () => {
    setShowInvalidEmail(true);
  };

  const handleButtonClick = () => {
    if (validEmail && emailValue !== '') {
      handleValidFormSubmission();
    } else {
      handleInvalidFormSubmission();
    }
  };

  const handleOptionChange = (value) => {
    setEmailValue(value);
    setShowInvalidEmail(false);
  };

  return (
    <MainWrap>
      <QuestionTextThirdPage
        style={{ margin: '117px 0 0 0' }}>
        {title}
      </QuestionTextThirdPage>
      <SubTitleText>{subTitleText}</SubTitleText>
      <InputWrap>
        <FormInput
          name='email'
          id='email'
          type='email'
          placeholder={inputText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={emailValue}
          onChange={(e) => handleOptionChange(e.target.value)}
          style={{
            outline: focused ? '2px solid #D0006E' : 'none',
            backgroundColor: focused ? '#492752' : '',
            color: focused ? 'white' : '',
            border: `2px solid ${showInvalidEmail && !validEmail
              ? 'red'
              : 'transparent'}`,
          }}
          autoComplete='on'
        />
        {showInvalidEmail && !validEmail && <InvalidText>{invalidEmailMessage}</InvalidText>}
      </InputWrap>
      <PrivacyAndTermsAgreementText>
        By continuing I agree with{' '}
        <CustomLink to='#'>Privacy policy</CustomLink>{' '}
        and{' '}
        <CustomLink to='#'>Terms of use.</CustomLink>{' '}
      </PrivacyAndTermsAgreementText>
      <ProjectButton
        buttonText={buttonText}
        onClick={handleButtonClick}
        opacity={validEmail ? 1 : 0.2}
        disabled={!validEmail}
      />
    </MainWrap>
  );
};

export default FormPage;
