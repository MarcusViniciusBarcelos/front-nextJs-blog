import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    svg.search-ok-icon {
      width: 3rem;
      height: 3rem;
      margin-left: 0.5rem;
    }

    svg.search-cancel-icon {
      width: 3rem;
      height: 3rem;
      margin-left: 0.5rem;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};

    &:disabled {
      outline: 0.1rem solid ${theme.colors.secondary};
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
