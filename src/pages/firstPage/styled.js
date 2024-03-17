import styled from 'styled-components';

export const MainWrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Nunito Sans',
}));

export const ContainerLangButton = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '24px 0 0 0',
  '@media (min-width:481px)': {
    margin: '34px 0 0 0',
  },
  '@media (min-width:769px)': {
    margin: '100px 0 0 0',
  },
}));

export const QuestionText = styled('p')(() => ({
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '34px',
  color: '#F2F3F5',
  letterSpacing: '-0.01em',
  textAlign: 'center',
  margin: '31px 0 0 8px',
  padding: '0 15px',
  '@media (min-width:481px)': {
    margin: '48px 0 0 8px',
    fontSize: '2rem',
  },
  '@media (min-width:769px)': {
    margin: '68px 0 0 8px',
    fontSize: '2.5rem',
  },
}));

export const SubTitle = styled('p')(() => ({
  fontWeight: '400',
  fontSize: '17px',
  lineHeight: '24px',
  color: '#C4C8CC',
  textAlign: 'center',
  margin: '17px 0 0 0',
  padding: '0 0 0 0px',
  '@media (min-width:481px)': {
    margin: '48px 0 0 8px',
    fontSize: '1.4rem',
  },
  '@media (min-width:769px)': {
    margin: '68px 0 0 8px',
    fontSize: '1.8rem',
  },
}));
