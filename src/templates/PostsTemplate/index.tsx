import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import { PostCardProps } from '../../components/PostCard';

export type PostsTemplateProps = {
  settings?: SettingsStrapi;
  posts?: PostCardProps[];
};

export const PostsTemplate = ({ settings, posts }: PostsTemplateProps) => {
  return (
    <>
      <BaseTemplate settings={settings}>
        <PostGrid posts={posts} />
      </BaseTemplate>
    </>
  );
};
