import { MenuProps } from '.';
import { StrapiImage } from '../../shared-types/strapi-image';

export default {
  links: [
    {
      id: 'link-1',
      link: '/home/1',
      newTab: false,
      text: 'My jobs',
    },
    {
      id: 'link-2',
      link: '/home/2',
      newTab: false,
      text: 'About me',
    },
    {
      id: 'link-3',
      link: '/home/3',
      newTab: false,
      text: 'Services',
    },
    {
      id: 'link-4',
      link: 'http://localhost/home/4',
      newTab: false,
      text: 'External Link',
    },
    {
      id: 'link-5',
      link: '/home/5',
      newTab: false,
      text: 'JavaScript',
    },
    {
      id: 'link-6',
      link: '/home/6',
      newTab: false,
      text: 'Python',
    },
    {
      id: 'link-7',
      link: '/home/7',
      newTab: false,
      text: 'Consectetur',
    },
    {
      id: 'link-8',
      link: '/home/8',
      newTab: false,
      text: 'Text test',
    },
    {
      id: 'link-9',
      link: '/home/9',
      newTab: false,
      text: 'Pac-man',
    },
    {
      id: 'link-10',
      link: '/home/10',
      newTab: false,
      text: 'Star Wars',
    },
    {
      id: 'link-11',
      link: '/home/11',
      newTab: false,
      text: 'A menu',
    },
  ],
  blogName: 'Marcus Barcelos',
  logo: {
    id: 'logo-id', // Add the missing 'id' property
    alternativeText: 'Logo', // Add the missing 'alternativeText' property
    url: 'https://res.cloudinary.com/dm5kvicsz/image/upload/v1708022537/Whats_App_Image_2023_07_13_at_15_32_56_000d5b42b2.jpg', // Add the missing 'url' property
  } as StrapiImage,
} as MenuProps;
