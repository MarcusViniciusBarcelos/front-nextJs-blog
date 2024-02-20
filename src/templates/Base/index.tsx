import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.menuLink.map((link) => ({
          id: link.id,
          link: link.link,
          newTab: link.newTab,
          text: link.text,
        }))}
        blogName={settings.blogName}
        logo={settings.logo}
      />
    </Styled.Wrapper>
  );
};
