import styled from 'styled-components';

export const QuestionTextThirdPage = styled('p')(() => ({
  fontWeight: '800',
  fontSize: '30px',
  lineHeight: '38px',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  margin: '31px 0 0 0',
  fontFamily: 'Albert Sans',
  '@media (min-width:481px)': {
    margin: '58px 0 0 0',
    fontSize: '2.1rem',
  },
  '@media (min-width:769px)': {
    margin: '78px 0 0 0',
    fontSize: '2.5rem',
  },
}));

export const AgeButton = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Albert Sans',
  width: '88vw',
  minHeight: '76px',
  marginBottom: '12px',
  padding: '0 0 0 19px',
  textAlign: 'left',
  borderRadius: '16px',
  background: '#36173D',
  border: 'none',
  cursor: 'pointer',
  color: '#FFFFFF',
  fontWeight: '500',
  fontSize: '17px',
  lineHeight: '24px',
  letterSpacing: '-0.01em',
  '@media (min-width:481px)': {
    width: '78vw',
    marginBottom: '17px',
    fontSize: '1.2rem',
  },
  '@media (min-width:769px)': {
    width: '68vw',
    marginBottom: '25px',
    fontSize: '1.4rem',
  },
}));

export const AgeTittle = styled('p')(() => ({
  margin: '0',
  padding: '0',
}));
