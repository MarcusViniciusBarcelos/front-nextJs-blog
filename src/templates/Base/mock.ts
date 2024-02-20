import { BaseTemplateProps } from '.';
import { data } from '../../api/dados.json';

const baseData = data.setting.data.attributes;
const logoData = baseData.logo.data;

const mockTemplateData: BaseTemplateProps = {
  settings: {
    id: data.setting.data.id,
    blogName: baseData.blogName,
    logo: {
      alternativeText: logoData.attributes.alternativeText,
      url: logoData.attributes.url,
      id: logoData.id,
    },
    blogDescription: baseData.blogDescription,
    menuLink: baseData.menuLink.map((link) => ({
      id: link.id,
      link: link.link,
      newTab: link.newTab,
      text: link.text,
    })),
    text: baseData.text[0].children[0].text,
  },
  children: 'ola mundo',
};

export default mockTemplateData;
