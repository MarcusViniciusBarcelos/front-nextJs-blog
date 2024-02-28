import { PostTemplateProps } from '.';
import { data } from '../../api/dados.json';

const baseData = data.setting.data.attributes;
const logoData = baseData.logo.data;
const postData = data.posts.data[2];

const mockTemplateData: PostTemplateProps = {
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
  post: {
    id: postData.id,
    createdAt: postData.attributes.createdAt,
    title: postData.attributes.title,
    content: postData.attributes.content,
    cover: {
      id: postData.attributes.cover.data.id,
      attributes: {
        alternativeText:
          postData.attributes.cover.data.attributes.alternativeText,
        url: postData.attributes.cover.data.attributes.url,
      },
    },
    categories: postData.attributes.categories.data.map((category) => ({
      id: category.id,
      attributes: {
        displayName: category.attributes.displayName,
        slug: category.attributes.slug,
      },
    })),
    author: {
      id: postData.attributes.author.data.id,
      attributes: {
        displayName: postData.attributes.author.data.attributes.displayName,
        slug: postData.attributes.author.data.attributes.slug,
      },
    },
    excerpt: postData.attributes.excerpt,
    tags: postData.attributes.tags.data.map((tag) => ({
      id: tag.id,
      attributes: {
        displayName: tag.attributes.displayName,
        slug: tag.attributes.slug,
      },
    })),
  },
};

export default mockTemplateData;
