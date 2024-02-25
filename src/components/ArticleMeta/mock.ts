import { ArticleMetaProps } from '.';
import { data } from '../../api/dados.json';

const postData = data.posts.data[1];

const mockArticleMetaData: ArticleMetaProps = {
  createdAt: postData.attributes.createdAt,
  author: {
    id: postData.attributes.author.data.id,
    attributes: {
      slug: postData.attributes.author.data.attributes.slug,
      displayName: postData.attributes.author.data.attributes.displayName,
    },
  },
  categories: postData.attributes.categories.data.map((category) => ({
    id: category.id,
    attributes: {
      slug: category.attributes.slug,
      displayName: category.attributes.displayName,
    },
  })),
};

export default mockArticleMetaData;
