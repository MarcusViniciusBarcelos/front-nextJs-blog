import { MenuPropsLinks } from '../components/Menu';
import { StrapiImage } from './strapi-image';

export type SettingsStrapi = {
  id: string;
  attributes: {
    blogName: string;
    blogDescription: string;
    logo: {
      data: StrapiImage;
    };
    menuLink: {
      id: string;
      link: string;
      text: string;
      newTab: boolean;
    }[];
    footer: string;
  };
};
