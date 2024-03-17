import styled from 'styled-components';

export const TitleTextLastPage = styled('p')(() => ({
  margin: '147px 0 0px 0',
  padding: '0',
  fontFamily: 'Niconne',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: 'auto',
  color: '#ECECFB',
  '@media (min-width:481px)': {
    fontSize: '3.0rem',
  },
  '@media (min-width:769px)': {
    fontSize: '4.5rem',
  },
}));

export const SubTitleLastPage = styled('p')(() => ({
  margin: '0',
  padding: '0',
  fontFamily: 'Albert Sans',
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '25px',
  color: '#ECECFB',
  letterSpacing: '-0.01em',
  textAlign: 'center',
  '@media (min-width:481px)': {
    fontSize: '1.3rem',
  },
  '@media (min-width:769px)': {
    fontSize: '1.6rem',
  },
}));

export const ImgCheckmark = styled('img')(() => ({
  margin: '60px 3px 0 0',
  '@media (min-width:481px)': {
    width: '150px',
  },
  '@media (min-width:769px)': {
    width: '200px',
  },
}));

export const DawnloadButtonWrap = styled('button')(() => ({
  width: '72vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '143px 0 16px 0',
  padding: '0',
  fontFamily: 'Albert Sans',
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '25px',
  color: '#ECECFB',
  letterSpacing: '-0.01em',
  backgroundColor: '#1F002B',
  border: 'none',
  '@media (min-width:481px)': {
    fontSize: '1.3rem',
  },
  '@media (min-width:769px)': {
    fontSize: '1.6rem',
  },
}));

export const IconDownloadButton = styled('img')(() => ({
  textAlign: 'center',
  margin: '0',
  fontFamily: 'Albert Sans',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  color: '#B6B8C3',
}));

export const TextDownload = styled('p')(() => ({
  margin: '0',
  padding: '0 0 0 10px',
}));
