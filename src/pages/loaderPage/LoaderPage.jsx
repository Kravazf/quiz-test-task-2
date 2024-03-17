import React, {
  useState,
  useEffect,
} from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { LoaderContainer, TextLoader } from './styled';
import { CircleLoader } from '../../components/circleProgressBar';
import data from '../../data/data.json';

const LoaderPage = () => {
  const [progress, setProgress] = useState(0);
  const { language } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        setTimeout(() => {
          navigate(`/form-page/${language}`);
        });
        return prevProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [language, navigate]);

  return (
    <LoaderContainer>
      <CircleLoader
        progress={progress}
        circleWidth='252'
      >
      </CircleLoader>
      <TextLoader>{data[language].loaderPage.subTitleLoaderPage}</TextLoader>
    </LoaderContainer>
  );
};

export default LoaderPage;
