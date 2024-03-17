import styled from 'styled-components';

export const ContainerSecondButton = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  margin: '67px 0 0 0',
}));

export const GenderButton = styled('div')(() => ({
  backgroundColor: '#36173D',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  width: '26vw',
  minHeight: '144px',
  cursor: 'pointer',
}));

export const GenderImg = styled('img')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '28px 0 0 0',
}));

export const GenderTittle = styled('p')(() => ({
  margin: '9px 0 0 2px',
  fontWeight: '600',
  fontSize: '15px',
  lineHeight: '20px',
  letterSpacing: '0.02em',
  '@media (min-width:481px)': {
    fontSize: '1.2rem',
  },
  '@media (min-width:769px)': {
    fontSize: '1.5rem',
  },
}));
