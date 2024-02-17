import { Meta, StoryFn } from '@storybook/react';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg:
      'https://res.cloudinary.com/dm5kvicsz/image/upload/v1708022537/Whats_App_Image_2023_07_13_at_15_32_56_000d5b42b2.jpg',
    link: 'http://localhost',
    newTab: false,
  },
} as Meta;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
