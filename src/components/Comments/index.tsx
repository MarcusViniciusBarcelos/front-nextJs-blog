import { PostStrapi } from '../../shared-types/post-strapi';
import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="blog-marcus-vinicius-barcelos"
        config={{
          url: `https://front-next-js-blog.vercel.app/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
