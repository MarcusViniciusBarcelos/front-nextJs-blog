import request from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERIES } from '../graphql/queries';
import { SettingsStrapi } from '../shared-types/settings-strapi';
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
    data: PostStrapi[];
  };
  variables?: LoadPostsVariables;
};

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: ['createdAt:desc'],
  start: 0,
  limit: 3,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostsAndSettings> => {
  const data: StrapiPostsAndSettings = await request(
    config.graphqlURL,
    GRAPHQL_QUERIES,
    {
      ...defaultLoadPostsVariables,
      ...variables,
    },
  );
  return data;
};
