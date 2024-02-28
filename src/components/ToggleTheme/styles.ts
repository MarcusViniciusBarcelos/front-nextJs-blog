import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2;
`;

export const label = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 5rem;
    height: 2.5rem;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    color: rgba(0, 0, 0, 0);
  `}
`;

export const input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background-color: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:focus + ${Slider} {
      border: 1px solid ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:checked + ${Slider}:before {
      transform: translateX(2rem);
      transition: all 300ms ease-in-out;
    }
  `}
`;

export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.darkerGray};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    border: 1px solid ${theme.colors.darkerGray};

    &::before {
      content: '';
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      left: 0.4rem;
      bottom: 0.1rem;
      background-color: ${theme.colors.white};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`;
