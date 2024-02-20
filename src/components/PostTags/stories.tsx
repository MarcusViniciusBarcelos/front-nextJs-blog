import { Meta, StoryFn } from '@storybook/react';
import { PostTags, PostTagsProps } from '.';

import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
} as Meta<PostTagsProps>;

export const Template: StoryFn<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};
export const NoTags: StoryFn<PostTagsProps> = () => {
  return (
    <div>
      <PostTags />
    </div>
  );
};
