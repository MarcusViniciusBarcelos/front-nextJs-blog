import { Settings } from '@styled-icons/material-outlined';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { PostTag } from '../../shared-types/tag';

export type PostsTemplateProps = {
  settings?: SettingsStrapi;
  posts?: {
    id: string;
    title: string;
    slug: string;
    cover: {
      id: string;
      alternativeText: string;
      url: string;
    };
    content: string;
    excerpt: string;
    tags: PostTag[];
  }[];
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
