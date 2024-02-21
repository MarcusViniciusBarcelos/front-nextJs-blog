import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERIES = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      data {
        ...setting
      }
    }
    posts(
      pagination: { start: $start, limit: $limit }
      sort: $sort
      filters: {
        slug: { eq: $postSlug }
        title: { contains: $postSearch }
        categories: { slug: { eq: $categorySlug } }
        author: { slug: { eq: $authorSlug } }
        tags: { slug: { eq: $tagSlug } }
      }
    ) {
      data {
        ...posts
      }
    }
  }
`;
