import styled from 'styled-components';

export const SubTitleText = styled('p')(() => ({
  margin: '10px 0 0 0',
  padding: '0',
  fontFamily: 'Albert Sans',
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: '22px',
  textAlign: 'center',
  '@media (min-width:481px)': {
    margin: '25px 0 0 0',
    fontSize: '1.2rem',
  },
  '@media (min-width:769px)': {
    margin: '70px 0 0 0',
    fontSize: '1.5rem',
  },
}));

export const FormInput = styled('input')(() => ({
  width: '88vw',
  height: '76px',
  borderRadius: '16px',
  margin: '56px 0 0 0',
  padding: '0 0 0 15px',
  fontFamily: 'Albert Sans',
  fontWeight: '500',
  fontSize: '17px',
  lineHeight: '24px',
  backgroundColor: '#36173D',
  border: 'none',
  color: 'rgba(196, 200, 204, 0.5)',
  letterSpacing: '-0.01em',
  '@media (min-width:481px)': {
    width: '78vw',
    fontSize: '1.2rem',
  },
  '@media (min-width:769px)': {
    width: '68vw',
    fontSize: '1.5rem',
  },
}));

export const PrivacyAndTermsAgreementText = styled('p')(() => ({
  textAlign: 'center',
  margin: '58px 0 181px 0',
  padding: '0 10%',
  fontFamily: 'Albert Sans',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  color: '#B6B8C3',
  '@media (min-width:481px)': {
    fontSize: '1.1rem',
  },
  '@media (min-width:769px)': {
    fontSize: '1.3rem',
  },
}));

export const InputWrap = styled('div')(() => ({
  position: 'relative',
}));

export const InvalidText = styled('p')(() => ({
  position: 'absolute',
  top: '137px',
  left: '30px',
  margin: '0',
  color: 'red',
  fontFamily: 'Albert Sans',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '20px',
  letterSpacing: '-0.01em',
  '@media (min-width:481px)': {
    fontSize: '1.1rem',
  },
  '@media (min-width:769px)': {
    fontSize: '1.3rem',
  },
}));
