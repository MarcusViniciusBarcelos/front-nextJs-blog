import { Meta, StoryFn } from '@storybook/react';
import { ToggleTheme } from '.';

export default {
  component: ToggleTheme,
} as Meta;

export const Template: StoryFn = () => {
  return (
    <div>
      <ToggleTheme />
    </div>
  );
};
