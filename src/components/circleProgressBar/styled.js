import styled from 'styled-components';

export const CircleStyles = styled('circle')(() => ({
  fill: 'none',
  stroke: '#ddd',
}));

export const CircleProgress = styled('circle')(() => ({
  fill: 'none',
  stroke: '#E4229C',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}));

export const ProgressText = styled('text')(() => ({
  fontWeight: '800',
  fontSize: '52px',
  letterSpacing: '-0.02em',
  fill: '#fff',
}));
