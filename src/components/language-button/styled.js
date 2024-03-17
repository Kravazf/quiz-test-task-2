import styled from 'styled-components';

export const StyledButton = styled('button')(() => ({
  width: '88vw',
  minHeight: '60px',
  marginBottom: '12px',
  padding: '0 0 0 19px',
  textAlign: 'left',
  borderRadius: '16px',
  background: '#36173D',
  border: 'none',
  cursor: 'pointer',
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '24px',
  '@media (min-width:481px)': {
    width: '78vw',
    marginBottom: '17px',
    fontSize: '1.2rem',
  },
  '@media (min-width:769px)': {
    width: '68vw',
    marginBottom: '25px',
    fontSize: '1.5rem',
  },
}));
