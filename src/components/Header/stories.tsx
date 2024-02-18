import { Meta, StoryFn } from '@storybook/react';
import { Header, HeaderProps } from '.';

import mock from './mock';

export default {
  title: 'Header',
  component: Header,
  args: mock,
} as Meta<HeaderProps>;

export const Template: StoryFn<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
