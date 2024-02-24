import { PostCardProps } from '.';
import { data } from '../../api/dados.json';

const postData = data.posts.data[1].attributes;

const mockPostData: PostCardProps = {
  id: data.posts.data[1].id,
  slug: postData.slug,
  title: postData.title,
  excerpt: postData.excerpt,
  cover: postData.cover.data.attributes.url,
};

export default mockPostData;
