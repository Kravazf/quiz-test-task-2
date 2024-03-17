import styled from 'styled-components';

export const StyledProjectButton = styled('button')(() => ({
  width: '88vw',
  minHeight: '56px',
  margin: '14px 0 0 0',
  textAlign: 'center',
  borderRadius: '50px',
  background: '#E4229C',
  color: '#FFFFFF',
  border: 'none',
  cursor: 'pointer',
  letterSpacing: '-0.01em',
  fontFamily: 'Albert Sans',
  fontWeight: '800',
  fontSize: '17px',
  lineHeight: '24px',
  opacity: '0.4',
  '@media (min-width:481px)': {
    width: '60vw',
    fontSize: '1.2rem',
  },
  '@media (min-width:769px)': {
    width: '40vw',
    fontSize: '1.5rem',
  },
}));
