import request from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERIES } from '../graphql/queries';
import { SettingsStrapi } from '../shared-types/settings-strapi';
import { PostCardProps } from '../components/PostCard';
import { PostStrapi } from '../shared-types/post-strapi';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string[];
  start?: number;
  limit?: number;
};

export type StrapiPostsAndSettings = {
  setting: {
    data: SettingsStrapi;
  };
  posts: {
    data: PostCardProps[];
  };
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostsAndSettings> => {
  const defaultVariables: LoadPostsVariables = {
    sort: ['createdAt:desc'],
    start: 0,
    limit: 10,
    ...variables,
  };

  const data: StrapiPostsAndSettings = await request(
    config.graphqlURL,
    GRAPHQL_QUERIES,
    {
      ...defaultVariables,
      ...variables,
    },
  );
  return data;
};
