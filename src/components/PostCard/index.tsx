import Link from 'next/link';
import { PostProps } from '../Post';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/strapi-image';

export type PostCardProps = {
  id: string;
  slug: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
};

export const PostCard = ({ slug, title, cover, excerpt }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`} passHref>
        <Styled.Cover src={cover.url} alt={title} />
      </Link>
      <Link style={{ textDecoration: 'none' }} href={`/post/${slug}`} passHref>
        <Heading as="h2" size="small">
          {title}
        </Heading>
      </Link>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
