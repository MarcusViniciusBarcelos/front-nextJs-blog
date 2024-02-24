import { MenuProps } from '.';
import { data } from '../../api/dados.json';

const menuData = data.setting.data.attributes.menuLink;
const settingData = data.setting.data.attributes;

export default {
  links: menuData.map((link) => ({
    id: link.id,
    link: link.link,
    newTab: link.newTab,
    text: link.text,
  })),
  blogName: settingData.blogName,
  logo: settingData.logo.data,
} as MenuProps;
