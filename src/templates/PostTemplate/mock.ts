import { PostTemplateProps } from '.';
import { data } from '../../api/dados.json';

const baseData = data.setting.data.attributes;
const logoData = baseData.logo.data;
const postData = data.posts.data[2];

const mockTemplateData: PostTemplateProps = {
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
  post: {
    id: postData.id,
    title: postData.attributes.title,
    content: postData.attributes.content,
    slug: postData.attributes.slug,
    excerpt: postData.attributes.excerpt,
    createdAt: postData.createdAt,
    cover: {
      alternativeText:
        postData.attributes.cover.data.attributes.alternativeText,
      url: postData.attributes.cover.data.attributes.url,
      id: postData.attributes.cover.data.id,
    },
    tags: postData.attributes.tags.data.map((tag) => ({
      id: tag.id,
      slug: tag.attributes.slug,
      displayName: tag.attributes.displayName,
    })),
    categories: postData.attributes.categories.data.map((category) => ({
      id: category.id,
      displayName: category.attributes.displayName,
      slug: category.attributes.slug,
    })),
  },
};

export default mockTemplateData;
