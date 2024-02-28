import { Meta, StoryFn } from '@storybook/react';
import { PostsTemplate, PostsTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<PostsTemplateProps>;

export const Template: StoryFn<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
