import { ArticleHeaderProps } from '.';
import { data } from '../../api/dados.json';

const postData = data.posts.data;
// Mock dos dados fictícios
const mockArticleHeaderData: ArticleHeaderProps = {
  title: postData[0].attributes.title,
  id: postData[0].id,
  createdAt: postData[0].createdAt,
  excerpt: postData[0].attributes.excerpt,
  categories: postData[0].attributes.categories.data.map((category) => ({
    id: category.id,
    attributes: {
      displayName: category.attributes.displayName,
      slug: category.attributes.slug,
    },
  })),
  author: {
    id: postData[0].attributes.author.data.id,
    attributes: {
      displayName: postData[0].attributes.author.data.attributes.displayName,
      slug: postData[0].attributes.author.data.attributes.slug,
    },
  },
  cover: postData[0].attributes.cover.data.attributes.url,
};

export default mockArticleHeaderData;
