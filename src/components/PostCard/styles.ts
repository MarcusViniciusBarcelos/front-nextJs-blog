import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: 0;
      margin-top: calc(${theme.spacings.small} - 0.6);
      margin-bottom: ${theme.spacings.small};
    }

    h2 {
      transition: all 300ms ease-in-out;
    }

    &:hover h2 {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
      transform: scale(1.03);
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: all 300ms ease-in-out;
`;

export const Excerpt = styled.p`
  max-width: 100%;
`;
