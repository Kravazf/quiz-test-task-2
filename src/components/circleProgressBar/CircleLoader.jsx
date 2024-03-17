import React from 'react';
import { CircleProgress, CircleStyles, ProgressText } from './styled';

const CircleLoader = ({ progress, circleWidth }) => {
  const radius = 120;
  const dashArr = radius * Math.PI * 2;
  const dashOffset = dashArr - (dashArr * progress) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <CircleStyles
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth='12px'
          r={radius}
        />
        <CircleProgress
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth='12px'
          r={radius}
          style={{
            strokeDasharray: dashArr,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <ProgressText
          x='50%'
          y='50%'
          dy='0.3em'
          textAnchor='middle'
        >
          {progress}%
        </ProgressText>
      </svg>
    </div>
  );
};

export default CircleLoader;
