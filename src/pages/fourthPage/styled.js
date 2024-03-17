import styled from 'styled-components';

export const InputBooks = styled.input`
  appearance: none;
  width: 23px;
  height: 23px;
  background-color: #6D4376;
  border-radius: 8px;
  margin: 0 27px 0 0;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #E4229B;
  }

  &:checked::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 28%;
    width: 9px;
    height: 4px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(-45deg);
  }
`;
