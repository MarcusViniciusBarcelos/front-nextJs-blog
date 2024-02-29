import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import { PostCardProps } from '../../components/PostCard';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { LoadPostsVariables, loadPosts } from '../../api/load-posts';

export type PostsTemplateProps = {
  settings?: SettingsStrapi;
  posts?: PostCardProps[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts,
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit || 10,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.data.length) {
      setNoMorePosts(true);
      return;
    }
    const updatedPosts = morePosts.posts.data.map((post) => ({
      id: post.id,
      slug: post.attributes.slug,
      title: post.attributes.title,
      cover: post.attributes.cover.data.attributes.url,
      excerpt: post.attributes.excerpt,
    }));

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...updatedPosts]);
  };
  return (
    <>
      <BaseTemplate settings={settings}>
        <PostGrid posts={statePosts} />
        <Styled.ButtonContainer>
          {statePosts && statePosts.length ? (
            <Styled.Button
              onClick={handleLoadMorePosts}
              disabled={buttonDisabled}
            >
              {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </Styled.Button>
          ) : null}
        </Styled.ButtonContainer>
      </BaseTemplate>
    </>
  );
};
