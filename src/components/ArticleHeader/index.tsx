import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { StrapiImage } from '../../shared-types/strapi-image';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: StrapiImage;
  categories: Category[];
  createdAt: string;
  author: Author;
  id: string;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  categories,
  createdAt,
  author,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.attributes.url} alt={title} />
      <ArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
