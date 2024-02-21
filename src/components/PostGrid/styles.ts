import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
  `}
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    margin-top: ${theme.spacings.large};
    padding: 0 ${theme.spacings.large};

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;
