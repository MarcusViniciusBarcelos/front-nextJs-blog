import request from 'graphql-request';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';
import config from '../config';

jest.mock('graphql-request');
jest.mock('../graphql/queries.ts', () => ({
  GRAPHQL_QUERIES: 'GRAPHQL_QUERIES',
}));

describe('load-posts', () => {
  it('should call request with correct default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'GRAPHQL_QUERIES',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with custom variables', async () => {
    const variables = {
      categorySlug: 'categorySlug',
      postSlug: 'postSlug',
      postSearch: 'postSearch',
      authorSlug: 'authorSlug',
      tagSlug: 'tagSlug',
      sort: ['sort'],
      start: 1,
      limit: 2,
    };
    await loadPosts(variables);
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'GRAPHQL_QUERIES',
      variables,
    );
  });

  it('should return data', async () => {
    const data = { setting: { data: {} }, posts: { data: [] } };
    (request as jest.Mock).mockResolvedValue(data);
    const result = await loadPosts();
    expect(result).toEqual(data);
  });

  it('should throw error', async () => {
    const error = new Error('error');
    (request as jest.Mock).mockRejectedValue(error);
    await expect(loadPosts()).rejects.toThrow(error);
  });
});
