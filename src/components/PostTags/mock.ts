import { PostTagsProps } from '.';
import { data } from '../../api/dados.json';

const postData = data.posts.data[2];

const mockPostTags: PostTagsProps = {
  tags: postData.attributes.tags.data.map((tag) => ({
    attributes: {
      displayName: tag.attributes.displayName,
      slug: tag.attributes.slug,
    },
    id: tag.id,
  })),
};

export default mockPostTags;
