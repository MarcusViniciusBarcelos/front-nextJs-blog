import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';
import { ToggleTheme } from '../../components/ToggleTheme';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
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
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router?.query?.q || ''}
          />
        </form>
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.attributes.footer} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
