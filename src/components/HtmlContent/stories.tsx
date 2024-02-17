import { Meta, StoryFn } from '@storybook/react';
import { HtmlContent, HtmlContentProps } from '.';
import mock from './mock';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mock,
  },
} as Meta;

export const Template: StoryFn<HtmlContentProps> = (args) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <HtmlContent {...args} />
    </div>
  );
};
