import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} auto;
    max-width: ${theme.sizes.content};
    padding: 0 ${theme.spacings.large} 0;

    span {
      margin-left: 0.5rem;
      background: rgba(200, 200, 200, 0.4);
      padding: 0.4rem 0.4rem;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background: rgba(200, 200, 200, 0.6);
      }
    }

    span::before {
      content: ' ';
    }

    span::after {
      content: ' ';
    }

    a {
      transition: all 0.3s ease-in-out;
      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
