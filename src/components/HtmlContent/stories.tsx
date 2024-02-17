import { Meta, StoryFn } from '@storybook/react';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`,
  },
} as Meta;

export const Template: StoryFn<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
