import { PostGridProps } from '.';
import { data } from '../../api/dados.json';

const postsData = data.posts.data;

const mockPostGrid: PostGridProps = {
  posts: postsData.map((post) => ({
    id: post.id,
    slug: post.attributes.slug,
    title: post.attributes.title,
    excerpt: post.attributes.excerpt,
    cover: post.attributes.cover.data.attributes.url,
  })),
};

export default mockPostGrid;
