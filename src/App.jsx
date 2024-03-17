import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './fonts/fonts.css';
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';
import FourthPage from './pages/fourthPage/FourthPage';
import FifthPage from './pages/fifthPage/FifthPage';
import LoaderPage from './pages/loaderPage/LoaderPage';
import FormPage from './pages/formPage/FormPage';
import LastPage from './pages/lastPage/LastPage';

const App = () => (
  <HashRouter baseName="/quiz-test-task/">
    <div className='wrapp'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/second-page/:language' element={<SecondPage />} />
          <Route path='/third-page/:language' element={<ThirdPage />} />
          <Route path='/fourth-page/:language' element={<FourthPage />} />
          <Route path='/fifth-page/:language' element={<FifthPage />} />
          <Route path='/loader-page/:language' element={<LoaderPage />} />
          <Route path='/form-page/:language' element={<FormPage />} />
          <Route path='/last-page/:language' element={<LastPage />} />
        </Routes>
      </div>
    </div>
  </HashRouter>
);

export default App;
