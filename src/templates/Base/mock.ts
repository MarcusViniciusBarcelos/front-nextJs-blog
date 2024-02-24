import { BaseTemplateProps } from '.';
import { data } from '../../api/dados.json';

const baseData = data.setting.data.attributes;
const logoData = baseData.logo.data;

const mockTemplateData: BaseTemplateProps = {
  settings: {
    id: data.setting.data.id,
    attributes: {
      blogName: baseData.blogName,
      logo: {
        data: {
          attributes: {
            alternativeText: logoData.attributes.alternativeText,
            url: logoData.attributes.url,
          },
          id: logoData.id,
        },
      },
      blogDescription: baseData.blogDescription,
      menuLink: baseData.menuLink.map((link) => ({
        id: link.id,
        link: link.link,
        newTab: link.newTab,
        text: link.text,
      })),
      footer: baseData.footer,
    },
  },
  children: 'ola mundo',
};

export default mockTemplateData;
