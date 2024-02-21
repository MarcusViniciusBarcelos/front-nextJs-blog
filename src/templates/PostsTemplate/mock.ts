import { PostsTemplateProps } from '.';
import { data } from '../../api/dados.json';

const baseData = data.setting.data.attributes;
const logoData = baseData.logo.data;

const mockTemplateData: PostsTemplateProps = {
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
  posts: data.posts.data.map((post) => ({
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    cover: {
      id: post.attributes.cover.data.id,
      alternativeText: post.attributes.cover.data.attributes.alternativeText,
      url: post.attributes.cover.data.attributes.url,
    },
    content: post.attributes.content,
    excerpt: post.attributes.excerpt,
    tags: post.attributes.tags.data.map((tag) => ({
      displayName: tag.attributes.displayName,
      slug: tag.attributes.slug,
      id: tag.id,
    })),
  })),
};

export default mockTemplateData;
