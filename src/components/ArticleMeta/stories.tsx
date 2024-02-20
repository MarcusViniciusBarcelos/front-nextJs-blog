import { Meta, StoryFn } from '@storybook/react';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};

export const NoAuthor: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} author={undefined} />
    </div>
  );
};

export const NoCategories: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} categories={undefined} />
    </div>
  );
};

export const NoAuthorsAndCategories: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} author={undefined} categories={undefined} />
    </div>
  );
};
