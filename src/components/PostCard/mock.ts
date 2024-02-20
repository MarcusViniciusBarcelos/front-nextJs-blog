import { PostCardProps } from '.';
import { data } from '../../api/dados.json';

const postData = data.posts.data[1].attributes;

const mockPostData: PostCardProps = {
  id: data.posts.data[1].id,
  slug: postData.slug,
  title: postData.title,
  excerpt: postData.excerpt,
  cover: {
    id: postData.cover.data.id,
    alternativeText: postData.cover.data.attributes.alternativeText,
    url: postData.cover.data.attributes.url,
  },
};

export default mockPostData;
