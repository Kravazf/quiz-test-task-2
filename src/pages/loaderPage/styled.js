import styled from 'styled-components';

export const LoaderContainer = styled('div')(() => ({
  paddingTop: '195px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Albert Sans',
  height: '100vh',
}));

export const LoaderCircle = styled('div')(() => ({
  width: '228px',
  height: '228px',
  border: '12px solid',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TextLoader = styled('p')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '25px',
  letterSpacing: '-0.01em',
  margin: '37px 0 0 0',
  padding: '0 20%',
  textAlign: 'center',
}));
