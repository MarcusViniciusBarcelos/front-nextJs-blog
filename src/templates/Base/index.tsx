import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';
import { ToggleTheme } from '../../components/ToggleTheme';
import { useEffect, useRef, useState } from 'react';
import { Cancel } from '@styled-icons/material-outlined';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const imputTimeout = useRef(null);

  useEffect(() => {
    isReady ? setSearchDisabled(false) : setSearchDisabled(true);
  }, [isReady]);

  useEffect(() => {
    clearTimeout(imputTimeout.current);

    if (router?.query?.q === searchValue) return;

    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    imputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => {
      clearTimeout(imputTimeout.current);
    };
  }, [searchValue, router]);

  useEffect(() => {
    // Verifica se o campo de pesquisa está vazio para retornar todos os posts
    if (searchValue === '') {
      setIsReady(true);
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        links={settings.attributes.menuLink.map((link) => ({
          id: link.id,
          link: link.link,
          newTab: link.newTab,
          text: link.text,
        }))}
        blogName={settings.attributes.blogName}
        logo={settings.attributes.logo.data}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={settings.attributes.blogName}
          blogDescription={settings.attributes.blogDescription}
          logo={settings.attributes.logo.data.attributes.url}
        />
      </Styled.HeaderContainer>
      <Styled.SearchContainer>
        <Styled.SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          value={searchValue}
          onChange={handleInputChange}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="input disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="input enabled"
          />
        )}
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.attributes.footer} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
