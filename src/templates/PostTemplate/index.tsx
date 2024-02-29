import { Comments } from '../../components/Comments';
import { Post, PostProps } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import * as Styled from './styles';

export type PostTemplateProps = {
  settings?: SettingsStrapi;
  post: PostProps;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <>
      <BaseTemplate settings={settings}>
        <Post {...post} />
        <Styled.TagsContainer>
          <PostTags tags={post.tags} />
        </Styled.TagsContainer>
        <Comments
          title={post.title}
          slug={post.slug}
          id={post.id}
          allowComments={post.allowComments}
        />
      </BaseTemplate>
    </>
  );
};
