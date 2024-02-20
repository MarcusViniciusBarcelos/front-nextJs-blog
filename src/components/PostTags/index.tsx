import Link from 'next/link';
import { PostTag } from '../../shared-types/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (!tags.length) return null;
  return (
    <Styled.Wrapper>
      tags:
      {tags.map((tag) => (
        <span key={tag.id}>
          <Link style={{ textDecoration: 'none' }} href={`/tags/${tag.slug}`}>
            {tag.displayName}
          </Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
