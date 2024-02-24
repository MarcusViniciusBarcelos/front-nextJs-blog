import { PostsTemplateProps } from '.';
import { data } from '../../api/dados.json';

const baseData = data.setting.data.attributes;
const logoData = baseData.logo.data;
const postData = data.posts.data;
const mockTemplateData: PostsTemplateProps = {
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
      text: baseData.text[0].children[0].text,
    },
  },
  posts: postData.map((post) => ({
    id: post.id,
    slug: post.attributes.slug,
    title: post.attributes.title,
    excerpt: post.attributes.excerpt,
    cover: post.attributes.cover.data.attributes.url,
  })),
};

export default mockTemplateData;
