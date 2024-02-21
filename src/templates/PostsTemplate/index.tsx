import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';

export type PostsTemplateProps = {
  settings?: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <>
      <BaseTemplate settings={settings}>
        <PostGrid posts={posts} />
      </BaseTemplate>
    </>
  );
};
