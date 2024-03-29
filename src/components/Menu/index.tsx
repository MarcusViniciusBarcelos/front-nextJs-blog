import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import { useState } from 'react';
import { StrapiImage } from '../../shared-types/strapi-image';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: StrapiImage;
};

export const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const HandleopenCloseMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={HandleopenCloseMenu}
      >
        {menuVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.OpenClose>

      <Styled.Wrapper
        menuVisible={menuVisible}
        onClick={HandleopenCloseMenu}
        aria-hidden={!menuVisible}
      >
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo.attributes.url} />
          </Styled.Logo>

          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
