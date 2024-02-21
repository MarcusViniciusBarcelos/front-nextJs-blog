import request from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERIES } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';
import { SettingsStrapi } from '../shared-types/settings-strapi';
import { StrapiImage } from '../shared-types/strapi-image';
import { MenuPropsLinks } from '../components/Menu';

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
    data: {
      id: string;
      attributes: {
        blogName: string;
        blogDescription: string;
        logo: StrapiImage;
        menuLink: MenuPropsLinks[];
        text: string;
      };
    };
  };
  posts: {
    data: {
      id: string;
      attributes: {
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        allowComments: boolean;
        cover: {
          data: StrapiImage;
        };
        categories: {
          data: {
            id: string;
            attributes: {
              name: string;
              slug: string;
            };
          }[];
        };
        tags: {
          data: {
            id: string;
            attributes: {
              name: string;
              slug: string;
            };
          }[];
        };
      };
    }[];
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
