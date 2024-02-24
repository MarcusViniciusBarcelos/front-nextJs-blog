import { HeaderProps } from '.';
import { data } from '../../api/dados.json';

const settingsData = data.setting.data.attributes;

export default {
  blogName: settingsData.blogName,
  blogDescription: settingsData.blogDescription,
  logo: settingsData.logo.data.attributes.url,
  showText: true,
} as HeaderProps;
